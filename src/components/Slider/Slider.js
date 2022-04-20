import {React,useState} from 'react'
import './Slider.css';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {sliderItems} from '../../data'
const Slider = () => {
  const [index,setindex] = useState(0)

  const handleClick = (direction)=>{
    if(direction === 'l'){
      setindex(index !== 0 ? index-1 : 2)
    }
    if(direction === 'r'){
      setindex(index !== 2 ? index+1 : 0)
    }
  }
  return (
    <div className='slider-cont'>
      <div className="arrow-cont" style={{left:'10px'}} onClick={(()=>handleClick("l"))}>
        <i class="fa-solid fa-angle-left"></i>
      </div>
      <div className="wrapper" style={{transform:`translateX(${-100*index}vw)`}}>
            {sliderItems.map((items)=>{
              return(
                  <div className="img-cont1">
                    <img src={items.img} alt="" />
                    <div className="textbox">
                      <h2>{items.title}</h2>
                      <h3>{items.desc}</h3>
                      <button className='btn'>Explore More</button>
                    </div>
                  </div>)
            })}
  
      </div>
      <div className="arrow-cont" style={{right:'10px'}} onClick={(()=>handleClick("r"))}>
        <i class="fa-solid fa-angle-right"></i>
      </div>
      
    </div>
  )
}

export default Slider

