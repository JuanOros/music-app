import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './MainContent.css';
import history from '../history';
import Login from '../pages/Login';
import Search from '../pages/Search';
import Album from '../pages/Album';
import Favorites from '../pages/Favorites';
import Profile from '../pages/Profile';
import ProfileEdit from '../pages/ProfileEdit';
import NotFound from '../pages/NotFound';

class MainContent extends React.Component {
  state = {
    loginInputValue: '',
    history: history,
  };

  onInputChange = async (event) => {
    const { value, type, checked, id } = event.target;
    const valuefield = type === 'checkbox' ? checked : value;

    this.setState((prev) => ({
      ...prev,
      [id]: valuefield,
    }));
  };
  
  render() {
    const { 
      loginInputValue,
      history,
     } = this.state;
    return (
      <Switch>
        <Route exact path="/" component={ () => <Login loginInputValue={ loginInputValue } onInputChange={ this.onInputChange } history={history} /> } />
        <Route exact path="/" component={ () => <Login loginInputValue={ loginInputValue } onInputChange={ this.onInputChange } /> } />
        <Route exact path="/search" component={ Search } />
        <Route exact path="/album/:id" component={ Album } />
        <Route exact path="/favorites" component={ Favorites } />
        <Route exact path="/profile" component={ Profile } />
        <Route exact path="/profile/edit" component={ ProfileEdit } />
        <Route path="*" component={ NotFound } />
      </Switch>
    );
  }
}

export default MainContent;
