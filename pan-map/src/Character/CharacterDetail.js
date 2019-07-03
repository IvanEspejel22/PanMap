import React from 'react'
import {Link} from 'react-router-dom'

const CharacterDetail = ({image, name, origin, onGoBack}) => {
  return (
    <>
      <img src={image} alt="" />
      <h1>{name}</h1>
      <p>{origin}</p>
      <button onClick={onGoBack}>⬅️ Go back</button>
    </>
  );
}

export default CharacterDetail