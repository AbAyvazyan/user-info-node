import User from "../models/user.model";

class UserService {
    public async getUser(id: number) {
        try {
            return await User.findByPk(id)
        } catch (err) {
            return err
        }
    }

    public async createUser(name: string, surname: string, parentsName: string, age: number) {
        try {
            return await User.create({ name, surname, parentsName, age })
        } catch (err) {
            return err
        }
    }

    public async editUserInformation(
        userId: number,
        updatedName: string,
        updatedSurname: string,
        updatedParentsName: string,
        updatedAge: number
    ) {
        try {
            const user = await User.findByPk(userId);

            if (!user) {
                return 'User not found'
            }
            user.name = updatedName;
            user.surname = updatedSurname;
            user.parentsName = updatedParentsName;
            user.age = updatedAge

            await user.save();
            return user;
        } catch (err) {
            return err
        }
    }

    public async getChildren(id: number) {
        try {
            const user = await User.findByPk(id)
            return user?.children
        } catch (err) {
            return err
        }
    }
    public async addChildren(name: string, id: number) {
        try {
            const user = await User.findByPk(id);

            if (!user) {
                return 'User not found'
            }

            const existingChild = user.children?.find(childName => childName === name);
            if (existingChild) {
                return `Child with name '${name}' already exists`;
            }

            if (user.children && user.children.length >= 5) {
                return "Cannot add more than 5 children";
            }

            if (!user.children) {
                user.children = [];
            }
            user.children.push(name);

            await user.save();

            return user.children;
        } catch (err) {
            return err;
        }
    }
    public async deleteChild(name: string, id: number) {
        try {
            const user = await User.findByPk(id);

            if (!user) {
                return 'User not found'
            }

            const existingChild = user.children?.find(childName => childName === name);
            if (!existingChild) {
                return `Child with name '${name}' does not exists`;
            }

            if (!user.children) {
                user.children = [];
            }
            user.children = user.children.filter((childName: string) => childName !== name)

            await user.save();

            return `Child with name '${name}' id deleted`;
        } catch (err) {
            return err;
        }
    }
}

export default UserService;