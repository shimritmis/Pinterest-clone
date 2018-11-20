import React from 'react';
import classes from './Item.css';

const item=(props)=> (
    <div className={classes.ItemParent}>
        <div className ={classes.Item1}></div>
        <div className ={classes.Item2}></div>
        <div className ={classes.Item2}></div>
        <div className ={classes.Item1}></div>
        <div className ={classes.Item1}></div>
        <div className ={classes.Item2}></div>
        <div className ={classes.Item1}></div>
        <div className ={classes.Item1}></div>
    </div>
);

export default item; 