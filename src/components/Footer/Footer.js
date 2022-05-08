import {React,useEffect} from 'react'
import './Footer.css'

const Footer = () => {

  return (
    <div className='footer' >
      <div className="box1">
        <div className="example">
            <h1>Unoia</h1>
            <div className="info-box">
                <p>Call Us : +123-456-789</p>
                <p>unioa@example.com</p>
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
            <p>Gallery</p>
            <p>News and Articles</p>
            <p>Discounted Offers</p>
          </div>
          <div>
            <h3>ACTIVITIES</h3>
            <p>Trekking and Hiking</p>
            <p>Bungee Jump</p>
            <p>Zip Lines</p>
            <p>Canoeing</p>
            <p>Kayaking</p>
          </div>
          <div>
            <h3>TREKS</h3>
            <p>Summer Treks</p>
            <p>Winter Treks</p>
            <p>Monsoon Treks</p>
            <p>Weekend Treks</p>
            <p>International Treks</p>
          </div>

      </div>
      <div className="box3">
          <div className="copy">
            Copyright © 2022 hiking. All rights reserved.
          </div>

      </div>
    </div>
  )
}

export default Footer
