import React from 'react'
import './mustKnows.css'
import slugify from 'react-slugify'
import { Link } from 'react-router-dom'

export const MustKnows = ({ mustKnows }) => {


 
  return (
    <section id="mustKnowSection" className="mustKnowSection">
      <div className="container">
        <div className="mustKnowContainer">
          <div className="mustKnowTitleContainer">
            <h1 className='mustKnowTitleContainerH1'>{mustKnows.length}</h1>
            <h2 className='mustKnowTitleContainerH2'>Must Know Drinks For Bartenders</h2>
          </div>
          <div className="drinkGlassContainer">
            {mustKnows && mustKnows.sort((a, b) => a.drink_name > b.drink_name ? 1 : -1).map((mk) =>{
              return (
                <div key={mk.id} className="drinkGlass">
                  <Link to={`/${slugify(mk.base_alcohol)}/${slugify(mk.drink_name)}`}>
                      <h2>{mk.drink_name}</h2>
                  </Link>
                </div>
              )
            })}
         </div>
        </div>
      </div>
    </section>
  )
}
