import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useDispatch, useSelector } from 'react-redux';
import "../Css/navbar.css"
import logo from '../Imgs/logo.png'
import egyptLogo from '../Imgs/egyptlogo.png'
import { Col, Form, Row } from 'react-bootstrap';
import { AiOutlineHeart } from 'react-icons/ai';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BiLogIn } from 'react-icons/bi';
import { BiSolidLogOut } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { logIn } from '../store/authSlice';


const NavBarr = ({ handleSearch }) => {
    const dispatch = useDispatch()
    const { isLoggedIn, Name } = useSelector((state) => state.auth)
    const { WishListProducts, carts } = useSelector((state) => state.cart)
    return (
        <>
            <Navbar expand="lg" className="navbar">
                <Container>
                    <Link to='/'><Navbar.Brand ><img src={logo} alt='logo' width="150" /></Navbar.Brand></Link>
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
                                    <Col xs="auto" >
                                        <Form.Control
                                            type="text"
                                            placeholder="What are you looking for?"
                                            className=" mr-sm-2 colForm"
                                            onChange={(e) => handleSearch(e.target.value)}
                                        />
                                    </Col>
                                </Row>
                            </Form>
                        </Nav>
                    </Navbar.Collapse>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            {isLoggedIn ? <Link className='nav-link' to="/myprofile">Ahlan {Name}!</Link>
                                :
                                <Link className='nav-link' to='/login'>LogIn<BiLogIn size={23} /></Link>}
                            {isLoggedIn ? <Link className='nav-link' to='/' onClick={() => dispatch(logIn())}>LogOut <BiSolidLogOut size={23} /></Link> : ""}
                            <p className='hr d-none d-md-none d-lg-block' ></p>
                            <div className='heart-icon-div'>
                                <Link to='/wishlist' className='nav-link'>Wishlist<AiOutlineHeart size={23} />{WishListProducts.length === 0 ? <span></span>
                                    : <span>{WishListProducts.length}</span>
                                }</Link>
                            </div>
                            <p className='hr d-none d-md-none d-lg-block'></p>
                            <div className='cart-icon-div'>
                                <Link className='nav-link' to="/CartBasket">Cart <AiOutlineShoppingCart size={23} />
                                    {carts.length === 0 ? <span></span>
                                        : <span>{carts.length}</span>
                                    }
                                </Link>
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </>
    );
}


export default NavBarr