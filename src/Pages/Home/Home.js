import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Slider from '../../components/Slider/Slider'
import Categories from '../../components/Categories/Categories'
import Experience from '../../components/Experience/Experience'
import Popular from '../../components/Popular/Popular'
import Footer from '../../components/Footer/Footer'
import Testimonials from '../../components/Testimonials/Testimonials'
import Merchandise from '../../components/Merchandise/Merchandise'
const Home = () => {
  return (
    <div>
      <Navbar/>
      <Slider/>
      <Categories/>
      <Popular/>
      <Experience/>
      <Testimonials/>
      <Merchandise/>
      <Footer/>

    </div>
  )
}

export default Home
