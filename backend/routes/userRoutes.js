// backend/routes/userRoutes.js

import express from 'express';
const router = express.Router();
import { registerUser, loginUser, logoutUser } from '../controllers/userController.js'; // Adjust path as necessary
import { authMiddleware } from '../middleware/authMiddleware.js'; // Example middleware import

router.post('/signup', registerUser);
router.post('/login', loginUser);
router.post('/logout', authMiddleware, logoutUser);

export default router;
