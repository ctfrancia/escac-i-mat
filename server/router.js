const Router = require('koa-router');
const router = new Router();
const clubController = require('./controllers/ClubController');
const tournamentController = require('./controllers/TournamentController');
const userController = require('./controllers/UserController');

//Club Routes
router.post('/CreateNewClub', clubController.createNewClub);
router.get('/ClubSign-in', clubController.clubSignin);
router.delete('/DeleteClub', clubController.deleteClub); //TODO: need to do this
router.put('/UpdateClub', clubController.updateClub); //TODO: need to do this

//User routes
router.post('/CreateNewUser', userController.createNewUser);
router.get('/UserSign-in', userController.signinUser);
router.delete('/DeleteUser', userController.deleteUser); //TODO: need to write this
router.put('/UpdateUser', userController.updateUser); //TODO: need to write this



//Tournament routes
router.post('/CreateTournament', tournamentController.createTournament);
router.get('/GetTournamentList', tournamentController.getAllTournaments);
router.get('/GetTournament/:id', tournamentController.getOneTournament); //TODO: I don't need the inidividual tournament as I can get it from the store
router.delete('/DeleteTournament/:id', tournamentController.deleteTournament);
router.put('/UpdateTournament', tournamentController.updateTournament); //TODO: Need to Update tournament

module.exports = router;
