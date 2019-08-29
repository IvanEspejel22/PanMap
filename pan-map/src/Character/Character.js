import React from 'react'
import {Link} from 'react-router-dom'
import Ratings from 'react-ratings-declarative';
import eliminar from "../eliminarResena/eliminarResena";
import eliminarIcon from '../Images/eliminar.svg';
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
    <button  className="buttonEliminar" type="button" onClick={() => eliminar(id)}><img className="icono-button" src={eliminarIcon}alt=""/></button>
    {/* <Link to={`/contenedor-editar/${id}`}><button  className="buttonEditar" type="button"><img className="icono-button" src={eliminarIcon}alt=""/></button></Link> */}
    </div>
    <div className="card-info">
        <div className="card-titulo">
            <h5>{name}</h5>
        </div>
        <div className="resena">
            <p>
               {resenaResumen}... <Link to={`/resena-detail/${id}`}> Leer más </Link>
            </p>
        </div>
        <div className="categorias">
        {specie.map((tema) =>
        <div className="etiqueta" key={id+tema}>{tema}</div>

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