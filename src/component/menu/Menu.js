import React from 'react';
import './Menu.css';

export default class Menu extends React.Component {
  constructor(props){
    super(props);
    this.entries = [
      {name: 'acceuil', dataId: 'home', icon: 'icon-menu fas fa-home'},
      {name: 'compétences', dataId: 'skill', icon: 'icon-menu fas fa-wrench'},
      {name: 'Projets', dataId: 'project', icon: 'icon-menu fas fa-code-branch'},
      {name: 'Demo', dataId: 'demo', icon: 'icon-menu fas fa-laptop-code'},
      {name: 'contact', dataId: 'contact', icon: 'icon-menu fas fa-at'}
    ]
  }

  render(){

    return (
      <menu id="menu">
        {this.entries.map((entry) =>(
          <div class="panel-button text-center" id={entry.dataId}>
            <div>
              <i class={entry.icon}></i>
            </div>
            <div class="font-small">{entry.name}</div>
          </div>
        ))}
      </menu>
    );
  }

}
