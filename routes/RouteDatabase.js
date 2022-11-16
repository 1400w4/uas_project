import express from 'express';
import {
    getData,
    getDataById,
    createData,
    updateData,
    deleteData,
} from '../controller/DataControll.js';

const router = express.Router();

router.get('/wisata_sulut', getData);
router.get('/wisata_sulut/:id', getDataById);
router.post('/wisata_sulut', createData);
router.patch('/wisata_sulut/:id', updateData);
router.delete('/wisata_sulut/:id', deleteData);

export default router;