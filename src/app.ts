import { Query } from '.././src/models/db.js'
import express from 'express';
import auth from './router/authRouter.js';
import crud from './router/crudRouter.js';
import logger from 'morgan';
import cookieParser from 'cookie-parser';

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Permite todas las solicitudes
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });

app.use(logger('dev'));
app.use(cookieParser())

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(auth, crud);

export default app;
