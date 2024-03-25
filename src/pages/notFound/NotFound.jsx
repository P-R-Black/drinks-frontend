import React from 'react'
import { Navigation } from '../../components/navigation/Navigation'
import { ErrorPage } from '../../components/pageerror/ErrorPage'
import { Footer } from '../../components/footer/Footer'

export const PageNotFound = ({baseAlcohol, fetchAlcoholType, navLinkText, drinks}) => {
  return (
    <>
    <Navigation
        drinks={drinks}
        baseAlcohol={baseAlcohol}
        fetchAlcoholType={fetchAlcoholType}
        navLinkText={navLinkText}
    />
    <ErrorPage/>
    <Footer/>
    </>
  )
}
