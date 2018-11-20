import React from 'react';
import ItemFirstRow from '../../../containers/Item/ItemFirstRow';
import Item from '../../../containers/Item/Item';

import classes from './Container.css'

const container=(props) => (
    <div className={classes.Container}>
        <ItemFirstRow />
        <Item />
        <ItemFirstRow />
        <Item />
        <ItemFirstRow />
        <Item />
        <ItemFirstRow />
    </div>
);

export default container; 