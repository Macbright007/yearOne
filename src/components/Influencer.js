import React from 'react'
import influencer from "../images/influencer.png"
import { InfluencerContainer } from './styles'

const Influencer = () => {
    return (
        <InfluencerContainer>
            <div className='leftInfluence'>
                <img src={influencer} alt='phone' />
            </div>
            <div className='rightInfluence'>
                <div className='innerinfluence'>
                    <button className='btn'>influencer</button>
                </div>
                <h3>Earn money while you chat</h3>
                <p>As an influencer, you get paid by your audience to connect with them. 
                That way to maximize time while earning.</p>
            </div>
        </InfluencerContainer>
    )
}

export default Influencer