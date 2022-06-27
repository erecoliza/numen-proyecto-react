import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/esm/Container';
import { useContext } from 'react';
import { MenuContext } from '../../App';
import { TopMenu } from './menu.styled';

const Menu = () => {
    const menues = useContext(MenuContext);
    return (

        <TopMenu>
            <Navbar bg="white" variant="light">
                <Container fluid>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            {menues.map(menu => (
                                <NavDropdown title={menu.titulo} id="basic-nav-dropdown" key={menu.id}>
                                    {menu.itemMenu.map(item => (
                                        <NavDropdown.Item href={item.href}>{item.itemMenu}</NavDropdown.Item>
                                    ))}
                                </NavDropdown>
                            ))}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </TopMenu>
    )
}
export default Menu;
