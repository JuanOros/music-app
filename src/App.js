import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Favorites from './pages/Favorites';
import NotFound from './pages/NotFound';
import Album from './pages/Album';
import Search from './pages/Search';
import Profile from './pages/Profile';
import ProfileEdit from './pages/ProfileEdit';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/search" component={ Search } />
      <Route exact path="/profile" component={ Profile } />
      <Route exact path="/profile-edit" component={ ProfileEdit } />
      <Route exact path="/favorites" component={ Favorites } />
      <Route exact path="/album/:id" component={ Album } />
      <Route exact path="/*" component={ NotFound } />
    </Switch>
  );
}

export default App;
