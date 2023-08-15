import React from 'react';
import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const CartBasket = ({ isLoading }) => {
    const { carts } = useSelector((state) => state.cart);

    const buyedProducts = carts?.map((product, index) => (
        <tr className='text-center' key={index}>
            <td>{index + 1}</td>
            <td style={{ width: "20%" }}><img className='img-In-Cart' src={product?.thumbnail} alt="Product Thumbnail" /></td>
            <td>{product?.title}</td>
            <td>{product?.quantity}</td>
            <td>{product?.price * product?.quantity}$</td>
            <td>{Math.trunc(product?.price * product?.quantity - (product?.price * product?.quantity * (product?.discountPercentage / 100)))}$</td>
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
                                    <td colSpan="5">Total Amount:</td>
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