import React from 'react';
import PhotoPlaceholderOdd from '../../../containers/Item/PhotoPlaceholderOdd';
import PhotoPlaceholder from '../../../containers/Item/PhotoPlaceholder';

import classes from './Container.css'

const container=(props) => (
    <div className={classes.Container}>
        <PhotoPlaceholderOdd />
        <PhotoPlaceholder />
        <PhotoPlaceholderOdd />
        <PhotoPlaceholder/>
        <PhotoPlaceholderOdd/>
        <PhotoPlaceholder />
        <PhotoPlaceholderOdd />
    </div>
);

export default container; 