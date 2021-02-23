import express from 'express';
import homeRouter from './routes/homeRouter/router.js'

const app = express();

app.use(homeRouter);

export default app;