import React, { Component } from 'react';
import Mousetrap from 'mousetrap';

class Konami extends Component {
    constructor() {
        super();
    }

    componentDidMount() {
        Mousetrap.bind(['1 2 3 4', 'up up down down left right left right b a'], this.popUp);
    }

    componentWillUnmount() {
        Mousetrap.unbind(['1 2 3 4', 'up up down down left right left right b a']);

    }

    popUp() {
        alert('It worked buddy ;-)');
    }

    render() {
        return ( < div > Welcome to my Crazy React App < /div >

        );
    }
}

export default Konami;