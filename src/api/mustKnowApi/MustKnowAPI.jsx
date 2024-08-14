import React from 'react'
import axios from 'axios';
import { Axios } from 'axios';
import { useQuery } from '@tanstack/react-query';
import { FetchPaginatedData } from '../allDrinksApi/DrinksAPI';



export const MustKnowAPI = () => {

    const drinksAPIKeyProduction = process.env.REACT_APP_PRODUCTION_KEY
    const mustKnowApi = process.env.REACT_APP_MUST_KNOW_KEY

    const headers = {
        'Authorization': `Api-Key ${drinksAPIKeyProduction}`,
        'Content-type': 'application/json'
    }

    return useQuery({
        queryKey: ['mustKnowData', headers],
        queryFn: async () => {
            const mustKnowData = await FetchPaginatedData({ queryKey: [mustKnowApi, headers] })
            return mustKnowData
        }


    })
}
