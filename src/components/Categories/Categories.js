import {React,useEffect} from 'react'
import {categoryItems} from '../../data'
import './Categories.css'
import Aos from 'aos';
import 'aos/dist/aos.css'
const Categories = () => {

  useEffect(()=>{
    Aos.init({duration: 2000});
  })
  return (
    <div className='category' data-aos='fade-up'>
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
