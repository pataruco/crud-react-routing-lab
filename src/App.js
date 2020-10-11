import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/home';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
