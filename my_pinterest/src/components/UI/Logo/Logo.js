import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classes from './Logo.css';

const logo =(props)=> (
 <FontAwesomeIcon icon={['fab', 'pinterest']} className={classes.Logo}/>
);

export default logo; 