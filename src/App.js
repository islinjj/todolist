import React from 'react';
import logo from './logo.svg';
import './App.css';
import Container from './components/Container';
import FinishList from './components/FinishList';
import Menu from './components/Menu';

import { HashRouter as Router, Route, HashRouter } from 'react-router-dom'
function App() {
  return (
    <div className="App">
     
      <HashRouter>
      <Menu />
        <Route exact path="/" component={Container} />
        <Route path="/finish" component={FinishList} />
        {/* <header className="App-header">
          <Container />
        </header> */}
      </HashRouter>
    </div>
  );
}

export default App;
