'use strict';
var normalizeUrl = require('normalize-url');
var humanizeUrl = require('humanize-url');

exports.parse = function (str) {
	if (typeof str !== 'string') {
		throw new TypeError('Expected a string');
	}

	str = str.trim();

	var ret = {};
	var name = /^([^<(]+)/.exec(str);
	var email = /<([^>]+)>/.exec(str);
	var url = /\(([^)]+)\)/.exec(str);

	if (name && name[1].trim()) {
		ret.name = name && name[1].trim();
	}

	if (email && email[1].trim()) {
		ret.email = email && email[1].trim();
	}

	if (url && url[1].trim()) {
		ret.url = normalizeUrl(url && url[1].trim());
	}

	return ret;
};

exports.stringify = function (obj) {
	if (typeof obj !== 'object') {
		throw new TypeError('Expected an object');
	}

	var name = obj.name;
	var email = obj.email && ('<' + obj.email + '>');
	var url = obj.url && ('(' + humanizeUrl(obj.url) + ')');

	return [name, email, url].filter(Boolean).join(' ');
};
