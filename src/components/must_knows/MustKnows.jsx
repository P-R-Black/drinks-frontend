import React from 'react'
import './mustKnows.css'

export const MustKnows = ({ mustKnows }) => {

    
  return (
    <section id="mustKnowSection" className="mustKnowSection">
      <div className="container">
        <div className="mustKnowContainer">
          <div className="mustKnowTitleContainer">
            <h1 className='mustKnowTitleContainerH1'><span>{mustKnows.length} </span>Must Know Drinks</h1>
          </div>
        {mustKnows.map((mk) => (
          <h2>{mk.drink_name}</h2>
        ))}
        </div>
      </div>
    </section>
  )
}
