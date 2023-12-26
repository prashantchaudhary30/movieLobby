import { Router } from 'express';
import { getMovies, searchMovie, updateMovieDetails, registerMovie, deleteMovie } from '../controllers/movie.controller';
import { verifyToken, checkAdminRole } from '../middlewares/movie.middleware';

const movieRoute = Router();

movieRoute.get('/movie', getMovies);
movieRoute.get('/search', searchMovie);
movieRoute.put('/movies/:id', verifyToken, checkAdminRole, updateMovieDetails);
movieRoute.post('/createMovie', verifyToken, checkAdminRole, registerMovie);
movieRoute.delete('/movies/:id', verifyToken, checkAdminRole, deleteMovie);

export default movieRoute;
