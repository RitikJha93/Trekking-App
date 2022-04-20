import React from 'react'
import './Merchandise.css'
import merchimg from '../../images/merch-img.png'
const Merchandise = () => {
  return (
    <div className='merch-cont'>
      <div className="merch-content">
          <div className="merch-text">
            <h2>Visit our store to buy and rent Gears</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus dicta perferendis, obcaecati deleniti nihil accusamus commodi quas iure odio fuga!</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum amet sequi atque! Voluptatibus, rem dignissimos.</p>
            <button className='cards-btn merch'>View Gears</button>
          </div>
          <img src={merchimg} alt="" />
      </div>
    </div>
  )
}

export default Merchandise
