import React from 'react';
import Aux from '../../../hoc/Auxiliary';
import HomeButton from './HomeButton/HomeButton';
import FollowingButton from './FollowingButton/FollowingButton'
import ProfileButton from './ProfileButton/ProfileButton'
import classes from './HeaderButtons.css';


const headerButtons = (props) => (
    <Aux className= {classes.headerButtons}> 
        <HomeButton />
        <FollowingButton />
        <ProfileButton />
    </Aux>    
);

export default headerButtons;

