import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
      
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand >T Saikumar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="https://github.com/tsai143">GitHub</Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/t-sai-kumar-16ba61239/">LinkedIn</Nav.Link>
            <Nav.Link href="mailto:tsaikumarsai1999@gmail.com">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;