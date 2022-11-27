import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import navbar from 'react-bootstrap/Navbar';
import { useAuthContext } from './hooks/useAuthContext';
import { useLogout } from './hooks/useLogout';
import "./Navbar.css"


const Navbar=() =>{
  const{logout}=useLogout()
  const {user}=useAuthContext()

  const handleClick=()=>{
    logout()
  }
  return (
    <>
      <navbar bg="dark" variant="dark">
        <Container>
          <navbar.Brand className="Nav" href="#home">Navbar</navbar.Brand>
          <nav className=" Login">
            
          {user && (
            <div>
            
              <span>{user.userName}</span>
              <button onClick={handleClick}>Log out</button>
            </div>
          )}

{!user && (
          <div>
            <Nav.Link href="Signup">Sign up</Nav.Link>
            <Nav.Link href="login">Log in</Nav.Link>
              {/* <button onClick={handleClick}>Log out</button> */}
            {/* <Nav.Link href="#features">Features</Nav.Link> */}
           </div>
           )}
          </nav>
        </Container>
      </navbar>
      <br />
     

      
    </>
  );
}

export default Navbar;

