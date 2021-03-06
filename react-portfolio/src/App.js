import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Container from 'react-bootstrap/container';
import NavBar from 'react-bootstrap/NavBar';
import Nav from 'react-bootstrap/Nav';


import './App.css';
import Footer from './Components/Footer';
import HomePage from './Pages/home';
import AboutPage from './Pages/about';
import ContactPage from './Pages/contact';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "Scott Taylor",
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Contact', path: '/contact' },

      ],
      home: {
        title: 'Untapped Creativity',
        subtitle: 'Projects to change the world',
        text: 'To Be Determined',
        body: 'Welcome to my page'
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

          <Route path="/" exact render={()=><HomePage title={this.state.home.title} subtitle={this.state.home.subtitle} text={this.state.home.body} /> } />
          <Route path="/about" exact render={()=><AboutPage title={this.state.about.title} /> } />
          <Route path="/contact" exact render={()=><ContactPage title={this.state.contact.title} /> } />
          <Footer/>
        </Container>

      </Router>
    )
  }

}

export default App;
