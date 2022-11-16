import { Sequelize } from 'sequelize';
import db from '../config/Database.js';

const { DataTypes } = Sequelize;

const Wisata = db.define('wisata_sulut', {
    gambar: DataTypes.STRING,
    nama_tempat: DataTypes.STRING,
    deskripsi: DataTypes.STRING,
    jam_bukaTutup: DataTypes.STRING,
    harga_masuk: DataTypes.INTEGER,
}, {
    freezeTableName: true
});

export default Wisata;

(async() => {
    await db.sync();
})();