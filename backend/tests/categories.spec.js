require('dotenv').config();

const request = require('supertest');
const app = require('../src/app');
const models = require('../src/models');

jest.mock('morgan', () => jest.fn(() => (req, res, next) => next()));

describe('category routes test', () => {
    
    describe('GET /api/v1/categories', () => {
        
        const mockData = [
            {
                id: "31462142-4eed-4e11-b287-1906b24301ff",
                name: "test category 1"
            }
        ];
        const mockDB = jest.spyOn(models.categories, 'findAll');
        mockDB.mockImplementationOnce(() => Promise.resolve(mockData));
        
        it('should return: code 200 with expected body, when given good request', async () => {
            
            const res = await request(app).get('/api/v1/categories');
            expect(res.statusCode).toBe(200);
            expect(res.body).toStrictEqual(mockData);
        });

        // const mockMessage = "server error";
        // mockDB.mockImplementationOnce(() => Promise.reject(new Error(mockMessage)));

        // it('should return: code 500 with expected body, when server error', async () => {
            
        //     const res = await request(app).get('/api/v1/categories');
        //     expect(res.statusCode).toBe(500);
        //     expect(res.body.message).toBe(mockMessage);
        // });
    });

    describe('POST /api/v1/categories', () => {

        const mockGoodBody = { name: "test category 2" };
        const mockDB = jest.spyOn(models.categories, 'create');
        mockDB.mockImplementationOnce(() => Promise.resolve({
            dataValues: {
                id: crypto.randomUUID(),
                ...mockGoodBody
            }
        }));

        it('should return: code 201 with expected body, when given good request', async () => {

            const res = await request(app).post('/api/v1/categories').send(mockGoodBody);
            expect(res.statusCode).toBe(201);
            expect(res.body.status).toBe("success");
            expect(res.body.data.id).toBeDefined();
        });

        // const mockBadBody = { anything: 12345 };
        // const mockMessage = "bad request";
        // mockDB.mockImplementationOnce(() => Promise.reject(new Error(mockMessage)));

        // it('should return: code 500 with expected body, when given bad request', async () => {

        //     const res = await request(app).post('/api/v1/categories').send(mockBadBody);
        //     expect(res.statusCode).toBe(500);
        //     expect(res.body.message).toBe(mockMessage);
        // });
    });

    describe('DELETE /api/v1/categories/:id', () => {

        const mockData = {
            id: "16903a84-61c1-40ad-9762-28904078f14b",
            name: "test category 3"
        };
        const mockDB = jest.spyOn(models.categories, 'destroy');
        mockDB.mockImplementationOnce(() => Promise.resolve());

        it('should return: code 204 with no content, when given good request', async () => {

            const res = await request(app).delete(`/api/v1/categories/${mockData.id}`);
            expect(res.statusCode).toBe(204);
            expect(res.body).toStrictEqual({});
        });

        // const mockMessage = "bad request";
        // mockDB.mockImplementationOnce(() => Promise.reject(new Error(mockMessage)));

        // it('should return: code 500 with expected body, when given bad request', async () => {

        //     const res = await request(app).delete(`/api/v1/categories/anything`);
        //     expect(res.statusCode).toBe(500);
        //     expect(res.body.message).toBe(mockMessage);
        // });
    });

    describe('PUT /api/v1/categories/:id', () => {

        const mockData = {
            id: "16903a84-61c1-40ad-9762-28904078f14b",
            name: "test category 4"
        };
        const mockBody = { name: "test category 5" };
        const mockDB1 = jest.spyOn(models.categories, 'update');
        mockDB1.mockImplementationOnce(() => {
            mockData.name = mockBody.name;
            return Promise.resolve();
        });
        const mockDB2 = jest.spyOn(models.categories, 'findByPk');
        mockDB2.mockImplementationOnce(() => Promise.resolve(mockData));

        it('should return: code 200 with expected body, when given good request', async () => {

            const res = await request(app).put(`/api/v1/categories/${mockData.id}`).send(mockBody);
            expect(res.statusCode).toBe(200);
            expect(res.body.status).toBe("success");
            expect(res.body.data.name).toBe(mockBody.name);
        });

        // const mockMessage = "bad request";
        // mockDB1.mockImplementationOnce(() => Promise.reject(new Error(mockMessage)));

        // it('should return: code 500 with expected body, when given bad request', async () => {

        //     const res = await request(app).put(`/api/v1/categories/anything`).send(mockBody);
        //     expect(res.statusCode).toBe(500);
        //     expect(res.body.message).toBe(mockMessage);
        // });
    });
});
