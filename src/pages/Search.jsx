import React from 'react';
import Header from '../components/Header';

class Search extends React.Component {
  render() {
    return (
      <div className="body">
        <Header />
        <div className="main">
          <div className='header-main'>
            <h3>Search</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
