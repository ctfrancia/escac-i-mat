import React, { Component } from 'react';
import axios from 'axios';
import NewUserForm from './CreateUserForm';

class CreateNewUser extends Component {
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
      club: ''
    };
  }
  handleSubmit = e => {
    e.preventDefault();
    // const pChecker =
    //   this.state.password === this.state.password2 ? true : false;
    // const eChecker = this.state.email === this.state.email2 ? true : false;
    // console.log(pChecker);

    // if (!pChecker) alert('please make sure that your passwords match');
    // if (!eChecker) alert('please make sure that your emails are the same');
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
    console.log(e.target.name);
    let value = e.target.value;
    let name = e.target.name;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="container">
        <NewUserForm />
      </div>
    );
  }
}
export default CreateNewUser;
