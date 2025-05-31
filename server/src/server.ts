import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import { connectDB } from './config/db';
import authRoutes from './routes/authRoutes';
import adminRoutes from './routes/adminRoutes';
import { setupSwagger } from './config/swagger';
import { seedRoles } from './config/seedRoles';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

const allowedOrigin = process.env.CORS_ORIGIN || 'http://localhost:3000';

app.use(cors({ origin: allowedOrigin }));
app.use(express.json());

async function startServer() {
  try {
    await connectDB();
    console.log('MongoDB connected');

    await seedRoles();
    console.log('Roles seeded');

    setupSwagger(app);

    app.use('/api/auth', authRoutes);    // Auth routes (register/login/refresh)
    app.use('/api/admin', adminRoutes);  // Admin creation route (protected)

    app.get('/', (req: Request, res: Response) => {
      res.send('Hiii I am using Express with TS');
    });

    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
}

startServer();
