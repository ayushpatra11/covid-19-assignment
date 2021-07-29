import React from 'react'
import {motion} from 'framer-motion'
import styled from 'styled-components'
import landingimage from '../images/landing.png'
import overviewimage from '../images/Virusoverview.png'
import virus1 from '../images/virus1.png'
import virus2 from '../images/virus2.png'

const Bg = styled.div`
    background-image: linear-gradient(#fee6e5 0%, #FFFF 100%);
    ${'' /* mask-image: linear-gradient(rgba(0, 0, 0, 0.2), transparent); */}
    height: 100vh;
    width: 100%;
    position: absolute;
    top: 0;
    z-index: -100;
`;

const Bg2 = styled.div`
    background-image: linear-gradient(#FFF 0%, #fee6e5 100%);
    ${'' /* mask-image: linear-gradient(rgba(0, 0, 0, 0.2), transparent); */}
    height: 100vh;
    width: 100%;
    position: absolute;
    bottom: 0;
    z-index: -100;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

const ContainerTop = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 120px;
    min-height: 90vh;
    background: transparent;
    position: relative;
    @media only screen and (max-width: 1100px){
        flex-direction: column;
        margin-top: 10px;
    }
`;

const ContainerBottom= styled.div`
    display: flex;
    background: #FFFF;
    flex-direction: row;
    min-height: 90vh;
    background: transparent;
    position: relative;
    @media only screen and (max-width: 1100px){
        flex-direction: column;
        
    }
`;

const Left=styled.div`
    background: transparent;
    height: 90%;
    width: 50%;
    align-items: center;
    @media only screen and (max-width: 1100px){
        height: 30%;
        width: 100%;
    }
`;
const RightBottom=styled.div`
    background: transparent;
    height: 90%;
    width: 50%;
    align-items: center;
@media only screen and (max-width: 1100px){
    height: 70%;
    width: 100%;
}
`;


const Right=styled.div`
    background: transparent;
    min-height: 60vh;
    position: relative;
    width: 50%;
    padding: 0;
    align-items: center;
    @media only screen and (max-width: 1100px){
        height: 70%;
        width: 100%;
        min-height: 40vh;
    }
    @media only screen and (max-width: 610px){
        min-height: 20vh;
    }
    
`;

const LeftBottom=styled.div`
    background: transparent;
    min-height: 35vh;
    position: relative;
    width: 50%;
    text-align: center;
    align-items: center;
    margin: 50px 0px 0px 0;
    @media only screen and (max-width: 1100px){
        width: 100%;
        min-height: 40vh;
    }
    @media only screen and (max-width: 730px){
        min-height: 20vh;
    }
    @media only screen and (max-width: 720px){
        min-height: 27vh;
    }
    @media only screen and (max-width: 720px){
        min-height: 35vh;
    }
    @media only screen and (max-width: 680px){
        min-height: 21vh;
    }
`;

const Image = styled.img`
    object-fit: cover;
    width: 110%;
    position: absolute;
        right: 0;
    ${'' /* left: -97px; */}
    margin-top: 22px;
    @media only screen and (max-width: 1100px){
        width: 65%;
        top: -50px;
        position: absolute;
        right: 0;
    }
    @media only screen and (max-width: 720px){
        width: 90%;
        top: -50px;
        position: absolute;
        right: 0;
    }
`;

const ImageBottom = styled.img`
    object-fit: cover;
    width: 100%;
    
    ${'' /* position: absolute; */}
    ${'' /* left: -97px; */}
    margin-top: 22px;
    @media only screen and (max-width: 1100px){
        width: 60%;
    }
    @media only screen and (max-width: 720px){
        width: 70%;
    }
`;

const Text = styled.div`
    text-align: left;
    padding: 130px 0 130px 130px;
    margin: 146px 25px 60px 108px;
    @media only screen and (max-width: 1600px){
        padding: 130px 0 130px 80px;
        margin: 146px 25px 60px 108px;
    }

    @media only screen and (max-width: 1100px){
        margin: auto;
        padding: 50px 250px;
        text-align: center;
    }
    @media only screen and (max-width: 894px){
        padding: 50px 150px;
    }
    @media only screen and (max-width: 700px){
        padding: 50px;
    }
`;

const TextB = styled.div`
    text-align: left;
    padding: 130px 160px 130px 0;
    margin: 146px 25px 60px 78px;
    @media only screen and (max-width: 1600px){
        padding: 130px 0 130px 80px;
        margin: 146px 25px 60px 108px;
    }

    @media only screen and (max-width: 1100px){
        margin: auto;
        padding: 50px 250px;
        text-align: center;
    }
    @media only screen and (max-width: 894px){
        padding: 50px 150px;
    }
    @media only screen and (max-width: 700px){
        padding: 50px;
    }
`;

const TextHeading = styled(motion.h1)`
    font-weight: 700;
    font-size: 2rem;
    color:  #FA5652;
    line-height: 39.04px;
    margin: 11px 5px;
    padding: 0;
    @media only screen and (max-width: 1450px){
        font-size: 1.7rem;
    }
    @media only screen and (max-width: 768px){
        font-size: 1.23rem;
    }
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
    ${'' /* @media only screen and (max-width: 1300px){
        font-size: 1.045rem;
    } */}
`;

