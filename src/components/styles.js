import styled from "styled-components";
import rec from "../images/rect.jpg"
import rect from "../images/rect.jpg"
import bgimg from "../images/bgimg.png"
import bg from "../images/bg.png"
import lg from "../images/lg.png"



export const Container = styled.div`
    background-image: url(${rec});
    width: 100%;
    max-with: 500px;
    height: 170vh;

    h1{
        color: #fff;
        font-size: 5rem;
        font-weight: 700;
        width: 55%;
        margin: auto;
        line-height: 100px;
    }

    p{
        color: white;
        font-size: 15px;
        font-weight: 300;
        width: 30%;
        margin: 10px auto;
    }

   .image img{
        height: 50px;
        margin: 30px 10px;
    }
`

export const ImageContainer = styled.div`
        min-height: 538px;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
        

    .middleImg{
        width: 350px;
        position: absolute;
        top: 0;
        margin-top: 5px; 
        z-index: 2;       
    }
    }
    .imgLeft{
        width: 510px;
        position: absolute;
        top: -8px;
        margin-top: 75px;
        margin-right: 260px;
    }
    .imgRight{
        width: 510px;
        position: absolute;
        margin-right: -260px;
        margin-top: 75px;
        top: -20px;
    }
`

export const Navigation = styled.div`
    display: flex;
    justify-content: space-evenly;
    padding-top: 20px;
    margin-bottom: 60px;

    .menu-icon{
        display: none;
    }
    @media only screen and (min-width: 601px) and (max-width: 768px) {
        .menu-icon{
            display: block;
        }
    }
`
export const Logo = styled.div`
    position: relative;
    margin-bottom: 20px;

    img{
        height: 30px;
        margin-top: 7px;
    }

    span{
        position: absolute;
        top: 0;
        font-weight: 700;
        font-size: 30px;
    }
`

export const NavItems = styled.div`
    margin-top: 17px;
    margin-left: 80px;

    a{
        color: #fff;
        margin-left: 45px;
        font-size: 15px;
    }

    @media only screen and (min-width: 601px) and (max-width: 768px) {
        {
            display: none;
        }
    }
`

export const AboutContainer = styled.div`
    background-image: url(${bgimg});
    // background: #fafafa;
    background-repeat: no-repeat;
    background-size: cover;
    height: 70vh;
    display: flex;
    justify-content: space-between;

    .left{
        width: 60%;
        text-align: left;
    }

    .left img{
        width: 120px;
        position: absolute;
        left: 53px;
        margin-top: 20px;
        margin-left: -20px;
    }
    .right{
        width: 40%;
    }
    .right img{
        width: 70%;
        margin-left: 160px;
    }

    h3{
        position: relative;
        z-index: 2;
        font-weight: 500;
        font-size: 72px;
        line-height: 101.1%;
        letter-spacing: -.03em;
        color: #007640;
        margin-left: 85px;
        max-width: 560px;
    }

    p{
        font-size: 20px;
        line-height: 30px;
        color: rgba(0,0,0,.6);
        width: 100%;
        max-width: 683px;
        margin-top: 20px;
        margin-left: 85px;
    }
`

