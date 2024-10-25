const app = require('../src/app');
const request = require('supertest');

describe('not found routes test', () => {

	it('should return: code 404 with expected body, when given "/*" request', async () => {

		const res = await request(app).get('/anything');
		expect(res.statusCode).toBe(404);
		expect(res.text).toBe("not found")
	});
});
