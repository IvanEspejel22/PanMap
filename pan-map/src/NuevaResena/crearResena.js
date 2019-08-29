import React from "react";
import { Field, FieldArray, reduxForm } from 'redux-form'


const f=new Date();
  const fechActual = f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear();
const validate = values => {
  
  const errors = {}
  if (!values.titulo) {
    errors.titulo = 'Este campo es requerido'
  } else if (values.titulo.length > 25) {
    errors.titulo = 'El título debe tener 25 letras o menos'
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
    <small>{label}</small>
    <div>
      <input {...input} placeholder={label} type={type}/><br/>
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
)

const renderHobbies = ({ fields, meta: { error } }) => (
  <ul>
    <li>
      <button type="button" onClick={() => fields.push()}>Agregar un tema relacionado</button>
    </li>
    {fields.map((tema, index) =>
      <li key={index}>
        <button
          type="button"
          title="Quitar"
          onClick={() => fields.remove(index)}/>
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
    
      <div id="Hero-detalle">
      <form onSubmit={handleSubmit}>
        
        
          <div className="detalle-titulo">
          <Field name="titulo" type="text" component={renderField} label="Titulo"/>
          </div>
     
     
            <div>
              <Field name="panaderia" type="text" component={renderField} label="Panaderia"/>
            </div>
            
            <div>
              <Field name="autor" type="text" component={renderField} label="Autor"/>
            </div>

            <div>
            <Field name="fecha" type="text" value={fechActual} component={renderField} label="Fecha" />
            </div>
          
          <div className="detalle-resena">
            <small>Reseña:</small><br/>
            <Field name="resena" component="textarea"/>
          </div>
         <div className="categorias">
         {console.log()}
         <FieldArray name="temas" component={renderHobbies}/>
        </div>
          
        
       
          <div className="detalle-direccion-titulo">
            <small>Dirección:</small>
            <Field name="calle" type="text" component={renderField} label="Calle"/>
            <Field name="numero" type="number" component={renderField} label="Numero"/>
            <Field name="alcaldia" type="text" component={renderField} label="Alcaldia"/>
            <Field name="cp" type="number" component={renderField} label="Codigo postal"/>
          </div>
        
          <button type="submit" disabled={submitting}>Submit</button>
           <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
      </form>
      </div>
      
  );
};

export default reduxForm({
  form: 'crearResena',  // a unique identifier for this form
  validate,                // <--- validation function given to redux-form
  warn,                     // <--- warning function given to redux-form
  initialValues: { fecha:fechActual }
})(crearResena)
