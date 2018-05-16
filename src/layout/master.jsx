import React, { Component } from 'react';

export default class Layout extends Component {
    render = () => {
        return (
            <React.Fragment>
                <header>header</header>
                <main>{this.props.children}</main>
                <footer>footer</footer>
            </React.Fragment>
        )
    }
}