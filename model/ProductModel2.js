import { Sequelize } from 'sequelize';
import db from '../config/Database.js';

const { DataTypes } = Sequelize;

const Wisata = db.define('feedback', {
    nama: DataTypes.STRING,
    komentar: DataTypes.STRING,
}, {
    freezeTableName: true
});

export default Wisata;

(async() => {
    await db.sync();
})();