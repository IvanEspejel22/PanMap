import React from 'react'
import {
    Link
} from 'react-router-dom'
import IconoLupa from './Images/lupa.svg';
import IconoStar from './Images/estrella.svg';
import IconoProducto from './Images/producto.svg';
import './App.css';

const SearchBar = () => {
    return (
        <section id="Hero">
        <div className="hero-fondo">

        </div>
        <div>
            <nav className="NavBarSearch center-align">
                <ul className="ul-search">
                    <li className="search">
                        <input type="text"></input>
                        <button> <img className="icono-menu" src={IconoLupa} alt=""></img></button>
                    </li>
                    <li className="search-li">
                        <Link to={`/character-detail/`}>
                            <img className="icono-menu" src={IconoStar} alt=""></img>
                            <h5>Calificación</h5>
                        </Link>
                    </li>

                    <li className="search-li">
                        <Link to={`/character-detail/`}>
                            <img className="icono-menu" src={IconoProducto} alt=""></img>
                            <h5>Producto</h5>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
        </section>
    )
}

export default SearchBar;