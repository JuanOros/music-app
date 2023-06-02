import React from 'react';
import { Link } from 'react-router-dom';
import UserInfo from './UserInfo';

class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>TrybeTunes</h1>
        <div className="nav-links">
          <Link data-testid="link-to-search" to="/search">Search</Link>
          <Link data-testid="link-to-favorites" to="/favorites">Favorites</Link>
          <Link data-testid="link-to-profile" to="/profile">Profile</Link>
        </div>
        <UserInfo />
      </header>
    );
  }
}

export default Header;
