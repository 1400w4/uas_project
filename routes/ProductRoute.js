import express from 'express';
import {
    getData,
    getDataById,
    createData,
    updateData,
    deleteData,
} from '../controller/Product.js';

const router = express.Router();

// http://localhost:5000/products
router.get('/wisata_sulut', getData);
router.get('/wisata_sulut/:id', getDataById);
router.post('/wisata_sulut', createData);
router.patch('/wisata_sulut/:id', updateData);
router.delete('/wisata_sulut/:id', deleteData);

export default router;