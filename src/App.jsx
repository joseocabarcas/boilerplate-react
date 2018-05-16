import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader'
import { BrowserRouter } from 'react-router-dom';
import Router from './router';
import Layout from './layout/master';


const App = props => {
    return (
        <BrowserRouter>
            <Layout>
                <Router/>
            </Layout>
        </BrowserRouter>
    )
}
render(App);

if(module.hot)
    module.hot.accept(App, () => render(App.default));


function render (App) {
    ReactDOM.render(
        <AppContainer>
            <App/>
        </AppContainer>,
        document.getElementById('app')
    )
}