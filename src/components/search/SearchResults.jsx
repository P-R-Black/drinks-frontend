import React, { useRef, useEffect } from 'react'
import './search.css'

export const SearchResults = ({ results, selectedItem }) => {

  const listRef = useRef(null);


  useEffect(() => {
    const list = listRef.current;
    const activeItem = list.querySelector('.active');

    if (activeItem) {
      // Scroll the list to keep the active item in view
      list.scrollTop = activeItem.offsetTop - list.offsetTop;
    }
  }, [selectedItem]);

  return (
    <div className="results_list" ref={listRef}>
      <ul className="searchResultContainer">
       {results.map((result, index) =>{
            return(
                <li key={result.id}>
                  <a href={`/${result.base_alcohol[0].toLowerCase().replaceAll(" ","")}/${result.drink_name.toLowerCase().replaceAll(" ","")}`} 
                      className={selectedItem === index ? "searchResultList active" : "searchResultList"}
                      >
                      {result.drink_name}
                    </a>
                  </li>         
            )
       })}
      </ul>   
    </div>
  )
}
