import express from 'express';
import {
    getData,
    getDataById,
    createData,
    updateData,
    deleteData,
} from '../controller/DataControll2.js';

const router = express.Router();

router.get('/feedback', getData);
router.get('/feedback/:id', getDataById);
router.post('/feedback', createData);
router.patch('/feedback/:id', updateData);
router.delete('feedback/:id', deleteData);

export default router;