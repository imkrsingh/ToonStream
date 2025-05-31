import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User';
import Role from '../models/Role';
import { sendMail } from '../utility/mailer';

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';
const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET || 'your_jwt_refresh_secret';

function isErrorWithName(error: unknown): error is { name: string } {
  return typeof error === 'object' && error !== null && 'name' in error;
}

export const register = async (req: Request, res: Response): Promise<Response | undefined> => {
  const { name, email, password, role } = req.body;

  const requestedRole = role || 'user';

  try {
    if (requestedRole !== 'user') {
      // Need token to create admin or superadmin
      const authHeader = req.headers.authorization;
      if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(403).json({ message: 'Only admin or superadmin can create admin or superadmin users' });
      }
      const token = authHeader.split(' ')[1];
      let decoded: any;
      try {
        decoded = jwt.verify(token, JWT_SECRET);
      } catch (err) {
        return res.status(403).json({ message: 'Invalid or expired token' });
      }

      if (requestedRole === 'superadmin') {
        // Only superadmin can create superadmin
        if (decoded.role !== 'superadmin') {
          return res.status(403).json({ message: 'Only superadmin can create superadmin users' });
        }
      } else if (requestedRole === 'admin') {
        // Both superadmin and admin can create admin
        if (decoded.role !== 'superadmin' && decoded.role !== 'admin') {
          return res.status(403).json({ message: 'Only admin or superadmin can create admin users' });
        }
      }
    }

    const roleDoc = await Role.findOne({ name: requestedRole });
    if (!roleDoc) {
      return res.status(400).json({ message: 'Invalid role. Available roles are superadmin, admin, and user.' });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role: roleDoc._id,
    });

    return res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: roleDoc.name,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
};

export const login = async (req: Request, res: Response): Promise<Response | undefined> => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email }).populate('role');

    if (!user) return res.status(401).json({ message: 'Invalid credentials' });
    if (!user.role) return res.status(500).json({ message: 'User role is missing or undefined' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });

    // Fix role typing issue by asserting
    const roleName = (user.role as any).name || 'user';

    const accessToken = jwt.sign(
      {
        id: user._id,
        name: user.name,
        email: user.email,
        role: roleName,
      },
      JWT_SECRET,
      { expiresIn: '15m' }
    );

    const refreshToken = jwt.sign(
      {
        id: user._id,
        name: user.name,
        email: user.email,
        role: roleName,
      },
      JWT_REFRESH_SECRET,
      { expiresIn: '7d' }
    );

    return res.json({
      accessToken,
      refreshToken,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: roleName,
      },
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
};

export const refreshToken = async (req: Request, res: Response) => {
  const { token } = req.body;

  if (!token) return res.status(401).json({ message: 'Refresh token required' });

  try {
    const decoded = jwt.verify(token, JWT_REFRESH_SECRET) as any;

    const newAccessToken = jwt.sign(
      { id: decoded.id, role: decoded.role },
      JWT_SECRET,
      { expiresIn: '15m' }
    );

    return res.json({ accessToken: newAccessToken });
  } catch (err) {
    console.error(err);
    return res.status(403).json({ message: 'Invalid refresh token' });
  }
};



////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////

export const forgotPassword = async (req: Request, res: Response) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(404).json({ message: 'User not found' });

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET!, { expiresIn: '15m' });
  const resetLink = `${process.env.FRONTEND_URL}/reset-password?token=${token}`;

  await sendMail(
    email,
    'ToonStream Password Reset',
    `<p>Hello ${user.name},</p>
     <p>Click the link below to reset your password:</p>
     <a href="${resetLink}">${resetLink}</a>
     <p>This link expires in 15 minutes.</p>`
  );

  res.json({ message: 'Password reset link sent to your email' });
};

export const resetPassword = async (req: Request, res: Response) => {
  const { token, newPassword } = req.body;

  try {
    const decoded: any = jwt.verify(token, process.env.JWT_SECRET!);
    const user = await User.findById(decoded.id);
    if (!user) return res.status(404).json({ message: 'User not found' });

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;
    await user.save();

    res.json({ message: 'Password reset successful' });
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: 'Invalid or expired token' });
  }
};