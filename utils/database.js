const Sequelize = require('sequelize');

////////////////////////////////////////////////////////////

const database = new Sequelize('demo', 'root', 'root', {
    dialect: 'mysql', 
    host: 'localhost'
});

// const database = new Sequelize ('demo', 'admin', 'admin', {
// 	dialect: 'mysql',
// 	host: '130.211.120.155'
// });

module.exports = database;