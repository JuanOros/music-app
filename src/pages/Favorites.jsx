import React from 'react';
import Header from '../components/Header';

class Favorites extends React.Component {
  render() {
    return (
      <div className="body">
        <Header />
        <div className="main">
          <h3>Favorites</h3>
        </div>
      </div>
    );
  }
}

export default Favorites;
