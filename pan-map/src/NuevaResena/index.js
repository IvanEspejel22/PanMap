import React, { Component } from 'react'

import showResults from "./showResults";
import CrearResena from './resena'

class crearContainer extends Component {

render() {
    // console.log('state from render: ', this.state)
    return (
      <>
        <CrearResena onSubmit={showResults} />   
      </>
    );
  }
}

export default crearContainer