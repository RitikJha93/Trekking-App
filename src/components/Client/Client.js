import React from 'react'
import './Client.css'
import { clientData } from '../../data'
const Client = () => {
  return (
    clientData.map((items)=>{
        return(
            <div className='client'>
                <img src={items.img} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum odit deleniti velit nobis reiciendis modi esse asperiores praesentium excepturi, eligendi ea quisquam voluptatem delectus a ducimus similique debitis est voluptas nam? Cumque laboriosam quo dolores.</p>
            </div>
        )
    })
  )
}

export default Client
