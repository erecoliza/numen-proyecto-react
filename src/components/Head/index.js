import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/esm/Container';
import logo from "../../assets/Bakery-Logo.png";
import search from "../../assets/search.png";
import profile from "../../assets/profile.png";
import ellipse from "../../assets/ellipse.png";
import shopping from "../../assets/shopping.png";
import { Div, Logo, Menu, Search, Profile, Ellipse, Shopping } from "./head.styled";

const Head = () => {
    return (
        <>
            <Div>
                <a href="#"><Logo src={logo} alt="Bakery-Logo" /></a>
                <Menu>
                    <Navbar bg="white" variant="light">
                        <Container fluid>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">                                    
                                    <NavDropdown title="Occasions" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#action/1.1">Occasions</NavDropdown.Item>                                        
                                        <NavDropdown.Item href="#action/1.2">Working From Home</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/1.3">Snack Time</NavDropdown.Item>                                        
                                        <NavDropdown.Item href="#action/1.4">Breakfast</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/1.5">Vegan Life</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/1.6">Baking</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action/1.7">Gifts & Bundles</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/1.8">All Products</NavDropdown.Item>
                                    </NavDropdown>
                                    <NavDropdown title="All Categories" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#action/2.1">Baking</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/2.2">Breakfast</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/2.3">Condiments</NavDropdown.Item>                                        
                                        <NavDropdown.Item href="#action/2.4">Drinks</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/2.5">Heat Things Up</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/2.6">Meal Solutions</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/2.7">Pantry Staples</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/2.8">Simmer Sauces</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/2.9">Snacks & Treats</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/2.10">Spice Up Your Cooking</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/2.11">Sweet Tooth</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/2.12">Wine & Cheese</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/2.13">All Products</NavDropdown.Item>
                                    </NavDropdown>
                                    <NavDropdown title="Gifts & Bundles" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1">Sweet Tooth Special</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">Discover Local</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Baking Box</NavDropdown.Item>                                        
                                        <NavDropdown.Item href="#action/3.4">Spicy Heat Lover's Box</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.5">Snacking Sensations</NavDropdown.Item>
                                    </NavDropdown>                                    
                                    <Nav.Link href="#Brands">Our Brands</Nav.Link>
                                    <Nav.Link href="#About">About Us</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </Menu>
                <a href="#"><Search src={search} alt="Search-Logo" /></a>
                <a href="#"><Profile src={profile} alt="Profile-Logo" /></a>
                <a href="#"><Ellipse src={ellipse} alt="Shopping-Logo" /><Shopping src={shopping} alt="Shopping-Logo" /></a>
            </Div>
        </>
    )
}
export default Head;


