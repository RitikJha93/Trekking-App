import {React,useState,useEffect} from 'react'
import Slider from '../../components/Slider/Slider'
import Categories from '../../components/Categories/Categories'
import Experience from '../../components/Experience/Experience'
import Popular from '../../components/Popular/Popular'
import Testimonials from '../../components/Testimonials/Testimonials'
import Merchandise from '../../components/Merchandise/Merchandise'
import Aos from 'aos';
import 'aos/dist/aos.css'
const Home = ({id}) => {

  const set = (name,img,height,duration,desc,info,tpimg)=>{
    id(name,img,height,duration,desc,info,tpimg)
  }

  useEffect(()=>{
    Aos.init({duration: 2000});
  })
  return (
    <div>
      <Slider/>
      <Categories data-aos='fade-up'/>
      <Popular data-aos='fade-up' set={set}/>
      <Experience data-aos='fade-up'/>
      <Testimonials data-aos='fade-up'/>
      <Merchandise data-aos='fade-up'/>

    </div>
  )
}

export default Home
