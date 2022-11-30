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
      <nav class="navbar navbar-dark bg-dark ">  
        <div class="container flex">
          <navbar.Brand className="Nav" href="#home">Navbar</navbar.Brand>
            {user && (
              <div>
                <span>{user.userName}</span>
                <button onClick={handleClick}>Log out</button>
              </div>
            )}

            {!user && (
            <div className='signlog'>
              <Nav.Link href="Signup">Sign up</Nav.Link>
              <Nav.Link href="login">Log in</Nav.Link>
                {/* <button onClick={handleClick}>Log out</button> */}
              {/* <Nav.Link href="#features">Features</Nav.Link> */}
            </div>
            )}
          
        </div>
      </nav>
      <br />
     

      
    </>
  );
}

export default Navbar;

