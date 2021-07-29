import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion';
import Cards from '../components/Cards';
import girl from '../images/girl.png';
import hands from '../images/hands.png';
import drink from '../images/drink.png';

const Container = styled.div`
    display: flex;
    background: transparent;
    ${'' /* flex-wrap: wrap; */}
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 100%;
    min-height: 80vh;
`;

const TextHeadingB = styled(motion.h1)`
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


const TextBannerB = styled(motion.h1)`
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

const TextInfoB = styled(motion.h1)`
    font-family: 'Archivo', sans-serif;
    font-weight: 400;
    max-width: 600px;
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

const CardContainer = styled.div`
    display: flex;
    margin-top: 96px;
    flex-wrap: wrap;
    width: 100%;
    height: auto;
    justify-content: center;
`;

function Contagion() {
    return (
        <div id="contagion">
            <Container>
                <TextHeadingB>Covid-19</TextHeadingB>
                <TextBannerB>Contagion</TextBannerB>
                <TextInfoB>Corona viruses are a type of virus. There are many different kinds, and some cause disease. A newly identified type</TextInfoB>
            <CardContainer>
                <Cards imgname={girl} heading="Air Transmission" text="Objectively evolve tactical expertise before extensible initiatives. Efficiently simplif" />
                <Cards imgname={hands} heading="Human Contacts"  text="Objectively evolve tactical expertise before extensible initiatives. Efficiently simplif"/>
                <Cards imgname={drink} heading="Contained Objects" text="Objectively evolve tactical expertise before extensible initiatives. Efficiently simplif"/>
            </CardContainer>
            </Container>
        </div>
    )
}

export default Contagion
