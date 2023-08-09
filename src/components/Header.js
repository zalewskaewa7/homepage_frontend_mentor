import React from 'react';
import Logo from "./Logo";
import Navigation from './Navigation';
import "./style_scss/Header.scss"

function Header() {
  return (
    <header>
        <Logo />
        <Navigation />
    </header>
  )
}

export default Header