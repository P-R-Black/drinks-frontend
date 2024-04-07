import React, { useState, useEffect } from 'react'

import axios from 'axios'

const API_ENDPOINT=process.env.REACT_APP_PUBLIC_KEY



export const DrinksAPI = () => {

    // const [ loading, setLoading ] = useState(true)
    // const [ newDrink, setNewDrink ] = useState([])

    // setNewDrink(newDrinks)
    // console.log('newDrink api', newDrink)
    
    // const GetData = async () =>{
    //     setLoading(true);
    //     try {
    //       const {data: response} = await axios.get(API_ENDPOINT);
    //       setNewDrink(response);
    //       setLoading(false);
    //     } catch (error) {
    //       console.error(error.message);
    //       setLoading(false);
    //     }
        
    // }
    return (
      <div className="drinks">
        {newDrinks.map((drink) => (
            <Link to="/" key={drink.id}>
            </Link>
        ))}
      </div>

    )
}

// loader function
export const drinksLoader = async () => {
  const {data: response} = await axios.get(API_ENDPOINT);
  return response
}
