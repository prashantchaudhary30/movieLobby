export interface ResponseMessages {
  USER_UPDATE: string;
  FETCH_SUCCESS: string;
  MOVIE_UPDATE: string;
  MOVIE_DELETE: string;
  PARAMETER_MISSING : string;
  USER_ALREADY_EXISTS : string;
  USER_CREATED_SUCCESSFULL : string;
  MOVIE_CREATED_SUCCESSFULL : string;
  SOMETHING_WENT_WRONG : string;
}

export const CONSTANT: ResponseMessages = {
  USER_UPDATE: 'User updated Successfully',
  FETCH_SUCCESS: 'data fetch successfully',
  MOVIE_UPDATE: 'Movie detail updated successfully',
  MOVIE_DELETE: 'Movie Deleted',
  PARAMETER_MISSING : 'Required Parameter is missing',
  USER_ALREADY_EXISTS : 'user already exists',
  USER_CREATED_SUCCESSFULL : 'user created successfully',
  SOMETHING_WENT_WRONG : 'something went wrong',
  MOVIE_CREATED_SUCCESSFULL : 'movie created successfully'
};
