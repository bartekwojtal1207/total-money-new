import React, {Component} from 'react';

const Label = (props) => {

    return (
       <span>
           <label className={props.className} onClick={props.click}>
                {props.label}
            </label>
       </span>
    )
};

export default Label