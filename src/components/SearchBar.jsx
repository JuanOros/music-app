import React from 'react';
import PropTypes from 'prop-types';
import { AiOutlineSearch } from "react-icons/ai";

class SearchBar extends React.Component {
  render() {
    const { handleChange, searchArtistName, handleSubmit } = this.props;
    return (
      <form>
        <div className="relative flex items-center p-5 bg-zinc-900 bg-opacity-25">
          <input
            className="bg-zinc-700 rounded-md ps-5 placeholder:text-zinc-300 p-2 text-white w-96"
            onChange={ handleChange }
            type="text"
            autoComplete='off'
            name="searchArtistName"
            value={ searchArtistName }
            placeholder="Type in the artist name ..."
          />
          <button onClick={ handleSubmit } className='absolute right-8'>
            <AiOutlineSearch className='text-white'/>
          </button>
        </div>
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
