import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Button } from 'shards-react'
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"
import GitHubIcon from '@material-ui/icons/GitHub'
import EmailIcon from '@material-ui/icons/Email'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import MainPage from './components/structure/MainPage'
import Projects from './components/structure/Projects'
import { ProfessionalSummary, PersonalSummary } from './components/structure/Summaries';
import { IconButton } from '@material-ui/core';

function App() {
  return (
    <div>
      <Navbar type="dark" theme="primary" expand="md">
        <NavbarBrand href="/">
          <h4 style={{
                color: 'white',
                fontWeight: 'bold'
              }}
          >
            Kevin Bagnall
            {/* <p style={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: 18
              }}
            >
              A Full Stack Developer
            </p> */}
          </h4>
        </NavbarBrand>
        <Nav navbar>
          <NavItem>
            <NavLink active href="/career">
              Career
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink active href="/projects">
              Projects
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink active href="/about">
              About
            </NavLink>
          </NavItem>
          <NavItem>
            <Button href="https://github.com/bubbagump2020">
              <GitHubIcon color="inherit"/>
            </Button>
          </NavItem>
          <NavItem>
            <Button href="http://linkedin.com/in/kevin-bagnall">
              <LinkedInIcon />
            </Button>
          </NavItem>
          <NavItem>
            <Button href="mailto:bubbagump2020@gmail.com">
              <EmailIcon />
            </Button>
          </NavItem>
        </Nav>
      </Navbar>
      <Router>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/career" component={ProfessionalSummary} />
        <Route exact path="/about" component={PersonalSummary} />
        <Route exact path="/projects" component={Projects} />
      </Router>
    </div>
  );
}

export default App;
