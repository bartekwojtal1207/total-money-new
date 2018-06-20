import React, { Component } from 'react';

const CreditInfoItems = (props) => {
    return (
        <li key={props.index}  className={'text-credit__info__list__item'}>{props.children[1]}<strong>{props.children[3]}</strong></li>
    )
};

export default CreditInfoItems;

//@TODO do poprawy props.children