import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
/* import './AlbunsList.css'; */

class AlbunsList extends React.Component {
  render() {
    const { list, atistName } = this.props;
    return (
      <div>
        <h2>{ `Resultado de álbuns de: ${atistName}` }</h2>
        <div className="albuns-list">
          {
            (list.length === 0) ? (<p>Nenhum álbum foi encontrado</p>) : (
              list.map(({ collectionName, artistName, collectionId, artworkUrl100 }) => (
                <div className="albun-container" key={ collectionId }>
                  <img src={ artworkUrl100 } alt={ collectionName } />
                  <br />
                  <Link
                    data-testid={ `link-to-album-${collectionId}` }
                    to={ `/album/${collectionId}` }
                  >
                    { collectionName }
                  </Link>
                  <p>{ artistName }</p>
                </div>
              ))
            )
          }
        </div>
      </div>
    );
  }
}

AlbunsList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    artistId: PropTypes.number.isRequired,
    artistName: PropTypes.string.isRequired,
    collectionId: PropTypes.number.isRequired,
    collectionName: PropTypes.string.isRequired,
    collectionPrice: PropTypes.number.isRequired,
    artworkUrl100: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
    trackCount: PropTypes.number.isRequired,
  })).isRequired,
  searchName: PropTypes.string.isRequired,
};

export default AlbunsList;
