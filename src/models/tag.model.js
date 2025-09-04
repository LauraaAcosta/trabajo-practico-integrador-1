import { DataTypes } from "sequelize";
import { sequelize } from "../configs/database.js";

export const TagModel = sequelize.define('tagModel', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }, 
    name: {
        type: DataTypes.CHAR(30),
        unique: true, 
        allowNull: false,
        validate: {
            len: [ 2, 30 ], 
            msg: 'El nombre debe contener entre 2 y 30 caracteres'
        }
    }
},{ timestamps: true,
    createdAt: 'created_at', 
    updatedAt: 'updated_at',}
);