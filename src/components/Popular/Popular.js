import {React,useEffect} from 'react'
import './Popular.css'
import { popularItems } from '../../data'
import { Link } from 'react-router-dom'
import Aos from 'aos';
import 'aos/dist/aos.css'
const Popular = ({set}) => {

    const handleClick = (name,img,height,duration,desc,info,tpimg)=>{
        set(name,img,height,duration,desc,info,tpimg)
    }

    useEffect(()=>{
        Aos.init({duration: 2000});
      })
  return (
    <div className='popular' data-aos='fade-up'>
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
                        <Link to='/info'><button className='date-btn' onClick={()=>handleClick(items.name,items.backimg,items.height,items.duration,items.desc,items.info,items.tpimg)}>View dates</button></Link>
                        
                    </div>
                </div>
              )
          })}
      </div>

    </div>
  )
}

export default Popular
