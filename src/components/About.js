import React from 'react'
import { AboutContainer } from './styles'
import bgleft from "../images/bgleft.png"
import Gright from "../images/Gright.png"

const About = () => {
  const myArr = [
    {
      id: 1,
      image: bgleft,
      // name: pic1
    },
    {
      id: 2,
      image: Gright,
      // name: pic2
    },
    {
      id: 3,
      image: bgleft,
      // name: pic1
    }
  ]

  console.log(myArr)


  return (
    <AboutContainer>
      <div className='left'>
        <img src={bgleft} alt='circle' />
        <h3>What can Ear1 help you do?</h3>
        <p>Are you an individual looking to connect with an influencer without the hassle of waiting for the reply over a long time, or an influencer looking to filter your dm’s 
        and connect with your audience, Ear1 has got you covered.</p>
      </div>

      <div className='right'>
        <img src={Gright} alt='circ' />
      </div>

    </AboutContainer>
  )
}

export default About