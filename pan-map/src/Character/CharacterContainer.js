import React, { Component } from 'react'

import Character from './Character'
import SearchBar from '../SearchBar'

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {fetchCharactersAsync} from '../redux/actions/index'


const mapStateToProps = state => {
  return {
    characters: state.characters
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCharactersAsync: bindActionCreators(fetchCharactersAsync, dispatch)
  }
}

class CharacterContainer extends Component {


  componentDidMount() {
    // console.log('state from componentDidMount: ', this.state)
    this.props.fetchCharactersAsync();
  }

  render() {
    // console.log('state from render: ', this.state)
    return (
      <div className="App">
        <SearchBar/>
        <div className="contenedor-cards">
          {
            this.props.characters.map(character => {
              return <Character
                id={character.id}
                key={character.id}
                image={character.fotos}
                name={character.titulo}
                gender={character.autor}
                specie={character.temas}
                resena={character.resena}
                calificacion={character.calificacion}
              />
            })
          }
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterContainer)