import React, { Component } from 'react';

const Input = (props) => {
    let inputElement = null;
    const inputClasses = ['form-control', 'contact__form__input'];

    switch ( props.elementType ) {
        case ('input'):
            inputElement = <input
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed}/>;
            break;
        default:
            inputElement = <input
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
    }
    // if (props.invalid && props.shouldValidate && props.touched) {
    //     inputClasses.push(classes.Invalid);
    // }

    return (
        <div className={'est'}>
        {inputElement}
        </div>
    )

};

export default Input;