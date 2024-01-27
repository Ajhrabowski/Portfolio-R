import React from 'react'
import Navigation from './Navigation'

function Header() {
  const showMenu = () => {
    const nav = document.querySelector("nav")
    if (nav.style.display == "none") {
      nav.style.display = "flex"
    } else {
      nav.style.display = "none"
    }
  }
  window.onresize = () => {
    if (screen.width > 780) {
      const nav = document.querySelector("nav")
      nav.style.display = "flex"
    }
  }
  return (
    <header>
      <h1>Anthony Hrabowski</h1>
      <i
        onClick={showMenu}
        className="fa-solid fa-bars" id='menu-bar'></i>
      <Navigation />
    </header>
  )
}

export default Header