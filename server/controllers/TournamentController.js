// const writeToNewTournamentDB = require('');
const {
  fetchAllTournaments,
  writeToNewTournamentDB,
  deleteTournament,
  updateTournament,
  fetchOneTournament
} = require('../models/TournamentModel');


exports.getAllTournaments = async ctx => {
  try {
    ctx.response.body = await fetchAllTournaments();
    ctx.status = 200;
  } catch (e) {
    ctx.status = 500;
    console.log('OOPS! ', e.stack);
  }
};
module.exports.createTournament = async function postToDB(ctx) {


  try {
    const wasWritten = await writeToNewTournamentDB(ctx);
    console.log('THIS IS INSIDE OF THE CONTROLLER',wasWritten);

    if(!wasWritten) {
      ctx.response.status = 409;
    } else {
      ctx.response.status = 201;
    }
  } catch (e) {
    console.log(e.stack);
    ctx.response.status = 500;
  }

};

exports.getOneTournament = async ctx => {
  const {id} = ctx.tournament.id;
  try {
    await fetchOneTournament(id)

  } catch (e) {

  }
};

exports.deleteTournament = async ctx => {

  try {
    const successfulDelete = await deleteTournament(ctx);
    if (!!successfulDelete) {
      ctx.response.status = 204;
    } else {
      ctx.response.status = 518;
    }
  } catch(e) {
    console.log(e);

  }
};

exports.updateTournament = async ctx => {
  const id = ctx.id
  try {
    await updateTournament(id);
  } catch(e) {
    console.log(e);

  }
};
