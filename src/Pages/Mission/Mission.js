import React from 'react'
import './Mission.css'
import { about } from '../../data'
import founderimg from '../../images/founder.jpg'
const Mission = () => {
  return (
    <div className='mission-cont'>
      <h1>About Us</h1>
      <p>Founded by legendary mountaineer Ms Bachendri Pal, first Indian woman to climb Mt Everest on May 23, 1984 Tata Steel Adventure Foundation is an outbound leadership institute which through its wide range of activities aims at developing able leaders for the future through identification of their limits of mental and physical endurance. It allows people from all walks of life and all ages to choose their own metaphor for self-discovery. True to its philosophy of experiential learning, TSAF believes that no classroom is better than nature and no teacher is better than your own will.</p>
      <p>
      Tata Steel Adventure Foundation recognizes the different leadership styles and the changing needs across   different levels of management, so it does not practice a one fits all model. The courses are custom tailored as per the needs of the participating organization. The outbound programs consist of a series of experiential games, outdoor team activities and coordinated group tasks simulated in a natural environment that are   instrumental in imparting valuable team-building lessons to the participants. Thus, there is a perfect blend of physical exertion, team building, coordination, group tasks, and lastly loads of fun.
      </p>
      <p>
      Participants of the program fly in the skies, swim in the waters, live in the woods and breathe under the stars learning the skills and values that’s going to serve them and their subordinates and colleagues for several years to come. Participants come out as confident, self-aware, creative, tolerant and most importantly, as leaders.
      </p>
      <p>
      In addition to TSAF flagship outbound leadership program, several other courses are conducted by TSAF like horse riding, parasailing, water sports, sport climbing, rock climbing and many others. Each course is a certification course thereby giving a sense of fulfilment and achievement at the end of it.
      </p>
      
      <span>Come, join, transform, achieve.</span>

    <div className="mission-content">
        <h2>What we're known for</h2>
        <div className="mission">
        {about.map((items,i)=>{
            return(
                <div className='mission-cards'>
                    <img src={items.img} alt="" />
                    <h3>{items.title}</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, quod accusamus ea illo repellat odio, nostrum deleniti delectus illum, necessitatibus nam maxime tempora laboriosam unde quam quo sit autem quasi! Vero voluptate assumenda doloremque architecto!</p>
                </div>
            )
        })}
        </div>

    </div>

    <div className="director">
        <h2>Director's Desk</h2>
        <img src={founderimg} alt="" />
        <h3>Bachendri Pal</h3>
        <p>In extreme mountaineering, you are always in dangerous situations, as there are plenty of contingencies such as rockfalls, avalanches or crevasses over which you have no direct control. It is vital to be constantly aware of these dangers and not to panic. In climbing, mental control is just as important as physical prowess. I have found that staying calm and evaluating the situation leads to better decision-making. This has helped me not only in the field but in real life situations as well. As the Director of Tata Steel Adventure Foundation , I have had the opportunity of leveraging adventure sports as a personality development tool for people from various walks of life.
        Having climbed the Everest and having led several other challenging expeditions, I can say with confidence and certainty that venturing into new areas of human endeavor educate us to develop positive qualities of leadership, courage, discipline, and motivate us to work towards the service of the community we live in.
        </p>
        <p>
        At TSAF programmes, you will gain a great deal of excitement from the substance and variety of experimental learning activities, the stimulation of getting acquainted with your peers and other leaders from across the country, and your growing sense of identification with an important initiative for national renewal. So, go for it! The more energy and risk taking and commitment you put into the activities, the better you will prepare yourself and serve your family, your organization, your society and your nation happily. After all, I strongly feel, we are all working for our happiness and not only for earning money or material wealth.
        </p>
        <p>Sincerely,</p>
        
        <span>Bachendri Pal</span>
    </div>
    </div>
  )
}

export default Mission
