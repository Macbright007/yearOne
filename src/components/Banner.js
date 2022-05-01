import React, { useEffect } from 'react'
import Navbar from './Navbar'
import { Container, ImageContainer } from './styles'
import icon from "../images/icon.png"
import icons from "../images/icons.png"
import Black from "../images/Black.png"
import BlackLeft from "../images/BlackLeft.png"
import BlackRight from "../images/BlackRight.png"
import Aos from "aos";
import "aos/dist/aos.css";



const Banner = () => {
    useEffect(() => {
        Aos.init();
    }, [])

    return (
        <Container>
            <Navbar />
            <h1>Build direct, meaningful connetions.</h1>
            <p>Ear1 helps you connect directly with your favourite influencers for a small fee. What’s more? We assure you of getting a reply.</p>

            <div className='image'>
                <img src={icon} alt='icon1' />
                <img src={icons} alt='icon2' />
            </div>

            <ImageContainer>
                <img
                    src={BlackRight}
                    alt="left rotated mobile device"
                    data-aos="fade-left"
                    data-aos-delay="150"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-once="false"
                    className='imgLeft'
                ></img>
                
                <img
                    src={BlackLeft}
                    alt="left rotated mobile device"
                    data-aos="fade-right"
                    data-aos-delay="150"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-once="false"
                    className='imgRight'
                ></img>
                <img src={Black} alt='black' className='middleImg' />
            </ImageContainer>
        </Container>
    )
}

export default Banner