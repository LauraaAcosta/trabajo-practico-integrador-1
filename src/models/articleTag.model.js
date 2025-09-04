import { DataTypes } from "sequelize";
import { sequelize } from "../configs/database.js";

export const articleTagModel = sequelize.define('articleTag', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    article_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: 'ArticleModel', key: 'id' },
        onDelete: 'CASCADE'
    },
    tag_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: 'TagModel', key: 'id' },
        onDelete: 'CASCADE'
    },
},{
    timestamps: false, 
    createdAt: false, 
    updatedAt: false
    }
);