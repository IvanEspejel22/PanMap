import React, { Component } from "react";
import CharacterDetail from "./CharacterDetail";
import axios from 'axios'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {fetchCharactersAsync} from '../redux/actions/index'


class CharacterDetailContainer extends Component {

  state = {
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

  componentDidMount(){
    this.getCharacter()
  }

  async getCharacter() {
    try {
      const res = await axios.get(`http://localhost:3000/resenas/${this.props.match.params.id}`)
      console.log('characters: ', res)
      this.setState({
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

    try {
      const res = await axios.get(`http://localhost:3000/usuarios/${this.state.autor}`)
      console.log('characters: ', res.data.id)
      this.setState({
        NombreAutor: res.data.nombre,
      })
    }
    catch (err) {
      console.log(err)
    }
  }

  onGoBack() {
    this.props.history.push("/")
  }

  render() {
    return (
      <>
        <CharacterDetail 
          id= {this.state.id}
          direccion= {this.state.direccion}
          fotos= {this.state.fotos}
          autor= {this.state.NombreAutor}
          fecha= {this.state.fecha}
          resena= {this.state.resena}
          calificacion = {this.state.calificacion}
          temas= {this.state.temas}
          titulo= {this.state.titulo}
          panaderia= {this.state.panaderia}
          onGoBack={() => this.onGoBack()}
        />
      </>
    )
  }
}

export default CharacterDetailContainer