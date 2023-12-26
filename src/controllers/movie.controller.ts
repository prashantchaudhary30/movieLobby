import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { sendResponse } from '../utils/response';
import { STATUS_CODE } from '../helper/Statuscode';
import { CONSTANT } from '../helper/constant';
import MovieQueries from '../Quries/movie.query';

export const registerMovie = async (req: Request, res: Response) => {
  try {
    const { title, ratings, genre, streamingLink, createdBy } = req.body;
    const movieData = {
        _id: uuidv4(),
      title,
      ratings,
      genre,
      streamingLink,
      createdBy,
    };

    Object.assign(movieData, req.body);
    const movie = await MovieQueries.createMovie(movieData);

    return sendResponse(res, STATUS_CODE.CREATED, CONSTANT.MOVIE_CREATED_SUCCESSFULL, movie);
  } catch (error) {
    console.log('error in registerMovie', error);
    return sendResponse(res, STATUS_CODE.BAD_REQUEST, CONSTANT.SOMETHING_WENT_WRONG, error);
  }
};

export const getMovies = async (req: Request, res: Response) => {
  try {
    let { pageNumber, pageLimit } = req.query;
    const page = parseInt(pageNumber as string);
    const limit = parseInt(pageLimit as string);

    const movies = await MovieQueries.getAllMovies(page, limit);
    return sendResponse(res, STATUS_CODE.OK, CONSTANT.FETCH_SUCCESS, movies);
  } catch (error) {
    console.log('error in getMovies', error);
    return sendResponse(res, STATUS_CODE.BAD_REQUEST, CONSTANT.SOMETHING_WENT_WRONG, error);
  }
};

export const searchMovie = async (req: Request, res: Response) => {
  try {
    let { title, genre } = req.query;
    const query: any = {};
    if (title) query.title = { $regex: new RegExp(title as string, 'i') };
    if (genre) {
        query.genre = {$in : genre};
    }
    console.log(query)
    const movies = await MovieQueries.searchMovies(query);
    return sendResponse(res, STATUS_CODE.OK, CONSTANT.FETCH_SUCCESS, movies);
  } catch (error) {
    console.log('error in searchMovie', error);
    return sendResponse(res, STATUS_CODE.BAD_REQUEST, CONSTANT.SOMETHING_WENT_WRONG, error);
  }
};

export const updateMovieDetails = async (req: Request, res: Response) => {
  try {
    const movieId = req.params.id;

    const { title, genre, ratings, streamingLink } = req.body;

    const updateFields: any = {};
    if (title) {
      updateFields.title = title;
    }

    if (genre) {
      updateFields.genre = genre;
    }

    if (ratings) {
      updateFields.ratings = ratings;
    }

    if (streamingLink) {
      updateFields.streamingLink = streamingLink;
    }

    await MovieQueries.updateMovie(movieId, updateFields);
    return sendResponse(res, STATUS_CODE.OK, CONSTANT.MOVIE_UPDATE);
  } catch (error) {
    console.log('error in updateMovieDetails', error);
    return sendResponse(res, STATUS_CODE.BAD_REQUEST, CONSTANT.SOMETHING_WENT_WRONG, error);
  }
};

export const deleteMovie = async (req: Request, res: Response) => {
  try {
    const movieId = req.params.id;

    await MovieQueries.deleteMovie(movieId);
    return sendResponse(res, STATUS_CODE.OK, CONSTANT.MOVIE_DELETE);
  } catch (error) {
    console.log('error in deleteMovie', error);
    return sendResponse(res, STATUS_CODE.BAD_REQUEST, CONSTANT.SOMETHING_WENT_WRONG, error);
  }
};
