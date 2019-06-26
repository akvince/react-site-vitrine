import React from 'react';
import './AboutMe.css';

export default class AboutMe extends React.Component {
  constructor(props){
    super(props);
  }

  handleClick(dataId){
    this.setState({
      currentMenu: dataId
    });
    console.log(this)
  }

  render(){

    return (
      <div class="AboutMe"></div>
    );
  }

}
