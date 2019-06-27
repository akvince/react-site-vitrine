import React from 'react';
import ReactDOM from 'react-dom';
import './Menu.css';
import AboutMe from '../aboutMe/AboutMe';
import Skill from '../skill/skill';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';



export default class Menu extends React.Component {
  constructor(props){
    super(props);
    this.entries = [
      {name: 'acceuil', dataId: 'home', icon: 'icon-menu fas fa-home', href: '/'},
      {name: 'compétences', dataId: 'skill', icon: 'icon-menu fas fa-wrench', href: 'skill'},
      {name: 'Projets', dataId: 'project', icon: 'icon-menu fas fa-code-branch'},
      {name: 'Demo', dataId: 'demo', icon: 'icon-menu fas fa-laptop-code'},
      {name: 'contact', dataId: 'contact', icon: 'icon-menu fas fa-at', href: 'contact'}
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
      <Router>
      <div>
        <Route path="/skill" component={Skill} />
        <Route path="/contact" component={AboutMe} />
      </div>
        <menu id="menu">
          {this.entries.map((entry) =>(
            <Link className="panel-button text-center"
              to={entry.href}
              id={entry.dataId}
              key={entry.dataId}>
              <div>
                <i className={entry.icon}></i>
              </div>
              <div className="font-small">{entry.name}</div>
            </Link>
          ))}
        </menu>
      </Router>
    );
  }

}
