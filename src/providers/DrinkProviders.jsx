// // abandoning this for now, I was unable to get the pageLoader to work while using this
// // For now will put everything back into App.jsx file

// import React, { createContext, useState, useEffect, useContext } from 'react';
// import axios from 'axios';


// const drinksApi = process.env.REACT_APP_PRODUCTION_DRINK_PUBLIC_KEY
// const drinksAPIKeyProduction = process.env.REACT_APP_PRODUCTION_KEY


// const fetchPaginatedData = async (url, headers) => {
//     console.log('fetchPaginationData Called')

//     let apiData = [];
//     let nextUrl = url;

//     while (nextUrl) {
//         try {
//             const response = await axios.get(nextUrl, { headers });
//             apiData = [...apiData, ...response.data.results];
//             nextUrl = response.data.next;
//         } catch (error) {
//             console.error("Error fetching paginated data", error);
//             nextUrl = null
//         }

//     }
//     return apiData
// }


// const headers = {
//     'Authorization': `Api-Key ${drinksAPIKeyProduction}`,
//     'Content-type': 'application/json'
// }

// const allDrinksData = await fetchPaginatedData(drinksApi, headers)

// const DrinksContext = createContext();


// export const DrinksProvider = props => {

//     const [drinks, setDrinks] = useState([]);
//     const [isDataFetched, setIsDataFetched] = useState(false);
//     const [loading, setLoading] = useState(false);

//     useEffect(() => {

//         fetchDrinks();
//     }, []);

//     const fetchDrinks = async () => {
//         if (!isDataFetched) {
//             setLoading(true)

//             const drinksData = allDrinksData;
//             console.log('drinksData', drinksData)
//             if (drinksData) {
//                 setDrinks(drinksData);
//                 setIsDataFetched(true);
//                 setLoading(false)

//             } else {
//                 console.error('Failed to fetch drinks data.');
//             }
//         }
//     };

//     return (
//         <DrinksContext.Provider value={{ drinks, loading }}>
//             {props.children}
//         </DrinksContext.Provider>

//     )
// };



// export const useDrinks = () => useContext(DrinksContext);
