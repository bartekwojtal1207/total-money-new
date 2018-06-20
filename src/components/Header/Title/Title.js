import React, { Component } from 'react';

const Title = (props) => {
    return (
        <h1 className="col-md-12 header__title">
            <a href="#" className="header__title__link font-weight-light">
                {props.children}
            </a>
        </h1>
        )
};

export default Title;