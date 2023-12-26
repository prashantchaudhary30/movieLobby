import { Router } from 'express';
import { registerUser } from '../controllers/user.controller';

const userRoute = Router();

userRoute.post('/createUser', registerUser);

export default userRoute;
