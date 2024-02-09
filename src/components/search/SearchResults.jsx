import React from 'react'
import './search.css'

export const SearchResults = ({ results }) => {

  return (
    <div className="results_list">
       {results.map((result, id) =>{
            return(
                <a href={`/alcohol/${result.base_alcohol}/${result.drink_name.toLowerCase()}`} 
                className="searchResultList">{result.drink_name} <span className='resultDesc'>{"Drink"}</span></a>                
                )
       } )}
    </div>
  )
}
