import React, {Component} from 'react';
import './ContactTooltip.css';

const Tooltip = (props) => {
    return (
     <span className={'tooltip-contact'}> !
        <span className="tooltiptext">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis aliquet dolor.
        </span>
     </span>
    )
};

export default Tooltip;