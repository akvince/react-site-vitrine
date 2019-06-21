import React from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './component/menu/Menu'

export default class App extends React.Component {
  constructor(props){
    super(props);
    console.log(props);
  }

  handleState(){
    console.log(this);
    if(this.state){
      return this.state.currentMenu;
    }else{
      return 'home';
    }
  }

  render(){

    return (
      <div className="App">
        <header className="App-header">
        </header>
        <Menu/>
        <section>
          hello {this.handleState()}
        </section>
      </div>
    );
  }

}
