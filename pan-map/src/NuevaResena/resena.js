import React from "react";
import IconoHero from "../Images/Fotos.svg";
import Ratings from 'react-ratings-declarative';
import Iframe from 'react-iframe'
import mas from '../Images/mas.svg';
import eliminar from '../Images/eliminar.svg';
import { Field, FieldArray, reduxForm } from 'redux-form'
const f=new Date();
  const fechActual = f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear();
const validate = values => {
  
  const errors = {}
  if (!values.titulo) {
    errors.titulo = 'Este campo es requerido'
  } else if (values.titulo.length > 45) {
    errors.titulo = 'El título debe tener 45 letras o menos'
  }

  if (!values.panaderia) {
    errors.panaderia = 'Este campo es requerido'
  } else if (values.panaderia.length > 25) {
    errors.panaderia = 'La panadería debe tener 25 letras o menos'
  }

  if (!values.calle) {
    errors.calle = 'Este campo es requerido'
  } else if (values.calle.length > 25) {
    errors.calle = 'La calle debe tener 25 letras o menos'
  }

  if (!values.alcaldia) {
    errors.alcaldia = 'Este campo es requerido'
  } else if (values.alcaldia.length > 25) {
    errors.alcaldia = 'La alcaldia debe tener 25 letras o menos'
  }

  if (!values.estado) {
    errors.estado = 'Este campo es requerido'
  } else if (values.estado.length > 25) {
    errors.estado = 'El estado debe tener 25 letras o menos'
  }

 
  // if (!values.email) {
  //   errors.email = 'Este campo es requerido'
  // } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
  //   errors.email = 'Invalid email address'
  // }
  if (!values.autor) {
    errors.autor = 'Este campo es requerido'
  } else if (isNaN(Number(values.autor))) {
    errors.autor = 'Debe ser el id de un autor '
  } 

  if (!values.cp) {
    errors.cp = 'Este campo es requerido'
  } else if (isNaN(Number(values.cp))) {
    errors.cp = 'Debe ser un numero'
  } 
  
  if (!values.numero) {
    errors.numero = 'Este campo es requerido'
  } else if (isNaN(Number(values.numero))) {
    errors.numero = 'Debe ser un numero'
  } 

  return errors
}

const warn = values => {
  const warnings = {}
  if (values.age < 19) {
    warnings.age = 'Hmm, you seem a bit young...'
  }
  return warnings
}

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
    <small  className="small-nueva-resena">{label}</small>
    <div>
      <input className="input-titulo-nr2" {...input} placeholder={label} type={type}/><br/>
      {touched && ((error && <span className="alertas-nr">{error}</span>) || (warning && <span className="alertas-nr">{warning}</span>))}
    </div>
  </div>
)

const renderField2 = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
    <small className="titulo-nueva-resena">{label}</small>
    <div>
      <input className="input-titulo-nr" {...input} placeholder={label} type={type}/><br/>
      {touched && ((error && <span className="alertas-nr">{error}</span>) || (warning && <span className="alertas-nr">{warning}</span>))}
    </div>
  </div>
)

const renderField3 = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div className="fecha-input">
    <small>{label}</small>
    <div>
      <input className="input-titulo-nr2" {...input} placeholder={label} type={type}/><br/>
      {touched && ((error && <span className="alertas-nr">{error}</span>) || (warning && <span className="alertas-nr">{warning}</span>))}
    </div>
  </div>
)

const renderHobbies = ({ fields, meta: { error } }) => (
  <ul className="ul-nr1">
    <li className="ul-nr">
    <small>Temas relacionados</small>
      <button type="button" onClick={() => fields.push()}><img className="icono-button" src={mas}alt=""/></button>
    </li>
    {fields.map((tema, index) =>
      <li key={index} className="ul-nr2">
        <button
          type="button"
          title="Quitar"
          onClick={() => fields.remove(index)}><img className="icono-button" src={eliminar}alt=""/></button>
        <Field
          name={tema}
          type="text"
          component={renderField}
          label={`Tema #${index + 1}`}/>
      </li>
    )}
    {error && <li className="error">{error}</li>}
  </ul>
)

const crearResena= (props) => {

  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <section className="nr-section">
      <form onSubmit={handleSubmit}>
      <div id="Hero-detalle">
        <div className="hero-fondo"  />
        <div className="detalle-caja">
        
          <div className="detalle-titulo">
          <Field name="titulo" type="text" component={renderField2} label="Titulo"/>
          </div>
          <div>
              <input type="file" />
              {/* <button>
                <img className="icono-button" src={IconoHero} alt="" />
              </button> */}
          
          </div>
        </div>
      </div>
      <div className="contenido-detalle">
        <div className="info-detalle-nr">
          <div className="detalle-subtitulo">
            <div>
              <Field name="panaderia" type="text" component={renderField} label="Panaderia"/>
            </div>
            <div>
              <Field name="autor" type="number" component={renderField} label="Autor"/>
            </div>
            <div>
            <Field name="fecha" type="text"  value={fechActual} component={renderField3} label="Fecha" />
            </div>
          </div>
          <div className="detalle-resena small-nueva-resena">
            <small>Reseña:</small><br/>
            <Field name="resena" className="resena-nr" component="textarea"/>
          </div>
         <div className="categorias-nr">
         <FieldArray name="temas" component={renderHobbies}/>
          </div>
          <div className="">
          <button type="submit" className="btn-nr" disabled={submitting}>Crear Reseña</button>
          <button type="button" className="btn-nr2" disabled={pristine || submitting} onClick={reset}>Limpiar Valores</button>
          </div>
        </div>
        
          <div className="detalle-direccion-nr">
            <small>Dirección:</small>
            <Field name="calle" type="text" component={renderField} label="Calle"/>
            <Field name="numero" type="number" component={renderField} label="Numero"/>
            <Field name="alcaldia" type="text" component={renderField} label="Alcaldia"/>
            <Field name="cp" type="number" component={renderField} label="Codigo postal"/>
            <Field name="estado" type="text" component={renderField} label="Estado"/>
          </div>
          
        
      </div>
      </form>
    </section>
  );
};

export default reduxForm({
  form: 'crearResena',  // a unique identifier for this form
  validate,                // <--- validation function given to redux-form
  warn,                     // <--- warning function given to redux-form
  initialValues: { fecha:fechActual }
})(crearResena)
