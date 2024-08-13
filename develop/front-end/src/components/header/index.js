import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './header.css'
import Account from './account';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='custom-header'>
      <Container>
        <Navbar expand="lg" >
          <Container fluid>
            <Link to="/">
              <img
                src="img/logoCelsia.png"
                width="100px"
                height="autopx"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Link>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll" className='mx-3'>
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
              </Nav>

            </Navbar.Collapse>
            <Account></Account>
          </Container>
        </Navbar>
      </Container >
    </div>
  );
}

export default Header;