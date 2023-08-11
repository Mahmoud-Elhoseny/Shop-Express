import React from 'react'
import '../Css/Footer.css'
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';

const Footer = () => {
    return (
        <footer className='text-white'>
            <h5 className='pt-4 text-center'>CONNECT WITH US</h5>
            <div className='text-center'>
            <a href='https://www.linkedin.com/in/mahmoud-elhoseny-910755261' target='_blank'>
            <AiFillLinkedin className='icon' size={25} />
            </a>
            <a href='https://github.com/Mahmoud-Elhoseny' target='_blank'>
            <AiFillGithub className='icon' size={25} />
            </a>
            </div>

        </footer>
    )
}

export default Footer