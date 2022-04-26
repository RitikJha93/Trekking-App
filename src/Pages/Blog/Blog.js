import React from 'react'
import './Blog.css'
import { blogData } from '../../data'
const Blog = () => {
  return (
    <div className='blog-cont'>
        <h1>Browse Through Our Latest Articles</h1>
        <div className="blog">
            {blogData.map((items)=>{
                return(
                    <div className="prep">
                        <img src={items.img} alt="" />
                        <div className="prep-content">
                            <h3>{items.title}</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia veniam, sapiente culpa excepturi ea corrupti?</p>
                            <button className='prep-btn cards-btn'>Continue Reading</button>
                        </div>
                    </div>
                )
            })}
        </div>

    </div>
  )
}

export default Blog
