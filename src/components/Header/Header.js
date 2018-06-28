import React, { Component } from 'react';
import './Header.css';
import Title from './Title/Title'

class Header extends Component {

    render() {
        return (
            <div>
                <header className="header">
                    <Title>total<span className="font-weight-bold">money.</span>pl</Title>
                    <hr className="header__hr"/>
                </header>
            </div>
    )
    }

    constructor(props) {
        super(props);
    }
}


export default Header;