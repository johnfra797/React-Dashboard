import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './globals.css';
import Header from './Components/Header'
import TopCardList from './Components/top-card-list'
import Overview from './Components/Overview'
import Switch from './Components/switch'

function App() {
  const [checked, setChecked] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const mainClass = darkMode ? 'is-dark-mode' : 'is-light-mode';

  function changeMedia(mq) {
    setDarkMode(mq.matches);
    
    setChecked(mq.matches);
  }

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    mq.addListener(changeMedia);
    setDarkMode(mq.matches);
    setChecked(mq.matches);
    //setChecked(mq.matches);

  }, [])
 
  return (
    <main className={mainClass}>
      <Header>
        <Switch 
        setDarkMode={setDarkMode} 
        checked={checked} 
        setChecked={setChecked}></Switch>
      </Header>
      <TopCardList></TopCardList>
      <Overview></Overview>
    </main>
  );
}

export default App;
