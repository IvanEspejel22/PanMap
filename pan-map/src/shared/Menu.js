import React from 'react'
import { NavLink } from 'react-router-dom'
import LogoBedu from '../Images/Logo-Bedu.png';
import '../App.css';

const Menu = () => {
  return (
    <section id="NavB" class="">
    <NavLink exact to="/"> <img class="logo-bedu" src={LogoBedu} alt="" width="120px"></img></NavLink>
    <nav class="NavBar center-align">
        <ul>
           <li>
                <NavLink exact to="/example" class="" href="login.html">
                    <img class="icono-menu" src="usuario.svg" alt=""></img>
                    <h5>Perfil</h5>
                </NavLink>
            </li>
        </ul>
    </nav>
</section>
  )
}

export default Menu