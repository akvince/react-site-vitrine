import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './Menu.css';
import AboutMe from './PageAboutMe';
import Skill from './PageSkill';
import Project from './PageProject';
import Contact from './PageContact';
import Demo from './PageDemo';
import { Route, Link, NavLink, BrowserRouter as Router } from 'react-router-dom';

export const Menu = ()  => {
  const entries = [
    {name: 'accueil', dataId: 'home', icon: 'icon-menu fas fa-home', href: '/'},
    {name: 'compétences', dataId: 'skill', icon: 'icon-menu fas fa-wrench', href: 'skill'},
    {name: 'Projets', dataId: 'project', icon: 'icon-menu fas fa-code-branch', href: 'project'},
    {name: 'Demo', dataId: 'demo', icon: 'icon-menu fas fa-laptop-code', href: 'demo'},
    {name: 'contact', dataId: 'contact', icon: 'icon-menu fas fa-at', href: 'contact'}
  ];

  const [active, setActive] = useState("home");

  return (
    <Router>
      <Route exact path="/" component={AboutMe} />
      <Route path="/skill" component={Skill} />
      <Route path="/project" component={Project} />
      <Route path={"./contact"} component={Contact} />
      <Route path="/demo" component={Demo} />
      <menu id="menu">
        {entries.map((entry) =>(
          <Link className={"panel-button text-center" + (active !== entry.dataId ? "" : " active")}
            onClick={() => setActive(entry.dataId)}
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