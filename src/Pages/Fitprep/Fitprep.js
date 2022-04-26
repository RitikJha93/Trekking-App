import React from 'react'
import { fitnessData } from '../../data'
import './Fitprep.css'

const Fitprep = () => {
  return (
    <div className='fitprep-cont'>
        {fitnessData.map((items)=>{
            return(
                <div className="prep">
                    <img src={items.img} alt="" />
                    <div className="prep-content">
                        <h3>{items.title}</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia veniam, sapiente culpa excepturi ea corrupti?</p>
                        <button className='prep-btn cards-btn'>Read Full Post</button>
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default Fitprep
