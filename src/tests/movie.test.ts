import request from 'supertest';
import app from '../expressConfig'; 

describe('RegisterMovie Endpoint', () => {
  it('should register a new movie successfully', async () => {
    const response = await request(app)
      .post('/api/v1/createMovie')
      .send({
        title: 'Inception',
        ratings: 9.3,
        genre: ['Sci-Fi', 'Thriller'],
        streamingLink: 'https://example.com/inception',
        createdBy: 'admin123'
      });
      console.log('response',response.body)
    expect(response.status).toBe(401);
    expect(response.body.message).toBe('Unauthorized: Token is missing');
  });

  it('should handle registration failure', async () => {
    const response = await request(app)
      .post('/api/v1/createMovie')
      .send({
        title: 'Inception',
        ratings: 9.3,
        genre: ['Sci-Fi', 'Thriller'],
        createdBy: 'admin123'
    });

    expect(response.status).toBe(401);
  });
});


describe('getMovies Endpoint', () => {
    it('should get movies successfully', async () => {
      const response = await request(app)
        .get('/api/v1/movie')
        .query({
          pageNumber: '1', 
          pageLimit: '10'
        });
  
      expect(response.status).toBe(200);
      expect(response.body.message).toBe('data fetch successfully');
      expect(Array.isArray(response.body.data)).toBe(true);
    });
});

describe('searchMovie Endpoint', () => {
    it('should search movies successfully', async () => {
      const response = await request(app)
        .get('/api/v1/search')
        .query({
          genre: 'Action'
        });
  
      expect(response.status).toBe(200);
      expect(response.body.message).toBe('data fetch successfully');
      expect(Array.isArray(response.body.data)).toBe(true);
    });
});

