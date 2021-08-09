# somebody

> Parse/stringify contact info like `Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com)`

## Install

```
$ npm install somebody
```

## Usage

```js
import {parse, stringify} from 'somebody';

const author = 'Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com)';

const parsed = parse(author);
//=> {name: 'Sindre Sorhus', email: 'sindresorhus@gmail.com', url: 'https://sindresorhus.com'}

stringify(parsed) === author;
//=> true
```

Email and URL are optional.
