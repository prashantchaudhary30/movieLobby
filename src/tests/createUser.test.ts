import request from 'supertest';
import app from '../expressConfig'


describe('createUser',() => {
    it('should create a new user',async() => {
        const response = await request(app).post('/api/v1/user/createUser')
        .send({
            name : 'Test User',
            mobile : '9876567812',
            email : 'testuser@test.com'
        })
        expect(response.status === 200 || response.status === 201).toBe(true);
    })
})

