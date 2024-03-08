import React from 'react'
import './logo.css'
import { HashLink, NavHashLink } from 'react-router-hash-link'

export const Logo = () => {
    
  return (
    // <a href="/">
      <HashLink to="/#heroSection">
        <div className="logoName">{"Keep's Guide"}</div>
      </HashLink>
       
    // </a>
  )
}
