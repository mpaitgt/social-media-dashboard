import React, {useState} from 'react';
import { css } from 'emotion';
import Header from './Components/Header';
import FollowerContainer from './Components/FollowerContainer';
import Overview from './Components/Overview';
import OverviewContainer from './Components/OverviewContainer';
import Footer from './Components/Footer';
import { Container } from 'react-grid-system';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleView = () => {
    if (darkMode) {
      setDarkMode(false);
    } else {
      setDarkMode(true);
    }
  };

  return (
    <div className={css`
      background: ${darkMode ? 'var(--dark-theme-bg)' : 'var(--light-theme-bg)'};
      color: ${darkMode ? 'var(--dark-theme-txt)' : 'var(--light-theme-txt-darker)'};
    `}>
      <Container>
        <Header darkMode={darkMode} toggleView={toggleView}/>
        <FollowerContainer darkMode={darkMode} />
        <Overview />
        <OverviewContainer darkMode={darkMode} />
        <Footer />
      </Container>
    </div>
  );
}

export default App;
