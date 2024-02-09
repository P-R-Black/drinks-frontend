import React, {useState} from 'react'
import './search.css'

export const Search = ({ drinks, setResults, drinkRecipe }) => {
  const [input, setInput] = useState("")

  const camelCase = (str) => {
    return str.toLowerCase().split(' ').map(function(word){
      return word.charAt(0).toUpperCase() + word.slice(1)
    }).join('')
  }


  const fetchData = (value) => {
    console.log('value', value)
    const results = drinks.filter((drink) => {
      // return drink && drink.drink_name.toLowerCase().includes(value)
      return (
        value &&
        drink &&
        // drink.base_alcohol[0].toUpperCase().includes(value) &&
        drink.base_alcohol[0].toLowerCase().includes(value)
        // drink.drink_name.toLowerCase().includes(value)
    
      );

    });
      setResults(results)
  }

  const handleChange = (value) => {
    setInput(value)
    fetchData(value)
  }
  return (
    <>
      <input 
        id="search" 
        className="searchBar"
        type="text" 
        value={input}
        onChange={(e) => handleChange(e.target.value)}
        />
    </>
    
  )
}
