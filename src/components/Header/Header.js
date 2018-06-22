import React, { Component } from 'react';
import './Header.css';
import Title from './Title/Title'

class Header extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header className="row header">
                <Title>total<span className="font-weight-bold">money.</span>pl</Title>
                <hr className="header__hr"/>
            </header>
        )
    }
}


export default Header;