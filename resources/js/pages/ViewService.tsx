import React from "react";
import { createRoot } from 'react-dom/client';
import ServiceHeader from "../components/ServiceHeader";
import { ParallaxProvider } from 'react-scroll-parallax';
import ServiceBody from "../components/ServiceBody";

const ViewService: React.FC = ()=>{
    return <ParallaxProvider>
        <ServiceHeader />
        <ServiceBody />
    </ParallaxProvider>
}

if(document.getElementById('service-details')){
    createRoot(document.getElementById('service-details')!).render(<ViewService />)
}