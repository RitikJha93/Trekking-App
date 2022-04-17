import React from 'react'
import './Popular.css'
import { popularItems } from '../../data'
const Popular = () => {
  return (
    <div className='popular'>
      <div className="heading">
          <h1>Popular Packages</h1>
      </div>
    
      <div className="package-content">

          {popularItems.map((items)=>{
              return(
                <div className="package-cards">
                    <div className="pop-img">
                        <img src={items.img} alt="" />
                    </div>
                    <div className="pop-content">
                        <h3>{items.name}</h3>
                        <div className="info">
                            <div className="icons">
                                <i class="fa-solid fa-mountain"></i>
                                <p>{items.height}</p>
                            </div>
                            <div className="icons">
                                <i class="fa-solid fa-calendar-days"></i>
                                <p>{items.duration}</p>
                            </div>
                        </div>
                        <button className='date-btn'>View dates</button>
                    </div>
                </div>
              )
          })}
      </div>

    </div>
  )
}

export default Popular
