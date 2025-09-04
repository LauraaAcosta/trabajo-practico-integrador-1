import { DataTypes } from "sequelize";
import { sequelize } from "../configs/database.js";

export const UserModel = sequelize.define('article', {
    username: {
        type: DataTypes.CHAR(20),
        unique: true,
        allowNull:false, 
        validate: {
            len: [ 3-20 ]
        }
    },
    email: {
        type: DataTypes.CHAR(100),
        unique: true,
        allowNull: false
    }, 
    password:{
        type: DataTypes.CHAR(255), 
        allowNull: false
    },
    role:{
        type: DataTypes.ENUM[ 'user', 'admin' ],
        defaultValue: 'user'
    },
     
},{ timestamps: true, 
    createdAt: 'created_at', 
    updatedAt: 'updated_at',
    deletedAt: 'deleted_at',
    paranoid: true
});