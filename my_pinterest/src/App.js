import React, { Component } from 'react';
import classes from './App.css';
import Layout from './components/Layout/Layout';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faComment} from '@fortawesome/free-solid-svg-icons'
import { faBell} from '@fortawesome/free-solid-svg-icons'


library.add(fab, faSearch, faComment, faBell)



class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Layout />
      </div>
    )
  }
}

export default App;
