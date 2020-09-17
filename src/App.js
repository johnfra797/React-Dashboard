import React, { Fragment } from 'react';
import logo from './logo.svg';
import './globals.css';
import Header from './Components/Header'
import TopCardList from './Components/top-card-list'
import Overview from './Components/Overview'
import Switch from './Components/switch'

function App() {
  return (
    <Fragment>
      <Header>
      <Switch></Switch>
      </Header>
      <TopCardList></TopCardList>
      <Overview></Overview>
    </Fragment>
  );
}

export default App;
