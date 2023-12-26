import MovieModel, { IMovie } from '../db/movies'

class MovieQueries {
  async createMovie(userDetails: Partial<IMovie>): Promise<IMovie> {
    const movie = new MovieModel(userDetails);
    return movie.save();
  }

  async getAllMovies(pageNumber: number, pageLimit: number): Promise<IMovie[]> {
    return MovieModel.find({}).skip(pageNumber).limit(pageLimit).exec();
  }

  async searchMovies(query: object): Promise<IMovie[]> {
    return MovieModel.find(query);
  }

  async updateMovie(movieId: string, updateFields: object): Promise<IMovie | null> {
    return MovieModel.findByIdAndUpdate(movieId, updateFields, { new: true });
  }

  async deleteMovie(movieId: string): Promise<any> {
    return MovieModel.deleteOne({ _id: movieId });
  }
}

export default new MovieQueries();
