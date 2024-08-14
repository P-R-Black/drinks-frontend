import axios from 'axios';

import { useQuery } from '@tanstack/react-query';



export const GetBackendApi = () => {

    const getBackendApi = process.env.REACT_APP_DB_GET_KEY

    return useQuery({
        queryKey: ['getBackend'],
        queryFn: async () => {
            const newData = await axios.get(getBackendApi)
            return newData.data
        },
        refetchOnWindowFocus: false,
    })


}

export const GetTodaysDrinkOfTheDay = () => {

    const getLastDodEntry = process.env.REACT_APP_DB_LAST_KEY

    return useQuery({
        queryKey: ['getCurrentDod'],
        queryFn: async () => {
            const newData = await axios.get(getLastDodEntry)
            return newData.data
        },
        refetchOnWindowFocus: false,
    })


}
