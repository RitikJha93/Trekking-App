import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div className='footer'>
      <div className="box1">
        <div className="example">
            <h1>Unoia</h1>
            <div className="info-box">
                <p>Call Us : +123-456-789</p>
                <p>redstore@example.com</p>
                <p>Monday till Friday 10 to 6 EST</p>
            </div>
        </div>
        <div className="social-icons">
            <h3>GET MORE RESERVED ON:</h3>
            <div className="act-icons">
                <i class="fa-brands fa-facebook-f"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-pinterest"></i>
                <i class="fa-brands fa-instagram"></i>
            </div>
        </div>

      </div>
      <div className="box2">
          <div>
            <h3>ABOUT US</h3>
            <p>About Us</p>
            <p>Contact us</p>
            <p>Factories</p>
            <p>Careers</p>
          </div>
          <div>
            <h3>ORDERS AND RETURNS</h3>
            <p>Help and advice</p>
            <p>Shippintg & Returns</p>
            <p>Terms and conditions</p>
            <p>Refund policy</p>
          </div>
          <div>
            <h3>MY ACCOUNT</h3>
            <p>Login</p>
            <p>Register</p>
            <p>My Wishlist</p>
            <p>Check Out</p>
          </div>

      </div>
      <div className="box3">
          <div className="copy">
            Copyright © 2021 hiking. All rights reserved.
          </div>
          {/* <div className="cards">
            <img src="https://cdn.shopify.com/s/files/1/0256/4594/0810/files/paypal_c6cdc9cc-cff1-444c-b2c7-1a1ed8a245e2_240x25.png?v=1617616020" alt="" />
          </div> */}

      </div>
    </div>
  )
}

export default Footer
