import React from 'react'
import './Courses.css'
import { courses } from '../../data'
const Courses = () => {

    return (
    <div className='courses-cont'>
        <h1>COURSES</h1>
        <div className='course'>
        {courses.map((items,index)=>{
            return(
                <div key={index} className="course-cards">
                    <i className={items.class} style={{fontSize:"40px"}}></i>
                    <h2>{items.title}</h2>
                    <p>{items.overview.slice(0,175)}...</p>
                    <button className='date-btn  course-btn'>Read More</button>
                </div>
            )
        })}
        </div>

        <div className="course-icons">
            <div className="ico-info">
                <i class="fa-solid fa-list ic"></i>
                <p>1000+ Courses</p>
            </div>
            <div className="ico-info">
                <i class="fa-solid fa-face-smile ic"></i>
                <p>50000 Happy Participants</p>
            </div>
            <div className="ico-info">
                 <i class="fa-solid fa-briefcase-medical ic"></i>
                <p>100% Safety</p>
            </div>
            <div className="ico-info">
                <i class="fa-solid fa-certificate ic"></i>
                <p>ISO Certified</p>
            </div>
        </div>
    </div>
  )
}

export default Courses
