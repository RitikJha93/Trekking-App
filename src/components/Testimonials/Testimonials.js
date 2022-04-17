import React, { useRef, useState } from 'react'
import Client from '../Client/Client'
import './Testimonials.css'
const Testimonials = () => {

    const [isMoved,setIsMoved] = useState(false)
    const [slideNumber,setSlideNumber] = useState(0);
    const listRef = useRef()
    const handleClick = (direction)=>{
        setIsMoved(true)
        let distance = listRef.current.getBoundingClientRect().x - 30;
        if(direction === 'left' && slideNumber > 0){
            setSlideNumber(slideNumber -1)
            listRef.current.style.transform = `translateX(${300 + distance }px)`;
        }
        if(direction === 'right' && slideNumber < 2){
            setSlideNumber(slideNumber + 1)
            listRef.current.style.transform = `translateX(${-300 + distance }px)`;
        }
        console.log(distance)
    }
  return (
    <div className='testimonials'>
        <h1>Our Clients</h1>
        <div className="client-wrapper">
            <i class="fa-solid fa-angle-left arrow" style={{left:"10px",display: !isMoved && "none"}} onClick={()=>handleClick("left")}></i>
            <div className="client-cont" ref={listRef}>
                <Client/>
                <Client/>
                <Client/>
                <Client/>
                <Client/>
                <Client/>
            </div>
            <i class="fa-solid fa-angle-right arrow" style={{right:"10px"}} onClick={()=>handleClick("right")}></i>
        </div>

    </div>
  )
}

export default Testimonials
