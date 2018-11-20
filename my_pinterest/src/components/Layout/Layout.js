import React, { Component } from 'react';
import classes from './Layout.css';
import Container from './Container/Container';
import Header from './Header/Header';

class Layout extends Component {
  render() {
    return (
      <div className = {classes.Layout}>
        <Header />
        <Container />
      </div>
    )
  }
}

export default Layout;
