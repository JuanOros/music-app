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
    const { history: { location: { pathname } } } = this.props;
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
      <div className='flex bg-zinc-900'>
        <Header />
        <div className='w-5/6 h-screen overflow-auto'>
          <div
            className="bg-[url('https://images.hdqwalls.com/wallpapers/music-pipes-abstract-4k-dm.jpg')] h-40 bg-no-repeat bg-top bg-cover flex justify-center items-center" >
            <h1 className='text-5xl text-white'>Favorite Musics</h1>
          </div>
          {
            isloading ? <Loading /> : (
              <div className='flex flex-col items-center py-8'>
                {
                  musics.map((music, index) => (
                    <MusicCard
                      path={path}
                      musicInfo={music}
                      key={index}
                    />
                  ))
                }
              </div>
            )
          }
        </div>
      </div>
    );
  }
}

export default Favorites;
