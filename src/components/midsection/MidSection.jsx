import { Parallax } from 'react-parallax';
import React from 'react'
import midSectionImage from '../../assets/pexels-furkanvari-side.jpg'
import './midsection.css'



export const MidSection = () => (
    <section id="midSection">
        <Parallax 
            className="midSection" 
            blur={3} 
            bgImage={midSectionImage}
            bgImageAlt={midSectionImage}
            strength={800}>
            <h1 className="drinkOfDayTitle">{"Please Drink Responsibly"}</h1>
        </Parallax>
    </section>
    
);