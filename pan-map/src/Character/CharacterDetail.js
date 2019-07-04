import React from 'react'

import {Link} from 'react-router-dom'
import IconoHero from '../Images/Fotos.svg';
const CharacterDetail = ({image, name, origin, onGoBack}) => {
  const ImagenFondo = {
    backgroundImage: `url(${ image })`
  }
  return (
    <section>
        <div id="Hero-detalle">
        <div className="hero-detalle-fondo" style={ImagenFondo} >

        </div>
        <div className="detalle-caja">
            <div className="detalle-titulo">
                <h2>{name}</h2>
            </div>
            <div>
                <button><img className="icono-button" src={IconoHero}alt=""></img></button>
            </div>
        </div>
    </div>
    <div className="contenido-detalle">
        <div className="info-detalle">
            <div className="detalle-subtitulo">
                <div><small>{origin}</small> <br/>
                    <h5>Tacubaya</h5>
                </div>
                <div><small>Tipo de pan</small> <br/>
                    <h5>Bisquets</h5>
                </div>
            </div>
            <div className="detalle-resena">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, sapiente? A nemo voluptates tempora
                    ipsam. Tempora, quaerat? Autem neque esse, magnam molestiae dolore inventore iusto accusantium,
                    facere sed provident hic? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam repellat
                    est, labore ducimus debitis harum quam corrupti, voluptate natus soluta incidunt minus veritatis
                    omnis delectus a quasi reprehenderit sint voluptatibus? Lorem ipsum dolor, sit amet consectetur
                    adipisicing elit. Accusantium, provident? Tenetur, numquam consequatur perspiciatis quaerat sed
                    laudantium explicabo perferendis nesciunt repellat blanditiis nam temporibus nostrum maiores nihil!
                    Dolore, inventore excepturi!
                    Dignissimos, vitae rerum. Delectus maiores eius, nihil laborum repudiandae asperiores omnis
                    quibusdam voluptatum vel praesentium eveniet voluptas esse doloremque, voluptate cupiditate ea nulla
                    ad et perferendis. Repellendus eaque aperiam doloribus?
                    Id voluptatem, sapiente nobis vero facilis consectetur cumque, dignissimos quibusdam officiis culpa
                    neque commodi beatae maxime quia, iure eligendi sunt. Ea facilis molestias a necessitatibus
                    repellendus tempore nam aliquid. Doloremque.
                    Vitae iste quas facilis. Id voluptatem labore esse ullam minus, tempore earum temporibus, quasi
                    alias autem incidunt cupiditate! A maiores delectus quibusdam veritatis culpa quidem sit facere,
                    asperiores tempore esse!</p>
            </div>
            <div className="categorias">
                <div className="etiqueta">Pan dulce</div>
                <div className="etiqueta">Panadería</div>
                <div className="etiqueta">Centro</div>
            </div>
            <div className="calificacion-detalle">
                <div className="estrella-detalle"></div>
                <div className="estrella-detalle"></div>
                <div className="estrella-detalle"></div>
                <div className="estrella-detalle"></div>
                <div className="estrella-detalle"></div>
            </div>
        </div>
        <div className="detalle-direccion">
            {/* <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3761.9173883321196!2d-99.18826518500543!3d19.459128286869287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f89e939ac8e1%3A0x58aca53a576b0e88!2sPASTELERIA+LA+PALANCA!5e0!3m2!1ses!2smx!4v1561690575491!5m2!1ses!2smx"
                width="100%" height="80%" frameborder="0" style="border:0" allowfullscreen></iframe> */}
            <div class="detalle-direccion-titulo">
                <small>Dirección:</small>
                <h6>Calzada México-Tacuba 735, Tacuba, 11410 Ciudad de México, CDMX</h6>
            </div>
        </div>


    </div>
     
    </section>
  );
}

export default CharacterDetail