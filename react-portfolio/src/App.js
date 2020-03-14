import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      title: "Scott Taylor",
      headerLinks:[
        { title: 'Home', path: '/'},
        { title: 'About', path: '/abou'},
        { title: 'Contact', path: '/contact'},

      ],
      home: {
        title: 'To Be Determined',
        subtitle: 'To Be Determined',
        body: 'To Be Determined' 
      },
      about: {
        title: 'About Me'
      },
      contact: {
        title: 'Lets Talk!'
      }
    }
     
  }

  render(){

    return (
   <div>Hello from React!</div>
      );
  }
  
}

export default App;
