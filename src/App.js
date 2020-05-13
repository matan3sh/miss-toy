import React from 'react';
import store from './store/store';

import Navbar from './components/Layout/Navbar.jsx';
import { About } from './pages/About.jsx';
import Chat from './components/Chat/Chat';
import { Dashboard } from './pages/Dashboard';
import ToysApp from './pages/ToysApp.jsx';
import ToysDetails from './pages/ToysDetails.jsx';
import ToysEdit from './components/Toys/ToysEdit';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import './style/App.css';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <div className='container'>
          <Switch>
            <Route exact path='/' component={ToysApp} />
            <Route exact path='/about' component={About} />
            <Route exact path='/dashboard' component={Dashboard} />
            <Route exact path='/:id' component={ToysDetails} />
            <Route exact path='/edit/:id' component={ToysEdit} />
          </Switch>
        </div>
        <Chat />
      </Router>
    </Provider>
  );
};

export default App;
