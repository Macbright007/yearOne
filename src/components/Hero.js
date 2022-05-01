import React from 'react'
import { HeroContainer } from './styles'
import guy from "../images/guy.png"
import woman from "../images/woman.png"
import man from "../images/man.png"
import lady from "../images/lady.png"

const Hero = () => {
    return (
        <HeroContainer>
            <div className='heroText'>
                <button className='btn'>Fans</button>
                <h3>Connect with top influencers in your field</h3>
                <p>From Tech to music to business, Ear1 has a wide range of industry experts in diverse fields you have always wanted to connect with. Now is your best chance.</p>
            </div>

            <div className='images'>
                <div className='images-img-slide'>
                    <img src={man} alt='pictures' />
                    <img src={woman} alt='pictures' /> 
                    <img src={guy} alt='pictures' />      
                </div>
                <div className='images-center'>
                  <img src={lady} alt='pictures' />  
                </div>
                
            </div>
        </HeroContainer>
    )
}

export default Hero