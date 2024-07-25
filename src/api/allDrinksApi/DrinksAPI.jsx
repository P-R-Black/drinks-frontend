import axios from 'axios';

import { useQuery, useQueryClient } from '@tanstack/react-query';



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

	const QueryClient = useQueryClient()

	const headers = {
		'Authorization': `Api-Key ${drinksAPIKeyProduction}`,
		'Content-type': 'application/json'
	}


	return useQuery({
		queryKey: ['newData', { headers }],
		queryFn: async () => {
			const newData = await FetchPaginatedData({ queryKey: [drinksApi, headers] })

			return newData
		},
		refetchOnWindowFocus: false,
	})

	// onSuccess: () => { QueryClient.setQueryData(['newData'], (oldData) => [...oldData, newData ]) }
	// staleTime: 6000 (6000 = 6 seconds)
	// refrechInterval: 4000 (refetches data every four seconds)
	// can add staleTime universily in index.jsx  | const queryClient = new QueryClient({defaultOptions: {queries:{staletime: 6000}},});
	// can include garbage collection time | const queryClient = new QueryClient({defaultOptions: {queries:{staletime: 6000}}, gcTime: 10 * (60 * 1000 )},);


}
