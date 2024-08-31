import React from 'react'
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import { Home } from '../pages/home/Home';
import { Alcohol } from '../pages/alcohol/Alcohol';
import { Drinks } from '../pages/drinks/Drinks';
import { AllDrinks } from '../pages/all_drinks/AllDrinks';
import { Shots } from '../pages/shots/Shots';
import { AllShots } from '../pages/all_shots/AllShots';
import { BuildDrinkPage } from '../pages/buildDrinkPage/BuildDrinkPage';
import { AboutUs } from '../pages/about/About';
import { Contact } from '../pages/contact/Contact';
import { Terms } from '../pages/terms/Terms';
import { Privacy } from '../pages/privacy/Privacy';
import { PageNotFound } from '../pages/notFound/NotFound';
import { SuperUserPage } from '../pages/superUserPage/SuperUserPage';
import { DashboardPage } from '../pages/dashboardPage/DashboardPage';



export const router = createBrowserRouter([

    {
        path: "/",
        element: <App />,
        children: [
            { path: "", element: <Home /> },
            { path: "/:alcohol", element: <Alcohol /> },
            { path: "/:alcohol/:drinkRecipe", element: <Drinks /> },
            { path: "/:alcohol/drinks", element: <AllDrinks /> },
            { path: "/:alcohol/shot", element: <Shots /> },
            { path: "/:alcohol/all_shots", element: <AllShots /> },
            { path: "/build-drink", element: <BuildDrinkPage /> },
            { path: "/about-us", element: <AboutUs /> },
            { path: "/contact-us", element: <Contact /> },
            { path: "/terms-and-conditions", element: <Terms /> },
            { path: "/privacy-policy", element: <Privacy /> },
            { path: "*", element: <PageNotFound /> },

            // { path: "/keep-user-admin", element: <SuperUserPage /> },
            // { path: "/dashboard", element: <DashboardPage /> },


        ]
    }
])