import React from 'react';
import classes from '../InnerHeader/InnerHeader.css';
import Logo from '../../../UI/Logo/Logo';
import Searchbar from '../../../UI/Searchbar/Searchbar';
import HeaderButtons from '../../../UI/HeaderButtons/HeaderButtons';
const innerHeader = (props) => (
    <div className= {classes.InnerHeader}>
        <Logo />
        <Searchbar />
        <HeaderButtons />
        {props.children}
    </div>
);

export default innerHeader;
