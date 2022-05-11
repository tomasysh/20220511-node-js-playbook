// hello.js
const path = require('path');

const title = 'I am Hello Module';

const sayHello = () => {
    console.log('Hello!');
};

const sayGoodnight = () => {
    console.log('Good night!');
};

// module.exports.sayHello = sayHello;

// module.exports = {
//     sayHello: sayHello,
//     sayGoodnight: sayGoodnight,
//     title: title
// };

// console.log('dirname', __dirname);
// console.log('filename', __filename);
// console.log(path.join(__dirname, 'index.js'));

// JS remarks:
module.exports = {
    sayHello,  // = sayHello: sayHell
    sayGoodnight,
    title,
};

console.log('module', module);
