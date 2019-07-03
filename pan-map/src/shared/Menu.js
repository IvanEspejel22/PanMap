import React from 'react'
import { NavLink } from 'react-router-dom'

import styles from './Menu.css'

const Menu = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink exact to="/" activeClassName="Menu_link">Home</NavLink>
          </li>
          <li>
            <NavLink exact to="/example" activeClassName="Menu_link">Example</NavLink>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Menu