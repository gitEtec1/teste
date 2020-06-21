import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/Registro';
import Profile from './pages/Profile';
import NewIncidents from './pages/NewIncidents';

function Routes(){

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/register" exact component={Register} />             
                <Route path="/Profile" exact component={Profile} />             
                <Route path="/incidents/new" exact component={NewIncidents} />             
            </Switch>
        </BrowserRouter>
    )

}

export default Routes;
