import {getUsers , getUsersById, createUser , updateUser, deleteUser} from '../controller/auth.js'
import { validationToken } from '../utils/validation.js'
import { Router } from 'express';

const router = Router();

router.get("/api/v1/users", getUsers);
router.get("/api/v1/users/:id", validationToken , getUsersById );
router.post("/api/v1/users", validationToken , createUser );
router.put("/api/v1/users/:id", validationToken, updateUser);
router.delete("/api/v1/users/:id", validationToken, deleteUser)

export default router;
