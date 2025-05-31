// src/middlewares/authMiddleware.ts
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';

// Extend Express Request interface to include user object
export interface AuthRequest extends Request {
  user?: {
    id: string;
    role: string;
    email: string;
    name: string;
  };
}

// Middleware to verify JWT token
export const verifyToken = (req: AuthRequest, res: Response, next: NextFunction): void => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    res.status(401).json({ message: 'Authorization token missing or malformed' });
    return; // stop further execution
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as any;

    req.user = {
      id: decoded.id,
      role: decoded.role,
      email: decoded.email,
      name: decoded.name,
    };

    next(); // move to next middleware or route handler
  } catch (error) {
    res.status(401).json({ message: 'Invalid or expired token' });
    return;
  }
};

// Middleware to allow only superadmin users
export const requireSuperAdmin = (req: AuthRequest, res: Response, next: NextFunction): void => {
  if (!req.user || req.user.role !== 'superadmin') {
    res.status(403).json({ message: 'Access denied: Superadmin only' });
    return;
  }
  next();
};
