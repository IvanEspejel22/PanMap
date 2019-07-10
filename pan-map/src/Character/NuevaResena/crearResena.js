import React from "react";
import IconoHero from "../Images/Fotos.svg";
import Ratings from 'react-ratings-declarative';
import Iframe from 'react-iframe'

 const crearResena =  () =>  {
  
  const ImagenFondo = {
    backgroundImage: `url(${ fotos[0] })`
  }
  return (
    <section>
      <div id="Hero-detalle">
        <div className="hero-detalle-fondo" style={ImagenFondo} />
        <div className="detalle-caja">
          <div className="detalle-titulo">
            <h2>{titulo}</h2>
          </div>
          <div>
            <button>
              <img className="icono-button" src={IconoHero} alt="" />
            </button>
          </div>
        </div>
      </div>
      <div className="contenido-detalle">
        <div className="info-detalle">
          <div className="detalle-subtitulo">
            <div>
              <small>Panaderia</small> <br />
              <h5>{panaderia}</h5>
            </div>
            <div>
              <small>Autor</small> <br />
              <h5>{autor}</h5>
            </div>
            <div>
              <small>Fecha</small> <br />
              <h5>{fecha}</h5>
            </div>
          </div>
          <div className="detalle-resena">
            <p>{resena}</p>
          </div>
         <div className="categorias">
         {console.log(temas)}
         {temas.map((tema) =>
        <div className="etiqueta">{tema}</div>

        )} 
        </div>
          <div className="calificacion-detalle">
             {/* <Ratings
              rating={calificacion}
              widgetDimensions="45px"
              widgetSpacings="2px"
            >
              <Ratings.Widget widgetRatedColor="#ffae2c" />
              <Ratings.Widget widgetRatedColor="#ffae2c" />
              <Ratings.Widget widgetRatedColor="#ffae2c" />
              <Ratings.Widget widgetRatedColor="#ffae2c" />
              <Ratings.Widget widgetRatedColor="#ffae2c" />
            </Ratings>  */}
          
          </div>
        </div>
        <div className="detalle-direccion">
          <Iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3761.9173883321196!2d-99.18826518500543!3d19.459128286869287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f89e939ac8e1%3A0x58aca53a576b0e88!2sPASTELERIA+LA+PALANCA!5e0!3m2!1ses!2smx!4v1561690575491!5m2!1ses!2smx"
                width="100%" height="80%" frameborder="0" style="border:0" allowfullscreen></Iframe>
          <div class="detalle-direccion-titulo">
            <small>Dirección:</small>
            <h6>
              {direccion.calle} {direccion.numero}, {direccion.alcaldia}, {console.log(direccion.cp)},{direccion.estado}
            </h6>
          </div>
        </div>
      </div>
    </section>
  );
};

export default crearResena;
