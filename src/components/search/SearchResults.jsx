import React from 'react'
import './search.css'

export const SearchResults = ({ results, selectedItem }) => {

  return (
    <div className="results_list">
         
       {results.map((result, index) =>{
            return(
              <ul className="searchResultContainer">
                <li>
                  <a key={index}
                      href={`/${result.base_alcohol[0].toLowerCase().replaceAll(" ","")}/${result.drink_name.toLowerCase().replaceAll(" ","")}`} 
                      className={selectedItem === index ? "searchResultList active" : "searchResultList"}>
                      {result.drink_name}
                    </a>
                  </li>
              </ul>
                        
              )
       } )}
    </div>
  )
}
