import React from 'react'
import '../Css/Footer.css'
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
import payment1 from '../Imgs/payment1.svg';
import payment2 from '../Imgs/payment2.svg';
import payment3 from '../Imgs/payment3.svg';
import payment4 from '../Imgs/payment4.svg';
import payment5 from '../Imgs/payment5.svg';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='text-white'>
            <h5 className='pt-4 text-center'>CONNECT WITH US</h5>
            <div className='a-footer text-center'>
                <a href='https://www.linkedin.com/in/mahmoud-elhoseny-910755261' target='_blank'>
                    <AiFillLinkedin className='icon' size={25} />
                </a>
                <a href='https://github.com/Mahmoud-Elhoseny' target='_blank'>
                    <AiFillGithub className='icon' size={25} />
                </a>
            </div>
            <div className='flexdiv d-flex ps-3 text-center'>
                <p>© 2023 Shop Express. All Rights Reserved</p>
                <div className='text-center'>
                    <img src={payment1} alt='payment1' className='me-3'/>
                    <img src={payment2} alt='payment2' className='me-3'/>
                    <img src={payment3} alt='payment3' className='me-3'/>
                    <img src={payment4} alt='payment4' className='me-3'/>
                    <img src={payment5} alt='payment5' className='me-3'/>
                </div>
                <div className=''>
                <Link to='#' className='me-3'>Careers</Link>
                <Link to='#' className='me-3'>Warranty Policy</Link>
                <Link to='#' className='me-3'>Sell with us</Link>
                <Link to='#' className='me-3'>Terms of Use</Link>
                <Link to='#' className='me-3'>Terms of Sale</Link>
                <Link to='#' className='me-3'>Privacy Policy</Link>
                </div>
                </div>
        </footer>
    )
}

export default Footer