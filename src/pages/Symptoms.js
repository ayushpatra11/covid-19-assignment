import React from 'react'
import styled from 'styled-components'
import symptoms from '../images/symptoms.png'
import left from '../images/leftsymp.png'
import right from '../images/rightsymp.png'
const Container = styled.div`
    display: flex;
    margin-top: 80px;
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

const Image = styled.img`
    object-fit: contain;
    width: 60.81%; 
    margin-bottom: 120px;  
    @media only screen and (max-width: 400px){
       width: 80%;
       margin-bottom: 0;
    }
`;
const ImageLeft = styled.img`
    object-fit: contain;
    width: 6.7%; 
    position: absolute;
    left: 4.7%;  
    bottom: 33.76%;
    ${'' /* @media only screen and (max-width: 400px){
       width: 80%;
       margin-bottom: 0;
    } */}
`;

const ImageRight = styled.img`
    object-fit: contain;
    width: 11.4%; 
    position: absolute;
    right: 4.7%;  
    bottom: 23.76%;
    ${'' /* @media only screen and (max-width: 400px){
       width: 80%;
       margin-bottom: 0;
    } */}
`;



function Symptoms() {
    return (
        <div id="symptoms">
            <Container>
                <TextHeading>Covid-19</TextHeading>
                <TextBanner>Symptoms</TextBanner>
                <TextInfo>Corona viruses are a type of virus. There are many different kinds, and some cause disease. A newly identified type has caused a recent outbreak of respiratory</TextInfo>
                <Image src={symptoms} alt="" />
                <ImageLeft src={left} alt="" />
                <ImageRight src={right} alt="" />
            </Container>
        </div>
    )
}

export default Symptoms
