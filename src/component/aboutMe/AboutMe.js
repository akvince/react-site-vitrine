import React from 'react';
import './AboutMe.css';

export default class AboutMe extends React.Component {
  constructor(props){
    super(props);
      this.infos = [
        {id: 'Nom & Prénom : ', key: 'Deflandre Vincent'},
        {id: 'Date de naissance : ', key: '19/07/1990'},
        {id: 'Profession : ', key: 'Développeur front-end'},
        {id: 'Affectation : ', key: 'IT-Room'},
        {id: 'Mission actuelle : ', key: 'La Redoute'},
      ]
  }

  render(){

    return (
      <div id="home">
        <div class="flex flex-around flex-middle">
          <div class="first-content">
            <div class="text-center margin-b">
              <i class="fas fa-exclamation-triangle"></i> Work in progress <i class="fas fa-exclamation-triangle"></i>
            </div>
            <div class="flex">
              <div class="pict">
                <i class="fas fa-user"></i>
              </div>
              <div id="presentation">
                {this.infos.map((info) =>(
                  <div>{info.id} <span>{info.key}</span></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}
