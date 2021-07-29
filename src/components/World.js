import React, {useState, useEffect} from 'react'
import styled from 'styled-components'


const TextBannerName = styled.h1`
    font-weight: 700;
    font-size:1.9rem;
    color:${(props)=>props.textcolor};
    line-height: 59.5px;
    margin-right: 50px;
    padding: 0;
    @media only screen and (max-width: 1450px){
        font-size: 1.7125rem;
        line-height: 41.38px;
        margin-right: 30px;
    }
    @media only screen and (max-width: 600px){
        font-size: 1.1725rem;
        line-height: 32.33px;
        margin-right: 20px;
    }
`;

const Num = styled.div`
    height: 100%;
    padding: 10px;
    width: 100%;
    display: grid;
    grid-template-rows: 1fr 1fr;
`;

const TextBannerNum = styled.h1`
    font-weight: 700;
    font-size:1.6rem;
    color: ${(props)=>props.textcolor};
    line-height: 59.5px;
    padding: 0;
    @media only screen and (max-width: 1450px){
        font-size: 1.2125rem;
        line-height: 41.38px;
    }
    @media only screen and (max-width: 500px){
        font-size: 0.7725rem;
        line-height: 32.33px;
    }
`;

function World() {

    const [wdata, setWdata]=useState({});
    const [loading, setLoading]=useState(true);

    useEffect(() => {
        fetch("https://disease.sh/v3/covid-19/all")
        .then(response => response.json())
        .then(data => {
            setWdata(data);
            console.log(data);
            setLoading(false);
        })
    }, []);
    if(!loading){
        return (
            <>
            <Num><TextBannerName  textcolor="#128E5A">Total Cases</TextBannerName><TextBannerNum textcolor="#128E5A">{wdata.cases.toLocaleString()}</TextBannerNum></Num>
                       <Num><TextBannerName  textcolor="#035755">Total Recoveries</TextBannerName><TextBannerNum  textcolor="#035755">{wdata.recovered.toLocaleString()}</TextBannerNum></Num>
                       <Num><TextBannerName  textcolor="#F44A45">Total Deaths</TextBannerName><TextBannerNum  textcolor="#F44A45">{wdata.deaths.toLocaleString()}</TextBannerNum></Num>
            </>
        )
    }
}

export default World
