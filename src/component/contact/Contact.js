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
      <div id="contact" class="panel part4">
        <h2 class="text-center">Contactez-moi</h2>
        <div class="flex flex-around flex-middle font-large text-center">
          <div class="linkedin">
            <i class="far fa-envelope badge"></i>
            <div>Mail</div>
          </div>
          <div class="linkedin">
            <a rel="noopener noreferrer" href="https://www.linkedin.com/in/deflandre-vincent-frontend/" target="_blank">
              <i class="fab fa-linkedin-in badge"></i>
              <div>LinkedIn</div>
            </a>
          </div>
          <div class="twitter text-center">
            <a rel="noopener noreferrer" href="https://twitter.com/kiravince?lang=fr" target="_blank">
              <i class="fab fa-twitter badge"></i>
              <div>Twitter</div>
            </a>
          </div>
        </div>
      </div>
    );
  }

}
