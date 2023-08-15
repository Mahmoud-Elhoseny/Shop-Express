import React from 'react';
import { Dropdown, Nav, Navbar } from 'react-bootstrap';
import '../Css/SecondNav.css';
import { Link } from 'react-router-dom';

const SecondNav = () => {
    const links = [
        { to: 'categories/smartphones', label: 'smartphones' },
        { to: 'categories/laptops', label: 'laptops' },
        { to: 'categories/fragrances', label: 'fragrances' },
        { to: 'categories/skincare', label: 'skincare' },
        { to: 'categories/groceries', label: 'groceries' },
        { to: 'categories/homedecoration', label: 'home-decoration' },
        { to: 'categories/furniture', label: 'furniture' },
        { to: 'categories/tops', label: 'tops' },
        { to: 'categories/womensdresses', label: 'womens-dresses' },
        { to: 'categories/womensshoes', label: 'womens-shoes' },
        { to: 'categories/mensshirts', label: 'mens-shirts' },
        { to: 'categories/mensshoes', label: 'mens-shoes' },
        { to: 'categories/menswatches', label: 'mens-watches' },
        { to: 'categories/womenswatches', label: 'womens-watches' },
        { to: 'categories/womensbags', label: 'womens-bags' },
        { to: 'categories/womensjewellery', label: 'womens-jewellery' },
        { to: 'categories/sunglasses', label: 'sunglasses' },
        { to: 'categories/automotive', label: 'automotive' },
        { to: 'categories/motorcycle', label: 'motorcycle' },
        { to: 'categories/lighting', label: 'lighting' },
    ];

    const visibleLinks = links.slice(0, 11);

    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic" className="dropdown-togglee">
                        ALL CATEGORIES
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        {links.map((link, index) => (
                            <Link key={index} to={link.to}>
                                <Dropdown.Item className="pb-3" href={`#/action-${visibleLinks.length + index + 1}`}>
                                    {link.label}
                                </Dropdown.Item>
                            </Link>
                        ))}
                    </Dropdown.Menu>
                </Dropdown>
                <p className="hr d-none d-md-none d-lg-block"></p>
                <Nav className="me-auto d-none d-lg-flex">
                    {visibleLinks.map((link, index) => (
                        <Link key={index} to={link.to} className='nav-link'>
                            {link.label}
                        </Link>
                    ))}
                </Nav>
            </Navbar>
        </>
    );
};

export default SecondNav;