export const HeroContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-top: 50px;
    padding: 60px;

    .heroText{
        width: 50%;
        text-align: left;
        margin-left: 90px;

    }
    .btn {
        background-color: #FFBB62;
        border-radius: 50px;
        padding: 5px 25px;
        border: none;
        margin-right: 420px;
        font-weight: 900;
        font-style: normal;
    }
    .heroText h3{
        font-weight: 500;
        font-size: 68px;
        line-height: 68.75px;
        letter-spacing: -.03em;
        color: #121212;
        max-width: 87%;
        margin-top: 10px;
        margin-bottom: 32px;
    }

    .heroText p{
        font-size: 20px;
        line-height: 150%;
        width: 85%;
        color: #121212;
        opacity: 0.6;
    }

    .images{
        width: 50%;
        height: 50vh;
        margin-left: -100px;
    }
    .images-img-slide{
        position: relative;
    }
    .images-img-slide img{
        width: 50%;
        height: 60vh;
        position: absolute;
        top: 0;
    }
    .images-img-slide img:first-child{
        transform: rotate(3.39deg);
        animation: slideRight .7s ease 8s 1 normal forwards,rotate3 1s ease 6s forwards,slideLeft .7s ease 9.6s 1 normal forwards,rotateBack1 1s ease 10.6s forwards;
    }

    .images-img-slide img:nth-child(2) {
        transform: rotate(7.15deg);
        animation: slideRight .7s ease 6s 1 normal forwards,rotate2 1s ease 4s forwards,slideLeft .7s ease 11.6s 1 normal forwards,rotateBack2 1s ease 12.6s forwards;
    }

    .images-img-slide img:nth-child(3){
        transform: rotate(3.39deg);
        animation: slideRight .7s ease 8s 1 normal forwards,rotate3 1s ease 6s forwards,slideLeft .7s ease 9.6s 1 normal forwards,rotateBack1 1s ease 10.6s forwards;
    }
    .images-center{
        position: relative;
    }
    .images-center img{
        position: absolute;
        width: 50%;
        z-index: -1;
        height: 60vh;
    }
`

export const FanContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding-bottom:  20px;

    .leftFan{
        background-image: url(${rect});
        width: 50%;
    }
    .innerfan{
        display:flex;
        justify-content: space-around;
        margin: 80px;
    }
    .btn{
        background: #FFBB62;
        border-radius: 50px;
        width: 100px;
        height: 30px;
        border: none;
        margin-top: 30px;
        margin-right: 25px;
        font-weight: 500;
        font-size: 16px;
        line-height: 116.6%;
        color: #000;
    }
    .innerfan img{
        background-color: none;
        width: 64px;
        height: 60px;
        margin-top: 10px;
        margin-left: 200px; 
    }
    .leftFan>h3{
        color: #FFF;
        text-align: left;
        width: 65%;
        height: 136px;
        margin-left: 100px;
        font-style: normal;
        font-weight: 500;
        font-size: 68px;
        line-height: 100.1%;
        letter-spacing: -0.05em;
    }

    p{
        width: 481px;
        height: 90px;
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 150%;
        color: #FFF;
        opacity: 0.9;
        text-align: left;
        margin-left: 100px;
        margin-bottom: 50px;
    }

    .rightFan{
        background-image: url(${bg});
        width: 50%;
        position: relative;
    }
    .top img{
        height: 70px;
    }
    .first img{
        position: absolute;
        right: 0;
        height: 70px;
        margin-top: 25px;
        with: 20%;
        margin-right: 130px;
    }
    .two img{
        position: absolute;
        height: 70px;
        left: 0;
        width: 25%;
        margin-top: 120px;
        margin-left: 130px;
    }
    .three img{
        position: absolute;
        height: 70px;
        left: 0;
        width: 35%;
        margin-top: 220px;
        margin-left: 130px;
    }
    .last img{
        position: absolute;
        bottom: 0;
        right: 0;   
        height: 70px;
        margin-right: 130px;
    }
`

export const InfluencerContainer = styled.div`
    display: flex;
    justify-content: space-between;
    position: relative;
    padding-bottom:  20px;

    .rightInfluence{
        width: 50%;
        padding-top: 80px;
    }
    .innerinfluence{
        margin-bottom: -50px;
    }
    .btn{
        background: #FF8C62;
        border-radius: 50px;
        width: 100px;
        height: 30px;
        font-weight: 800px;
        border: none;
        margin-top: 30px;
        margin-right: 320px;
        font-weight: 500;
        font-size: 16px;
        line-height: 116.6%;
        color: #000;
    }
    .leftInfluence img{
        position: absolute;
        bottom: 0;
        background-color: none;
        width: 30%;
        height: 80vh;
        margin-top: 10px;
        margin-left: 100px; 
    }
    .rightInfluence>h3{
        color: #121212;
        text-align: left;
        width: 65%;
        height: 136px;
        margin-left: 100px;
        font-style: normal;
        font-weight: 500;
        font-size: 68px;
        line-height: 100.1%;
        letter-spacing: -0.05em;
    }

    p{
        color: #121212;
        width: 80%;
        height: 90px;
        font-weight: 400;
        font-size: 20px;
        line-height: 150%;
        opacity: 0.9;
        text-align: left;
        margin-top: -35px;
        margin-left: 100px;
        margin-bottom: 50px;
    }
`

