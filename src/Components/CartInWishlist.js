import React, { useState } from 'react'
import { AiFillStar } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { AiFillDelete } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { removeFromWishlist } from '../store/cartSlice';
const CartInWishlist = (prod) => {
    const dispatch = useDispatch()
    const handleRemove = (product) => {
        dispatch(removeFromWishlist(product));
    }

    return (
        <li className="card">
            <div className="imgBox">
                <img src={prod.thumbnail} alt="mouse corsair" className="mouse" />
                <div>
                    <AiFillDelete color='red' className="icon-imgbox" size={30} onClick={() => handleRemove(prod)} />
                </div>
            </div>
            <div className="contentBox">
                <h3>{prod.title}</h3>
                <h2 className="price">{prod.price} $</h2>
                <p className="rating">{prod.rating}<AiFillStar className='mb-1' color='yellow' size={20} /></p>
                <Link to={'/products/' + prod.id} className="buy">Buy Now</Link>
            </div>
        </li>
    )
}

export default CartInWishlist
