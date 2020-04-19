# somebody [![Build Status](https://travis-ci.com/sindresorhus/somebody.svg?branch=master)](https://travis-ci.com/sindresorhus/somebody)

> Parse/stringify contact info like `Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com)`

## Install

```
$ npm install somebody
```

## Usage

```js
const somebody = require('somebody');

const author = 'Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com)';

const parsed = somebody.parse(author);
//=> {name: 'Sindre Sorhus', email: 'sindresorhus@gmail.com', url: 'https://sindresorhus.com'}

somebody.stringify(parsed) === author;
//=> true
```

Email and URL are optional.
