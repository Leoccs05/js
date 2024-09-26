import React from 'react'
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header/index'
import Routes from './routes/index'
import { Router} from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  return (
    <Router>
    <Header/>
    <Routes/>
    <GlobalStyles/>
    </Router>
  );
}

export default App;
