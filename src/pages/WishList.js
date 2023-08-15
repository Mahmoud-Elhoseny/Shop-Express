import React from 'react'
import { useSelector } from 'react-redux'
import CartInWishlist from '../Components/CartInWishlist'

const WishList = ({ isLoading }) => {
    const { WishListProducts } = useSelector((state) => state.cart)
    const data = WishListProducts.map((product, index) => (
        <ul className="cards">
            <CartInWishlist key={index} {...product} />
        </ul>
    ))
    return (
        <>
            {isLoading ? (
                <div className="loading-container">
                    <div className="loading-circle"></div>
                </div>
            ) : (
                <ul className="cards">

                    {data.length > 0 ? data : <h1 className='text-center title-likes'>Please Add Some Products</h1>}
                </ul>
            )}
        </>
    )
}

export default WishList
