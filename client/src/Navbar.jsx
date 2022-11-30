import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import navbar from 'react-bootstrap/Navbar';
import { useAuthContext } from './hooks/useAuthContext';
import { useLogout } from './hooks/useLogout';
import "./Navbar.css"
import {CiStreamOn} from 'react-icons/ci'



const Navbar=() =>{
  const{logout}=useLogout()
  const {user}=useAuthContext()

  const handleClick=()=>{
    logout()
  }
  return (
    <>
    
   {/* <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        
      </Navbar> */}

      <nav class="navbar navbar-dark bg-dark flex">  
          <navbar.Brand className="Nav" href="#home"><CiStreamOn/> Double Stream</navbar.Brand>
            {user && (
              <div className='signlog '>
                <span className="email">{user.userName}</span>
                <button className="logout" onClick={handleClick}>Log out</button>
              </div>
            )}

            {!user && (
            <div className='signlog '>
              <Nav.Link className="link" href="Signup">Sign up</Nav.Link>
              <Nav.Link className="link" href="login">Log in</Nav.Link>
                {/* <button onClick={handleClick}>Log out</button> */}
              {/* <Nav.Link href="#features">Features</Nav.Link> */}
            </div>
            )}
          
          
      </nav>
      <br />
     

      
    </>
  );
}

export default Navbar;

