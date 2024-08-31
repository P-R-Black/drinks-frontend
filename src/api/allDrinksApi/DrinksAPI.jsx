import { useState } from 'react'
import axios from 'axios';

import { useQuery } from '@tanstack/react-query';
import { allDrinksApiFile } from './allDrinksFile';

export const FetchPaginatedData = async ({ queryKey, maxItems = Infinity, onUpdate }) => {

	const [url, headers] = queryKey;
	let apiData = [];
	let nextUrl = url;



	while (nextUrl && apiData.length < maxItems) {
		try {
			const response = await axios.get(nextUrl, { headers });
			apiData = [...apiData, ...response.data.results];
			nextUrl = response.data.next;

			if (onUpdate) {
				onUpdate(apiData.length)
			}

		} catch (error) {
			if (axios.isAxiosError(error)) {
				console.error('Error fetching paginated data', error.message);
				// Handle the error based on its type
				if (error.response) {
					// Server responded with a status other than 2xx
					console.error('Server error:', error.response.status, error.response.data);
				} else if (error.request) {
					// Request was made but no response was received
					console.error('No response received:', error.request);
				} else {
					// Something else happened
					console.error('Error', error.message);
				}
			} else {
				console.error('An unexpected error occurred:', error);
			}
		}
	}
	return apiData;
}


export const DrinksAPI = () => {

	const drinksApi = process.env.REACT_APP_PRODUCTION_DRINK_PUBLIC_KEY
	const drinksAPIKeyProduction = process.env.REACT_APP_PRODUCTION_KEY

	const [numOfRecipes, setNumOfRecipes] = useState('');

	const handleUpdate = (count) => {
		const onFileData = allDrinksApiFile['results'].length

		if (count < 800) {
			setNumOfRecipes(`${onFileData} recipes, with more added daily`)
		} else {
			const recipeLengthRounded = Math.round(count / 5) * 5;
			setNumOfRecipes(`Over ${recipeLengthRounded} recipes, with more added daily`)

		}

	}


	const headers = {
		'Authorization': `Api-Key ${drinksAPIKeyProduction}`,
		'Content-type': 'application/json',
	}

	const initialQuery = useQuery({
		queryKey: ['initialData', { headers }],
		queryFn: () => FetchPaginatedData(
			{
				queryKey: [drinksApi, headers],
				maxItems: 100,
				onUpdate: handleUpdate
			}),
		refetchOnWindowFocus: false,
	})

	const fullQuery = useQuery({
		queryKey: ['fullData', { headers }],
		queryFn: async () => FetchPaginatedData(
			{
				queryKey: [drinksApi, headers],
				onUpdate: handleUpdate
			}),
		enabled: initialQuery.isSuccess,
		initialData: initialQuery.data,
		refetchOnWindowFocus: false,
	});
	return {
		initialData: initialQuery.data,
		fullData: fullQuery.data,
		isLoading: initialQuery.isLoading || fullQuery.isLoading,
		numOfRecipes,
	};

}

// export const FetchPaginatedData = async ({ queryKey }) => {
// 	const [url, headers] = queryKey
// 	let apiData = [];
// 	let nextUrl = url;

// 	while (nextUrl) {
// 		try {
// 			const response = await axios.get(nextUrl, { headers });
// 			apiData = [...apiData, ...response.data.results];
// 			nextUrl = response.data.next;

// 		} catch (error) {
// 			console.error("Error fetching paginated data", error);
// 			nextUrl = null
// 		}

// 	}
// 	return apiData
// }


// export const DrinksAPI = () => {

// const drinksApi = process.env.REACT_APP_PRODUCTION_DRINK_PUBLIC_KEY
// const drinksAPIKeyProduction = process.env.REACT_APP_PRODUCTION_KEY

// const QueryClient = useQueryClient()

// const headers = {
// 	'Authorization': `Api-Key ${drinksAPIKeyProduction}`,
// 	'Content-type': 'application/json',
// }


// return useQuery({
// 	queryKey: ['newData', { headers }],
// 	queryFn: async () => {
// 		const newData = await FetchPaginatedData({ queryKey: [drinksApi, headers] })

// 		return newData
// 	},
// 	refetchOnWindowFocus: false,
// })

// }
