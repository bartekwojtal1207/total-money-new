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
            inputElement = <div className={'form-check'}>
                    <input
                        className={'form-check-input'}
                        {...props.elementConfig}
                        value={props.value}
                        onChange={props.changed} />
                    <span className={'contact__form__check_wrapper__fake_checkbox'}></span>
                </div>;
             break;
        default:
            inputElement = <input
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
    }

    return (
        <div className={props.elementType === 'input' ? 'form-group' : 'contact__form__check_wrapper'}>
            {inputElement}
            <Label label={props.elementConfig.desc}
                   elementType={props.elementType}
                   className={props.elementType === 'input' ? labelClasses.join('') : labelCheckboxClasses }>
            </Label>
            {props.invalid && props.shouldValidate && props.touched ?  <span className={'error-message'}> {props.errorMessage}</span> : ''}
        </div>
    )

};

export default Input;

{/*<div className={( (checkbox.value === 0) && (checkbox.isValid) ) ? 'form-check error-form-check' : 'form-check'} key={index+'form-check'}>*/}

    //             <Input
//                 key={index}
//                 name={checkbox.name}
//                 type={checkbox.type}
//                 id={checkbox.name}
//                 change={(event)=> this.onChangeCheckboxHandler(event, index)}
//                 classInput='form-check-input' >
//             </Input>
//
//             <span className={( (checkbox.value === 0) && (checkbox.isValid) ) ? 'checkbox-error' : 'contact__form__check_wrapper__fake_checkbox'} key={index+'span'}> </span>
//         </div>