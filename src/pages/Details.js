import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getProduct } from '../store/productSlice';
import '../Css/details.css';
import { AiFillStar } from 'react-icons/ai';
import { addToCart } from '../store/cartSlice';
import { toast } from 'react-toastify';

const Details = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const product = useSelector((state) => state.product);
    const { isLoading } = useSelector((state) => state.product);
    const prod = product.products;
    const [mainImage, setMainImage] = useState(prod?.images ? prod.images[0] : '');
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        dispatch(getProduct(id));
    }, [dispatch, id]);
    const increaseQuantity = () => {
        setQuantity((prevQty) => {
            let tempQty = prevQty + 1;
            if (tempQty > prod?.stock) tempQty = prod?.stock
            return tempQty
        })
    };

    const decreaseQuantity = () => {
        setQuantity((prevQty) => {
            let tempQty = prevQty - 1;
            if (tempQty < 1) tempQty = 1
            return tempQty
        })
    };

    const handleMainImageClick = (image) => {
        setMainImage(image);
    };
    const handleBuy = (prod) => {
        dispatch(addToCart({ ...prod, quantity }));
        toast.success('Added to Cart!')
    };
    return (
        <div className="details">
            {isLoading ? (
                <div className="loading-container">
                    <div className="loading-circle"></div>
                </div>
            ) : (
                <>
                    <div className="d-flex">
                        <div className="all-prods">
                            {prod?.images &&
                                prod?.images?.map((image, index) => (
                                    <div key={index}>
                                        <img
                                            src={image}
                                            alt={`Product view ${index + 1}`}
                                            onClick={() => handleMainImageClick(image)}
                                            className={mainImage === image ? 'active' : ''}
                                        />
                                    </div>
                                ))}
                        </div>
                        <div className="thumbnail-div">
                            <img 
                                src={mainImage ? mainImage : prod?.thumbnail} 
                                alt={prod?.title}
                            />
                        </div>
                        <div className="thumb-content">
                            <div className="text-center">
                                <h2>{prod?.brand}</h2>
                                <h2>{prod?.title}</h2>
                            </div>
                            <div className="content-prod">
                                <p>{prod?.description}</p>
                                <div className="justify-content-between">
                                    <div className="rating-display">
                                        <span>Rating: {prod?.rating}</span>
                                        <AiFillStar className="star-icon" size={20} />
                                    </div>
                                    <p>Stock: {prod?.stock}</p>
                                </div>
                                <p className="price-tag text-center">
                                    ${prod?.price}
                                </p>
                            </div>
                            <div className="quantity-buttons text-center">
                                <h5>Quantity</h5>
                                <button onClick={decreaseQuantity}>−</button>
                                <span>{quantity}</span>
                                <button onClick={increaseQuantity}>+</button>
                            </div>
                            <div className="text-center">
                                <button 
                                    className="addToCart" 
                                    onClick={() => handleBuy(prod)}
                                >
                                    Add To Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Details;