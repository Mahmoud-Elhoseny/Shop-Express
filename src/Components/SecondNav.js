import React from 'react'
import { Dropdown, Nav, Navbar } from 'react-bootstrap'
import "../Css/SecondNav.css"
const SecondNav = () => {
    return (
        <>
        <Navbar bg="dark" data-bs-theme="dark">
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    ALL CATEGORIES
                </Dropdown.Toggle>
                <Dropdown.Menu className='dropdown-menuu'>
                    <Dropdown.Item className='pb-3' href="#/action-1">smartphones</Dropdown.Item>
                    <Dropdown.Item className='pb-3' href="#/action-2">laptops</Dropdown.Item>
                    <Dropdown.Item className='pb-3' href="#/action-3">fragrances</Dropdown.Item>
                    <Dropdown.Item className='pb-3' href="#/action-3">skincare</Dropdown.Item>
                    <Dropdown.Item className='pb-3' href="#/action-3">groceries</Dropdown.Item>
                    <Dropdown.Item className='pb-3' href="#/action-3">home-decoration</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <p className='hr d-none d-sm-block'></p>
            <Nav className="me-auto d-none d-lg-flex">
                <Nav.Link className='pe-5' href="#home">smartphones</Nav.Link>
                <Nav.Link className='pe-5' href="#features">laptops</Nav.Link>
                <Nav.Link className='pe-5' href="#pricing">fragrances</Nav.Link>
                <Nav.Link className='pe-5' href="#pricing">skincare</Nav.Link>
                <Nav.Link className='pe-5' href="#pricing">groceries</Nav.Link>
                <Nav.Link className='pe-5' href="#pricing">home-decoration</Nav.Link>
            </Nav>
        </Navbar>
        </>

    )
}

export default SecondNav