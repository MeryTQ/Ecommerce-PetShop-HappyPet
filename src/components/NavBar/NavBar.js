import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';
import Logo from '../../assets/Logo.png'
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <header>
      <div className='logoNavBar'>
        <Link to='/'><img src={Logo} alt="Logo"/></Link>
      </div>
      <Navbar collapseOnSelect expand="lg" variant="dark" className='navBarContainer'>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className='navBar'>
          <Link to='/'> <Nav>Home</Nav> </Link>
          <Link to='/category/Perros'> <Nav>Perros</Nav> </Link>
          <Link to='/category/Gatos'> <Nav>Gatos</Nav> </Link>
          <Link to='/category/Accesorios'> <Nav>Accesorios</Nav> </Link>
        </Nav>
      </Navbar.Collapse>
      </Navbar>
      <CartWidget/> 
    </header>
  )
}

export default NavBar;