import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';
import Logo from '../../assets/Logo.png'

const NavBar = () => {
  return (
    <header>
      <div className='logoNavBar'>
        <img src={Logo} alt="Logo"/>
      </div>
      <Navbar collapseOnSelect expand="lg" variant="dark" className='navBarContainer'>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className='navBar'>
          <Nav.Link>Home</Nav.Link>
          <Nav.Link>Perros</Nav.Link>
          <Nav.Link>Gatos</Nav.Link> 
          <Nav.Link href="#">Accesorios</Nav.Link> 
        </Nav>
      </Navbar.Collapse>
      </Navbar>
      <CartWidget/> 
    </header>
  )
}

export default NavBar;