import React from 'react';
import Aux from '../../../hoc/Auxiliary';
import Button from './Button/Button';
import classes from './HeaderButtons.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';   

const headerButtons = (props) => (
    <Aux className= {classes.HeaderButtons}> 
        <Button>Home</Button>
        <Button>Following</Button>
        <Button>User</Button>
        <Button><FontAwesomeIcon icon="comment" className={classes.Icon}/></Button>
        <Button><FontAwesomeIcon icon="bell" className={classes.Icon} /></Button>
        <Button><FontAwesomeIcon icon="bell" className={classes.Icon} /></Button>
    
   
    </Aux>    
);

export default headerButtons;

