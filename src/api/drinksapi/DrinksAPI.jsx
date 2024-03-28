import React, { useState, useEffect } from 'react'
import axios from 'axios'

const API_ENDPOINT=process.env.REACT_APP_PUBLIC_KEY

const DrinksAPI = () => {
    const [ loading, setLoading ] = useState(true)
    const [ newDrink, setNewDrink ] = useState([])

    const GetData = async () =>{
        setLoading(true);
        try {
          const {data: response} = await axios.get(API_ENDPOINT);
          setNewDrink(response);
          setLoading(false);
        } catch (error) {
          console.error(error.message);
          setLoading(false);
        }
 
    }

    return {
      newDrink

    }

}

export default DrinksAPI