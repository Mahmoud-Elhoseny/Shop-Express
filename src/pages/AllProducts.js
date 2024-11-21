import React, { useEffect } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import carousel1 from '../Imgs/carousel1.png'
import carousel2 from '../Imgs/carousel2.png'
import carousel3 from '../Imgs/carousel3.png'
import box1 from '../Imgs/box1.png'
import box2 from '../Imgs/box2.png'
import box3 from '../Imgs/box3.png'
import box4 from '../Imgs/box4.png'
import box5 from '../Imgs/box5.png'
import box6 from '../Imgs/box6.png'
import box7 from '../Imgs/box7.png'
import box8 from '../Imgs/box8.png'
import box9 from '../Imgs/box9.png'
import box10 from '../Imgs/box10.png'
import "../Css/allProducts.css"
import Cart from '../Components/Cart'
import { fetchProducts } from '../store/productSlice';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
const AllProducts = ({ product, isLoading, query }) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])

    const limitedData = product?.slice(0, 10)
    const filteredData = product?.length > 0 ? product?.filter((prod) => {
        if (query === '') {
            return prod
        } else if (prod.title.toLowerCase().includes(query.toLowerCase())) {
            return prod;
        }
        return null;
    })?.map((prod, index) => (
        <Cart key={prod.id || index} {...prod} />
    )) : null

    const data = limitedData?.length > 0 
        ? limitedData?.map((prod, index) => (
            <Cart key={prod.id || index} {...prod} />
          ))
        : null
    
    if (isLoading) {
        return (
            <div className="loading-container">
                <div className="loading-circle"></div>
            </div>
        )
    }

    return (
        <div className='products'>
            <Carousel fade>
                <Carousel.Item>
                    <Link to='/categories/automotive'>
                        <img src={carousel1} alt="Automotive deals" />
                    </Link>
                </Carousel.Item>
                <Carousel.Item>
                    <Link to='/categories/laptops'>
                        <img src={carousel2} alt="Laptop deals" />
                    </Link>
                </Carousel.Item>
                <Carousel.Item>
                    <Link to='/categories/womensdresses'>
                        <img src={carousel3} alt="Women's fashion" />
                    </Link>
                </Carousel.Item>
            </Carousel>

            <div className='features-container'>
                <div className='big-box'>
                    <h2>More reasons to shop</h2>
                    <div className='box-grid'>
                        <img src={box5} alt='Special offer 1' />
                        <img src={box6} alt='Special offer 2' />
                        <img src={box7} alt='Special offer 3' />
                        <img src={box8} alt='Special offer 4' />
                    </div>
                </div>

                <div className='big-box'>
                    <h2>Weekend deals</h2>
                    <div className='box-grid'>
                        <img src={box1} alt='Weekend deal 1' />
                        <img src={box2} alt='Weekend deal 2' />
                        <img src={box3} alt='Weekend deal 3' />
                        <img src={box4} alt='Weekend deal 4' />
                    </div>
                </div>

                <div className='big-box'>
                    <h2>In focus</h2>
                    <div className='box-grid'>
                        <img src={box9} alt='Featured item 1' style={{gridColumn: '1 / -1'}} />
                        <img src={box10} alt='Featured item 2' style={{gridColumn: '1 / -1'}} />
                    </div>
                </div>
            </div>

            <ul className="cards">
                {query === "" ? data : filteredData}
            </ul>
        </div>
    )
}

export default AllProducts