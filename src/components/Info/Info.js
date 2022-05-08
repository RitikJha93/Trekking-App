import React from 'react'
import './Info.css'
import Calendar from '../Calendar/Calendar'
import {Link} from 'react-router-dom'
const Info = ({name,img,height,duration,desc,info,tpimg}) => {
  return (
    <div className='prod-info'>
        <div className="backgrnd-img">
            <img className='backimg' src={img} alt="" />
        </div>
        <div className="header">
           <h1>{name}</h1>
           <p>{desc}</p>
        </div>

        <div className="prod-content">
            <div className="ht">
                <i class="fa-solid fa-calendar-days"></i>
                <div className="cnt">
                    <h4>Duration</h4>
                    <p>{duration}</p>
                </div>
            </div>
            <div className="ht">
                <i class="fa-solid fa-person"></i>
                <div className="cnt">
                    <h4>Difficulty</h4>
                    <p>Moderate</p>
                </div>
            </div>
            <div className="ht">
                <i class="fa-solid fa-mountain"></i>
                <div className="cnt">
                    <h4>Maximum Altitude</h4>
                    <p>{height}</p>
                </div>
            </div>
        </div>

        <div className="main-info">
            <div className="guide">
                <p>{info}</p>
                <img src={tpimg} alt="" />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque odit perferendis vel impedit labore autem recusandae dolor, unde corporis vero maxime, animi at praesentium non voluptas aliquam quo facere nostrum distinctio molestias similique suscipit. Molestiae tempora facere eligendi, ullam, architecto, perferendis illum possimus explicabo atque aliquid veritatis vero optio earum temporibus nam debitis dolore inventore cum eaque corporis hic. Explicabo vero, cupiditate quasi voluptate ex dolores autem repudiandae earum, perspiciatis accusantium tenetur. Nam ab quisquam, ipsa tempore quod enim. Dolor repellat magni sapiente saepe asperiores nulla est similique temporibus porro libero assumenda vel, suscipit iusto harum, nostrum non minima! Voluptates.</p>
            </div>
            <div className="pricing">
                <div className="main-price">  
                    <p>Trek Fee</p>
                    <h1>₹2600<span><sup>+ 5% GST</sup></span></h1>
                    <p>This fee includes everything from basecamp to basecamp. See Inclusions and Exclusions</p>
                   <a href="#book"> <button className='cards-btn'><i class="fa-solid fa-calendar-days"></i>View Dates</button></a>
                </div>
                <div className="instructions">
                    <ol >
                        <li >
                          <span>Pickup and Drop from Dehradun:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nesciunt architecto neque nam? Reprehenderit, quia.
                        </li>
                        <li>
                          <span>Rental Gear:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque eum ut obcaecati dicta, neque quas.
                        </li>
                        <li>
                          <span>Vaccine Certificate:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore minima ab laudantium nihil ex ut!
                        </li>
                    </ol>
                </div>
            </div>
        </div>


        <div className="calendar">
            <Calendar/>
            <Link to='/pay'><button className='btn book-btn' id='book'>Book Now</button></Link>
        </div>
        

    </div>
  )
}

export default Info
