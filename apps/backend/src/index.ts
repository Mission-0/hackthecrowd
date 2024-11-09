import express from 'express';
import authRoutes from './routes/authRoutes';
import projectRoutes from './routes/projectRoutes';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());

app.use('/api/auth', authRoutes);
app.use('/api/projects', projectRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});