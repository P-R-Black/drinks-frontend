import React from 'react'
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { FetchPaginatedData } from '../allDrinksApi/DrinksAPI';


export const CocktailsAPI = () => {

    const allCocktailsEndpoint = process.env.REACT_APP_COCKTAILS_KEY
    const drinksAPIKeyProduction = process.env.REACT_APP_PRODUCTION_KEY

    const headers = {
        'Authorization': `Api-Key ${drinksAPIKeyProduction}`,
        'Content-type': 'application/json'
    }

    return useQuery({
        queryKey: ['cocktailsApiData', headers],
        queryFn: async () => {
            const mustKnowData = await FetchPaginatedData({ queryKey: [allCocktailsEndpoint, headers] })
            console.log('cocktailsApiData', allCocktailsEndpoint)
            return mustKnowData
        }


    })
}
