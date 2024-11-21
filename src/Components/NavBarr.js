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
                    <Link to='/'><Navbar.Brand><img src={logo} alt='logo' className="navbar-logo" /></Navbar.Brand></Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"  />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto align-items-center">
                            <img src={egyptLogo} alt='logo' className="egypt-logo" />
                            <NavDropdown title="Deliver to" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#">Home</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        
                        <Nav className="w-100 my-2 my-lg-0">
                            <Form className="w-100">
                                <Form.Control
                                    type="text"
                                    placeholder="What are you looking for?"
                                    className="search-input"
                                    onChange={(e) => handleSearch(e.target.value)}
                                />
                            </Form>
                        </Nav>

                        <Nav className="ms-auto align-items-center">
                            <div className="nav-links-container">
                                {isLoggedIn ? (
                                    <>
                                        <Link className='nav-link' to="/myprofile">
                                            <span>Ahlan {Name}!</span>
                                        </Link>
                                        <Link className='nav-link' to='/' onClick={() => dispatch(logIn())}>
                                            <span>LogOut</span>
                                            <BiSolidLogOut size={23} />
                                        </Link>
                                    </>
                                ) : (
                                    <Link className='nav-link' to='/login'>
                                        <span>LogIn</span>
                                        <BiLogIn size={23} />
                                    </Link>
                                )}
                                
                                <div className='heart-icon-div'>
                                    <Link to='/wishlist' className='nav-link'>
                                        <span>Wishlist</span>
                                        <AiOutlineHeart size={23} />
                                        {WishListProducts.length > 0 && <span className="count-badge">{WishListProducts.length}</span>}
                                    </Link>
                                </div>
                                
                                <div className='cart-icon-div'>
                                    <Link className='nav-link' to="/CartBasket">
                                        <span>Cart</span>
                                        <AiOutlineShoppingCart size={23} />
                                        {carts.length > 0 && <span className="count-badge">{carts.length}</span>}
                                    </Link>
                                </div>
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBarr