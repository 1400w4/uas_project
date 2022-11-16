import express from 'express';
import cors from 'cors';
import Wisata from './routes/RouteDatabase.js';
import feedback from './routes/RouteDatabase2.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use(Wisata);
app.use(feedback);


app.listen(5000, () => console.log('Server running on port 5000'));