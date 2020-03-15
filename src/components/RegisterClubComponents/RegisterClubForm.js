import React, { Component } from 'react';
import axios from 'axios';

class RegisterClubForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clubName: '',
      location: '',
      organizerName: '',
      clubNumber: '',
      clubNumber2: '',
      clubEmail: '',
      clubEmail2: '',
      password: '',
      password2: '',
      languages: [],
      extras: [],
      clubWebsite: '',
      additionalInfo: ''
    };

    this.clubLanguages = [
      { value: 'Catalán', index: 1 },
      { value: 'Castellano', index: 2 },
      { value: 'Inglés', index: 3 },
      { value: 'Portugués', index: 4 },
      { value: 'Gallego', index: 5 },
      { value: 'Vasco', index: 6 },
      { value: 'Francés', index: 7 },
      { value: 'Chino', index: 8 },
      { value: 'Ruso', index: 9 }
    ];
    this.clubExtras = [
      { value: 'Bar', index: 1 },
      { value: 'Clases', index: 2 },
      { value: 'Wifi', index: 3 },
      { value: 'Reuniones', index: 4 },
      { value: 'Dominos', index: 5 },
      { value: 'Internacional', index: 6 },
      { value: 'Cerca del Metro', index: 7 },
      { value: 'Jugadores Titelado', index: 8 },
      { value: 'Amigable para principiantes', index: 9 }
    ];
  }
  handleSubmit = e => {
    e.preventDefault();
    // checks are working before sending to back end
    // const pChecker = (this.state.password === this.state.password2) ? true : false;
    // const eChecker = (this.state.clubEmail === this.state.clubEmail2) ? true : false;
    // const nChecker = (this.state.clubNumber === this.state.clubNumber2) ? true : false;
    // console.log(pChecker);

    // if (!pChecker) alert('please make sure that your passwords match');
    // if (!eChecker) alert('please make sure that your emails are the same');
    // if (!nChecker) alert('please make sure that the phone numbers are the same');
    const value = this.state;

    console.log(value);

    axios
      .post('http://localhost:3001/CreateNewClub', {
        clubName: value.clubName,
        location: value.location,
        organizerName: value.organizerName,
        clubNumber: value.clubNumber,
        clubEmail: value.clubEmail,
        password: value.password,
        languages: [],
        extras: [],
        clubWebsite: value.clubWebsite,
        additionalInfo: value.additionalInfo
      })
      .then(res => {
        console.log(res);
        alert('Account Created Successfully');
      })
      .catch(err => {
        // properly receives
        console.log('this is the error', err);
        alert('Email exists');
      });
  };

  handleChange = e => {
    let value = e.target.value;
    let name = e.target.name;
    let nChecker = name === 'languages' || name === 'extras' ? true : false;

    if (nChecker) {
      this.setState(prevState => ({
        [name]: [...prevState[name], value]
      }));
    } else {
      this.setState({ [name]: value });
    }
  };

  render() {
    return (
      <div className="rc-container">
      <h2>Register your club</h2>
        <form className="rc-form">
          Nombre del Club:{' '}
          <input
            className="f-input"
            name="clubName"
            type="text"
            onChange={this.handleChange}
            value={this.state.value}
            clubname="clubName"
          />
          Dirección:{' '}
          <input
            className="f-input"
            name="location"
            type="text"
            onChange={this.handleChange}
            value={this.state.value}
            location="location"
          />
          Organizador(a):{' '}
          <input
            className="f-input"
            name="organizerName"
            type="text"
            onChange={this.handleChange}
            value={this.state.value}
            organizer="password"
          />
          Número de teléfono del club:{' '}
          <input
            className="f-input"
            name="clubNumber"
            type="text"
            onChange={this.handleChange}
            value={this.state.value}
            clubnumber="password"
          />
          Verificar Número de teléfono del club:{' '}
          <input
            className="f-input"
            name="clubNumber2"
            type="text"
            onChange={this.handleChange}
            value={this.state.value}
            clubnumber="clubEmail"
          />
          Email del club:{' '}
          <input
            className="f-input"
            name="clubEmail"
            type="email"
            onChange={this.handleChange}
            value={this.state.value}
            clubemail="clubEmail"
          />
          Verificar email del club:{' '}
          <input
            className="f-input"
            name="clubEmail2"
            type="email"
            onChange={this.handleChange}
            value={this.state.value}
            clubemail="clubEmail"
          />
          Contraseña:{' '}
          <input
            className="f-input"
            name="password"
            type="password"
            onChange={this.handleChange}
            value={this.state.value}
            password="password"
          />
          Verificar contraseña:{' '}
          <input
            className="f-input"
            name="password2"
            type="password"
            onChange={this.handleChange}
            value={this.state.value}
            password="password"
          />
          <div className="checkbox-inputs">
            <div>
              Idiomas hablado en el club:{' '}
              {this.clubLanguages.map(lang => (
                <div key={lang.index}>
                  {' '}
                  {lang.value}{' '}
                  <input
                    className="f-input"
                    name="languages"
                    type="checkbox"
                    onChange={this.handleChange}
                    value={lang.value}
                    language={lang.value}
                  />
                </div>
              ))}
            </div>
            <div>
              Comodidades:{' '}
              {this.clubExtras.map(extra => (
                <div key={extra.index}>
                  {' '}
                  {extra.value}{' '}
                  <input
                    className="f-input"
                    name="extras"
                    type="checkbox"
                    onChange={this.handleChange}
                    value={extra.value}
                    club="club"
                  />
                </div>
              ))}
            </div>
          </div>

          Sitio Web:{' '}
          <input
            className="f-input"
            name="website"
            type="text"
            onChange={this.handleChange}
            value={this.state.value}
            club="club"
          />
          Más información:{' '}
          <textarea
            className="f-input"
            rows="4"
            cols="50"
            name="additionalInfo"
            type="text"
            onChange={this.handleChange}
            value={this.state.value}
            club="club"
          />
          <input className="f-input pointer send" type="submit" value="Enviar" onClick={this.handleSubmit} />
        </form>
      </div>
    );
  }
}
export default RegisterClubForm;
