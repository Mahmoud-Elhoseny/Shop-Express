import React from 'react';
import { Table, Container, Alert } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { AiFillDelete } from 'react-icons/ai';
import { removeFromCartBasket } from '../store/cartSlice';
import { toast } from 'react-toastify';
import { BsCartX } from 'react-icons/bs';

const CartBasket = ({ isLoading }) => {
    const { carts } = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const handleRemove = (product) => {
        dispatch(removeFromCartBasket(product));
        toast.success('Deleted Successfully');
    }

    const buyedProducts = carts?.map((product, index) => (
        <tr className='text-center align-middle' key={index}>
            <td>{index + 1}</td>
            <td style={{ width: "120px" }}><img className='img-In-Cart img-fluid rounded' src={product?.thumbnail} alt={product?.title} /></td>
            <td className="product-title">{product?.title}</td>
            <td>{product?.quantity}</td>
            <td className="price">{product?.price * product?.quantity}$</td>
            <td className="discounted-price">{Math.trunc(product?.price * product?.quantity - (product?.price * product?.quantity * (product?.discountPercentage / 100)))}$</td>
            <td>
                <button 
                    className="btn btn-danger btn-sm"
                    onClick={() => handleRemove(product)}
                    aria-label="Remove item"
                >
                    <AiFillDelete className='fs-5' />
                </button>
            </td>
        </tr>
    ));

    const totalAmount = carts.reduce((total, product) => {
        const discountedPrice = Math.trunc(product?.price * product?.quantity - (product?.price * product?.quantity * (product?.discountPercentage / 100)))
        return total + discountedPrice
    }, 0);

    if (isLoading) {
        return (
            <div className="loading-container">
                <div className="loading-circle"></div>
            </div>
        );
    }

    if (!carts?.length) {
        return (
            <Container className="empty-cart-container text-center py-5">
                <BsCartX size={64} className="text-muted mb-3" />
                <h3 className="text-muted">Your cart is empty</h3>
                <p className="text-muted mb-4">Add some products to your cart to see them here!</p>
            </Container>
        );
    }

    return (
        <Container className="cart-container py-4">
            <div className="table-responsive">
                <Table hover className="cart-table">
                    <thead>
                        <tr className='text-center'>
                            <th>#</th>
                            <th>Product Img</th>
                            <th>Product Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>After Discount</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {buyedProducts}
                        <tr className='text-center fw-bold'>
                            <td colSpan="5" className="text-end">Total Amount:</td>
                            <td colSpan="2" className="total-amount">{totalAmount}$</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </Container>
    );
};

export default CartBasket;