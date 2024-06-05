import React from 'react'
import './logo.css'
import { Link } from 'react-router-dom';
export const Logo = () => {

  return (
    <Link to="/">
      <div data-testid="button" className="logoName">{"Keep's Guide"}</div>
    </Link>
  )
}
