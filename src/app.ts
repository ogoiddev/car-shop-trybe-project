import 'express-async-errors';
import express from 'express';
import errorHandler from './middleware/errorMiddleware';
import Routes from './routes/index';

const app = express();

app.use(express.json());
app.use(Routes);

app.use(errorHandler);

export default app;
