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
    this.state = {currentMenu: 'home'}
  }

  handleClick(dataId){
    this.setState({
      currentMenu: dataId
    });
    console.log(this)
  }

  render(){

    return (
      <menu id="menu">
        {this.entries.map((entry) =>(
          <div className="panel-button text-center"
            id={entry.dataId}
            key={entry.dataId}
            onClick={this.handleClick.bind(this, entry.dataId)}>
            <div>
              <i className={entry.icon}></i>
            </div>
            <div className="font-small">{entry.name}</div>
          </div>
        ))}
      </menu>
    );
  }

}
