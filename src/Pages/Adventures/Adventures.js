import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import MarchTreks from '../../components/Treks/MarchTreks'
import SummerTreks from '../../components/Treks/SummerTreks'
import MonsoonTreks from '../../components/Treks/MonsoonTreks'
import WeekendTreks from '../../components/Treks/WeekendTreks'
import RareTreks from '../../components/Treks/RareTreks'
import InternationalTreks from '../../components/Treks/InternationalTreks'
import './Adventures.css'
const Adventures = () => {

    
  return (
    <div className='adv'>
      <MarchTreks/>
      <SummerTreks/>
      <MonsoonTreks/>
      <WeekendTreks/>
      <RareTreks/>
      <InternationalTreks/>
    </div>
  )
}

export default Adventures
