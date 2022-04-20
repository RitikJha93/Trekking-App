import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { weekendTrekData } from '../../data';
const MarchTreks = () => {

    var settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        arrows: true,
        className: 'slides',
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1, 
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <div className='adventure-cont'>
        <h1>Best Weekend Treks</h1>
                <Slider {...settings}>
                {weekendTrekData.map((items)=>{
                    return(
                        <div>
                        <div className="trek-cards">
                            <img src={items.img} alt="" />
                            <div className="trek-content">
                                <h3>{items.name}</h3>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                                <button className='date-btn detail-btn'>View detailed Info</button>
                            </div>
                        </div>
                        </div>

                    )
                })}
                </Slider>
        </div>
  )
}

export default MarchTreks
