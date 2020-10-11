import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// pages
import Home from './pages/home';
import Error from './pages/error';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/*" component={Error} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
