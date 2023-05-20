import React from 'react';
import Header from '../components/Header';
import Loading from '../components/Loading';
import AlbunsList from '../components/AlbunsList';

class Search extends React.Component {
  render() {
    const {
      onInputChange,
      searchArtistName,
      getArtistsAlbuns,
      searchButtonLoad,
      albumLoadin,
      albuns,
      atistName,
    } = this.props;
    const minLen = 2;
    return (
      <div className="body">
        <div className="main">
          <div className='header-main'>
            <form>
              <input
                onChange={ onInputChange }
                type="text"
                id="searchArtistName"
                value={ searchArtistName }
                data-testid="search-artist-input"
                placeholder="Digite o nome do artista aqui!"
              />
              <button
                disabled={ searchArtistName.length < minLen }
                onClick={ getArtistsAlbuns }
                data-testid="search-artist-button"
              >
                Procurar
              </button>
            </form>
            {
              searchButtonLoad && (albumLoadin ? <Loading /> : (
              <AlbunsList list={ albuns } atistName={ atistName } />
            ))
          }
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
