import axios from 'axios'
import { useEffect } from 'react';

const API_ENDPOINT = process.env.REACT_APP_PRODUCTION_DRINK_PUBLIC_KEY


// loader function
const baseURL = API_ENDPOINT
const axiosInstance = axios.create({

	baseURL: baseURL,
	timeout: 5000,
	headers: {
		Authorization: localStorage.getItem('access_token')
			? ' JWT ' + localStorage.getItem('access_token')
			: null,
		'Content-Type': 'application/json',
		accept: 'application/json',
	},

});

axiosInstance.interceptors.response.use(
	(response) => {
		return response;
	},
	async function (error) {
		const originalRequest = error.config;

		if (typeof error.response === 'undefined') {
			alert(
				'A server/network error occurred. ' +
				'Looks like CORS might be the problem. ' +
				'Sorry about this - we will get it fixed shortly.'
			);
			return Promise.reject(error);
		}

		if (
			error.response.status === 401 &&
			originalRequest.url === baseURL + 'token/refresh/'
		) {
			window.location.href = '/keep-user-admin/';
			return Promise.reject(error);
		}

		if (
			error.response.data.code === 'token_not_valid' &&
			error.response.status === 401 &&
			error.response.statusText === 'Unauthorized'
		) {
			const refreshToken = localStorage.getItem('refresh_token');

			if (refreshToken) {
				const tokenParts = JSON.parse(atob(refreshToken.split('.')[1]));

				// exp date in token is expressed in seconds, while now() returns milliseconds:
				const now = Math.ceil(Date.now() / 1000);
				console.log(tokenParts.exp);

				if (tokenParts.exp > now) {
					return axiosInstance
						.post('/token/refresh/', { refresh: refreshToken })
						.then((response) => {
							localStorage.setItem('access_token', response.data.access);
							localStorage.setItem('refresh_token', response.data.refresh);

							axiosInstance.defaults.headers['Authorization'] =
								'JWT ' + response.data.access;
							originalRequest.headers['Authorization'] =
								'JWT ' + response.data.access;

							return axiosInstance(originalRequest);
						})
						.catch((err) => {
							console.log(err);
						});
				} else {
					console.log('Refresh token is expired', tokenParts.exp, now);
					window.location.href = '/keep-user-admin/';
				}
			} else {
				console.log('Refresh token not available.');
				window.location.href = '/keep-user-admin/';
			}
		}

		// specific error handling done elsewhere
		return Promise.reject(error);
	}
);

export default axiosInstance;


// const drinksApi = process.env.REACT_APP_PRODUCTION_DRINK_PUBLIC_KEY
// console.log('drinksAPi', drinksApi)
// const allCocktailsAPi = process.env.ALL_COCKTAILS_API_KEY
// const mustKnowApi = process.env.DRINK_MUST_KNOWS_KEY
// const allShotsApi = process.env.ALL_SHOTS_API_KEY
// const drinksAPIKey = process.env.APP_API_KEY
// const drinksAPIKeyProduction = process.env.REACT_APP_PRODUCTION_KEY

// const getAllAPIDrinks = async () => {
// 	console.log('allAPIDrinks called');
// 	try {
// 		const response = await axios.get(drinksApi.toString(), {
// 			headers: { 'Authorization': `${drinksAPIKeyProduction}` }
// 		});
// 		console.log('drinksAPI response', response.data);
// 		return response.data;
// 	} catch (error) {
// 		console.error('Error in allAPIDrinks:', error);
// 		console.error('Error details:', {
// 			message: error.message,
// 			stack: error.stack,
// 			config: error.config,
// 			code: error.code,
// 			response: error.response,
// 		});
// 		return null; // Return null or some default value in case of an error
// 	}
// };
