import { Request, Response } from 'express';
import { CreateUser } from '../utils/user.types';
import * as userService from '../services/user.service';
import httpStatus from 'http-status';

export async function signUp(req: Request, res: Response) {
  try {
    const { email, password, name } = req.body as CreateUser;
    await userService.CreateUser(email, password, name);
    res.sendStatus(httpStatus.CREATED);
  } catch (err) {
    res.send(err);
  }
}
