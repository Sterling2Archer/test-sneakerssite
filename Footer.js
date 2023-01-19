import React from 'react';
import './FooterStyles.css';
import {Link} from 'react-router-dom'

const Footer = () => {
    return (
      <div className='footer'>
        <center>
            <a href="/" className='btn'> home</a>
             <a href="/second" className='btn'> about us</a>
             <Link to='/second' className='btn'>about page </Link>
             <a href="/orders" className="btn"> shop </a>
        </center>
      </div>    
    )
  };
  
  export default Footer;
