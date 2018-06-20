import React, {Component} from 'react';

const Label = (props) => {
    return (
        <label htmlFor={props.forLabel} className={props.classLabel} onClick={props.click}>{props.children}</label>
    )
};

export default Label