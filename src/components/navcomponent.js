import { connect } from 'react-redux';
import React, { Component } from 'react';
import { updateTournamentList } from '../actions/actions';
import Donate from './DonateComponents/Donate';
import Home from './HomeComponents/Home';
// import Logout from './Login-Logout-Register-Components/Logout';
import RegisterClub from './RegisterClubComponents/RegisterClub';
import TournamentContainer from './TournamentComponents/TournamentContainer';
import CreateTournamentform from './TournamentComponents/createtournamentform';
import RegisterUserOrSignin from './Login-Logout-Register-Components/RegisterUser';
import { Link, Router } from '@reach/router';

class NavBar extends Component {


render() {
    return (
      <div>
        <div className="nav-container">
          <div className="nav-button">
            <Link className="no-underline hvr-grow" to="/Donate"> Donar </Link>
          </div>
          <div className="the-rest">
            <div className="nav-button">
              <Link className="no-underline hvr-grow" to="/"> Inicio </Link>
            </div>
            <div className="nav-button">
              <Link className="no-underline hvr-grow" to="Tournaments" onClick={this.getTournamentList}> Torneos </Link>
            </div>
            <div className="nav-button">
              <Link className="no-underline hvr-grow" to="LoginRegister">Registarse</Link>
              {/* Conditionally render based on signed in or out * this will be done by checking state*/}
              {/* <Link className="no-underline" to="Signout"> Sign Out </Link> */}
            </div>

          </div>
        </div>

          <div className="router-styling">
            <Router>
              <Home path="/" />
              <Donate path="/Donate" />
              <TournamentContainer path="/Tournaments">
                <CreateTournamentform path="CreateNewTournament" />
              </TournamentContainer>
              <RegisterClub path="/RegisterClub" />
              {/* <RegisterUser path="/RegisterUser" /> */}
              <RegisterUserOrSignin path="/LoginRegister" />
              {/* <Logout path="/Logout" /> */}
            </Router>
          </div>
      </div>
    );
  }

  }

  const mapStateToProps = state => ({});

//the data is being received here
const mapDispatchToProps = dispatch => ({
  updateTournamentList: tournament => dispatch(updateTournamentList(tournament))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
// return (
//   <div>
//     <Button aria-owns={anchorEl ? 'simple-menu' : undefined} aria-haspopup="true" onClick={this.handleClick}>
//       Open Menu
//         </Button>
//     <Menu id="simple-menu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={this.handleClose}>
//       <MenuItem onClick={this.handleClose}><Link to="/"> Home </Link></MenuItem>
//       <MenuItem onClick={this.handleClose}><Link to="Tournaments" onClick={this.getTournamentList}>Tournaments</Link></MenuItem>
//       <MenuItem onClick={this.handleClose}><Link to="LoginRegister">Register / Signin </Link></MenuItem>
//       <MenuItem onClick={this.handleClose}><Link to="/Donate"> Donate </Link></MenuItem>
//     </Menu>

//     <Router>
//       <Home path="/" />
//       <RegisterUserOrSignin path="/LoginRegister" />
//       <TournamentContainer path="/Tournaments">
//         <CreateTournamentform path="CreateNewTournament" />
//       </TournamentContainer>
//     </Router>
//   </div>
// );
//   }