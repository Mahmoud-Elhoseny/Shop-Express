import React from 'react';
import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { AiFillDelete } from 'react-icons/ai';
import { removeFromCartBasket } from '../store/cartSlice';

const CartBasket = ({ isLoading }) => {
    const { carts } = useSelector((state) => state.cart);
    const dispatch = useDispatch()
    const handleRemove = (product) => {
        dispatch(removeFromCartBasket(product))
    }
    const buyedProducts = carts?.map((product, index) => (
        <tr className='text-center' key={index}>
            <td>{index + 1}</td>
            <td style={{ width: "20%" }}><img className='img-In-Cart' src={product?.thumbnail} alt="Product Thumbnail" /></td>
            <td>{product?.title}</td>
            <td>{product?.quantity}</td>
            <td>{product?.price * product?.quantity}$</td>
            <td>{Math.trunc(product?.price * product?.quantity - (product?.price * product?.quantity * (product?.discountPercentage / 100)))}$</td>
            <td><AiFillDelete style={{ cursor: "pointer" }} color='red' className='fs-4' onClick={()=> handleRemove(product)} /></td>
        </tr>
    ));
    const totalAmount = carts.reduce((total, product) => {
        const discountedPrice = Math.trunc(product?.price * product?.quantity - (product?.price * product?.quantity * (product?.discountPercentage / 100)))
        return total + discountedPrice
    }, 0)
    return (
        <>
            {isLoading ? (
                <div className="loading-container">
                    <div className="loading-circle"></div>
                </div>
            ) : (
                <>
                    <Table hover>
                        <thead>
                            <tr className='text-center' >
                                <th>#</th>
                                <th>Product Img</th>
                                <th>Product Name</th>
                                <th>Product Quantity</th>
                                <th>Product Price</th>
                                <th>Product After Discount</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {buyedProducts?.length > 0 ? buyedProducts : (
                                <tr>
                                    <td colSpan="6" className='text-center'>Please Add Some Products</td>
                                </tr>
                            )}
                            {buyedProducts?.length > 0 && (
                                <tr className='text-center fw-bold'>
                                    <td colSpan="6">Total Amount:</td>
                                    <td>{totalAmount}$</td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                    <p className='title-likes'></p>
                </>
            )}
        </>
    );
};

export default CartBasket;