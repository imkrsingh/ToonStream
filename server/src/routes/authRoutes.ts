import { Router, Request, Response } from 'express';
import { register, login, refreshToken, forgotPassword, resetPassword } from '../controllers/authController';

const router = Router();

router.post('/register', async (req: Request, res: Response) => {
  try {
    await register(req, res);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

router.post('/login', async (req: Request, res: Response) => {
  try {
    await login(req, res);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

router.post('/refresh-token', async (req: Request, res: Response) => {
  try {
    await refreshToken(req, res);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Forgot Password
router.post('/forgot-password', async (req: Request, res: Response) => {
  try {
    await forgotPassword(req, res);
  } catch (error) {
    console.error('Forgot Password Error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Reset Password
router.post('/reset-password', async (req: Request, res: Response) => {
  try {
    await resetPassword(req, res);
  } catch (error) {
    console.error('Reset Password Error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;
