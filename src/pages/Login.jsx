import React from 'react';
import PropTypes from 'prop-types';
import { createUser } from '../services/userAPI';
import Loading from '../components/Loading.jsx';

class Login extends React.Component {
  state = {
    isLoading: false,
  };

  handleCreatUser = async (event) => {
    event.preventDefault();

    const { history, loginInputValue } = this.props;
    console.log(history);

    this.setState({ isLoading: true });

    await createUser({ name: loginInputValue });
    history.push('/search');
  };

  render() {
    const { loginInputValue, onInputChange } = this.props;
    const { isLoading } = this.state;
    const minLen = 3;
    return (
      <div data-testid="page-login">
        <h1>Music App</h1>
        {
          isLoading ? <Loading /> : (
            <form className="login-container">
              <input
                type="text"
                id="loginInputValue"
                data-testid="login-name-input"
                onChange={ onInputChange }
                value={ loginInputValue }
                placeholder="Digite o seu nome aqui!"
              />
              <button
                type="submit"
                data-testid="login-submit-button"
                disabled={ loginInputValue.length < minLen }
                onClick={ this.handleCreatUser }
              >
                Entrar
              </button>
            </form>
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
