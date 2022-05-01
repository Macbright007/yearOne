import React from 'react'
import logo from "../images/logo.png"
import menu from "../images/menu.svg"
import { Logo, Navigation, NavItems } from './styles'

const Navbar = () => {
    return (
        <Navigation>
            <Logo>
                <img src={logo} alt='logo' />
                <span>ear1</span>
            </Logo>
            <img
                className='menu-icon'
                src={menu}
                //   onClick={this.toggleMobileMenu}
                alt="menu"
            ></img>
            <NavItems>
                <a>Home</a>
                <a>ForFans</a>
                <a>For influncers</a>
                <a>Features</a>
                <a>FAQ's</a>
            </NavItems>

        </Navigation>
    )
}

export default Navbar