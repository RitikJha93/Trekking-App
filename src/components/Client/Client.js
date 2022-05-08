import React, { Component } from "react";
import Slider from "react-slick";
import { clientData } from '../../data'
import './Client.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Aos from 'aos';
import 'aos/dist/aos.css'
export default class Client extends Component {

  componentDidMount = ()=>{
    Aos.init({duration: 1000});
  }
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
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
      <div>
        <Slider {...settings}>
          {clientData.map((items)=>{
            return(
              <div>
                <div className="client" data-aos='fade-up'>
                  <img src={items.img} alt="" />
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In necessitatibus magnam beatae ad aperiam, corporis ullam quae dignissimos quasi nostrum itaque quibusdam laboriosam? Enim repudiandae in recusandae perferendis, quia vel.</p>
                </div>
              </div>

            )
          })}
        </Slider>
      </div>
    );
  }
}