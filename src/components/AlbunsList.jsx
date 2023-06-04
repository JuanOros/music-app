import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class AlbunsList extends React.Component {
  render() {
    const { albuns } = this.props;
    return (
      <div className='text-white py-8 px-11 flex flex-wrap justify-between'>
        {
          (albuns.length === 0) ? (<p className='my-auto mx-auto'>Nenhum álbum foi encontrado</p>) : (
            albuns.map(({ collectionName, artistName, collectionId, artworkUrl100 }) => (
              <div key={collectionId} className='w-32 h-56 m-5'>
                <Link
                  to={`/album/${collectionId}`}
                >
                  <img className='w-full' src={artworkUrl100} alt={collectionName} />
                  <p className='hover:underline text-xs hover: mt-3'>{artistName}</p>
                  <p className='hover:underline text-sm h-11 text-ellipsis overflow-hidden font-bold'>{collectionName}</p>
                </Link>
              </div>
            ))
          )
        }
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
