import React from 'react';
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
                onFocus={props.onFocus}
                onChange={props.changed}
                required={true}/>;
            break;

        case ('checkbox'):
            inputElement =
                <div className={! props.checked &&  props.touched ? 'form-check error-form-check': 'form-check'}>
                    <label className="form-check-label contact__form__checkbox_label" htmlFor={props.id}>{props.elementConfig.desc}</label>
                    <span onClick={props.showMoreText}> {! props.fullConsentVisible ? '[ więcej ]' : '[ mniej ]' }</span>
                    <span className={props.fullConsentVisible ? 'text-more' :  'text-more-hidden'}>
                        {props.fullConsent}
                    </span>
                        <input
                            className={'form-check-input'}
                            {...props.elementConfig}
                            checked={props.checked}
                            id={props.id}
                            onChange={props.changed}
                            required={true}
                        />
                        <span className={! props.checked &&  props.touched ? 'contact__form__check_wrapper__fake_checkbox checkbox-error' : 'contact__form__check_wrapper__fake_checkbox'}></span>
                </div>;
            break;

        default:
            inputElement = <input
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
    }

    let  labelElement = null,
         iconElement = null;

    if (props.elementType === 'input' ) {
        labelElement =  <Label label={props.elementConfig.desc} elementType={props.elementType} className={props.elementType === 'input' ? labelClasses.join('') : labelCheckboxClasses }> </Label>;

        if (props.invalid && (props.shouldValidate && props.touched)) {
            iconElement =  <i className="demo-icon icon-exclamation"></i>;
        }else if (!props.invalid && (props.shouldValidate && props.touched)){
            iconElement = <i className="demo-icon icon-ok"></i>
        }
    }else if (props.elementType === 'checkbox') {
        if ( props.checked &&  props.touched) {
            iconElement = <i className="demo-icon icon-ok"></i>;
        }else if (! props.checked &&  props.touched) {
            iconElement = <i className="demo-icon icon-exclamation"></i>;
        }
    }

    return (
        <div className={props.elementType === 'input' ? 'form-group' : 'check'}>
            { iconElement }
            { inputElement }
            { labelElement }
            {props.elementType === 'input' && props.invalid && props.shouldValidate && props.touched ?  <span className={'error-message'}> {props.errorMessage}</span> : ''}
        </div>
    )
};


export default Input;