const TextBanner = styled(motion.h1)`
    font-weight: 700;
    font-size: 3.25rem;
    color: #035755;
    line-height: 72.28px;
    margin: 5px 5px 20px 5px;
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
    ${'' /* @media only screen and (max-width: 1300px){
        font-size: 1.92rem;
        line-height: 32.33px;
    } */}
`;

const TextInfo = styled(motion.h1)`
    font-family: 'Archivo', sans-serif;
    font-weight: 400;
    color: #4B4F51;
    font-size: 1.5rem;
    margin: 5px;
    padding: 10px 0;
    line-height: 45.6px;
    
    @media only screen and (max-width: 1450px){
        font-size: 1.275rem;
        line-height: 22.6px;
    }
    @media only screen and (max-width: 768px){
        font-size: 0.922rem;
        line-height: 18.6px;
    }
`;

const TextInfoB = styled(motion.h1)`
    font-family: 'Archivo', sans-serif;
    font-weight: 400;
    color: #4B4F51;
    font-size: 1.25rem;
    margin: 5px;
    padding: 10px 0;
    line-height: 45.6px;
    
    @media only screen and (max-width: 1450px){
        font-size: 1.0625rem;
        line-height: 22.6px;
    }
    @media only screen and (max-width: 1300px){
        font-size: 0.768rem;
        line-height: 18.6px;
    }
`;

const Button = styled.button`
    width: 250px;
    font-family: 'Archivo', sans-serif;
    font-weight: 400;
    height: 80px;
    font-size: 1.5rem;
    border-radius: 65px;
    border: none;
    cursor: pointer;
    background: #FB4C47;
    color: white;
    margin: 30px 0px;
    box-shadow: 0px 8px 87px rgba(0, 0, 0, 0.1);
    @media only screen and (max-width: 1450px){
        font-size: 1.275rem;
        line-height: 22.6px;
        height: 68px;
        width: 212.5px;
        border-radius: 55.25px;
    }
    ${'' /* @media only screen and (max-width: 1300px){
        font-size: 0.922rem;
        line-height: 18.6px;
        height: 49.17px;
        width: 153.6px;
        border-radius: 39.95px;
    } */}
`;


const ButtonBottom = styled.button`
    width: 200px;
    font-family: 'Archivo', sans-serif;
    font-weight: 400;
    height: 65px;
    font-size: 1.25rem;
    border-radius: 65px;
    border: none;
    cursor: pointer;
    background: rgba(250, 86, 82, 0.15);
    color: #FA5652;
    margin: 30px 0px;
    box-shadow: 0px 8px 87px rgba(0, 0, 0, 0.1);
    @media only screen and (max-width: 1450px){
        font-size: 1.0625rem;
        line-height: 22.6px;
        height: 55.25px;
        width: 170px;
        border-radius: 55.25px;
    }
    ${'' /* @media only screen and (max-width: 1300px){
        font-size: 0.768rem;
        line-height: 18.6px;
        height: 39.95px;
        width: 122.88px;
        border-radius: 39.95px;
    } */}
`;


const ImageVirus2 = styled.img`
    position: absolute;
    right: 0;
    bottom: 18px;
    object-fit: contain;
    height: 392.94px;
    z-index: -1;
`;

const ImageVirus1 = styled.img`
    position: absolute;
    right: 40px;
    bottom: -90px;
    object-fit: contain;
    height: 186.08px;
    z-index: -1;
`;

function Overview() {
    return (
        <div  id="overview">
            <Bg/>
            <Container>
            <ContainerTop>
                <Left>
                    <Text>
                        <TextHeading>COVID-19 Alert</TextHeading>
                        <TextBanner>Stay At Home Quarantine To Stop Corona Virus</TextBanner>
                        <TextInfo>There is no specific medicine to prevent or treat coronavirus disease (COVID-19). People may need supportive care to .</TextInfo>
                        <Button>Let Us Help</Button>
                    </Text>
                </Left>
                <Right>
                    <Image src={landingimage} alt="" />
                </Right>
            </ContainerTop>
            <ContainerBottom>
                <LeftBottom>
                    <ImageBottom src={overviewimage} alt="" />
                </LeftBottom>
                <RightBottom>
                    <TextB>
                        <TextHeadingB>What Is Covid-19</TextHeadingB>
                        <TextBannerB>Coronavirus</TextBannerB>
                        <TextInfoB>Corona viruses are a type of virus. There are many different kinds, and some cause disease. A newly identified type has caused a recent outbreak of respiratory illness now called COVID-19.Lauren Sauer, M.S., the director of operations with the Johns Hopkins Office of Critical Event Preparedness and Response</TextInfoB>
                        <ButtonBottom>Learn More</ButtonBottom>
                    </TextB>
                </RightBottom>
                <ImageVirus2 src={virus2} alt="" />
                <ImageVirus1 src={virus1} alt="" />
            </ContainerBottom>
            </Container>
            {/* <Bg2 /> */}
        </div>
    )
}

export default Overview
