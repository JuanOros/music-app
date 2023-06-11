import React from 'react';
import { AiOutlineUser } from "react-icons/ai";
import Loading from '../components/Loading';
import { readUser } from '../helpers/loginStorage';
import Header from '../components/Header';

class Profile extends React.Component {
  state = {
    name: '',
    email: '',
    description: '',
    image: '',
    isLoadinng: true,
  };

  componentDidMount() {
    const { name, email, image, description } = readUser();
    this.setState({
      name,
      email,
      image,
      description,
      isLoadinng: false,
    });
  };

  editProfile = () => {
    const { history } = this.props;
    history.push('/profile-edit');
  };

  render() {
    const {
      name,
      email,
      description,
      image,
      isLoadinng,
    } = this.state;
    return (
      <div className='flex bg-zinc-900'>
        <Header />
        <div className='w-5/6 h-screen overflow-auto'>
          <div className="bg-[url('https://images.hdqwalls.com/wallpapers/music-pipes-abstract-4k-dm.jpg')] h-40 bg-no-repeat bg-top bg-cover flex justify-center items-center" />
          <div className='mx-60 my-12 p-8 bg bg-zinc-800 rounded-md'>
            {
              isLoadinng ? <Loading /> : (
                <div className='flex gap-16 justify-center'>
                  {
                    image === '' ? <AiOutlineUser className='text-gray-400 bg-zinc-500 h-28 w-28 rounded-full' /> : (
                      <img
                        className='w-28 h-28 rounded-full'
                        src={ image }
                        alt={ name }
                      />
                    )
                  }
                  <div className='[&>p]:mb-10'>
                    <h4 className='font-bold text-white'>Name</h4>
                    <p className='text-xl text-white'>{ name === '' ? 'update your profile' : name }</p>
                    <h4 className='font-bold text-white'>E-mail</h4>
                    <p className='text-xl text-white'>{ email === '' ? 'update your profile' : email }</p>
                    <h4 className='font-bold text-white'>Description</h4>
                    <p className='text-xl text-white'>{ description === '' ? 'update your profile' : description }</p>
                    <button
                      className='w-full my-5 py-2 bg-teal-500 shadow-md shadow-teal-500/50 hover:shadow-teal-500/20 text-white font-semibold rounded-lg'
                      onClick={ this.editProfile }
                    >
                      EDIT PROFILE
                    </button>
                  </div>
                </div>
              )
            }
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
