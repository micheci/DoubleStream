import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./Navbar.css"

function navbar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand className="Nav" href="#home">Navbar</Navbar.Brand>
          <Nav className=" Login">
            <Nav.Link href="login">Log in</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
           
          </Nav>
        </Container>
      </Navbar>
      <br />
     

      
    </>
  );
}

export default navbar;