import React, { useRef, useEffect } from 'react';
import slugify from 'react-slugify';
import './search.css';

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
                  <a href={`/${slugify(result.base_alcohol[0])}/${slugify(result.drink_name)}`} 
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
