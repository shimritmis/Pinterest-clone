import React from 'react';
import classes from './Button.css'

const Button = (props) => (
    <div className = {classes.Button}>
        {props.children}
    </div>
);

export default Button;

