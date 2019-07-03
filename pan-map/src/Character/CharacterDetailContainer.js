import React, { Component } from 'react'
import axios from 'axios'
import CharacterDetail from './CharacterDetail';

class CharacterDetailContainer extends Component {

  state = {
    image: '',
    name: '',
    origin: ''
  }

  componentDidMount(){
    this.getCharacter()
  }

  async getCharacter() {
    try {
      const res = await axios.get(`https://rickandmortyapi.com/api/character/${this.props.match.params.id}`)
      // console.log('characters: ', res.data)
      this.setState({
        image: res.data.image,
        name: res.data.name,
        origin: res.data.origin.name
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
          image={this.state.image}
          name={this.state.name}
          origin={this.state.origin}
          onGoBack={() => this.onGoBack()}
        />
      </>
    )
  }
}

export default CharacterDetailContainer