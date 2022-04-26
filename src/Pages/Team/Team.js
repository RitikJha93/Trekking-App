import React from 'react'
import './Team.css'
import { leadershipTeamData } from '../../data'
import { instructorTeamData } from '../../data'
const Team = () => {
  return (
    <div className='team-cont'>
      <div className="leadership-team">
          <h2>Leadership Team</h2>
          <div className="team">
            {leadershipTeamData.map((items)=>{
                return(
                    <div className="team-card">
                        <img src={items.img} alt="" />
                        <h3>{items.name}</h3>
                    </div>
                )
            })}
        </div>

      </div>
      <hr style={{marginTop:"15px",fontSize:"5px"}}></hr>
      <div className="instructor-team">
      <h2>Instructor Team</h2>
      <div className="team">
      {instructorTeamData.map((items)=>{
            return(
                <div className="team-card">
                    <img src={items.img} alt="" />
                    <h3>{items.name}</h3>
                </div>
            )
        })}
      </div>
      </div>
    </div>
  )
}

export default Team
