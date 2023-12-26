import express from 'express';
import bodyParser from 'body-parser';
import { customLogger, apiResponseTime } from './helper/logger';
import routes from './routes/index';
import mongoose from 'mongoose';

import 'dotenv/config';
const app = express();

app.use(bodyParser.json());
app.use(customLogger); //It prints all the incoming requests 
// app.use(apiResponseTime); // api response time 

app.use('/api/v1/user', routes.userRoute); //routes for user 
app.use('/api/v1', routes.movieRoute); // route for movies

mongoose
  .connect(process.env.DB_URL || '')

mongoose.connection.on('connected', () => {
  console.log('************* MongoDB is connected ******');
});

mongoose.connection.on('disconnected', () => {
  console.log('MongoDB is not connected');
});

export default app;