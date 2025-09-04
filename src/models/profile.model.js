import { DataTypes } from "sequelize";
import { sequelize } from "../configs/database.js";
import { UserModel } from "./user.model.js";

export const ProfileModel = sequelize.define('profileModel', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        references: {
            model: UserModel, key: 'id'},
            onDelete: 'CASCADE',
        }, 
        first_name: {
            type: DataTypes.CHAR(50),
            allowNull: false   
        },
        last_name: {
            type: DataTypes.CHAR(50),
            allowNull: false   
        },
        biography: {
            type: DataTypes.TEXT,
            allowNull: true   
        },
        avatar_url: {
            type: DataTypes.CHAR(255),
            allowNull: true,
        },
        birth_date: {
            type: DataTypes.DATE,
            allowNull: true
        }
    },{timestamps: true,
            createdAt: 'created_at', 
            updatedAt: 'updated_at',
        });

        //RELACIONES
/*         UserModel.hasOne(ProfileModel, { foreignKey: 'user_id', as: 'profile' });
        ProfileModel.belongsTo(UserModel, { foreignKey: 'user_id', as: 'user' }); */