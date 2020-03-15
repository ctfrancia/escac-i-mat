import React, { Component } from 'react';
const homeIcon = require('../../images/chess.svg')
class Home extends Component {


  render() {
    return (
      <div className="home-container">
        <div className="home-content">
          <img src={homeIcon} alt="Home" className="home-img" />
          <section>
            <h1>Bienvenid@ a Ajedrez BCN!</h1>
            <p>
              The goal of this website is so that smaller clubs throughout the city of Barcelona
              have a place to go and create get togethers and tournaments. This will allow a centralized
              place for people to go for chess meetings and tournaments and help clubs grow and make more
              contacts, but, more importantly: PLAY CHESS!
            </p>
          </section>
        </div>
      </div>
    );
  }
}
export default Home;