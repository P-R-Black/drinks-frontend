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
            bgImageAlt="the cat" 
            strength={800}>
            <h1 style={{color: "white", fontSize: '3.5rem', fontWeight:'900', marginTop:'4.5rem', textAlign: 'center'}}
                className="drinkOfDayTitle">{"Please Drink Responsibly"}</h1>
        </Parallax>
    </section>
    
);