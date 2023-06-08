import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../img/logo.png';
import SearchHeader from './SearchHeader';

function Header({ handleShow, onSearchChange }) {
  return (
    <Navbar expand="lg" className="shadow-sm bg-white rounded " sticky="top">
      <Container fluid="sm pe-4 ps-3">
        <Navbar.Brand href="#home">
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
          <Nav
            className="justify-content-end flex-grow-1 pe-3 "
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link onClick={handleShow}>Расширенный поиск</Nav.Link>
          </Nav>
          <SearchHeader onSearchChange={onSearchChange} />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
