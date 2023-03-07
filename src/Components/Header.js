import React from 'react'
import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


export const Header = () => {
  return (
<Navbar bg="light" >
      <Container>
        <Navbar.Brand href="#home">Finance Tracker</Navbar.Brand>


        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
          <>
       <Link to="/" className='nav-link'> 
        Login
        </Link>

       <Link to="/register" className='nav-link'>
        Sigin up
        </Link>


       <Link to="/" className='nav-link'>
           Log out
        </Link>
       </>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


  )
}