export const CustomerContainer = styled.div`
    display: flex;
    justify-content: space-between;
    position: relative;
    padding-bottom:  20px;

    .left{
        background-image: url(${bgimg});
        width: 50%;
        background: #272727;
        position: relative;
        
    }
    .left img{
        width: 80%;
    }
    .left .imagePop{
        position: absolute;
        width: 71%;
        left: 90px;
        top: 145px;
        border-radius: 20px;
    }
    
    .right{
        background-image: url(${lg});
        width: 50%;
    }
    .innerRight{
        display:flex;
        justify-content: space-around;
        margin: 80px 90px -30px;
    }
    .btn{
        background: #FF8C62;
        border-radius: 50px;
        width: 120px;
        height: 30px;
        border: none;
        margin-top: 25px;
        margin-right: 25px;
        font-weight: 500;
        font-size: 16px;
        line-height: 116.6%;
        color: #000;
    }

    .innerRight img{
        background-color: none;
        width: 64px;
        height: 60px;
        margin-top: 10px;
        margin-left: 200px; 
    }

    h3{
        color: #FFF;
        text-align: left;
        width: 65%;
        margin-left: 100px;
        font-weight: 500;
        font-size: 60px;
        line-height: 90.1%;
        letter-spacing: -0.05em;
        // margin-bottom: -5px;
    }

    p{
        width: 481px;
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 150%;
        color: #FFF;
        opacity: 0.5;
        text-align: left;
        margin-left: 100px;
        margin-bottom: 50px;
    }

`

export const FeatureContainer = styled.div`
    padding-bottom:  20px;

    .innerFeat{
        display: flex;
        justify-content: space-evenly;
    }
    .leftFeat {
        width: 50%;
    }
    h1{
        // position: absolute;
        width: 371px;
        // height: 138px;
        // left: 120px;
        // top: 4745px;
        font-weight: 500;
        font-size: 68px;
        line-height: 80.1%;
        letter-spacing: -0.03em;
        color: #007640;
        text-align: left;
        margin-left: 80px;
    }

    .leftFeat img{
        width: 70%;
        margin-top: 60px;
        margin-left: 67px;
    }

    .rightFeat{
        width: 50%;
    }
    .rightFeat img{
        width: 70%;
        height: 150vh;
        margin-top: 200px;
        margin-left: -250px;
    }
    img{
        width: 80%;
        margin-top: -260px;
    }
`

export const FooterContainer = styled.div`
    border: 2px solid grey;
    padding: 20px;
    border-bottom: 0;
    border-left: 0;
    border-right: 0;
    margin-top: 80px;

    .top{
        margin-top: 20px;
        width: 100%;
        max-width: 800px;   
        margin-left: 280px;
        margin-bottom: 20px;
    }
    .top p{
        width: 100%;
        font-size: 25px;
        line-height: 70%;
        color: #121212;
    }
    .top span{
        font-weight: 700;
    }
    .top input{
        width: 500px;
        padding: 10px; 
        height: 50px;
        border: 1px solid rgba(18, 18, 18, 0.3);
        box-sizing: border-box;
        border-radius: 10px 0px 0px 10px;
    }
    .btn{
        width: 180px;
        height: 50px;
        color: #fff;
        letter-spacing: 0.2em;
        text-transform: uppercase;
        font-family: 'Neue Haas Grotesk Display Pro';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        background-color: #121212;
        border-radius: 0px 10px 10px 0px;
    }

    .innerWrapper{
        display: grid;
        grid-template-columns: repeat(5, 1fr);
    }

    .inner{
        display: flex;
        flex-direction: column;
    }
    .inner a{
        margin-top: 10px;
        margin-left: 100px;
        text-align: left;
    }
    @media only screen and (min-width: 601px) and (max-width: 768px) {
        .innerWrapper{
            grid-template-columns: 1fr;
        }
    }
`