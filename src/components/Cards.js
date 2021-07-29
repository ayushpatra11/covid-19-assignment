import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion';
import girl from '../images/girl.png'


const Card = styled.div`
    width: 400px;
    height: 575px;
    display: flex;
    text-align: center;
    flex-direction: column;
    background: #FFFFFF;
    box-shadow: 0px 35px 87px rgba(0, 0, 0, 0.11);
    border-radius: 10px;
    margin: 30px;

    &:hover{
        border-bottom: 6px solid #FA5652;
    }
    @media only screen and (max-width: 1450px){
        width: 380px;
        height: 540px;
    }
    @media only screen and (max-width:450px){
        width: 330px;
        height: 540px;
    }
    @media only screen and (max-width:380px){
        width: 260px;
        height: 600px;
    }
`;

const Image = styled.img`
    object-fit: contain;
    height: 249px;
    margin: 65px 0 50px 0;
`;
const TextBannerB = styled(motion.h1)`
    font-weight: 700;
    font-size:2.25rem;
    color: #035755;
    line-height: 59.5px;
    margin: 5px 5px 20px 5px;
    padding: 0;
    @media only screen and (max-width: 1450px){
        font-size: 1.9125rem;
        line-height: 41.38px;
    }
    @media only screen and (max-width: 500px){
        font-size: 1.3725rem;
        line-height: 32.33px;
    }
`;

const TextInfoB = styled(motion.h1)`
    font-family: 'Archivo', sans-serif;
    font-weight: 400;
    color: #4B4F51;
    font-size: 1.125rem;
    margin: 5px;
    padding: 10px 0;
    line-height: 33.3px;
    
    @media only screen and (max-width: 1450px){
        font-size: 0.903rem;
        line-height: 28.3px;
    }
    @media only screen and (max-width: 400px){
        font-size: 0.686rem;
        line-height: 20.313px;
    }
`;

function Cards({imgname, text, heading}) {
    return (
        <div>
            <Card>
                <Image src={imgname} alt="" />
                <TextBannerB>{heading}</TextBannerB>
                <TextInfoB>{text}</TextInfoB>
            </Card>
        </div>
    )
}

// {require(`../images/${imgname}.png`)}

export default Cards
