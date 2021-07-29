import React from 'react'
import styled from 'styled-components'
// import img from '../images/Maskgirl.png'

const Card = styled.div`
    margin: 25px auto;
    width: 90%;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0;
    ${'' /* @media only screen and (max-width: 1700px){
        width: 80%;
    } */}
    @media only screen and (max-width: 960px){
        flex-direction: column-reverse;
        margin: 25px 0 25px 0;
        width: 600px;
    }
    @media only screen and (max-width: 660px){
        flex-direction: column-reverse;
        margin: 25px 0 25px 0;
        width: 300px;
    }
`;

const CardRev = styled.div`
    margin: 25px auto;
    width: 90%;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0;
    ${'' /* @media only screen and (max-width: 1700px){
        width: 80%;
    } */}
    @media only screen and (max-width: 960px){
        flex-direction: column;
        margin: 25px 0 25px 0;
        width: 600px;
    }
    @media only screen and (max-width: 660px){
        flex-direction: column;
        margin: 25px 0 25px 0;
        width: 300px;
    }
`;

const TextPart = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    width: 47.8%;
    height: 43.8%;
    margin:0 90px 0 0;
    @media only screen and (max-width: 960px){
        margin: auto;
        width: 100%;
    }
`;

const Number = styled.h1`
    color: #FA5652;
    font-size: 44px;
    border-radius: 50%;
    background: #FEE6E5;
    padding: 3px;
    height: 65px;
    width: 65px;
    margin: 0 40px 0 0;
    @media only screen and (max-width: 960px){
        padding: 3px;
        height: 55px;
        width: 55px;
        font-size: 34px;
    }
    @media only screen and (max-width: 660px){
        padding: 4px;
        height: 45px;
        width: 45px;
        font-size: 34px;
    }
`;

const Info = styled.div`
    width: 90%;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const TextBanner = styled.h1`
    font-family: 'Archivo', sans-serif;
    font-weight: 500;
    font-size: 2.9375rem;
    color: #035755;
    line-height: 59.5px;
    margin: 5px 5px 5px 5px;
    padding: 0;
    @media only screen and (max-width: 1450px){
        font-size: 2.15rem;
        line-height: 41.38px;
    }
    @media only screen and (max-width: 400px){
        font-size: 1.52rem;
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
        font-size: 0.886rem;
        line-height: 18.6px;
        max-width: 400px;
    }
    @media only screen and (max-width: 400px){
        font-size: 0.686rem;
        line-height: 18.6px;
        max-width: 400px;
    }
`;

const ImageCont=styled.div`

    width: 50%;
    @media only screen and (max-width: 1260px){
        width: 40%;
    }
    @media only screen and (max-width: 960px){
        width: 80%;
        margin: 25px auto;
    }
`;

const Image = styled.img`
    object-fit: contain;
    width: 100%;
`;

export function PreventionCards({num, banner, info, img}) {
    return (
        <div>
            <Card>
                <TextPart>
                    <Number>{num}</Number>
                    <Info>
                        <TextBanner>{banner}</TextBanner>
                        <TextInfo>{info}</TextInfo>
                    </Info>
                </TextPart>
                <ImageCont>
                    <Image src={img} alt="" />
                </ImageCont>
            </Card>
        </div>
    )
}

export function PreventionCardsReverse({num, banner, info, img}) {
    return (
        <div>
            <CardRev>
                <ImageCont>
                    <Image src={img} alt="" />
                </ImageCont>
                <TextPart>
                    <Number>{num}</Number>
                    <Info>
                        <TextBanner>{banner}</TextBanner>
                        <TextInfo>{info}</TextInfo>
                    </Info>
                </TextPart>
            </CardRev>
        </div>
    )
}


