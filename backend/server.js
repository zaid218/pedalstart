import express from 'express';
import dotenv from 'dotenv';
import  connectDB  from './config/db.js'; // Adjust path as necessary
import userRoutes from './routes/userRoutes.js'; // Adjust path as necessary
import taskRoutes from './routes/taskRoutes.js'; // Adjust path as necessary
import cors from 'cors'; // Import cors
dotenv.config();

connectDB();

const app = express();

// Use cors middleware
app.use(cors());

app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/tasks', taskRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
