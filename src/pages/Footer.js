import React from 'react'
import styled from 'styled-components'
import logo from '../images/logo.png'
import righthalfnew from '../images/righthalfnew.png'
import rightfullnew from '../images/rightfullnew.png'
import '../components/Navbar.css'
import {Link as Links, animateScroll as scroll} from 'react-scroll';

const Bg = styled.div`
    background-image: linear-gradient(#FFF 0%, #fee6e5 100%);
    ${'' /* mask-image: linear-gradient(rgba(0, 0, 0, 0.2), transparent); */}
    height: 100vh;
    width: 100%;
    position: fixed;
    bottom: 0;
    z-index: -100;
`;

const Container = styled.div`
    display: flex;
    position: relative;
    background-image: linear-gradient(#FFF 0%, #fee6e5 100%);
    flex-direction: column;
    width: 100%;
    min-height: 60vh;
    align-items: center;
    text-align: center;
    justify-content: flex-start;
`;

const TextBanner = styled.h1`
    font-weight: 700;
    font-size: 4rem;
    color: #035755;
    line-height: 72.28px;
    margin: 5px;
    padding: 0;
    @media only screen and (max-width: 1450px){
        font-size: 2.76rem;
        line-height: 50.28px;
    }
    @media only screen and (max-width: 768px){
        font-size: 2rem;
        line-height: 39.28px;
    }
`;


const TextBoxDiv = styled.div`
    display: grid;
    grid-template-columns: 2.8fr 1fr;
    border: none;
    border-radius: 57px;
    width: 41.1%;
    height: 114px;
    background: #FFF;
    margin-top: 62px;
    align-items: center;
    @media only screen and (max-width: 1300px){
        height: 78px;
        width: 45.1%;
    }
    @media only screen and (max-width: 980px){
        height: 58px;
        width: 71.1%;
    }
`;

const Input = styled.input`
    height: 60%;
    width: 80%;
    margin: 10px 0 10px 30px;
    padding: 0 10px;
    font-size: 1.4rem;
    border-radius: 57px;
    border: none;
    outline: none;
    color: #758681;
    font-family: 'Archivo', sans-serif;
    font-weight: 400;
    @media only screen and (max-width: 1100px){
        font-size: 1rem;
        line-height: 22.6px;
        margin: 10px 0 10px 10px;
    }
    @media only screen and (max-width: 600px){
        font-size: 0.7rem;
        line-height: 22.6px;
        margin: 10px 0 10px 10px;
    }
`;

const Button = styled.button`
    width: 80%;
    font-family: 'Archivo', sans-serif;
    font-weight: 400;
    height: 68.4%;
    font-size: 1.5rem;
    border-radius: 65px;
    border: none;
    cursor: pointer;
    background: #FB4C47;
    color: white;
    margin: auto;
    box-shadow: 0px 8px 87px rgba(0, 0, 0, 0.1);
    @media only screen and (max-width: 1100px){
        font-size: 0.9rem;
        line-height: 22.6px;
    }
    ${'' /* @media only screen and (max-width: 1300px){
        font-size: 0.922rem;
        line-height: 18.6px;
        height: 49.17px;
        width: 153.6px;
        border-radius: 39.95px;
    } */}
`;

const Logo = styled.div`
    font-family: 'Red Hat Display', sans-serif;
    font-weight: 700;
    font-size: 19px;
    color: #035755;
    justify-self: start;
    margin-left: 20px;
    cursor: pointer;
    text-decoration: none;
    display: flex;
    align-items: center;
    text-transform: uppercase;
`;

const FooterContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 70%;
    min-height: 300px;
    margin-top: 140px;
    background: transparent;
    justify-content: space-between;
    @media only screen and (max-width: 1350px){
        flex-direction: column;
        align-items: center;
    }
`;

const NavItems = styled.div`
    display: flex;
    flex-direction: row;
    min-height: 150px;
    width: 70%;
    background: transparent;
    align-items: center;
    justify-content: center;
    @media only screen and (max-width: 1350px){
        flex-direction: column;
    }
`;

const IconItems = styled.div`
    display: flex;
    flex-direction: row;
    min-height: 150px;
    width: 10%;
    justify-content: space-between;
    background: transparent;
    align-items: center;
    @media only screen and (max-width: 1350px){
        width: 30%;
    }
`;


const NavLinks = styled(Links)`
    cursor: pointer;
    font-size: 23px;
    font-family: 'Archivo', sans-serif;
    font-weight: 400;
    text-decoration: none;
    color: #035755;
    display: flex;
    align-items: center;
    margin: 5px;
    text-decoration: none;
    padding: 0.5rem 1rem 0 1rem;
    height: 30%;
    @media only screen and (max-width: 1350px){
        font-size: 17px;
        margin-top: 10px;
    }
`;

const CopyRight = styled.div`
    color: #758681;
    font-family: 'Archivo', sans-serif;
    font-weight: 400;
    font-size: 23px;
    margin: 20px;
    @media only screen and (max-width: 1350px){
        font-size: 17px;
    }
`;

const ImageRight = styled.img`
    object-fit: contain;
    width: 7.83%; 
    position: absolute;
    right: 14.2%;  
    bottom: 64.6%;
    ${'' /* @media only screen and (max-width: 400px){
       width: 80%;
       margin-bottom: 0;
    } */}
`;
const ImageRightHalf = styled.img`
    object-fit: contain;
    width: 14.7%; 
    position: absolute;
    right: 0;  
    bottom: 9.97%;
    ${'' /* @media only screen and (max-width: 400px){
       width: 80%;
       margin-bottom: 0;
    } */}
`;

function Footer() {
    return (
        <div>
            {/* <Bg /> */}
            <Container>
                <TextBanner>Have Questions in mind?<br></br> Let us help you</TextBanner>
                <TextBoxDiv>
                    <Input type="text" defaultValue="snmonydemo@gmail.com" />
                    <Button>Send</Button>
                </TextBoxDiv>
                <FooterContainer>
                <Logo><img style={{marginRight: '10px'}} src={logo} alt="LOGO"/> COVID-19</Logo>
                <NavItems>
                    <NavLinks to='overview'
                spy={true} smooth={true} offset={-120} duration={500} exact='true'
                >Overview</NavLinks>
                <NavLinks to='contagion'
                spy={true} smooth={true} offset={-120} duration={500} exact='true'
                >Contagion</NavLinks>
                <NavLinks to='symptoms'
                spy={true} smooth={true} offset={-120} duration={500} exact='true'
                >Symptoms</NavLinks>
                <NavLinks to='prevention'
                spy={true} smooth={true} offset={-120} duration={500} exact='true'
                >Prevention</NavLinks>
                </NavItems>
                <IconItems>
                <i class="fab fa-facebook-f" style={{color: '#035755'}}></i>
                <i class="fab fa-youtube" style={{color: 'red'}}></i>
                <i class="fab fa-vimeo-v" style={{color: '#035755'}}></i>
                <i class="fab fa-twitter" style={{color: '#035755'}}></i>
                </IconItems>
                </FooterContainer>
                <CopyRight>2020 @ All rights reserved by pixelspark.co</CopyRight>
                <ImageRightHalf src={righthalfnew} alt="" />
                <ImageRight src={rightfullnew} alt="" />
            </Container>
        </div>
    )
}

export default Footer
