import React from 'react'
import {Router} from 'react-router-dom/cjs/react-router-dom.min';

import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header/index'
import Routes from './routes/index'
import history from './services/history';

function App() {
  return (
    <Router history={history}>
    <Header/>
    <Routes/>
    <GlobalStyles/>
    </Router>
  );
}

export default App;
