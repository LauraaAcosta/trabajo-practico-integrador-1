import { DataTypes } from "sequelize";
import { sequelize } from "../configs/database.js";

export const ArticleModel = sequelize.define('articleModel', {
id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
},
title: { 
    type: DataTypes.STRING(200), 
    allowNull: false, 
    validate: {
            len: [ 50 ],
            msg: 'El titulo debe tener mínimo 50 caracteres'
        }
    },
    content: {
    type: DataTypes.TEXT,
    allowNull: false
    },
    excerpt: {
    type: DataTypes.TEXT,
    allowNull: true
    },
    status: {
        type: DataTypes.ENUM('published', 'archived'),
        allowNull: false,
        defaultValue: 'published'
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: 'articles', key: 'id' },
        onDelete: 'CASCADE'
    }
},{timestamps: true,
    createdAt: 'created_at', 
    updatedAt: 'updated_at',}
);

//RELACIONES