// hello.js
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

// JS remarks:
module.exports = {
    sayHello,  // = sayHello: sayHell
    sayGoodnight,
    title,
};
