import test from 'ava';
import {parse, stringify} from './index.js';

test('parse = should parse all props', t => {
	t.deepEqual(
		parse('Sindre Sorhus <sindresorhus@gmail.com> (https://sindresorhus.com)'),
		{
			name: 'Sindre Sorhus',
			email: 'sindresorhus@gmail.com',
			url: 'https://sindresorhus.com',
		},
	);
});

test('parse - should parse name', t => {
	t.deepEqual(
		parse('Sindre Sorhus'),
		{
			name: 'Sindre Sorhus',
		},
	);
});

test('parse - should parse email', t => {
	t.deepEqual(
		parse('<sindresorhus@gmail.com>'),
		{
			email: 'sindresorhus@gmail.com',
		},
	);
});

test('parse - should parse URL', t => {
	t.deepEqual(
		parse('(https://sindresorhus.com)'),
		{
			url: 'https://sindresorhus.com',
		},
	);
});

test('stringify - should stringify all props', t => {
	t.is(
		stringify({
			name: 'Sindre Sorhus',
			email: 'sindresorhus@gmail.com',
			url: 'https://sindresorhus.com',
		}),
		'Sindre Sorhus <sindresorhus@gmail.com> (https://sindresorhus.com)',
	);
});

test('stringify - should stringify name', t => {
	t.is(
		stringify({
			name: 'Sindre Sorhus',
		}),
		'Sindre Sorhus',
	);
});

test('stringify - should stringify email', t => {
	t.is(
		stringify({
			email: 'sindresorhus@gmail.com',
		}),
		'<sindresorhus@gmail.com>',
	);
});

test('stringify - should stringify url', t => {
	t.is(
		stringify({
			url: 'https://sindresorhus.com',
		}),
		'(https://sindresorhus.com)',
	);
});

test('stringify - should stringify name and email', t => {
	t.is(
		stringify({
			name: 'Sindre Sorhus',
			email: 'sindresorhus@gmail.com',
		}),
		'Sindre Sorhus <sindresorhus@gmail.com>',
	);
});

test('stringify - should stringify name and url', t => {
	t.is(
		stringify({
			name: 'Sindre Sorhus',
			url: 'https://sindresorhus.com',
		}),
		'Sindre Sorhus (https://sindresorhus.com)',
	);
});
