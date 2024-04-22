import React, {useState, useEffect} from 'react'
import './search.css'
import { SearchResults } from '../search/SearchResults';
import { IoMdSearch } from "react-icons/io";
import { IoMdClose } from "react-icons/io"


export const Search = ({ drinks }) => {
  const [ input, setInput ] = useState("")
  const [ selectedItem, setSelectedItem ] = useState(-1)
  const [results, setResults] = useState([])


  const handleKeyDown = (e) => {
    const selectedItemLink = document.getElementsByClassName('searchResultList active')
    if (selectedItem < results.length){
        if (e.key === "ArrowUp" && selectedItem > 0){
            setSelectedItem((prev) => prev - 1);
        } else if (e.key === "ArrowDown" && selectedItem < results.length - 1){
            setSelectedItem((prev) => prev + 1);
        } else if (e.key === "Enter" && selectedItem >= 0){
          window.location.href = selectedItemLink[0].getAttribute('href')
        }

    } else {
        setSelectedItem(-1)
    }
  };

  const handleClose = () => {
    setInput("")
    setResults([])
    setSelectedItem(-1)

  }


  useEffect(() => {
    if (input !== ""){
      const results = drinks.filter((drink) => {
        return (
          drink.base_alcohol[0].toLowerCase().includes(input.toLowerCase()) || 
          drink.drink_name.toLowerCase().includes(input.toLowerCase()) ||
          drink.ingredient_name.join(" ").toLowerCase().includes(input.toLowerCase())
        );
      })
      setResults(results.sort())
    } else {
      setResults([])
    }

  }, [input])

  const handleChange = (e) => {
    setInput(e.target.value)
  }


  
  return (
    <section className='searchSection'>
      <div className="searchInputDiv">
          <input
            id="search" 
            className="searchBar"
            type="text"
            placeholder="Search Drink by Name, Alcohol, or Ingredient"
            value={input}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
          <div className="searchIcons">
            {
              input === "" ? (<IoMdSearch/>) : (<IoMdClose onClick={handleClose}/>)
            }
          </div>
        <SearchResults  results={results} selectedItem={selectedItem} />

      </div>
    </section>
    
  )
}
