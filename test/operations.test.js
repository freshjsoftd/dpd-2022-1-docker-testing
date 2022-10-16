// const assert = require('assert');
const {assert} = require('chai');
const { multiply, asyncSum } = require('../operations');

describe('Math Operations Tests', () => {
	it('should multiply be equal expected', () => {
		const expected = 21;
		const result = multiply(3, 7);
		assert.equal(
			result,
			expected,
			`${result} not equal expected ${expected}`
		);
		// if(result !== expected) {
		//   throw new Error(`Expected ${expected} not equal to ${result}`);
		// }
	});
	it('should async sum two numbers', (done) => {
		const expected = 20;
		asyncSum(15, 5, (result) => {
			assert.equal(result, expected);
			done();
		});
	});
});

it('should be match to Regexp', () => {
  const myString = 'Stiga';
  assert.match(myString, /^S/, `String should be match to Regexp`);
});
