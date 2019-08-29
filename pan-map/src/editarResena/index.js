import React, { Component } from 'react'
import axios from 'axios'
import showResults from "./showResults";
import EditarResena from './editarResena'

class EditarResenaContainer extends Component {
    constructor() {
        super(...arguments);
        this.state = {
        id: '',
        direccion:{},
        fotos: [],
        autor: '',
        fecha: '',
        resena:'',
        calificacion:'',
        temas:[],
        titulo:'',
        panaderia:'',
        NombreAutor: ''
        
      }
        
      }



componentDidMount(){
this.getCharacter()
}

async getCharacter() {
try {
  const res = await axios.get(`http://localhost:3000/resenas/${this.props.match.params.id}`)
//   console.log('characters: ', res)
  this.setState({
    toggleGallery:this.toggleGallery,
    id:res.data.id,
    direccion: res.data.ubicacion,
    fotos: res.data.fotos,
    autor: res.data.autor,
    fecha: res.data.fecha,
    resena:res.data.resena,
    calificacion: res.data.calificacion,
    temas: res.data.temas,
    titulo: res.data.titulo,
    panaderia: res.data.panaderia
  })
}
catch (err) {
  console.log(err)
}


}

render() {
    // console.log('state from render: ', this.state)
    return (
      <>
        <EditarResena 
        
        id= {this.state.id}
        direccion= {this.state.direccion}
        fotos= {this.state.fotos}
        autor= {this.state.autor}
        fecha= {this.state.fecha}
        resena= {this.state.resena}
        calificacion = {this.state.calificacion}
        temas= {this.state.temas}
        titulo2= {this.state.titulo}
        panaderia= {this.state.panaderia}
        onSubmit={() => showResults()} />   
      </>
    );
  }
}

export default EditarResenaContainer