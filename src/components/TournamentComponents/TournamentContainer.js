import React, { Component } from 'react';
import { connect } from 'react-redux';
import TournamentList from './tournamentList';
import { Link } from '@reach/router';
import UpdateTournamentListButton from '../UpdateTournamentListButton';
import { yesVisibility } from '../../actions/actions';
const image = require('../../images/chess-clock.svg')
// import CreateTournamentform from './TournamentComponents/createtournamentform';

class TournamentContainer extends Component {



  turnOnVisibility = () => {
    this.props.turnOnVisibility();
  }

  render() {
    return (
      <div className="tc-container">
        {/* Need to conditionally load that when the create tournament link is clicked it shows just the form */}
        <div className="tc-button-container">
          <Link to="CreateNewTournament">
            <button onClick={this.turnOnVisibility}>
              <p className="button-font">CRIAR UN TORNEO NUVEO</p>
              <img src={image} alt="chess" className="img-clock" />
            </button>
          </Link>
          <UpdateTournamentListButton />
        </div>
        {this.props.children}

        <p className="tc-text"> Lista de torneos en Barcelona </p>
        <div className="tl-container">
          <TournamentList />
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
    isVisible: state.loading.visable
  });

const mapDispatchToProps = dispatch => ({
  turnOnVisibility: () => dispatch(yesVisibility()),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TournamentContainer);

