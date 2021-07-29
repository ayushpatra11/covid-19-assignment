import React from 'react'
import styled from 'styled-components'
import {PreventionCards, PreventionCardsReverse} from '../components/PreventionCards';
import mask from '../images/Maskgirl.png';
import tissue from '../images/tissue.png'
import avoid from '../images/avoid.png'
import washhands from '../images/washhands.png'
import lefthalfwhat from '../images/lefthalfwhat.png'
import righthalfwhat from '../images/righthalfwhat.png'
import rightfullwhat from '../images/rightfullwhat.png'

const Container = styled.div`
    display: flex;
    margin-top: 60px;
    background: #FFFF;
    flex-direction: column;
    text-align: center;
    position: relative;
    width: 100%;
    min-height: 80vh;
    justify-content: center;
    align-items: center;
`;

const TextHeading = styled.h1`
    font-weight: 700;
    font-size: 1.8125rem;
    color:  #FA5652;
    line-height: 39.04px;
    margin: 11px 5px;
    padding: 0;

    @media only screen and (max-width: 1450px){
        font-size: 1.54rem;
    }
    @media only screen and (max-width: 400px){
        font-size: 1.045rem;
    }
`;


const TextBanner = styled.h1`
    font-weight: 700;
    font-size: 3.125rem;
    color: #035755;
    line-height: 59.5px;
    margin: 5px 5px 20px 5px;
    padding: 0;
    @media only screen and (max-width: 1450px){
        font-size: 2.65rem;
        line-height: 41.38px;
    }
    @media only screen and (max-width: 400px){
        font-size: 1.92rem;
        line-height: 32.33px;
    }
`;

const TextInfo = styled.h1`
    font-family: 'Archivo', sans-serif;
    font-weight: 400;
    max-width: 720px;
    color: #4B4F51;
    font-size: 1.125rem;
    margin: 5px;
    padding: 10px 0;
    line-height: 45.6px;
    
    @media only screen and (max-width: 1450px){
        font-size: 0.903rem;
        line-height: 22.6px;
        max-width: 500px;
    }
    @media only screen and (max-width: 1300px){
        ${'' /* font-size: 0.686rem;
        line-height: 18.6px; */}
        max-width: 400px;
    }
    @media only screen and (max-width: 400px){
        font-size: 0.686rem;
        line-height: 18.6px;
        max-width: 350px;
    }
`;

const ImageLeft = styled.img`
    object-fit: contain;
    width: 11.42%; 
    position: absolute;
    left: 0;  
    top: 23.76%;
    ${'' /* @media only screen and (max-width: 400px){
       width: 80%;
       margin-bottom: 0;
    } */}
`;
const ImageRight = styled.img`
    object-fit: contain;
    width: 6.7%; 
    position: absolute;
    right: 11.7%;  
    bottom: 20.97%;
    ${'' /* @media only screen and (max-width: 400px){
       width: 80%;
       margin-bottom: 0;
    } */}
`;
const ImageRightHalf = styled.img`
    object-fit: contain;
    width: 12.4%; 
    position: absolute;
    right: 0;  
    bottom: 5.97%;
    ${'' /* @media only screen and (max-width: 400px){
       width: 80%;
       margin-bottom: 0;
    } */}
`;

function Prevention() {
    return (
        <div id="prevention">
            <Container>
                <TextHeading>Covid-19</TextHeading>
                <TextBanner>What Should We Do</TextBanner>
                <TextInfo>Corona viruses are a type of virus. There are many different kinds, and some cause disease. A newly identified type has caused</TextInfo>
                <PreventionCards num="01" banner="Wear Masks" info='Continually seize impactful vortals rather than future-proof supply chains. Uniquely exploit emerging niches via fully tested meta-services. Competently pursue standards compliant leadership skills vis-a-vis pandemic "outside the box" thinking. Objectively' img={mask} />
                <PreventionCardsReverse num="02" banner="Wash Your Hands" info='Continually seize impactful vortals rather than future-proof supply chains. Uniquely exploit emerging niches via fully tested meta-services. Competently pursue standards compliant leadership skills vis-a-vis pandemic "outside the box" thinking. Objectively Continually seize impactful vortals ' img={washhands}  />
                <PreventionCards num="03" banner="Use nose -  rag" info='Continually seize impactful vortals rather than future-proof supply chains. Uniquely exploit emerging niches via fully tested meta-services. Competently pursue standards compliant leadership skills vis-a-vis pandemic "outside the box" thinking. Objectively ' img={tissue} />
                <PreventionCardsReverse num="04" banner="Avoid Contacts" info='Continually seize impactful vortals rather than future-proof supply chains. Uniquely exploit emerging niches via fully tested meta-services. Competently pursue standards compliant leadership skills vis-a-vis pandemic' img={avoid}  />

                <ImageLeft src={lefthalfwhat} alt="" />
                <ImageRight src={rightfullwhat} alt="" />
                <ImageRightHalf src={righthalfwhat} alt="" />
            </Container>
        </div>
    )
}

export default Prevention
