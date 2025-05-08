import { loging } from '../controller/auth.js'
import { Router } from 'express';

const router = Router();

router.post('/api/v1/users/login', loging);

export default router;
