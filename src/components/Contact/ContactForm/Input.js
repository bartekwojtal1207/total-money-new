import React, { Component } from 'react';
import Label from './Label'

const Input = (props) => {
    let inputElement = null;
    const inputClasses = ['form-control', 'contact__form__input'],
          labelClasses = ['contact__form__input_label'],
          labelCheckboxClasses = ['contact__form__checkbox_label'];


    if (props.invalid && props.shouldValidate && props.touched) {
        inputClasses.push('danger');
    }else if (!props.invalid && props.shouldValidate && props.touched){
        inputClasses.push('success');
        labelClasses.splice('');
        labelClasses.push('contact__form__input_label_focused');
    }

    switch ( props.elementType ) {
        case ('input'):
            inputElement = <input
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed}/>;
            break;

        case ('checkbox'):
            inputElement =
                <div className={'form-check'}>
                    <label className="form-check-label contact__form__checkbox_label" htmlFor={props.id}>{props.elementConfig.desc}</label>
                    <span>[ więcej ]</span>
                        <input
                            className={'form-check-input'}
                            {...props.elementConfig}
                            checked={props.checked}
                            id={props.id}
                            onChange={props.changed}
                        />
                        <span className={'contact__form__check_wrapper__fake_checkbox'}></span>
                    {! props.checked &&  props.touched ?  <span className={'error-message'}> {props.errorMessage}</span> : ''}
                </div>;
            break;

        default:
            inputElement = <input
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
    }


    let  labelElement = null;

    if (props.elementType === 'input' ) {
        labelElement =  <Label label={props.elementConfig.desc}
                               elementType={props.elementType}
                               className={props.elementType === 'input' ? labelClasses.join('') : labelCheckboxClasses }>
                        </Label>
    }

    return (
        <div className={props.elementType === 'input' ? 'form-group' : 'contact__form__check_wrapper'}>
            {inputElement}
            {labelElement}
            {props.elementType === 'input' && props.invalid && props.shouldValidate && props.touched ?  <span className={'error-message'}> {props.errorMessage}</span> : ''}
        </div>
    )

};

export default Input;
