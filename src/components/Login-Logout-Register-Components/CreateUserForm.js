import React from 'react';
import axios from 'axios';;

const inputFields = [
{ id: 1, name: "fName", spanish: "Nombre", type: "text" }, { id: 2, name: "lName", spanish: "Apellido(s)", type: "text" },
{ id: 3, name: "password", spanish: "Contraseña", type: "password" }, { id: 4, name: "password", spanish: "Verificar Contraseña", type: "password" },
{ id: 5, name: "email", spanish: "Email", type: "email" }, { id: 6, name: "email2", spanish: "Verificar Email", type: "email" },
{ id: 7, name: "neighborhood", spanish: "Barrio", type: "text" }, { id: 8, name: "club", spanish: "Club", type: "text" },
];

class HorizontalLabelPositionBelowStepper extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fName: '',
      lName: '',
      password: '',
      password2: '',
      email: '',
      email2: '',
      neighborhood: '',
      club: '',
    };

  }

  handleSumbit = (e) => {
    e.preventDefault();
    const pChecker = (this.state.password === this.state.password2) ? true : false;
    const eChecker = (this.state.email === this.state.email2) ? true : false;
    console.log(pChecker);

    if (!pChecker) alert('please make sure that your passwords match');
    if (!eChecker) alert('please make sure that your emails are the same');
    const value = this.state;

    axios
      .post('http://localhost:3001/CreateNewUser', {
        fName: value.fName,
        lName: value.lName,
        password: value.password,
        email: value.email,
        neighborhood: value.neighborhood,
        club: value.club
      })
      .then((res) => {
        console.log(res)
        alert('Account Created Successfully');
      })
      .catch(err => {
        // properly receives
        console.log('this is the error', err)
        alert('Email exists');
      });
  }
//FIXME: STYLE ALL THIS!!!!!!!!!!
  render() {
    return (
      <div className="ca-container">
        <h1>create account</h1>
        <form>
          <div className="input-container">

          {inputFields.map(input =>
            <div key={input.id} className="input-div">
              {input.spanish}
              <input type={input.type} className="f-input"/>

            </div>
            )}
          </div>
          {/* <div>
            {inputFields.map(input =>
              <p>{input.spanish}</p>
              )}
          </div>
          <div>
            {inputFields.map(input =>
            <input key={input.id} />
            )}
          </div> */}
          <input className="f-input send" type="submit" onSubmit={this.handleSumbit} value="Enviar" />
        </form>
      </div>
    );
  }
}

export default HorizontalLabelPositionBelowStepper