import React from 'react'
import './logo.css'
import { HashLink } from 'react-router-hash-link'

export const Logo = () => {
    
  return (
      <HashLink to="/">
        <div className="logoName">{"Keep's Guide"}</div>
      </HashLink>
    )
}
