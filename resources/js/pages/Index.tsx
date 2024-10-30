import React from 'react'
import { createRoot } from 'react-dom/client'

import 'bootstrap/dist/css/bootstrap.min.css';
import LandingScreen from '../components/LandingScreen';
import AboutUsSection from '../components/AboutUsSection';
import WhatWeOfferSection from '../components/WhatWeOfferSection';
import Solutions from '../components/Solutions';
import Technologies from '../components/Technologies';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

const Index: React.FC = ()=>{
    return <>
        <LandingScreen />
        <AboutUsSection />
        <WhatWeOfferSection />
        <Solutions />
        <Technologies />
        <Projects />
    </>
}

if(document.getElementById('index')){
    createRoot(document.getElementById('index')!).render(<Index />)
}