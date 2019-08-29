import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import CharacterContainer from './Character/CharacterContainer';
import CharacterDetailContantainer from './Character/CharacterDetailContainer'
import ContenedorEditar from './editarResena/index'
import NuevaResena from './NuevaResena/index'
import Menu from './shared/Menu'


const Example = () => <h1>Example Works!</h1>
const NotFound = () => <h1>404</h1>

export default () => {
  return (
    <BrowserRouter>
      <Menu />
      <Switch>
        <Route exact path="/" component={CharacterContainer} />
        <Route path="/resena-detail/:id" component={CharacterDetailContantainer}/>
        <Route path="/contenedor-editar/:id" component={ContenedorEditar}/>
        <Route path="/nueva-resena" component={NuevaResena}/>
        <Route path="/example" component={Example} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}