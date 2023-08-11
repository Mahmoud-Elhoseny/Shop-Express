import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "../Css/navbar.css"
import logo from '../Imgs/logo.png'
import egyptLogo from '../Imgs/egyptlogo.png'
import { Col, Form, Row } from 'react-bootstrap';
import { AiOutlineHeart } from 'react-icons/ai';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const NavBarr = () => {
    return (
        <>
        <Navbar expand="lg" className="navbar">
        <Container>
        <Navbar.Brand href="/all-products"><img src={logo} alt='logo' width="150" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <img src={egyptLogo} alt='logo' width="80" height="40" />
                            <NavDropdown title="Deliver to" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#">Home</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Form>
                                <Row>
                                    <Col xs="auto">
                                        <Form.Control
                                            type="text"
                                            placeholder="What are you looking for?"
                                            className=" mr-sm-2"
                                        />
                                    </Col>
                                </Row>
                            </Form>
                        </Nav>
                    </Navbar.Collapse>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#home">
                                    Ahlan UserName! <span className='myacc'>my account</span>
                            </Nav.Link>
                            <p className='hr d-none d-sm-block' ></p>
                            <div className='heart-icon-div'>
                                <Nav.Link href="#link">Wishlist  <AiOutlineHeart className='heart-icon' size={23} /><span>0</span></Nav.Link>
                            </div>
                            <p className='hr d-none d-sm-block'></p>
                            <Nav.Link href="#link">Cart <AiOutlineShoppingCart size={23} /></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </>
    );
}


export default NavBarr