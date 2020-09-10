import React from 'react';
import {Switch, Route, BrowserRouter,} from 'react-router-dom';
import {Home, Edit} from './pages';

const Routes = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route exact path="/new">
                    <Edit/>
                </Route>
                <Route exact path="/edit/:id">
                    <Edit/>
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;