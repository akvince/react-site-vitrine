import React from 'react';
import ReactDOM from 'react-dom';
import './Menu.css';
import AboutMe from '../aboutMe/AboutMe';
import Skill from '../skill/Skill';
import Project from '../project/Project';
import Contact from '../contact/Contact';
import Demo from '../demo/Demo';
import { Route, Link, NavLink, BrowserRouter as Router } from 'react-router-dom';

export default class Menu extends React.Component {
  constructor(props){
    super(props);
    this.entries = [
      {name: 'accueil', dataId: 'home', icon: 'icon-menu fas fa-home', href: '/'},
      {name: 'compétences', dataId: 'skill', icon: 'icon-menu fas fa-wrench', href: 'skill'},
      {name: 'Projets', dataId: 'project', icon: 'icon-menu fas fa-code-branch', href: 'project'},
      {name: 'Demo', dataId: 'demo', icon: 'icon-menu fas fa-laptop-code', href: 'demo'},
      {name: 'contact', dataId: 'contact', icon: 'icon-menu fas fa-at', href: 'contact'}
    ]
  }

  render(){

    return (
      <Router>
        <Route exact path="/" component={AboutMe} />
        <Route path="/skill" component={Skill} />
        <Route path="/project" component={Project} />
        <Route path="/contact" component={Contact} />
        <Route path="/demo" component={Demo} />
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
