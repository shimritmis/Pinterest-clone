import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';   
import classes from './Messenger.css';

const messanger=(props) => (
    <div className={classes.Messenger}>
        <FontAwesomeIcon icon="comment" />
    </div>
);

export default messenger;