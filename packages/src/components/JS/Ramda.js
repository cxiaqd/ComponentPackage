const R = require('ramda')
const greet = R.replace('{name}', R.__, 'Hello, {name}!');
// greet('Alice'); //=> 'Hello, Alice!'

console.log(greet('Alice'));