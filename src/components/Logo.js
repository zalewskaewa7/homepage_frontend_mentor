import React from 'react'
import logo from "../assets/images/logo.svg"
import "./style_scss/Logo.scss"

function Logo() {
  return (
    <div className="logo_component">
        <img className="logo_img" alt="logo" src={logo}></img>
    </div>
  )
}

export default Logo