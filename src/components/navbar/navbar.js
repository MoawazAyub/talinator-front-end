import { Navbar } from 'react-bootstrap'
import NavbarBrand from './NavbarBrand'

function AppNavbar() {
  return (
    <Navbar bg="primary">
      <Navbar.Brand> <NavbarBrand  className="text-white px-3"/> </Navbar.Brand>
    </Navbar>
  );
}

export default AppNavbar;
