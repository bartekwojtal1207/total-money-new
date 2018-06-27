import React, {Component} from 'react';

const Label = (props) => {
    this.state = {

    }

    return (
       <span>
           <label className={props.className} onClick={props.click}>
                {props.label}
            </label>
       </span>
    )
};

export default Label