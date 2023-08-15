import React, { useState } from 'react';
import '../Css/Cart.css';
import { AiFillStar } from 'react-icons/ai';
import { FaHeart } from 'react-icons/fa';
import { FaRegHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToWishlist } from '../store/cartSlice';
const Cart = (prod) => {
    const [clicked, setClicked] = useState(false);
    const dispatch = useDispatch()
    const handleAddToWishlist = (prod) => {
        dispatch(addToWishlist(prod));
        setClicked(!clicked);
    };

    return (
        <li className="card">
            <div className="imgBox">
                <img src={prod.thumbnail} alt="mouse corsair" className="mouse" />
                <div>
                    {clicked ? (
                        <FaHeart color='black' size={30} className="icon-imgbox" />
                    ) : (
                        <FaRegHeart color='gray' className="icon-imgbox" size={30} onClick={() => handleAddToWishlist(prod)} />
                    )}
                </div>
            </div>
            <div className="contentBox">
                <h3>{prod.title}</h3>
                <h2 className="price">{prod.price} $</h2>
                <p className="rating">{prod.rating}<AiFillStar className='mb-1' color='yellow' size={20} /></p>
                <Link to={'/products/' + prod.id} className="buy">Buy Now</Link>
            </div>
        </li>

    );
};

export default Cart;