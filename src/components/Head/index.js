import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/esm/Container';
import logo from "../../assets/Bakery-Logo.png";
import { Div, Image, Menu } from "./head.styled";

const Head = () => {
    return (
        <>
            <Div>
                <Image src={logo} alt="Bakery-Logo" />
                <Menu>
                    <Navbar bg="light" variant="light">
                        <Container fluid>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">                                    
                                    <NavDropdown title="Occasions" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1">Occasions</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">Working From Home</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Snack Time</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action/3.4">Breakfast</NavDropdown.Item>
                                    </NavDropdown>
                                    <NavDropdown title="All Categories" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1">Baking</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">Breakfast</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Condiments</NavDropdown.Item>                                        
                                        <NavDropdown.Item href="#action/3.4">Drinks</NavDropdown.Item>
                                    </NavDropdown>
                                    <Nav.Link href="#Brands">Our Brands</Nav.Link>
                                    <Nav.Link href="#About">About Us</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </Menu>
            </Div>
        </>
    )
}
export default Head;


