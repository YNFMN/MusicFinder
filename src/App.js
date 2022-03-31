import React  from 'react';
import { Switch, Route } from 'react-router-dom';
import { PageHeader } from 'react-bootstrap';

import Main from './containers/Main/Main';
import Albums from './containers/Albums/Albums';
import AlbumsInfo from './containers/AlbumsInfo/AlbumsInfo';

import './App.css';

const App = () => {
    return (
      <div className="app-main-page">
        <div className="page-header">
          <PageHeader>Find Music by Artist</PageHeader>
        </div>
        <Switch>
          <Route path='/artist/' component={Albums} />
          <Route path='/album/' component={AlbumsInfo} />
          <Route path='/' component={Main} />
        </Switch>
      </div>
    )
  }

export default App;
