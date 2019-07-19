import React from 'react';
import './App.css';
import {Menu} from './component/menu/Menu';

export default class App extends React.Component {
  render(){

    return (
      <div className="App">
        <header className="App-header">
        </header>
        <Menu/>
        <section id="section">
        </section>
      </div>
    );
  }

}
