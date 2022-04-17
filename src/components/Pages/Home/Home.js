import React from 'react'
import Navbar from '../../Navbar/Navbar'
import Slider from '../../Slider/Slider'
import Categories from '../../Categories/Categories'
import Experience from '../../Experience/Experience'
import Popular from '../../Popular/Popular'
import Footer from '../../Footer/Footer'
import Testimonials from '../../Testimonials/Testimonials'
const Home = () => {
  return (
    <div>
      <Navbar/>
      <Slider/>
      <Categories/>
      <Popular/>
      <Experience/>
      <Testimonials/>
      <Footer/>

    </div>
  )
}

export default Home
