import express from 'express';
const router = express.Router();
import {
    getTasks,
    createTask,
    getTaskById,
    updateTask,
    deleteTask,
} from '../controllers/taskController.js'; // Adjust path as necessary
import { authMiddleware } from '../middleware/authMiddleware.js'; // Adjust path as necessary

router.get('/', authMiddleware, getTasks);
router.post('/', authMiddleware, createTask);
router.get('/:id', authMiddleware, getTaskById);
router.put('/:id', authMiddleware, updateTask);
router.delete('/:id', authMiddleware, deleteTask);

export default router;
