import express from 'express';
import cors from 'cors';
import ProductRoute from './routes/RouteDatabase.js';
import ProductRoute2 from './routes/RouteDatabase2.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use(ProductRoute);
app.use(ProductRoute2);


app.listen(5000, () => console.log('Server running on port 5000'));