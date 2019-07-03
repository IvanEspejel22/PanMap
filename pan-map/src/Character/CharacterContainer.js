import React, { Component } from 'react'

import Character from './Character'

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
        <header className="App-header">
          {
            this.props.characters.map(character => {
              return <Character
                id={character.id}
                key={character.id}
                image={character.image}
                name={character.name}
                gender={character.gender}
                specie={character.species}
              />
            })
          }
        </header>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterContainer)