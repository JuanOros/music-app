import React from 'react';
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { getFavorites, workFavorite } from '../helpers/favoritesStorage';

class AlbumMusics extends React.Component {
  state = {
    isFavorite: false,
  };

  componentDidMount() {
    const { musicInfo } = this.props;
    
    const favMusics = getFavorites();
    if (favMusics.some((music) => music.trackId === musicInfo.trackId)) {
      this.setState({ isFavorite: true });
    }
  };
  
  handleFavorite = () => {
    const { musicInfo } = this.props;
    const { isFavorite } = this.state;

    this.setState({
      isFavorite: !isFavorite,
    }, workFavorite(musicInfo));
  };

  render() {
    const { isFavorite } = this.state;
    const {
      musicInfo: {
        collectionName,
        artworkUrl60,
        trackName,
        previewUrl,
      },
    } = this.props;
    return (
      <div className='flex w-max items-center my-3'>
        <img src={ artworkUrl60 } alt={ collectionName } />
        <h3 className='text-ellipsis overflow-hidden w-80 ml-5'>{ trackName  }</h3>
        <audio data-testid="audio-component" src={ previewUrl } controls>
          <track kind="captions" />
          O seu navegador não suporta o elemento
          {' '}
          {' '}
          <code>audio</code>
          .
        </audio>
        <label>
          {
            isFavorite ? <AiFillHeart className='text-[#e31b23] text-2xl ml-6' /> : <AiOutlineHeart className=' text-2xl ml-6' />
          }
          <input
            className='hidden'
            type="checkbox"
            name="isFavorite"
            checked={ isFavorite }
            onChange={ this.handleFavorite }
          />
        </label>
      </div>
    );
  }
}

export default AlbumMusics;
