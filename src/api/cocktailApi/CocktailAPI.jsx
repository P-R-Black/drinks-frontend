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
            const cocktailApiData = await FetchPaginatedData({ queryKey: [allCocktailsEndpoint, headers] })
            return cocktailApiData
        }


    })
}
