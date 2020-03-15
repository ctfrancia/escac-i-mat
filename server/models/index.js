const CONFIG = require('../config');
const Sequelize = require('sequelize');
const sequelize = new Sequelize('chatdb', `${CONFIG.duser}`, `${CONFIG.dpass}`, {
  host: 'localhost',
  dialect: 'postgres',
});
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

