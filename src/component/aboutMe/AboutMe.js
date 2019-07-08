import React from 'react';
import './AboutMe.css';

export default class AboutMe extends React.Component {
  constructor(props){
    super(props);
      this.infos = [
        {id: 'Nom & Prénom : ', test: 'Deflandre Vincent'},
        {id: 'Date de naissance : ', test: '19/07/1990'},
        {id: 'Profession : ', test: 'Développeur front-end'},
        {id: 'Affectation : ', test: 'IT-Room'},
        {id: 'Mission actuelle : ', test: 'La Redoute'},
      ]
  }

  render(){

    return (
      <div id="home">
        <div className="flex flex-around flex-middle">
          <div className="first-content">
            <div className="text-center margin-b">
              <i className="fas fa-exclamation-triangle"></i> Work in progress <i class="fas fa-exclamation-triangle"></i>
            </div>
            <div className="flex">
              <div className="pict">
                <i className="fas fa-user"></i>
              </div>
              <div id="presentation">
                {this.infos.map((info) =>(
                  <div>{info.id} <span>{info.test}</span></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}
