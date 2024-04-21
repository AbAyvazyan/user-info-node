import { Request, Response } from "express";
import UserService from "../services/user.service";

class UserController {
    private userService: UserService;
    constructor() {
        this.userService = new UserService();
    }
    public async getUser(req: Request, res: Response) {
        try {
            const { id } = req.query
            const userData = await this.userService.getUser(+id!)

            res.status(200).json({ user: userData })
        } catch (err) {
            res.status(400).json({ error: err })
        }
    }
    public async createUser(req: Request, res: Response) {
        try {
            const { name, surname, parentsName, age } = req.body
            const createdUser = await this.userService.createUser(name, surname, parentsName, age)

            res.status(200).json({ user: createdUser })
        } catch (err) {
            res.status(400).json({ error: err })
        }
    }

    public async editUserInformation(req: Request, res: Response) {
        try {
            const { userId, name, surname, parentsName, age } = req.body
            const editedUser = await this.userService.editUserInformation(userId, name, surname, parentsName, age)

            res.status(200).json({ user: editedUser })
        } catch (err) {
            res.status(400).json({ error: err })
        }
    }

    public async getChildren(req: Request, res: Response) {
        try {
            const { id } = req.query
            const userData = await this.userService.getChildren(+id!)

            res.status(200).json({ user: userData })
        } catch (err) {
            res.status(400).json({ error: err })
        }
    }

    public async addChildren(req: Request, res: Response) {
        try {
            const { name, parentId } = req.body
            const createdUser = await this.userService.addChildren(name,parentId)

            res.status(200).json({ children: createdUser })
        } catch (err) {
            res.status(400).json({ error: err })
        }
    }
    public async deleteChild(req: Request, res: Response) {
        try {
            const { name, parentId } = req.body
            const createdUser = await this.userService.deleteChild(name,parentId)

            res.status(200).json({ children: createdUser })
        } catch (err) {
            res.status(400).json({ error: err })
        }
    }

}

export default UserController