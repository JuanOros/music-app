import React from 'react';
import { readUser } from '../helpers/loginStorage';
import { AiOutlineUser } from "react-icons/ai";

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
      <div className='flex flex-col items-center'>
        {
          image === '' ? <AiOutlineUser className='h-16 w-16 rounded-full' /> : (
            <img
              className='w-16 h-16 rounded-full'
              src={ image }
              alt={ name }
            />
          )
        }
        <p className='text-white mt-2'>{ name }</p>
      </div>
    );
  }
}

export default UserInfo;
