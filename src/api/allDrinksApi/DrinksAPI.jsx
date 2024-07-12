import React from 'react'
import axios from 'axios';

import { useQuery } from '@tanstack/react-query';



export const FetchPaginatedData = async ({ queryKey }) => {
	const [url, headers] = queryKey
	let apiData = [];
	let nextUrl = url;

	while (nextUrl) {
		try {
			const response = await axios.get(nextUrl, { headers });
			apiData = [...apiData, ...response.data.results];
			nextUrl = response.data.next;

		} catch (error) {
			console.error("Error fetching paginated data", error);
			nextUrl = null
		}

	}
	return apiData
}


export const DrinksAPI = () => {

	const drinksApi = process.env.REACT_APP_PRODUCTION_DRINK_PUBLIC_KEY
	const drinksAPIKeyProduction = process.env.REACT_APP_PRODUCTION_KEY

	const headers = {
		'Authorization': `Api-Key ${drinksAPIKeyProduction}`,
		'Content-type': 'application/json'
	}


	return useQuery({
		queryKey: ['newData', { headers }],
		queryFn: async () => {
			const newData = await FetchPaginatedData({ queryKey: [drinksApi, headers] })
			console.log('newData', newData)
			return newData
		}


	})


}