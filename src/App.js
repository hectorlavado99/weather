import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherDaily from './WeatherDaily';
import WeatherDailyDetail from './WeatherDailyDetail';
import WeatherHourly from './WeatherHourly';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';



const App = () => (
  <Router>
    <Navigation />
    <Content />
  </Router>
);

const Navigation = () => (
  <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home"><img alt="foto_tiempo" src="https://www.accuweather.com/images/weathericons/2.svg" width="70px"></img></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#link"><Link to="/">Inicio</Link></Nav.Link>
      <NavDropdown title="Tiempo" id="basic-nav-dropdown">
        <NavDropdown.Item ><Link to="/daily">Ver resumen diario</Link></NavDropdown.Item>
        <NavDropdown.Item ><Link to="/detail">Ver tiempo por días</Link></NavDropdown.Item>
        <NavDropdown.Item ><Link to="/detailhourly">Ver tiempo por horas</Link></NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
</Navbar>

);

const Content = () => (
  <Routes>
    <Route path="/daily" element={<WeatherDaily />} />
    <Route path="/detail" element={<WeatherDailyDetail />} />
    <Route path="/detailhourly" element={<WeatherHourly/>} />
  </Routes>
);

export default App;
