import React, {Component} from 'react';

const Label = (props) => {
    let label = null;

    switch ( props.elementType ) {
        case ('input'):
            label = <label className={props.className}>
                {props.label}
            </label>;
            break;
        case ('checkbox'):
            label = <label className={props.className}>
                {props.label}
            {/*<span className={'link-more'}> [ {'asasd'} ] </span>*/}
            {/*<span className={'text-more'}>*/}
                {/*{'asdasdsad'}*/}
            {/*</span>*/}
            </label>
            break;

        default:
            label = <label className={(!props.invalid && props.shouldValidate && props.touched) ? 'contact__form__input_label_focused' : 'contact__form__input_label'}>
                {props.label}
            </label>;
    }
    return (
       <span>{label}</span>
    )
};

export default Label