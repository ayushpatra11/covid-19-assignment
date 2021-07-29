import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    margin: 0 0 0 10px;
    min-height: 60px;
    display: grid;
    grid-template-columns: 1fr 2fr 1fr 1fr;
    justify-content: center;
    align-items: center;
    
`;

const TextBannerB = styled.h1`
    font-weight: 700;
    font-size:1.5rem;
    color: #035755;
    line-height: 59.5px;
    margin-right: 50px;
    padding: 0;
    @media only screen and (max-width: 1450px){
        font-size: 1.3125rem;
        line-height: 41.38px;
        margin-right: 30px;
    }
    @media only screen and (max-width: 600px){
        font-size: 1.1725rem;
        line-height: 32.33px;
        margin-right: 20px;
    }
`;

const TextBannerC = styled.h1`
    font-weight: 700;
    font-size:1.3rem;
    color: #035755;
    line-height: 59.5px;
    padding: 0;
    @media only screen and (max-width: 1450px){
        font-size: 1.0125rem;
        line-height: 41.38px;
    }
    @media only screen and (max-width: 500px){
        font-size: 0.7725rem;
        line-height: 32.33px;
    }
`;

const Image = styled.img`
    object-fit: contain;
    height: 40px;
    margin: 5px 10px 5px 5px;
    border-radius: 16px;
    @media only screen and (max-width: 780px){
        height: 30px;
    }
`;


function Cases({data}) {
    const countrycode=data.countryInfo.iso2;
    const newc=data.todayCases;
    const newr=data.todayRecovered;
    const newd=data.todayDeaths;
    var flag=0;
    const ico = ()=> {
        if(newc>newr+newd)
        {
            return(<i style={{margin:"10px", textAlign: "center", color: "#F44A45", fontSize: "1.2rem"}} class="fas fa-caret-up"></i>)
        }
        else if(newc<newr+newd){
            return(
                <i style={{margin:"10px", textAlign: "center", color: "#128E5A", fontSize: "1.2rem"}} class="fas fa-caret-down"></i>
                
            )
        }
        else    
            return(<i style={{margin:"10px", textAlign: "center", color: "#035755", fontSize: "1.2rem"}} class="fas fa-equals"></i>)
    }
    return (
        <div>
            <Container>
                <Image src={`https://www.countryflags.io/${countrycode}/flat/64.png`} alt="flag" />
                <TextBannerB>{data.country}</TextBannerB>
                <TextBannerC>{data.active.toLocaleString()}</TextBannerC>
                {/* <i style={{margin:"10px", textAlign: "center"}} class="fas fa-caret-up"></i> */}
                {ico()}
            </Container>
        </div>
    )
}

export default Cases
