import { Router, Request, Response } from 'express';
import { register, login, refreshToken } from '../controllers/authController';

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

export default router;
