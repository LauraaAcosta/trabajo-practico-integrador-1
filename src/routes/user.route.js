import { Router } from 'express';
import { getAllUsers, getUsersById, createUser, updateUser, deleteUser} from '../controllers/user.controller.js';

const router = Router();

import { validator } from '..src/middlewares';