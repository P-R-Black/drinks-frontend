import React from 'react'

export const DrinkApi = ({ drinks }) => {
  return (
    <div style={{backgroundColor: "yellow"}}>
        {drinks.map(d => (
            <div key={d}>{d}</div>
        ))}
    </div>
  )
}
