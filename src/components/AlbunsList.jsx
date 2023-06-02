import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class AlbunsList extends React.Component {
  render() {
    const { albuns } = this.props;
    return (
      <div>
        <div className="albuns-albuns">
          {
            (albuns.length === 0) ? (<p>Nenhum álbum foi encontrado</p>) : (
              albuns.map(({ collectionName, artistName, collectionId, artworkUrl100 }) => (
                <Link
                  key={ collectionId }
                  to={ `/album/${collectionId}` }
                >
                  <img src={ artworkUrl100 } alt={ collectionName } />
                  <p>{ collectionName }</p>
                  <p>{ artistName }</p>
                </Link>
              ))
            )
          }
        </div>
      </div>
    );
  }
}

AlbunsList.propTypes = {
  albuns: PropTypes.arrayOf(PropTypes.shape({
    artistId: PropTypes.number.isRequired,
    artistName: PropTypes.string.isRequired,
    collectionId: PropTypes.number.isRequired,
    collectionName: PropTypes.string.isRequired,
    collectionPrice: PropTypes.number,
    artworkUrl100: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
    trackCount: PropTypes.number.isRequired,
  })).isRequired,
};

export default AlbunsList;
