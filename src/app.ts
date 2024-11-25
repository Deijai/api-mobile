import express from 'express';
import cors from 'cors';
import dataRoutes from './routes/data.routes';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Rotas
app.use('/api', dataRoutes);

export default app;
