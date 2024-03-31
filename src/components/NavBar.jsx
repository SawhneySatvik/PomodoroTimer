import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function NavBar() {
  return (
    <Navbar >
      <Navbar.Brand href="#home">Pomodoro App</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto nav-comp">
          <Nav.Link href="#pomodoroClock"><p>Pomodoro</p></Nav.Link>
          <Nav.Link href="#todoList"><p>TodoList</p></Nav.Link>
          <Nav.Link href="#pomodoroInfromation"><p>About</p></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
