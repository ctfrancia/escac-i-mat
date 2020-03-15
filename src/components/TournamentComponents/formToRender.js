import React, { Component } from 'react';
import { noVisibility, updateTournamentList } from '../../actions/actions';
import { connect } from 'react-redux';
import axios from'axios';

class FormToRender extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameOfTournament: '',
      clubCreated: false,
      location: '',
      clubPhone: '',
      clubPhone2: '',
      clubEmail: '',
      clubEmail2: '',
      startDate: '',
      additionalInfo: '',
    };
  }
  hideForm = () => {
    this.props.turnOffVisibility();
  }
  handleChange = e => {
    console.log(e.target.value);

    let value = e.target.value;
    let name = e.target.name;

    this.setState({ [name]: value });
  };


  handleSubmit = e => {
    e.preventDefault();
    const value = this.state;
    // const eChecker = this.state.clubEmail === this.state.clubEmail2 ? true : false;
    // const nChecker = this.state.clubNumber === this.state.clubNumber2 ? true : false;
    // // const

    // if (!eChecker) {
    //   alert('please make sure that your emails are the same');
    // } else if (!nChecker) {
    //   alert('please make sure that the phone numbers are the same');
    // } else {
      console.log('STATE BEING SENT', value);

      axios
        .post('http://localhost:3001/CreateTournament', {
          nameOfTournament: value.nameOfTournament,
          clubCreated: value.clubCreated,
          location: value.location,
          clubPhone: value.clubPhone,
          clubEmail: value.clubEmail,
          startDate: value.startDate,
          additionalInfo: value.additionalInfo
        })
        .then(res => {
          console.log(res);
          console.log('Tournament Created Succesfully');
        })
        .catch(err => {
          // properly receives
          console.log('this is the error', err);
          alert('Was not');
        });
      //
      axios
        .get('http://localhost:3001/GetTournamentList')
        .then(payload => {
          console.log(payload);

          this.props.updateTournamentList(payload.data);
        })
        .catch(e =>{
          console.log(e)
        })
    // }
  };
render(){
  return(

  <div className="ctf-container">
    <form className="f-container">
      <button onClick={this.hideForm} className="close-form">X</button>
      <div className="basic-info-container">
        <div className="first-column">
          <div className="form-box">
            <p>Nombre del torneo:</p>{' '}
            <input
              required
              className="f-input"
              name="nameOfTournament"
              type="text"
              onChange={this.handleChange}
              value={this.state.value}
              nameoftournament="nameOfTournamet"
              placeholder="necesario"
            />
          </div>

          <div className="form-box">
            <p>Email del club:</p>{' '}
            <input
              required
              className="f-input"
              name="clubEmail"
              type="email"
              onChange={this.handleChange}
              value={this.state.value}
              clubmmail="clubEmail"
              placeholder="necesario"
            />
          </div>
          <div className="form-box">
            <p>Número de teléfono del club:</p>{' '}
            <input
              required
              className="f-input"
              name="clubPhone"
              type="text"
              onChange={this.handleChange}
              value={this.state.value}
              clubphone="clubPhone"
              placeholder="necesario"
            />
          </div>
        </div>

        <div className="second-column">
          <div className="form-box">
            <p>Dirección:</p>{' '}
            <input
              required
              className="f-input"
              name="location"
              type="text"
              onChange={this.handleChange}
              value={this.state.value}
              location="location"
              placeholder="necesario"
            />
          </div>
          <div className="form-box">
            <p>Verificar el email del club:</p>{' '}
            <input
              required
              className="f-input"
              name="clubEmail2"
              type="email"
              onChange={this.handleChange}
              value={this.state.value}
              clubmmail="clubEmail"
              placeholder="necesario"
            />
          </div>
          <div className="form-box">
            <p>Verificar el número de teléfono del club:</p>
            <input
              required
              className="f-input"
              name="clubPhone2"
              type="text"
              onChange={this.handleChange}
              value={this.state.value}
              clubphone="clubPhone"
              placeholder="necesario"
            />
          </div>
        </div>
      </div>
      <div className="form-box">
        <p>Día y hora:</p>{' '}
        <input
          required
          className="f-input"
          name="startDate"
          type="text"
          onChange={this.handleChange}
          value={this.state.value}
          // locale="es-ES"
          placeholder="necesario: formato DD-MM-AAAA @24h00"
        />
      </div>

      {/* <div> */}
      <div className="form-box">
        <p>Más información:</p>{' '}
        <textarea
          className=""
          rows="20"
          cols="80"
          name="additionalInfo"
          type="text"
          onChange={this.handleChange}
          value={this.state.value}
          additionalinfo="additionalInfo"
          placeholder="Opcional, ingrese cualquier información adicional sobre el club, la ubicación, cómo llegar allí."
        />
      </div>
      <input
        className="f-input form-box pointer hvr-grow"
        type="submit"
        value="Enviar"
        onClick={this.handleSubmit}
      />
      {/* </div> */}
    </form>
  </div>
  )

}
}
const mapStateToProps = state => ({
  isVisible: state.loading.visible
});

const mapDispatchToProps = dispatch => ({
  turnOffVisibility: () => dispatch(noVisibility()),
  updateTournamentList: tournament => dispatch(updateTournamentList(tournament)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormToRender);
