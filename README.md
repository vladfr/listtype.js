listtype.js
=========

Infers type from an arbitrary list of strings. Useful to build filters and other form components from user data. 

Use it to determine if strings/numbers from a list have a common type. Possible return values are:
 - `natural`: all natural numbers (> 0)
 - `integer`: integers (has at least one number < 0)
 - `float`: all floats (has at least one float)
 - `enum`: each string is from a limited list of values
 - `flag`: only one value
 - `string`: finally, just a list of arbitrary strings (either all strings, or more than one type)

By default, null and 'empty string' are excluded from all checks.


**Warning!** This library does _not_ attempt to sanitize data.

## Install

```
$ npm install listtype.js
```

## Usage
```
// import
var listtypejs = require('listtype.js')
   
var type = listtypejs(['3', 2, 5, '-4']); // type = integer
var type = listtypejs(['fruit', 'fruit', 'vegetable', 'fruit']); // type = enum
```

See tests in `test/` for a comprehensive list of examples.

## Contributing

Fork and PR. 

Tests are done with mocha. Please make sure all tests pass:

```
npm run test
```


## License

MIT
