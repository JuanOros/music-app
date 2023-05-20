import React from 'react';
import Header from '../components/Header';

class Album extends React.Component {
  render() {
    return (
      <div className="body">
        <Header />
        <div className="main">
          <h3>Album</h3>
        </div>
      </div>
    );
  }
}

export default Album;
