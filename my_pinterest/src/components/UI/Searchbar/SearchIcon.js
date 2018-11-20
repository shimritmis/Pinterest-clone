import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';   
import classes from './SearchIcon.css';

const searchIcon =(props) => (
<FontAwesomeIcon icon="search" className={classes.SearchIcon}/>
);

export default searchIcon;