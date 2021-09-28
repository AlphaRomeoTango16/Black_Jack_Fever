import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Game from './pages/Game';
import GlobalStyle from './utils/style/GlobalStyle';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
        <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/game">
              <Game />
            </Route>
          </Switch>
        <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

