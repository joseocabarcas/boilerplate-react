import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Index from './ui/todo/containers/index';
import Second from './ui/todo/containers/second';

class Router extends Component {
    render () {
        return (
            <Switch>
                <Route exact path="/" component={Index} />
                <Route exact path="/second" component={Second} />
            </Switch>
        )
    }
}

export default Router;