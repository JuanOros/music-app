import React from 'react';
import { AiOutlineUser } from "react-icons/ai";
import Loading from '../components/Loading';
import { createUser, readUser } from '../helpers/loginStorage';
import Header from '../components/Header';

class ProfileEdit extends React.Component {
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

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'file' ? URL.createObjectURL(target.files[0]) : target.value;
    console.log(value);

    this.setState({
      [name]: value,
    });
  };

  editProfile = event => {
    event.preventDefault();
    const { name, email, description, image } = this.state;
    createUser({ name, email, description, image });

    const { history } = this.props;
    history.push('/profile');
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
          <div
            className="bg-[url('https://images.hdqwalls.com/wallpapers/music-pipes-abstract-4k-dm.jpg')] h-40 bg-no-repeat bg-top bg-cover flex justify-center items-center"
          />
          <div className='mx-60 my-12 p-8 bg bg-zinc-800 rounded-md'>
            {
              isLoadinng ? <Loading /> : (
                <div className='flex'>
                  <div>
                    {
                      image === '' ? <AiOutlineUser className='text-gray-400 bg-zinc-500 h-28 w-28 rounded-full' /> : (
                        <img
                          className='w-28 h-28 rounded-full'
                          src={image}
                          alt={name}
                        />
                      )
                    }
                    
                    <input
                      className="text-sm w-64 mt-8 outline-none"
                      type="file"
                      name="image"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className='[&>h4]:mt-10 flex flex-col w-full'>
                    <h4>Name</h4>
                    <input
                      autoComplete='off'
                      className="bg-zinc-500 rounded-md ps-5 placeholder:text-zinc-300 p-2 text-white"
                      type="text"
                      value={name}
                      name="name"
                      onChange={this.handleChange}
                    />

                    <h4>E-mail</h4>
                    <input
                      autoComplete='off'
                      className="bg-zinc-500 rounded-md ps-5 placeholder:text-zinc-300 p-2 text-white"
                      type="email"
                      value={email}
                      name="email"
                      placeholder='Whire your email here'
                      onChange={this.handleChange}
                    />

                    <h4>Description</h4>
                    <textarea
                      autoComplete='off'
                      className="bg-zinc-500 rounded-md ps-5 placeholder:text-zinc-300 p-2 text-white"
                      type="checkbox"
                      value={description}
                      name="description"
                      placeholder='Whire your description here'
                      onChange={this.handleChange}
                    />

                    <button
                      className='w-full my-5 py-2 bg-teal-500 shadow-md shadow-teal-500/50 hover:shadow-teal-500/20 text-white font-semibold rounded-lg'
                      onClick={this.editProfile}
                    >
                      SAVE PROFILE
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

export default ProfileEdit;
