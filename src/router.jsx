import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Index from './ui/todo/containers/index';

class Router extends Component {
    render () {
    	const ad = 'hola';
        return (
            <Switch>
                <Route exact path="/" component={Index}/>
            </Switch>
        )
    }
}

export default Router;