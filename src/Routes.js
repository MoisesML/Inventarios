import React, {Fragment} from 'react'
import {Route} from 'react-router-dom'
import PrincipalView from './views/PrincipalView'
import InicioView from './views/InicioView'
import ModElemView from './views/ModElemView'

export default function Routes() {
    return (
        <Fragment>
            <Route exact path="/" component={InicioView} />
            <Route exact path="/principal" component={PrincipalView} />
            <Route exact path="/modificar" component={ModElemView} />
            <Route exact path="/crear" component={ModElemView} />
        </Fragment>
    )
}
