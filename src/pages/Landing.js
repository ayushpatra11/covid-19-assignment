import React from 'react'
import Contagion from './Contagion'
import Footer from './Footer'
import LiveCounter from './LiveCounter'
import Overview from './Overview'
import Prevention from './Prevention'
import Symptoms from './Symptoms'

function Landing() {
    return (
        <div id="home" >
            <Overview />
            <Contagion />
            <Symptoms />
            <Prevention />
            <LiveCounter />
            <Footer />
         
        </div>
    )
}

export default Landing
