import React from 'react'
import './search.css'

export const SearchResults = ({ results, selectedItem }) => {

  return (
    <div className="results_list">
         
       {results.map((result, index) =>{
            return(
              <ul>
                <li>
                  <a key={index}
                      href={`/alcohol/${result.base_alcohol}/${result.drink_name.toLowerCase()}`} 
                      className={selectedItem === index ? "searchResultList active" : "searchResultList"}>
                      {result.drink_name}
                      <span className='resultDesc'>{"Drink"}</span>
                    </a>
                  </li>
              </ul>
                        
              )
       } )}
    </div>
  )
}
