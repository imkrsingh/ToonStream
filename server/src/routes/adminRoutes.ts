// src/routes/adminRoutes.ts
import { Router, Response, NextFunction } from 'express';
import bcrypt from 'bcryptjs';
import User from '../models/User';
import Role from '../models/Role';
import { verifyToken, requireSuperAdmin, AuthRequest } from '../middlewares/authMiddleware';

const router = Router();

router.post(
    '/create-admin',
    verifyToken,
    requireSuperAdmin,
    async (req: AuthRequest, res: Response, next: NextFunction): Promise<void> => {
        try {
            const { name, email, password } = req.body;

            const roleDoc = await Role.findOne({ name: 'admin' });
            if (!roleDoc) {
                res.status(500).json({ message: 'Admin role not found' });
                return;
            }

            const existingUser = await User.findOne({ email });
            if (existingUser) {
                res.status(400).json({ message: 'User already exists' });
                return;
            }

            const hashedPassword = await bcrypt.hash(password, 10);

            const user = await User.create({
                name,
                email,
                password: hashedPassword,
                role: roleDoc._id,
            });

            res.status(201).json({
                message: 'Admin user created',
                user: {
                    id: user._id,
                    name: user.name,
                    email: user.email,
                    role: roleDoc.name,
                },
            });
            return;
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server error' });
            return;
        }
    }
);

export default router;
