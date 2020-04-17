import React from 'react';
import { css } from 'emotion';
import Header from './Components/Header';
import FollowerContainer from './Components/FollowerContainer';
import Overview from './Components/Overview';
import OverviewContainer from './Components/OverviewContainer';

function App() {
  return (
    <div className="App">
      <Header />
      <FollowerContainer />
      <Overview />
      <OverviewContainer />
    </div>
  );
}

export default App;
