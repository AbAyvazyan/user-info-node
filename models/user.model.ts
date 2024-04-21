import { Model, DataTypes } from 'sequelize';
import sequelize from '../database/sequelize';

class User extends Model {
    public id!: number;
    public name!: string;
    public surname!: string;
    public age!: number;
    public parentsName!: string;
    public children?: string[] | null;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

User.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    surname: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    parentsName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    children: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: true,
    },
}, {
    sequelize,
    modelName: 'User',
    tableName: 'users',
});


export default User