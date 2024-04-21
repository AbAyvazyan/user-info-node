import { Router } from "express";
import UserController from "../controllers/user.controller";

const userRouter = Router()
const userController = new UserController();

userRouter.get('/', userController.getUser.bind(userController));
userRouter.post('/', userController.createUser.bind(userController));
userRouter.put('/', userController.editUserInformation.bind(userController));
userRouter.get('/children', userController.getChildren.bind(userController));
userRouter.post('/children', userController.addChildren.bind(userController));
userRouter.delete('/children', userController.deleteChild.bind(userController));

export default userRouter