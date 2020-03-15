import React, { Component } from 'react';

class TournamentItem extends Component {
  render() {

    let time = this.props.dateCreated.slice(0,10);

    return (
      <div className="tContainer">
        <div className="t-info-div">
          <div className="t-div">
            <h3>NOMBRE DEL TORNEO</h3>
            <p className="t-text">
              {this.props.tournamentName}
            </p>
          </div>

          <div className="t-div">
            <h3>DIRECCIÓN</h3>
            <p className="t-text">
              {this.props.location}
            </p>
          </div>

          <div className="t-div">
            <h3>NUMERO DEL CLUB</h3>
            <p className="t-text">
              {this.props.clubPhone}
            </p>
          </div>

          <div className="t-div">
            <h3>EMAIL DEL CLUB</h3>
            <p className="t-text">
              {this.props.clubEmail}
            </p>
          </div>

          <div className="t-div">
            <h3>FECHA DEL TORNEO</h3>
            <p className="t-text">
              {this.props.startDate}
            </p>
          </div>

        </div>
        <div className="t-more-info-column">
          <div className="tInfo hide-overflow">
            <h3>MÁS INFORMACIÓN</h3>
            <p className="t-text">
              {this.props.additionalInfo}
            </p>
          </div>
          <div className="tCreated">
            <h3>FECHA DE CREACIÓN</h3>
            <p className="t-text">
              {time}
            </p>
          </div>
        </div>


      </div>
    );
  }
}
export default TournamentItem;
