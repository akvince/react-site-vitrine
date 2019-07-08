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
            <i className="far fa-envelope badge badge-no-flip"></i>
            <div>Mail</div>
          </div>
          <a rel="noopener noreferrer" href="https://www.linkedin.com/in/deflandre-vincent-frontend/" target="_blank">
            <div className="linkedin">
                <i className="fab fa-linkedin-in badge badge-no-flip"></i>
                <div>LinkedIn</div>
            </div>
          </a>
          <a rel="noopener noreferrer" href="https://twitter.com/kiravince?lang=fr" target="_blank">
            <div className="twitter text-center">
                <i className="fab fa-twitter badge badge-no-flip"></i>
                <div>Twitter</div>
            </div>
          </a>
        </div>
      </div>
    );
  }

}
