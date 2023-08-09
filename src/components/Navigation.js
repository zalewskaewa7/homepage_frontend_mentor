import React, {useState} from 'react'
import "./style_scss/Navigation.scss"
import IconMenu from "../assets/images/icon-menu.svg"
import IconMenuClose from "../assets/images/icon-menu-close.svg"



function Navigation() {
  const[hamburger, setHamburger]=useState(true)
  return (

   <div className="navigation">
         <img onClick={()=>setHamburger(!hamburger)} className="hemburgerIcon" src={hamburger ? IconMenu : IconMenuClose} alt="hamburger menu"></img>

    <nav className={hamburger ? "nav" : "navMobile" }>
    <img onClick={()=>setHamburger(!hamburger)} className="hemburgerIcon" src={IconMenuClose} alt="hamburger menu"></img>

      <ul className={hamburger ? "menuList" : "menuListMobile"}>
        <li>Home</li>
        <li>New</li>
        <li>Popular</li>
        <li>Trending</li>
        <li>Categories</li>
      </ul>
    </nav>
   </div>
    
  )
}

export default Navigation