import React from 'react'
import "./Header.css"

const Header = (props) => {
  return (
    <div className='col header'>
        <h1>{props.heading}</h1>
    </div>
  )
}

export default Header