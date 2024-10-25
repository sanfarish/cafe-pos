const app = require('../src/app');
const request = require('supertest');
const models = require('../src/models');

jest.mock('morgan', () => jest.fn(() => (req, res, next) => next()));

describe('category routes test', () => {
    
    describe('GET /v1/category', () => {
        
        const mockData = [
            {
                id: "31462142-4eed-4e11-b287-1906b24301ff",
                name: "test category 1"
            }
        ];
        const mockDB = jest.spyOn(models.category, 'findAll');
        mockDB.mockImplementationOnce(() => Promise.resolve(mockData));
        
        it('should return: code 200 with expected body, when given good request', async () => {
            
            const res = await request(app).get('/v1/category');
            expect(res.statusCode).toBe(200);
            expect(res.body).toStrictEqual(mockData);
        });

        const mockMessage = "server error";
        mockDB.mockImplementationOnce(() => Promise.reject(new Error(mockMessage)));

        it('should return: code 500 with expected body, when server error', async () => {
            
            const res = await request(app).get('/v1/category');
            expect(res.statusCode).toBe(500);
            expect(res.body.message).toBe(mockMessage);
        });
    });

    describe('POST /v1/category', () => {

        const mockGoodBody = { name: "test category 2" };
        const mockDB = jest.spyOn(models.category, 'create');
        mockDB.mockImplementationOnce(() => Promise.resolve({
            dataValues: {
                id: crypto.randomUUID(),
                ...mockGoodBody
            }
        }));

        it('should return: code 201 with expected body, when given good request', async () => {

            const res = await request(app).post('/v1/category').send(mockGoodBody);
            expect(res.statusCode).toBe(201);
            expect(res.body.status).toBe("success");
            expect(res.body.data.id).toBeDefined();
        });

        const mockBadBody = { anything: 12345 };
        const mockMessage = "bad request";
        mockDB.mockImplementationOnce(() => Promise.reject(new Error(mockMessage)));

        it('should return: code 500 with expected body, when given bad request', async () => {

            const res = await request(app).post('/v1/category').send(mockBadBody);
            expect(res.statusCode).toBe(500);
            expect(res.body.message).toBe(mockMessage);
        });
    });

    describe('DELETE /v1/category/:id', () => {

        const mockData = {
            id: "16903a84-61c1-40ad-9762-28904078f14b",
            name: "test category 3"
        };
        const mockDB = jest.spyOn(models.category, 'destroy');
        mockDB.mockImplementationOnce(() => Promise.resolve());

        it('should return: code 204 with no content, when given good request', async () => {

            const res = await request(app).delete(`/v1/category/${mockData.id}`);
            expect(res.statusCode).toBe(204);
            expect(res.body).toStrictEqual({});
        });

        const mockMessage = "bad request";
        mockDB.mockImplementationOnce(() => Promise.reject(new Error(mockMessage)));

        it('should return: code 500 with expected body, when given bad request', async () => {

            const res = await request(app).delete(`/v1/category/anything`);
            expect(res.statusCode).toBe(500);
            expect(res.body.message).toBe(mockMessage);
        });
    });

    describe('PUT /v1/category/:id', () => {

        const mockData = {
            id: "16903a84-61c1-40ad-9762-28904078f14b",
            name: "test category 4"
        };
        const mockBody = { name: "test category 5" };
        const mockDB1 = jest.spyOn(models.category, 'update');
        mockDB1.mockImplementationOnce(() => {
            mockData.name = mockBody.name;
            return Promise.resolve();
        });
        const mockDB2 = jest.spyOn(models.category, 'findByPk');
        mockDB2.mockImplementationOnce(() => Promise.resolve(mockData));

        it('should return: code 200 with expected body, when given good request', async () => {

            const res = await request(app).put(`/v1/category/${mockData.id}`).send(mockBody);
            expect(res.statusCode).toBe(200);
            expect(res.body.status).toBe("success");
            expect(res.body.data.name).toBe(mockBody.name);
        });

        const mockMessage = "bad request";
        mockDB1.mockImplementationOnce(() => Promise.reject(new Error(mockMessage)));

        it('should return: code 500 with expected body, when given bad request', async () => {

            const res = await request(app).put(`/v1/category/anything`).send(mockBody);
            expect(res.statusCode).toBe(500);
            expect(res.body.message).toBe(mockMessage);
        });
    });
});
