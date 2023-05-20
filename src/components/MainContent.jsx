import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './MainContent.css';
import Search from '../pages/Search';
import Album from '../pages/Album';
import Favorites from '../pages/Favorites';
import Profile from '../pages/Profile';
import ProfileEdit from '../pages/ProfileEdit';
import NotFound from '../pages/NotFound';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import Header from './Header';

class MainContent extends React.Component {
  state = {
    searchArtistName: '',
  };

  onInputChange = async (event) => {
    const { value, type, checked, id } = event.target;
    const valuefield = type === 'checkbox' ? checked : value;

    this.setState((prev) => ({
      ...prev,
      [id]: valuefield,
    }));
  };

  getArtistsAlbuns = async (event) => {
    event.preventDefault();
    const { searchArtistName } = this.state;

    this.setState({
      searchButtonLoad: true,
      albumLoadin: true,
    });

    const albunsList = await searchAlbumsAPI(searchArtistName);

    this.setState((prev) => ({
      atistName: prev.searchArtistName,
      albumLoadin: false,
      searchArtistName: '',
      albuns: albunsList,
    }));
  };

  render() {
    const {
      searchArtistName,
      albuns,
      searchButtonLoad,
      albumLoadin,
      atistName,
    } = this.state;
    return (
      <div className="body">
        <Header />
        <div className="main">
          <Switch>
            <Route
              path="/"
              exact
              component={() => (
                <Search
                  onInputChange={this.onInputChange}
                  searchArtistName={searchArtistName}
                  albuns={albuns}
                  getArtistsAlbuns={this.getArtistsAlbuns}
                  searchButtonLoad={searchButtonLoad}
                  albumLoadin={albumLoadin}
                  atistName={atistName}
                />
              )}
            />
            <Route exact path="/album/:id" component={Album} />
            <Route exact path="/favorites" component={Favorites} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/profile/edit" component={ProfileEdit} />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default MainContent;
