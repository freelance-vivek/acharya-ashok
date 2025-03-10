"use client"

import Link from "next/link"
import React from "react"

const NavBar = () => {
  return (
    <nav className="navigation" aria-label="Main Navigation">
      <input
        type="checkbox"
        className="navigation__checkbox"
        id="navi-toggle"
      />
      <label htmlFor="navi-toggle" className="navigation__button">
        <span className="navigation__icon" aria-hidden="true">
          &nbsp;
        </span>
      </label>

      <div className="navigation__background" aria-hidden="true">
        &nbsp;
      </div>

      <nav className="navigation__nav" aria-label="Sub Navigation">
        <ul className="navigation__list">
          <li className="navigation__item">
            <a href="/" className="navigation__link">
              <span>01</span>Home
            </a>
          </li>
          <li className="navigation__item">
            <a href="/services" className="navigation__link">
              <span>02</span>Services
            </a>
          </li>
          <li className="navigation__item">
            <a href="/mission" className="navigation__link">
              <span>03</span>Mission
            </a>
          </li>

          <li className="navigation__item">
            <a href="/aboutus" className="navigation__link">
              <span>04</span> About us
            </a>
          </li>
        </ul>
      </nav>
    </nav>
  )
}

export default NavBar
