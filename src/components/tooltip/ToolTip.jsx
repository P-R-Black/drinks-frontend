import React, { useState } from 'react'
import './tooltip.css'

export const ToolTip = ({ text, children }) => {
  const [isVisible, setisVisible] = useState(false)

  return (
    <div className='tooltip_container'
      onMouseEnter={() => setisVisible(true)}
      onMouseLeave={() => setisVisible(false)}
    >{children}

      {isVisible && <div className="tooltip">{text}</div>}

    </div>
  )
};

export const ToolTipTwo = ({ text, children }) => {
  const [isVisible, setisVisible] = useState(false)

  return (
    <div className='tooltip_container_two'
      onMouseEnter={() => setisVisible(true)}
      onMouseLeave={() => setisVisible(false)}
    >{children}

      {isVisible && <div className="tooltip_two">{text}</div>}

    </div>
  )
};
