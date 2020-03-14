import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Container from 'react-bootstrap/container';
import NavBar from 'react-bootstrap/NavBar';
import Nav from 'react-bootstrap/Nav';


import './App.css';
import Footer from './Components/Footer'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "Scott Taylor",
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/abou' },
        { title: 'Contact', path: '/contact' },

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

  render() {

    return (

      <Router>
        <Container className="p-0" fluid={true}>
          <NavBar className="border-bottom" bg="trans parent" expand="lg">
            <NavBar.Brand>Scott Taylor</NavBar.Brand>


            <NavBar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <NavBar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home </Link>
                <Link className="nav-link" to="/about">About </Link>
                <Link className="nav-link" to="/contact">Contact </Link>
              </Nav>
            </NavBar.Collapse>
          </NavBar>

          <Footer/>
        </Container>

      </Router>
    )
  }

}

export default App;
