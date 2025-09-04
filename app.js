import express from 'express';
import dotenv from 'dotenv';
import { sequelize } from './src/configs/database.js';
import { start_DB } from './src/configs/database.js';
import { UserModel } from './src/models/user.model.js';
import { ProfileModel } from './src/models/profile.model.js';
import { ArticleModel } from './src/models/article.model.js';
import { TagModel } from './src/models/tag.model.js';
import { articleTagModel } from './src/models/articleTag.model.js';

dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();
app.use (express.json());

app.listen(PORT, async () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
    try {
        await sequelize.authenticate();
        console.log ('La conexión ha sido exitosa ')
    } catch (error) {
        console.error('No se pudo conectar a la base de datos:', error);
    }
});

 start_DB();
