import React from 'react'
import {Link} from 'react-router-dom'

const Character = ({image, name, gender, specie, getCharacter, id}) => {
  return (
    <>
      <img src={image} alt="character"/>
      <Link to={`/character-detail/${id}`}>
        <h1>{name}</h1>
      </Link>
      <p>{gender}</p>
      <p>{specie}</p>
      {/* <button onClick={getCharacter}>Random Character</button> */}
    </>
  )
}

export default Character;