tyeof.js
=========

Infers type from an arbitrary list of strings. Useful to build filters and other form components from user data.  

Use it to determine if a list of strings/numbers is actually:
 - all natural numbers (> 0)
 - integers (has at least one number < 0)
 - all floats (has at least one float)
 - enum - each string is from a limited list of values
 - flag - only one value
 - finally, just a list of arbitrary strings (either all strings, or more than one type)

By default, null and 'empty string' are excluded from all checks.


**Warning!** This library does _not_ attempt to sanitize data.

## Install

```
$ npm install stringtype.js
```

## Usage
```
// import
var typeofjs = require('typeof.js')
   
var type = typeofjs(['3', 2, 5, '-4']); // type = integer
var type = typeofjs(['fruit', 'fruit', 'vegetable', 'fruit']); // type = enum
```

## Contributing

Fork and PR. 

Tests are done with mocha. Please make sure all tests pass:

```
npm run test
```


## License

MIT
