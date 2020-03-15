const {writeToNewClubDB} = require('../models/ClubModel');

module.exports.createNewClub = async ctx => {

  try {
    const wasWritten = await writeToNewClubDB(ctx);
    console.log('WAS WRITTEN CONST ', wasWritten);
    if (!wasWritten) {
      ctx.response.status = 409;
    } else {
      ctx.response.status = 201;
    }
  } catch (e) {
    console.log(e.stack);
    ctx.response.status = 500;
  }
};

module.exports.clubSignin = async ctx => {};

module.exports.deleteClub = async ctx => {};

module.exports.updateClub = async ctx => {};
