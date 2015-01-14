# somebody [![Build Status](https://travis-ci.org/sindresorhus/somebody.svg?branch=master)](https://travis-ci.org/sindresorhus/somebody)

> Parse/stringify contact info like `Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com)`


## Install

```sh
$ npm install --save somebody
```


## Usage

```js
var somebody = require('somebody');
var author = 'Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com)';

var parsed = somebody.parse(author);
//=> {name: 'Sindre Sorhus', email: 'sindresorhus@gmail.com', url: 'http://sindresorhus.com'}

somebody.stringify(parsed) === author;
//=> true
```

Email and URL are optional.


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
