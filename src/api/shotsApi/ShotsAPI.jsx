import React from 'react'
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { FetchPaginatedData } from '../allDrinksApi/DrinksAPI';

export const ShotsAPI = () => {

    const allShotsEndpoint = process.env.REACT_APP_ALL_SHOTS_KEY
    const drinksAPIKeyProduction = process.env.REACT_APP_PRODUCTION_KEY

    const headers = {
        'Authorization': `Api-Key ${drinksAPIKeyProduction}`,
        'Content-type': 'application/json'
    }

    return useQuery({
        queryKey: ['allShotsData', headers],
        queryFn: async () => {
            const allShotsData = await FetchPaginatedData({ queryKey: [allShotsEndpoint, headers] })
            console.log('allShotsData', allShotsData)
            return allShotsData
        }


    })
}
