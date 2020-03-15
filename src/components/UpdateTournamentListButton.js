import { connect } from 'react-redux';
import React, { Component } from 'react';
import { updateTournamentList } from '../actions/actions';
import axios from 'axios';
const horse = require('../images/horse.svg');

class UpdateTournamentListButton extends Component {
  getTournamentList = () => {
    console.log('get request from button');
    axios
      .get('http://localhost:3001/GetTournamentList')
      .then(payload => {
        console.log('fetch from button', payload);
        this.props.updateTournamentList(payload.data);
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.getTournamentList}>
          <p className="button-font">ACTUALIZAR LISTA DE TORNEOS</p>
          <img src={horse} alt="clock" className="img-clock"/>
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  updateTournamentList: tournament => dispatch(updateTournamentList(tournament))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdateTournamentListButton);
