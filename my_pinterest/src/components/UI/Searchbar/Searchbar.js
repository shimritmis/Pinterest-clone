import React from 'react';
import classes from './Searchbar.css';
import SearchIcon from './SearchIcon';

const searchbar = (props) => (
    <div className={classes.Searchbar}>
        <SearchIcon />
        <input type="search" placeholder="Search" className={classes.Input}/>
    </div>
);

export default searchbar; 