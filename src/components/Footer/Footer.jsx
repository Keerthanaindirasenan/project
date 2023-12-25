import React from 'react'
import './Footer.css'
import instagram_image from '../Assets/instagram_image.png'
import pinterest_image from '../Assets/pinterest_image.png'
import whatsapp_image from '../Assets/whatsapp_image.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <p>HAPPY SHOPPING :) </p>
        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icons-container">
                <img src={instagram_image} height="30px" width="30px" alt="" />
            </div>
            <div className="footer-icons-container">
                <img src={pinterest_image} height="30px" width="30px"alt="" />
            </div>
            <div className="footer-icons-container">
                <img src={whatsapp_image} height="30px" width="30px" alt="" />
            </div>
        </div>
        <div className="footer-copyright">
            <hr/>
            <p>Copyright @ 2023 - All Right Reserved.</p>
        </div>

    </div>
  )
}

export default Footer