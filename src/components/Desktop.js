import React, { Component } from 'react';
import './DesktopCSS.css';
import NavBar from './navcomponent';


export default class Desktop extends Component {
  render() {
    return (
      <div className="desktop-container">
          <NavBar />
      </div>
    );
  }
}
