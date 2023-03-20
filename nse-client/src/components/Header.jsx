import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/Header.css';

const Header = () => {
  return (
    <>
      <Navbar expand="lg" className="navbar">
        <Container fluid>
          <Navbar.Brand>
            <img className="nse_logo" src="./images/logo.png" alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />

          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '80px' }}
              navbarScroll
            ></Nav>
            <Nav>
              <div className="d-flex nav-right">
                <div className="search">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </div>
                <div className="bell">
                  <i className="fa-solid fa-bell"></i>
                </div>
                <div className="user">
                  <i className="fa-regular fa-user"></i>
                </div>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
