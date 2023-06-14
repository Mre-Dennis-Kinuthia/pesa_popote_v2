// api/users/index.js
import express from 'express';
import { createUser } from './controller';
import { validateUser } from './validator';

const router = express.Router();

// POST /api/users
router.post('/', validateUser, createUser);

export default router;
