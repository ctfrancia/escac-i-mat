const CONFIG = require('../config');
const Sequelize = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = new Sequelize('ajedrezdb', CONFIG.duser, CONFIG.dpass, {
  host: 'localhost',
  dialect: 'postgres',
  define: {
    timestamps: false
  }
});

const User = sequelize.define('user', {
  id: {
    type: Sequelize.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  fName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  neighborhood: {
    type: Sequelize.STRING,
  },
  club: {
    type: Sequelize.STRING,
  },
  dateCreated: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
  },
  clubOwner: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  }
});

module.exports.writeToNewUserDB = async (ctx) => {
  const userInfo = ctx.request.body;
  const passwordBcrypt = await bcrypt.hash(userInfo.password, 10)

  //   10, (err, hash) =>{
  //   console.log(' HASHED PASSWORD!!!!', hash);

  //     return hash;
  // });
console.log('after the hash function!!!!!!!!!!!!!', passwordBcrypt);

  // console.log('this is the body inside of the model',ctx.request.body);

  const answer = await User.findOrCreate({
    where: {
      email: userInfo.email
    },
    defaults:{
      fName:userInfo.fName,
      lName:userInfo.lName,
      password: passwordBcrypt,
      email:userInfo.email,
      neighborhood:userInfo.neighborhood,
      club:userInfo.club,
    }
}).spread((user, created) => {
  console.log(user.get({
    plain:true
  }));

  return created;
});

  return answer;
};


exports.signIntoDB = async (userObj) => {
const userEmail = userObj.email;
const userPassword = userObj.password;
console.log(userEmail, userPassword);

  try {
    const user = await User.find({
      where:{
        email: `${userEmail}`
      }
    });
    // console.log('RECEIVED FROM DB!!!!!',user);

    // if(user === null ) {
    //   // console.log('works!!!');
    //   return
    // }
    return user;

  } catch (e) {
    console.log(e);
  }
};

exports.deleteUserinDb = async (id) => {
const userID = id;

  try {

  } catch (e) {
    console.log(e);
  }
};

exports.editUserInDb = async (id) => {
const userID = id;

  try {

  } catch (e) {
    console.log(e);
  }
};