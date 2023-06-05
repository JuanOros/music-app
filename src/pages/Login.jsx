import React from 'react';
import PropTypes from 'prop-types';
import Loading from '../components/Loading';
import { createUser } from '../helpers/loginStorage';

class Login extends React.Component {
  state = {
    inputValue: '',
    isLoading: false,
  };

  handleCreatUser = (event) => {
    event.preventDefault();

    const { inputValue } = this.state;
    const { history } = this.props;

    this.setState({ isLoading: true });

    createUser({ name: inputValue });
    history.push('/search');
  };

  handleInputChange = (event) => {
    const { value, name } = event.target;

    this.setState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  render() {
    const { inputValue, isLoading } = this.state;
    const minLen = 3;
    return (
      <div>
        {
          isLoading ? <Loading /> : (
            <div className="bg-zinc-800 text-zinc-300
            flex items-center justify-center w-screen h-screen">
              <img className='absolute w-screen h-screen brightness-[40%]' src="https://getwallpapers.com/wallpaper/full/1/8/3/977168-full-size-desktop-background-music-1920x1080.jpg" alt="" />

              <form className="bg-zinc-900 rounded-md justify-center p-10 gap-4 w-[35%] flex flex-col h-[45%] z-10">
                <h3 className='font-bold text-center text-4xl text-white'>SING IN</h3>
                <div className='flex flex-col text-gray-400 py-4'>
                  <input
                    className="bg-zinc-500 rounded-md ps-5 placeholder:text-zinc-300 p-2 text-white"
                    type="text"
                    name="inputValue"
                    data-testid="login-name-input"
                    placeholder='type in your name'
                    onChange={this.handleInputChange}
                    value={inputValue}
                  />
                </div>
                <button
                  className='w-full my-5 py-2 bg-teal-500 shadow-md shadow-teal-500/50 hover:shadow-teal-500/20 text-white font-semibold rounded-lg'
                  type="submit"
                  data-testid="login-submit-button"
                  disabled={inputValue.length < minLen}
                  onClick={this.handleCreatUser}
                >
                  Entrar
                </button>
              </form>

            </div>
          )
        }
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default Login;
