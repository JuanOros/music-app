import React from 'react';
import Header from '../components/Header';

class NotFound extends React.Component {
  render() {
    return (
      <div className='flex bg-zinc-900'>
        <Header />
        <div className="main">
          <h3>not found</h3>
        </div>
      </div>
    );
  }
}

export default NotFound;
