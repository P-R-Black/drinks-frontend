import React from 'react'
import './logo.css'
import { HashLink, NavHashLink } from 'react-router-hash-link'

export const Logo = () => {
    
  return (
    // <a href="/">
      <HashLink to="/">
        <div className="logoName">{"Keep's Guide"}</div>
      </HashLink>
       
    // </a>
  )
}
