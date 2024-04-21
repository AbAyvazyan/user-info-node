import { Model, DataTypes } from 'sequelize';
import sequelize from '../database/sequelize';
import User from './user.model';

class Child extends Model {
    public id!: number;
    public name!: string;
    public userId!: number; // Foreign key for the parent user

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Child.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize,
    modelName: 'Child',
    tableName: 'children',
});
Child.sync()
Child.belongsTo(User, { foreignKey: 'userId'})