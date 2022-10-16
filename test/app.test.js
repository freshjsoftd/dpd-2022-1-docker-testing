const request = require('supertest');
const assert = require('assert');


const { app } = require('..');

const user = { name: 'John', age: 30 };

describe('Getting Tests', () => {
	it('should return Hi everyone', (done) => {
		request(app)
			.get('/')
			.expect(200)
			.expect(`Hi everyone from server`)
			.end(done);
	});

	it('should return NotFound with 404', (done) => {
		request(app).get('/error').expect(404).expect('NotFound').end(done);
	});

	it('should return object with Jhon', (done) => {
		request(app)
			.get('/user')
			.expect((res) => {
				assert.deepEqual(res.body, user);
			})
			.end(done);
	});
});
