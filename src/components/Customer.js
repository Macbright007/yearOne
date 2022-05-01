import React, { useEffect} from 'react'
import Filter from "../images/Filter.svg"
import Rectangle from "../images/Rectangle.png"
import popup from "../images/popup.png"
import { CustomerContainer } from './styles'
import Aos from "aos";
import "aos/dist/aos.css";

const Customer = () => {
    useEffect(() => {
        Aos.init();
    },[])
    return (
        <CustomerContainer>
            <div className='left'>
                <img src={Rectangle} alt='phone' />
                <img
                    src={popup}
                    alt="connect to an influencer"
                    data-aos="fade-down"
                    data-aos-delay="100"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-once="false"
                    className='imagePop'
                ></img>
                {/* <img src={popup} alt='chat' className='imagePop' /> */}
            </div>
            <div className='right'>
                <div className='innerRight'>
                    <button className='btn'>influencer</button>
                    <img src={Filter} alt="icon" />
                </div>
                <h3>Filter the noise in the dm’s</h3>
                <p>Ear1 helps you get rid of all the noise in your dm’s across other social media apps.
                    This way, you are sure to connect with serious people and make genuine business and personal connections.
                </p>
            </div>
        </CustomerContainer>
    )
}

export default Customer