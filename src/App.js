import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'shards-react'
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"
import MainPage from './components/structure/MainPage'
import { ProfessionalSummary, PersonalSummary } from './components/structure/Summaries';

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
            <h6 style={{
                color: 'white',
                fontWeight: 'bold'
              }}
            >
              Full Stack Developer
            </h6>
          </h4>
        </NavbarBrand>
        <Nav navbar>
          <NavItem>
            <NavLink active href="/career">
              Career
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink active href="about">
              About Me
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
      <Router>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/career" component={ProfessionalSummary} />
        <Route exact path="/about" component={PersonalSummary} />
      </Router>
    </div>
  );
}

export default App;
