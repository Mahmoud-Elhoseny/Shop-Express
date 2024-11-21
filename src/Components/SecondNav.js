import React, { useState, useEffect } from 'react';
import { Dropdown, Nav, Navbar, Container } from 'react-bootstrap';
import '../Css/SecondNav.css';
import { Link } from 'react-router-dom';

const SecondNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { to: 'categories/smartphones', label: 'Smartphones' },
    { to: 'categories/laptops', label: 'Laptops' },
    { to: 'categories/fragrances', label: 'Fragrances' },
    { to: 'categories/skincare', label: 'Skincare' },
    { to: 'categories/groceries', label: 'Groceries' },
    { to: 'categories/homeDecoration', label: 'Home Decoration' },
{ to: 'categories/furniture', label: 'Furniture' },
    { to: 'categories/tops', label: 'Tops' },
    { to: 'categories/womensdresses', label: "Women's Dresses" },
    { to: 'categories/womensshoes', label: "Women's Shoes" },
    { to: 'categories/mensshirts', label: "Men's Shirts" },
    { to: 'categories/mensshoes', label: "Men's Shoes" },
    { to: 'categories/menswatches', label: "Men's Watches" },
    { to: 'categories/womenswatches', label: "Women's Watches" },
  ];

  // Updated breakpoints for 10, 5, or 0 links
  const getVisibleLinksCount = () => {
    if (window.innerWidth >= 992) return 10; // laptop/desktop (lg and up)
    if (window.innerWidth >= 768) return 5; // tablet (md)
    return 0; // mobile (sm and xs)
  };

  const [visibleCount, setVisibleCount] = useState(getVisibleLinksCount());

  useEffect(() => {
    const handleResize = () => {
      setVisibleCount(getVisibleLinksCount());
    };

    // Initial call
    handleResize();

    // Debounced resize handler
    let timeoutId;
    const debouncedResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleResize, 150);
    };

    window.addEventListener('resize', debouncedResize);
    return () => {
      window.removeEventListener('resize', debouncedResize);
      clearTimeout(timeoutId);
    };
  }, []);

  const visibleLinks = links.slice(0, visibleCount);

  // Handle dropdown toggle
  const handleDropdownToggle = (isOpen) => {
    setIsOpen(isOpen);
  };

  return (
    <Navbar bg="dark" data-bs-theme="dark" className="second-nav">
      <Container fluid>
        <div className="nav-wrapper">
          <Dropdown
            className="categories-dropdown-wrapper"
            show={isOpen}
            onToggle={handleDropdownToggle}
          >
            <Dropdown.Toggle
              variant="success"
              id="dropdown-basic"
              className={`dropdown-togglee ${isOpen ? 'active' : ''}`}
            >
              ALL CATEGORIES
            </Dropdown.Toggle>
            <Dropdown.Menu className="categories-dropdown">
              <div className="categories-grid">
                {links.map((link, index) => (
                  <Link
                    key={index}
                    to={link.to}
                    onClick={() => setIsOpen(false)}
                  >
                    <Dropdown.Item
                      className="category-item"
                      href={`#/action-${visibleLinks.length + index + 1}`}
                    >
                      {link.label}
                    </Dropdown.Item>
                  </Link>
                ))}
              </div>
            </Dropdown.Menu>
          </Dropdown>

          {/* Only show divider and nav if there are visible links */}
          {visibleCount > 0 && (
            <>
              <div className="horizontal-divider"></div>
              <div className="scrollable-nav">
                <Nav className="flex-nowrap">
                  {visibleLinks.map((link, index) => (
                    <Link
                      key={index}
                      to={link.to}
                      className="nav-link text-capitalize"
                    >
                      {link.label}
                    </Link>
                  ))}
                </Nav>
              </div>
            </>
          )}
        </div>
      </Container>
    </Navbar>
  );
};

export default SecondNav;
