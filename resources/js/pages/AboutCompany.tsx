import React from "react";
import { createRoot } from 'react-dom/client';
import AboutCompanyHeader from "../components/AboutCompanyHeader";

const AboutCompany: React.FC = ()=>{
    return <>
        <AboutCompanyHeader />
    </>
}

if(document.getElementById('about-company')){
    createRoot(document.getElementById('about-company')!).render(<AboutCompany />)
}