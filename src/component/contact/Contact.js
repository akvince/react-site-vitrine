import React from 'react';
import './Contact.css';

export default class Contact extends React.Component {
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
      <div class="Contact">cotact me</div>
    );
  }

}
