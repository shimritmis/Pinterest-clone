import React from 'react';
import InnerHeader from './InnerHeader/InnerHeader';
import classes from './Header.css';


const header= (props) => (
    <div className= {classes.Header}>
        <InnerHeader />
    </div>
);

export default header;
