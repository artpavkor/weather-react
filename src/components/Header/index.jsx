import Container from 'react-bootstrap/Container';
import { Col } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import SearchHeader from './SearchHeader';
import logo from '../../img/logo.png';

function Header({ handleShow, onSearchChange }) {
  return (
    <Navbar expand="lg" className="shadow-sm bg-white rounded " sticky="top">
      <Container fluid="sm pe-4 ps-3">
        <Navbar.Brand>
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          {'  '}
          Погода
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="justify-content-end flex-grow-1 pe-3 " navbarScroll>
            <Nav.Link onClick={handleShow}>Расширенный поиск</Nav.Link>
          </Nav>
          <Col>
            <SearchHeader onSearchChange={onSearchChange} />
          </Col>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
