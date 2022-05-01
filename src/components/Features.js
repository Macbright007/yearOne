import React from 'react'
import { FeatureContainer } from './styles'
import features from "../images/Features.png"
import assurance from "../images/assurance.png"
import Frame from "../images/Frame.png"

const Features = () => {
    return (
        <FeatureContainer>
            <div className='innerFeat'>
                <div className='leftFeat'>
                    <h1>The ear1 assurance</h1>
                    <img src={features} alt='features' />
                </div>
                <div className='rightFeat'>
                    <img src={assurance} alt='assurance' />
                </div>
            </div>
            <img src={Frame} alt='frame' />
        </FeatureContainer>
    )
}

export default Features