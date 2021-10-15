import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-header">
            <h1>Get in touch with us</h1>
            </div>
            <div className="footer-container">
                <div className="footer-left">
                    <h3>Our Company</h3>
                    <h5>About Us</h5>
                    <h5>Contact Uss</h5>
                    <h5>Sitemap</h5>
                    <h5>Download  Brochure</h5>
                </div>
                <div className="footer-right">
                <h3>Reach Us</h3>
                <h3>R N Industries</h3>
                <p>13, Manthan Industrial Estate, Phase - 1 , R M engineering compound,
                     GIDC vatva, Ahmedabad-382445, Gujarat, India</p>

                <h4>Dinesh Prajapati (Proprietor)</h4>
                <p>Mobile Number : 8779024646</p>
                <p>Email Address : riteshprajapati30@gmail.com</p>
                </div>
            </div>
            <hr/>
            <p className="text-center">Copyright <span>&copy; </span>2021 R N Industries</p>
        </div>
    )
}

export default Footer
