import React from 'react'
import { NavLink } from 'react-router-dom'
import LogoBedu from '../Images/Logo-Bedu.png';
import IconoMenu from '../Images/usuario.svg';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';

const Menu = () => {
  return (
    <section id="NavB" className="">
    <NavLink exact to="/"> <img className="logo-bedu" src={LogoBedu} alt="" width="120px"></img></NavLink>
    <nav className="NavBar">
        <ul>
           <li className="menu-opcion">
                <NavLink exact to="/example" className="" href="login.html">
                    <img className="icono-menu" src={IconoMenu} alt=""></img>
                    <h5>Perfil</h5>
                </NavLink>
            </li>
        </ul>
    </nav>
</section>
  )
}

export default Menu