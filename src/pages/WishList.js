import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import CartInWishlist from '../Components/CartInWishlist'

const WishList = ({ isLoading }) => {
    const { WishListProducts } = useSelector((state) => state.cart)
    const data = WishListProducts.map((product, index) => (
        <ul className="cards" key={index}>
            <CartInWishlist {...product} />
        </ul>
    ))
    return (
        <>
            {isLoading ? (
                <div className="loading-container">
                    <div className="loading-circle"></div>
                </div>
            ) : WishListProducts.length > 0 ? (
                data
            ) : (
                <div className="empty-wishlist">
                    <div className="empty-wishlist-content">
                        <i className="far fa-heart empty-wishlist-icon"></i>
                        <h2>Your wishlist is empty</h2>
                        <p>Add items that you like to your wishlist. Review them anytime and easily move them to the cart.</p>
                        <Link to="/" className="start-shopping-btn">
                            Start Shopping
                        </Link>
                    </div>
                </div>
            )}
        </>
    )
}

export default WishList