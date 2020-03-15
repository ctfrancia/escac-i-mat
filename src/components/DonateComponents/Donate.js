import React, { Component } from 'react';
const donate = require('../../images/social-care.svg')
const github = require('../../images/github.svg');

class Donate extends Component {


  render() {
    return (
      <div className="donate-container">
        <div className="donate-parent">
          <div className="donate-content">
            <img src={donate} alt="Home" className="help-img" />
            <section>
              <h1>¿Como puede ayudarme?</h1>
              <p>
                <ul>
                  <li>
                    The first would be to consider sponsering the webiste, what does that mean?<br />
                    it means that your website or club would be on the homepage!<br />
                    this is important as the larger the site gets<br />
                    the more funds will be needed to add more features: <br />
                    larger database, add another database, scale for traffic
                  </li>
                  <li>
                    You can also assist by contributing to the site. <br />
                    Fork the repo and make a pull request <br />
                    Pull requests will be reviewed and accepted once tests have been written
                  </li>
                </ul>
              </p>
            </section>
          </div>
          <div className="contact-info">
            <h2>Mi Nombre: Christian Francia</h2>
            <a href="mailto: ajedrezbcn@gmail.com" className="github-link hvr-grow"> Haz click aqui para enviarme un email</a>
            <h2>gitHub:</h2>
            <a href="https://github.com/ctfrancia"><button><img className="github-img" src={github} alt="github" /></button></a>
          </div>
        </div>
      </div>
    );
  }
}
export default Donate;