import React from 'react';
import { Link } from 'react-router-dom';
import Loading from './Loading';
import { getUser } from '../services/userAPI';
import './Header.css';

class Header extends React.Component {
  state = {
    isLoading: false,
    userName: '',
  };

  componentDidMount() {
    this.getUsers();
  }

  getUsers = async () => {
    const { name } = await getUser();
    this.setState({
      isLoading: true,
      userName: name,
    });
  };

  render() {
    const { isLoading, userName } = this.state;
    return (
      <header>
        <h1>TrybeTunes</h1>
        <div className="nav-links">
          <Link data-testid="link-to-search" to="/search">Search</Link>
          <Link data-testid="link-to-favorites" to="/favorites">Favorites</Link>
          <Link data-testid="link-to-profile" to="/profile">Profile</Link>
        </div>
        {
          isLoading ? <p data-testid="header-user-name">{ userName }</p> : <Loading />
        }
      </header>
    );
  }
}

export default Header;
