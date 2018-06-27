import React, {Component} from 'react';

const Button = (props) => {
    return (
        <button type="submit" className="btn btn-primary contact__contact_form__submit">{props.children}</button>
    )
};


export default Button;