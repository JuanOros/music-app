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
        artistName,
        trackName,
        previewUrl,
      },
    } = this.props;
    return (
      <div>
        <img src={ artworkUrl60 } alt={ collectionName } />
        <h3>{ trackName  }</h3>
        <p>{ artistName }</p>
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
            isFavorite ? <AiFillHeart /> : <AiOutlineHeart />
          }
          <input
            style={ {display: 'none' }}
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
