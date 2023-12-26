import { Router } from 'express';
import movieRoute from './movie.route';
import userRoute from './user.route';

const routes = {
  movieRoute,
  userRoute,
};

export default routes;
