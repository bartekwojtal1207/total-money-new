import React, { Component } from 'react';
import Label from './Label'

const Input = (props) => {
    let inputElement = null;
    const inputClasses = ['form-control', 'contact__form__input'];

    if (props.invalid && props.shouldValidate && props.touched) {
        inputClasses.push('danger');
    }else if (!props.invalid && props.shouldValidate && props.touched){
        inputClasses.push('success');
    }

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

    return (
        <div className={'form-group'}>
            {inputElement}
            <Label classLabel={(!props.invalid && props.shouldValidate && props.touched) ? 'contact__form__input_label_focused' : 'contact__form__input_label'}>
                {props.label}
            </Label>
            {props.invalid && props.shouldValidate && props.touched ?  <span className={'error-message'}> {props.errorMessage}</span> : ''}
        </div>
    )

};

export default Input;