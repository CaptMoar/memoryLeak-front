
import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import { Monitor } from '../view/Monitor';

export const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/monitor" component={Monitor}/>

                <Redirect to="/monitor"></Redirect>
            </Switch>
        </Router>
    )
}
