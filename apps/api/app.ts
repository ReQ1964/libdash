import express, { json } from 'express';
import morgan from 'morgan';

const app = express();

app.use(morgan('dev'));

app.get('/', (req, res) => res.send('Express'));

app.use(json());

export default app;
