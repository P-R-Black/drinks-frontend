import React from 'react'
import './theabout.css'


export const TheAbout = () => {
  return (
    <section className="aboutSection">
        <div className="container">
          <div className="aboutContainer">
            <div className="aboutTitleContainer">
            <h1>What is Keep's Guide</h1>
            </div>
            <div className="aboutParagraphContainer">
            <p>
                Keep's Guide is a recipe guide for working bartenders, aspiring bartenders, and home mixologists
                who need the recipe without a backstory. Whether you're looking for a refresher on how to make
                an old favorite or trying to find a new favorite drink, Keep's Guide will give you the
                drink's recipe and instructions, and little else.
              </p>
              <p>
                At Keep's Guide, the drink is the star of the show, no blog posts, 
                or stories about the drink's origin, by the way, did you know that the Gimlet was promoted as a 
                cure for scurvy? That's probably not the first thing you want to read about when you're looking up a 
                Gimlet recipe, but that's how many sites dedicated to drink recipes are structured, with paragraphs
                about the drink, and the drink's flavor profile, as well as the drink's place in world history, 
                and burried at the bottom of the page, is where you'll find the drinks ingredients.
              </p>
              <p>
                Keep's Guide aims to keep it simple, and give barkeeps and drink enthusiasts the guideance needed 
                to craft delcious cocktails and shots.
              </p>
            </div>
          </div>
        </div>
    </section>
    
  )
}
