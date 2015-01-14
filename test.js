'use strict';
var assert = require('assert');
var somebody = require('./');

describe('.parse()', function () {
	it('should parse all props', function () {
		assert.deepEqual(
			somebody.parse('Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com)'),
			{
				name: 'Sindre Sorhus',
				email: 'sindresorhus@gmail.com',
				url: 'http://sindresorhus.com'
			}
		);
	});

	it('should parse name', function () {
		assert.deepEqual(
			somebody.parse('Sindre Sorhus'),
			{
				name: 'Sindre Sorhus'
			}
		);
	});

	it('should parse email', function () {
		assert.deepEqual(
			somebody.parse('<sindresorhus@gmail.com>'),
			{
				email: 'sindresorhus@gmail.com'
			}
		);
	});

	it('should parse url', function () {
		assert.deepEqual(
			somebody.parse('(sindresorhus.com)'),
			{
				url: 'http://sindresorhus.com'
			}
		);
	});
});

describe('.stringify()', function () {
	it('should stringify all props', function () {
		assert.deepEqual(
			somebody.stringify({
				name: 'Sindre Sorhus',
				email: 'sindresorhus@gmail.com',
				url: 'http://sindresorhus.com'
			}),
			'Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com)'
		);
	});

	it('should stringify name', function () {
		assert.deepEqual(
			somebody.stringify({
				name: 'Sindre Sorhus'
			}),
			'Sindre Sorhus'
		);
	});

	it('should stringify email', function () {
		assert.deepEqual(
			somebody.stringify({
				email: 'sindresorhus@gmail.com'
			}),
			'<sindresorhus@gmail.com>'
		);
	});

	it('should stringify url', function () {
		assert.deepEqual(
			somebody.stringify({
				url: 'sindresorhus.com'
			}),
			'(sindresorhus.com)'
		);
	});

	it('should stringify name and email', function () {
		assert.deepEqual(
			somebody.stringify({
				name: 'Sindre Sorhus',
				email: 'sindresorhus@gmail.com'
			}),
			'Sindre Sorhus <sindresorhus@gmail.com>'
		);
	});

	it('should stringify name and url', function () {
		assert.deepEqual(
			somebody.stringify({
				name: 'Sindre Sorhus',
				url: 'sindresorhus.com'
			}),
			'Sindre Sorhus (sindresorhus.com)'
		);
	});
});
