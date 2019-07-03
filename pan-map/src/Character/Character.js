import React from 'react'
import {Link} from 'react-router-dom'

const Character = ({image, name, gender, specie, getCharacter, id}) => {
  const ImagenFondo = {
    backgroundImage: `url(${ image })`
  }
  return (
    <div className="cards">
    <div className="imagen-card" style={ImagenFondo}>
    </div>
    <div className="card-info">
        <div className="card-titulo">
            <h5>{name}</h5>
        </div>
        <div className="resena">
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores ut impedit quis fugit
                quasi
                vitae numquam odit consequatur excepturi necessitatibus magnam est quaerat qui repellendus
                natus commodi optio, perferendis sit! <Link to={`/character-detail/${id}`}> Leer más </Link>
            </p>
        </div>
        <div className="categorias">
            <div className="etiqueta">{specie}</div>
            <div className="etiqueta">Panadería</div>
            <div className="etiqueta">Centro</div>
        </div>
        <div className="calificacion">
            <div className="estrella"></div>
            <div className="estrella"></div>
            <div className="estrella"></div>
            <div className="estrella"></div>
            <div className="estrella"></div>
        </div>
    </div>
</div>
  )
}

export default Character;