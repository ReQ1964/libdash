import express, { json } from 'express';
import morgan from 'morgan';
import { PrismaClient } from '@prisma/client';

const app = express();

app.use(morgan('dev'));

app.get('/', (req, res) => res.send('Express'));

app.use(json());

const prisma = new PrismaClient();

export default app;
