import React from 'react'
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
const AllProducts = () => {
    return (
        <div className='products'>
            <Carousel>
                <Carousel.Item>
                    <img src={carousel1} alt="First slide" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={carousel2} alt="Second slide" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={carousel3} alt="Third slide" />
                </Carousel.Item>
            </Carousel>
            <div className='d-flex'>
                <div className='big-box ps-5 pe-5'>
                    <h2 className='text-center'>More reasons to shop</h2>
                    <div className='d-flex'>
                        <div className='pe-1'>
                            <img src={box5} width={195} alt='box5' />
                        </div>
                        <div>
                            <img src={box6} width={195} alt='box6' />
                        </div>
                    </div>
                    <div className='d-flex' >
                        <div className='pe-1'>
                            <img src={box7} width={195} alt='box7' />
                        </div>
                        <div>
                            <img src={box8} width={195} alt='box8' />
                        </div>
                    </div>
                </div>
                <div className='big-box ps-5 pe-5'>
                    <h2 className='text-center'>Weekend deals</h2>
                    <div className='d-flex '>
                        <div className='pe-1'>
                            <img src={box1} width={195} alt='box1' />
                        </div>
                        <div>
                            <img src={box2} width={195} alt='box2' />
                        </div>
                    </div>
                    <div className='d-flex' >
                        <div className='pe-1'>
                            <img src={box3} width={195} alt='box3' />
                        </div>
                        <div>
                            <img src={box4} width={195} alt='box4' />
                        </div>
                    </div>
                </div>
                <div className='big-box ps-5 pe-5 '>
                    <h2 className='text-center'>In focus</h2>
                    <div className='pe-3'>
                        <img className='imgwid ' src={box9} width={400} alt='box9 ' />
                    </div>
                    <div className='pt-2'>
                        <img className='imgwid' src={box10} width={400} alt='box10' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllProducts