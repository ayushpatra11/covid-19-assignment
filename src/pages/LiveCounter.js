import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import GoogleMapReact from 'google-map-react';
import style from '../components/mapStyle';
import Cases from '../components/Cases';
import axios from 'axios';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 90%;
    min-height: 90vh;
    margin: 120px auto;
    position: relative;
    justify-content: center;
    align-items: center;
    @media only screen and (max-width: 1100px){
        flex-direction: column;
    }
`;

const MapandCounter = styled.div`
    
    ${'' /* display: flex;
    flex-direction: column; */}
    width: 70%;
    min-height: 90vh;
    align-items: center;
    padding: 0;
    @media only screen and (max-width: 600px){
        width: 95%;
    }
`;

const TextBanner = styled.h1`
    font-weight: 700;
    font-size: 3rem;
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

const MapandCounter2 = styled.div`
    
    width: 28%;
    margin: 20px;
    min-height: 90vh;
    justify-content: center;
    align-items: center;
    background: linear-gradient(360deg, #FFFBFB -79.45%, #FDFDFD 105.35%);
    box-shadow: 0px 7px 95px rgba(0, 0, 0, 0.07);
    border-radius: 0px;
    @media only screen and (max-width: 1100px){
        width: 60%;
    }
    
    @media only screen and (max-width: 800px){
        width: 80%;
    }
`;

const Counter1 = styled.div`
    display: grid;
    margin: 0;
    grid-template-columns: 1fr 1fr 1fr;
    width: 100%;
    height: 18%;
    h1{
        margin: 20px 0;
        text-align: center;
        }
`;

const Num = styled.div`
    height: 100%;
    padding: 5px;
    width: 100%;
    display: grid;
    grid-template-rows: 1fr 1fr;
`;

const Counter = styled.div`
    display: flex;
    margin: 10px;
    flex-direction: row;
    width: 90%;
    height: 18%;
    h1{
        margin: 20px auto;
        text-align: center;
        }
`;

const Map = styled.div`
    height: 70vh;
    width: 100%;
`;

const CounterCont = styled.div`
    height: 70vh;
    width: 90%;
    margin: 20px;
    overflow-y: scroll;
    overflow-x: hidden;
    ::-webkit-scrollbar {
    width: 5px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
    background: #fff;
    border-radius: 30px;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
    background: #035755;
    border-radius: 30px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
    background: #F44A45;
    }
`;


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




function LiveCounter() {

    const [data, setData]=useState([]);
    const [wdata, setWdata]=useState({});
    const [loading, setLoading]=useState(true);

    async function getWcount(){
        try{
        const res=await axios.get("https://disease.sh/v3/covid-19/all");
        const actdata=await res;
        console.log(actdata);
        setWdata(actdata.data);
        setLoading(false);
        }
        catch(err){
            console.log(err);
        }
    } 
    useEffect(() => {
        getWcount();
    }, []);

    useEffect(() => {
        async function getCount(){
            
            const res=await axios.get("https://disease.sh/v3/covid-19/countries?sort=cases");
            // console.log(res.data);
            setData(res.data);
        } 
        getCount();
        
    },[]); 

    const defaultProps = {
        center: {
          lat: 28.464297050949614, 
          lng: 77.02785593797527
        },
        zoom: 0
      };

    if(!loading){
        return (
            <>
            <Container>
               <MapandCounter>
                   <Counter1>
                   
                   <Num><TextBannerName  textcolor="#035755">Total Cases</TextBannerName><TextBannerNum textcolor="#035755">{wdata.cases.toLocaleString()}</TextBannerNum></Num>
                       <Num><TextBannerName  textcolor="#128E5A">Total Recoveries</TextBannerName><TextBannerNum  textcolor="#128E5A">{wdata.recovered.toLocaleString()}</TextBannerNum></Num>
                       <Num><TextBannerName  textcolor="#F44A45">Total Deaths</TextBannerName><TextBannerNum  textcolor="#F44A45">{wdata.deaths.toLocaleString()}</TextBannerNum></Num>
                       
                   {/* {wdata && NumGet()} */}
                       {/* <Num><TextBannerName  textcolor="#128E5A">Total Cases</TextBannerName><TextBannerNum textcolor="#128E5A">{wdata && wdata.cases.toLocaleString()}</TextBannerNum></Num>
                       <Num><TextBannerName  textcolor="#035755">Total Recoveries</TextBannerName><TextBannerNum  textcolor="#035755">{wdata && wdata.recovered.toLocaleString()}</TextBannerNum></Num>
                       <Num><TextBannerName  textcolor="#F44A45">Total Deaths</TextBannerName><TextBannerNum  textcolor="#F44A45">{wdata && wdata.deaths.toLocaleString()}</TextBannerNum></Num> */}
                   </Counter1>
                   <Map>
                    
                   <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyCQalk3vEyAm-cnJCTPmcifcuVQ9YdcA48' }}
                    options={{styles: style, backgroundColor: '#167C51'}}
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}
                    ></GoogleMapReact>

                   </Map>
               </MapandCounter>
               <MapandCounter2>
                   <Counter>
                       <TextBanner>Live Counter </TextBanner>
                   </Counter>
                   <CounterCont>
                       {
                           data && data.map(country => {
                               return(
                                <Cases data={country} />
                           )
                           })
                       }
                   </CounterCont>
               </MapandCounter2>

           </Container>
            </>
            
        )
    }

    
    return (
        <div>
           <Container>
               <MapandCounter>
                   <Counter1>
                   
                   
                   {/* {wdata && NumGet()} */}
                       {/* <Num><TextBannerName  textcolor="#128E5A">Total Cases</TextBannerName><TextBannerNum textcolor="#128E5A">{wdata && wdata.cases.toLocaleString()}</TextBannerNum></Num>
                       <Num><TextBannerName  textcolor="#035755">Total Recoveries</TextBannerName><TextBannerNum  textcolor="#035755">{wdata && wdata.recovered.toLocaleString()}</TextBannerNum></Num>
                       <Num><TextBannerName  textcolor="#F44A45">Total Deaths</TextBannerName><TextBannerNum  textcolor="#F44A45">{wdata && wdata.deaths.toLocaleString()}</TextBannerNum></Num> */}
                   </Counter1>
                   <Map>
                    
                   <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyCQalk3vEyAm-cnJCTPmcifcuVQ9YdcA48' }}
                    options={{styles: style, backgroundColor: '#167C51'}}
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}
                    ></GoogleMapReact>

                   </Map>
               </MapandCounter>
               <MapandCounter2>
                   <Counter>
                       <TextBanner>Live Counter </TextBanner>
                   </Counter>
                   <CounterCont>
                       {
                           data && data.map(country => {
                               return(
                                <Cases data={country} />
                           )
                           })
                       }
                   </CounterCont>
               </MapandCounter2>

           </Container> 
        </div>
    )
}

export default LiveCounter
