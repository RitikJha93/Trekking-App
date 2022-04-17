import React from 'react'
import image from '../../images/about-img.jpg'
import './Experience.css'
const Experience = () => {
  return (
    <div className='exp-cont'>
        <div className="exp-img">
            <img src={image} alt="" />
        </div>
        <div className="exp-text">
            <h4>Memorable outdoor experience</h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut vitae ducimus optio numquam, similique magnam.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, voluptatibus.</p>
            <button className='cards-btn'>Read More</button>
        </div>
      
    </div>
  )
}

export default Experience
