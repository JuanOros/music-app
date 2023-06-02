import React from 'react';
import Header from '../components/Header';
import Loading from '../components/Loading';
import { getFavorites } from '../helpers/favoritesStorage';
import MusicCard from '../components/MusicCard';

class Favorites extends React.Component {
  state = {
    isloading: true,
    musics: [],
  };

  componentDidMount() {
    const { history: { location: { pathname }} } = this.props;
    this.setState({
      path: pathname,
      isloading: false,
    }, () => this.getFavMusics());
  };

  getFavMusics = () => {
    const musics = getFavorites();
    this.setState({ musics });
  };

  render() {
    const { path, isloading, musics } = this.state;
    return (
      <div>
        <Header />
        {
          isloading ? <Loading /> : (
            <div>
              {
                musics.map((music, index) => (
                  <MusicCard
                    path={ path }
                    musicInfo={ music }
                    key={ index }
                  />
                ))
              }
            </div>
          )
        }
      </div>
    );
  }
}

export default Favorites;
