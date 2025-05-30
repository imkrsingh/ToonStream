import express from 'express';
import type { Request, Response } from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db';
import userRoutes from './routes/userRoutes';
import { setupSwagger } from './config/swagger';
import cors from 'cors';
import { seedRoles } from './config/seedRoles';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

// Cors
app.use(cors());

// Middleware
app.use(express.json());

// Connect to MongoDB
connectDB();

// Seed roles
seedRoles();

// Swagger setup
setupSwagger(app);

// Routes
app.use('/api/users', userRoutes);
app.get('/', (req: Request, res: Response) => {
  res.send('Hiii I am using Express with TS');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
