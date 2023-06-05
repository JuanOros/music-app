import React from 'react';
import Loading from '../components/Loading';
import Header from '../components/Header';
import getMusics from '../services/musicsAPI';
import MusicCard from '../components/MusicCard';

class Album extends React.Component {
  state = {
    isloading: true,
    musics: [],
  };

  componentDidMount() {
    this.getAlbunMusics();
    const { history: { location: { pathname }} } = this.props;
    this.setState({ path: pathname });
  };

  getAlbunMusics = async () => {
    const { match: { params: { id } } } = this.props;
    const musics = await getMusics(id);
    const artist = musics.shift();

    this.setState({
      musics,
      artist,
      isloading: false,
    },);
  };

  render() {
    const { path, isloading, musics, artist } = this.state;
    return (
      <div className='flex bg-zinc-900'>
        <Header />
        <div className='w-5/6 h-screen overflow-auto text-white relative'>
          <div
            className="bg-[url('https://images.hdqwalls.com/wallpapers/music-pipes-abstract-4k-dm.jpg')] h-40 bg-no-repeat bg-top bg-cover flex justify-center items-center" />
          {
            isloading ? <Loading /> : (
              <div>
                <div className='absolute top-28 left-32'>
                  <img
                    src={ artist.artworkUrl100 } alt={ artist.collectionName }
                  />
                  <h1>{ `${artist.artistName} - ${artist.collectionName}` }</h1>
                </div>
                <div className='flex flex-col items-center mb-10 mt-32'>
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
              </div>
            )
          }
        </div>
      </div>
    );
  }
}

export default Album;
