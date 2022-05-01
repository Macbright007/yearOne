import React from 'react'
import logoFooter from "../images/logoFooter.png"
import Twitter from "../images/Twitter.svg"
import Telegram from "../images/Telegram.svg"
import Instagram from "../images/Instagram.svg"
import Facebook from "../images/Facebook.svg"
import Linkedin from "../images/Linkedin.svg"
import { FooterContainer, Logo } from './styles'


const Footer = () => {
    return (
        <FooterContainer>
            <div className='top'>
                <p><span>Be in the know.</span> Get access to amazing offers and discounts</p>
                <input type='search' placeholder='Enter your email address' />
                <button className='btn'>submit</button>
            </div>

            <div className='innerWrapper'>
                <div>
                    <Logo>
                        <img src={logoFooter} alt='logo' className='logoFooter' />
                        <span>ear1</span>
                    </Logo>
                    <div className='socialMedia'>
                        <img src={Twitter} alt='twitter' />
                        <img src={Telegram} alt='telegram' />
                        <img src={Instagram} alt='instagram' />
                        <img src={Facebook} alt='facebook' />
                        <img src={Linkedin} alt='linkedin' />
                    </div>
                </div>
                <div>
                    <h3>Links</h3>
                    <div className='inner'>
                        <a>Home</a>
                        <a>For fans</a>
                        <a>For influencers</a>
                        <a>FAQ's</a>
                    </div>
                </div>
                <div>
                    <h3>Get help</h3>
                    <div className='inner'>
                        <a>Support</a>
                        <a>FAQ's</a>
                        <a>Partnership</a>
                    </div>
                </div>
                <div>
                    <h3>Downloads</h3>
                    <div className='inner'>
                        <a>Andriod</a>
                        <a>iOS</a>
                    </div>
                </div>
                <div>
                    <h3>Resources</h3>
                    <div className='inner'>
                        <a>Terms of Service</a>
                        <a>Privacy Policy</a>
                    </div>
                </div>
            </div>
        </FooterContainer>
    )
}

export default Footer