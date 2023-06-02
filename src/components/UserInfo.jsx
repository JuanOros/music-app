import React from 'react';
import { readUser } from '../helpers/loginStorage';

class UserInfo extends React.Component {
  state = {
    user: {},
  };

  componentDidMount() {
    const user = readUser();
    this.setState({ user: user });
  };
  render() {
    const { user: { name, image } } = this.state;
    return (
      <div>
        <img src={ image } alt={ name } />
        <p>{ name }</p>
      </div>
    );
  }
}

export default UserInfo;
