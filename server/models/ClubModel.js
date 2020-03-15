const CONFIG = require('../config');
const Sequelize = require('sequelize');
const sequelize = new Sequelize('ajedrezdb', CONFIG.duser, CONFIG.dpass, {
  host: 'localhost',
  dialect: 'postgres',
  define: {
    timestamps: false
  }
});
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
const Club = sequelize.define('club', {
  id: {
    type: Sequelize.BIGINT,
    primaryKey: true,
    autoIncrement: true
  },
  clubName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  location: {
    type: Sequelize.STRING,
    allowNull: false
  },
  organizerName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  clubNumber: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  clubEmail: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  languages: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  },
  clubExtras: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  },
  clubWebsite: {
    type: Sequelize.STRING
  },
  additionalInfo: {
    type: Sequelize.TEXT
  },
  dateRegistered: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
  }
});
module.exports.writeToNewClubDB = ctx => {
  const clubInfo = ctx.request.body;
  const answer = Club.findOrCreate({
    where: {
      clubEmail: clubInfo.clubEmail
    },
    defaults: {
      clubName: clubInfo.clubName,
      location: clubInfo.location,
      organizerName: clubInfo.organizerName,
      clubNumber: clubInfo.clubNumber,
      clubEmail: clubInfo.clubEmail,
      password: clubInfo.password,
      languages: clubInfo.languages,
      clubExtras: clubInfo.clubExtras,
      clubWebsite: clubInfo.clubWebsite,
      additionalInfo: clubInfo.additionalInfo,
    }
  }).spread((club, created) => {

    console.log('asdfasdfasdfasdfa',club);

    console.log(
      club.get({
        plain: true
      })
    );
    return created;
  });

  return answer;
};
