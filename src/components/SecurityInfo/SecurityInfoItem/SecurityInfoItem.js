import React, { Component } from 'react';

const SecurityInfoItem = (props) => {
    return (
        <li className="security__list_item" key={props.index}>
            <img src={props.img} className="security_item__logo img-fluid" alt="brak zdjecia"/>
            <p className="security_item__title">{props.children}</p>
        </li>
    )
};

export default SecurityInfoItem;