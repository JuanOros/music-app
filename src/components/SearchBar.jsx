import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const { handleChange, searchArtistName, handleSubmit } = this.props;
    return (
      <form>
        <input
          onChange={ handleChange }
          type="text"
          name="searchArtistName"
          value={ searchArtistName }
          placeholder="Type in the artist name ..."
        />
        <button
          onClick={ handleSubmit }
        >
          Procurar
        </button>
      </form>
    );
  }
}

SearchBar.propTypes = {
  handleChange: PropTypes.func.isRequired,
  searchArtistName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
