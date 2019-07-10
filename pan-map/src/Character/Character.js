import React from 'react'
import {Link} from 'react-router-dom'
import Ratings from 'react-ratings-declarative';

const Character = ({image, name, specie, getCharacter, calificacion, resena,id}) => {
    console.log(image)
    let resenaResumen =  String(resena);
    resenaResumen = resenaResumen.slice(0,90);
    const ImagenFondo = {
    backgroundImage: `url(${ image[0] })`
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
               {resenaResumen}... <Link to={`/character-detail/${id}`}> Leer más </Link>
            </p>
        </div>
        <div className="categorias">
        {specie.map((tema) =>
        <div className="etiqueta">{tema}</div>

        )}
            
        </div>
        <div className="calificacion">
        <Ratings
        rating={calificacion}
        widgetDimensions="35px"
        widgetSpacings="2px"
      >
        <Ratings.Widget widgetRatedColor="#ffae2c" />
        <Ratings.Widget widgetRatedColor="#ffae2c"/>
        <Ratings.Widget widgetRatedColor="#ffae2c"/>
        <Ratings.Widget widgetRatedColor="#ffae2c"/>
        <Ratings.Widget widgetRatedColor="#ffae2c"/>
      </Ratings>
        </div>
    </div>
</div>
  )
}

export default Character;