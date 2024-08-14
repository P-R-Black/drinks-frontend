import axios from 'axios';

import { useQuery, useQueryClient } from '@tanstack/react-query';

export const FetchPaginatedData = async ({ queryKey, maxItems = Infinity }) => {
	const [url, headers] = queryKey;
	let apiData = [];
	let nextUrl = url;

	while (nextUrl && apiData.length < maxItems) {
		try {
			const response = await axios.get(nextUrl, { headers });
			apiData = [...apiData, ...response.data.results];
			nextUrl = response.data.next;
		} catch (error) {
			console.log('Error fetching paginated data', error);
			nextUrl = null;
		}
	}
	return apiData;
}


export const DrinksAPI = () => {

	const drinksApi = process.env.REACT_APP_PRODUCTION_DRINK_PUBLIC_KEY
	const drinksAPIKeyProduction = process.env.REACT_APP_PRODUCTION_KEY

	const headers = {
		'Authorization': `Api-Key ${drinksAPIKeyProduction}`,
		'Content-type': 'application/json',
	}

	const initialQuery = useQuery({
		queryKey: ['initialData', { headers }],
		queryFn: () => FetchPaginatedData({ queryKey: [drinksApi, headers], maxItems: 300 }),
		refetchOnWindowFocus: false,
	})


	const fullQuery = useQuery({
		queryKey: ['fullData', { headers }],
		queryFn: async () => FetchPaginatedData({ queryKey: [drinksApi, headers] }),
		enabled: initialQuery.isSuccess,
		initialData: initialQuery.data,
		refetchOnWindowFocus: false,
	});
	return {
		initialData: initialQuery.data,
		fullData: fullQuery.data,
		isLoading: initialQuery.isLoading || fullQuery.isLoading,
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
