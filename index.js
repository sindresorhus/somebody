import normalizeUrl from 'normalize-url';

export function parse(string) {
	if (typeof string !== 'string') {
		throw new TypeError('Expected a string');
	}

	string = string.trim();

	const name = /^([^<(]+)/.exec(string);
	const email = /<([^>]+)>/.exec(string);
	const url = /\(([^)]+)\)/.exec(string);

	const returnValue = {};

	if (name && name[1].trim()) {
		returnValue.name = name && name[1].trim();
	}

	if (email && email[1].trim()) {
		returnValue.email = email && email[1].trim();
	}

	if (url && url[1].trim()) {
		returnValue.url = normalizeUrl(url && url[1].trim());
	}

	return returnValue;
}

export function stringify(object) {
	if (typeof object !== 'object') {
		throw new TypeError('Expected an object');
	}

	const {name} = object;
	const email = object.email && `<${object.email}>`;
	const url = object.url && `(${object.url})`;

	return [name, email, url].filter(Boolean).join(' ');
}
