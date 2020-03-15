const Sequelize = require('sequelize');
const sequelize = new Sequelize('chessdb', 'christian', 'postgres', {
  host: 'localhost',
  dialect: 'postgres',
});

const newClub = sequelize.define('newClub', {
  id: {
    type: Sequelize.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  nameOfClub: {
    type: Sequelize.STRING,
  },
  location: {
    type: Sequelize.STRING,
  },
  organizerName: {
    type: Sequelize.STRING,
  },
  clubNumber: {
    type: Sequelize.INTEGER,
  },
  clubEmail: {
    type: Sequelize.STRING,
  },
  languages: {
    type: Sequelize.ARRAY(Sequelize.STRING),
  },
  clubExtras: {
    type: Sequelize.ARRAY(Sequelize.STRING),
  },
  clubWebsite: {
    type: Sequelize.STRING,
  },
  additionalInfo: {
    type: Sequelize.TEXT,
  },
  dateRegistered: {
    type: Sequelize.DATE,
  },
});


const newUser = sequelize.define('newUser', {
  id: {
    type: Sequelize.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  fName: {
    type: Sequelize.STRING,
  },
  lName: {
    type: Sequelize.STRING,
  },
  password: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
  },
  neighborhood: {
    type: Sequelize.STRING,
  },
  club: {
    type: Sequelize.STRING,
  },
  dateCreated: {
    type: Sequelize.DATE,
  },
});

const newTournament = sequelize.define('newTournament', {
  id: {
    type: Sequelize.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  clubCreated: {
    type: Sequelize.BOOLEAN,
  },
  location: {
    type: Sequelize.STRING,
  },
  clubPhone: {
    type: Sequelize.INTEGER,
  },
  clubEmail: {
    type: Sequelize.STRING,
  },
  startDate: {
    type: Sequelize.DATE,
  },
  endDate: {
    type: Sequelize.DATE,
  },
  additionalInfo: {
    type: Sequelize.TEXT,
  },
  documentOfTournament: {
    type: Sequelize.BLOB('long'), //not sure about this as it is going to be a document
  },
});
