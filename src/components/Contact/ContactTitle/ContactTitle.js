import React, { Component } from 'react';
import './ContactTitle.css';
import Tooltip from '../ContactTooltip/ContactTooltip';

const ContactTitle = (props) => {
    return (
        <div>
            <h3 className="contact__title">{props.children}</h3>
            <span className="contact__subtitle">{props.subtitle}</span>
            <Tooltip/>
        </div>)
};

export default ContactTitle;