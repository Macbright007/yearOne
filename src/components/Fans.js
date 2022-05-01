import React, {useEffect} from 'react'
import { FanContainer } from './styles'
import ChatIcon from "../images/ChatIcon.svg"
import Topbar from "../images/Topbar.png"
import Chat1 from "../images/Chat1.png"
import Chat2 from "../images/Chat2.png"
import Chat3 from "../images/Chat3.png"
import MessageField from "../images/MessageField.png"
import Aos from "aos";
import "aos/dist/aos.css";


const Fans = () => {
    useEffect(() => {
        Aos.init();
    },[])

    return (
        <FanContainer>
            <div className='leftFan'>
                <div className='innerfan'>
                    <button className='btn'>Fans</button>
                    <img src={ChatIcon} alt="icon" />
                </div>
                <h3>Be assured of replies</h3>
                <p>With ear1, we assure you of getting a response to your messages. Don’t be part of the noise in the dms.
                    Get ahead of the game by paying a small fee. </p>
            </div>

            <div className='rightFan'>
                <div className='top'>
                    <img src={Topbar} alt='top' />
                </div>
                <div className='first'>
                <img
                    src={Chat1}
                    alt="connect to an influencer"
                    data-aos="fade-up"
                    data-aos-delay="100"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-once="false"
                    className='imagePop'
                ></img>
                    {/* <img src={Chat1} alt='first' /> */}
                </div>
                <div className='two'>
                <img
                    src={Chat2}
                    alt="connect to an influencer"
                    data-aos="fade-up"
                    data-aos-delay="600"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-once="false"
                    className='imagePop'
                ></img>
                    {/* <img src={Chat2} alt='second' /> */}
                </div>
                <div className='three'>
                <img
                    src={Chat3}
                    alt="connect to an influencer"
                    data-aos="fade-up"
                    data-aos-delay="900"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-once="false"
                    className='imagePop'
                ></img>
                    {/* <img src={Chat3} alt='third' /> */}
                </div>
                <div className='last'>
                    <img src={MessageField} alt='fourth' />
                </div>
            </div>
        </FanContainer>
    )
}

export default Fans