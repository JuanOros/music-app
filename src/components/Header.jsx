import React from 'react';
import { Link } from 'react-router-dom';
import UserInfo from './UserInfo';
import { AiTwotoneSound } from "react-icons/ai";

class Header extends React.Component {
  render() {
    return (
      <header className='flex flex-col py-10 justify-between h-screen w-1/6'>
        <div className='flex flex-col items-center text-zinc-500'>
          <AiTwotoneSound className='w-28 h-28'/>
          <p>Music App</p>
        </div>
        <div className="flex flex-col mx-auto items-center text-white justify-between h-28">
          <Link className='hover:font-bold' to="/search">Search</Link>
          <Link className='hover:font-bold' to="/favorites">Favorites</Link>
          <Link className='hover:font-bold' to="/profile">Profile</Link>
        </div>
        <UserInfo />
      </header>
    );
  }
}

export default Header;
