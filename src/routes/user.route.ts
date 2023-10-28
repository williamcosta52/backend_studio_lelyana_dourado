import { Router } from 'express';
import * as userController from '../controllers/user.controller';

const userRouter = Router();

userRouter.post('/sign-up', userController.signUp);

export default userRouter;
