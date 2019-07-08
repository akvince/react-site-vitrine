import React from 'react';
import './Contact.css';

export default class Contact extends React.Component {
  constructor(props){
    super(props);
  }

  handleClick(dataId){
    this.setState({
      currentMenu: dataId
    });
    console.log(this)
  }

  render(){

    return (
      <div id="contact" className="panel part4">
        <h2 className="text-center">Contactez-moi</h2>
        <div className="flex flex-around flex-middle font-large text-center">
          <div className="linkedin">
            <i className="far fa-envelope badge"></i>
            <div>Mail</div>
          </div>
          <div className="linkedin">
            <a rel="noopener noreferrer" href="https://www.linkedin.com/in/deflandre-vincent-frontend/" target="_blank">
              <i className="fab fa-linkedin-in badge"></i>
              <div>LinkedIn</div>
            </a>
          </div>
          <div className="twitter text-center">
            <a rel="noopener noreferrer" href="https://twitter.com/kiravince?lang=fr" target="_blank">
              <i className="fab fa-twitter badge"></i>
              <div>Twitter</div>
            </a>
          </div>
        </div>
      </div>
    );
  }

}
