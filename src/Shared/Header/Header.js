import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const Header = () => {
  return (
    <Navbar
      collapseOnSelect
      expand='lg'
      bg='light'
      variant='light'
      sticky='top'>
      <Container>
        <Navbar.Brand href='#home'>Sun Fyre News</Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link href='#features'>All News</Nav.Link>
            <Nav.Link href='#pricing'>Breaking News</Nav.Link>
            <NavDropdown title='All Categories' id='collasible-nav-dropdown'>
              <NavDropdown.Item href='#action/3.1'>
                Breaking News
              </NavDropdown.Item>

              <NavDropdown.Item href='#action/3.2'>
                Regular News
              </NavDropdown.Item>

              <NavDropdown.Item href='#action/3.3'>
                International News
              </NavDropdown.Item>

              <NavDropdown.Item href='#action/3.4'>
                Entertainment
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href='#deets'>More deets</Nav.Link>
            <Nav.Link eventKey={2} href='#memes'>
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
