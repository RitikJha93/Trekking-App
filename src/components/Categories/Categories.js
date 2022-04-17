import React from 'react'
import {categoryItems} from '../../data'
import './Categories.css'
const Categories = () => {
  return (
    <div className='category'>
      <div className="adventure-title">
        <h1>Adventure Idea!</h1>
      </div>

      <div className="categories">
        {categoryItems.map((items)=>{
            return(
                <div className="cards">
                    <img src={items.img} alt="" />
                    <p id='title'>{items.title}</p>
                    <p id='desc'>{items.desc}</p>
                    <button className='cards-btn'>Read More</button>
                </div>
            )
        })}
        
      </div>
    </div>
  )
}

export default Categories
