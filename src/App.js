import React from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './component/menu/Menu';

export default class App extends React.Component {
  constructor(props){
    super(props);
  }

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
