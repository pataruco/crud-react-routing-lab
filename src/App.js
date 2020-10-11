import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// pages
import Home from './pages/home';
import Error from './pages/error';
import ListStudents from './pages/student/list';
import ShowStudent from './pages/student/show';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/students/:id" component={ShowStudent} />
          <Route path="/students" component={ListStudents} />
          <Route path="/*" component={Error} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
