import React from 'react';
import classes from './Button.css'

const Button = (props) => (
    <div className = {classes.FollowingButton}>
        {props.children}
    </div>
);

export default Button;

