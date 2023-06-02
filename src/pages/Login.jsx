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
      <div data-testid="page-login">
        <h1>Logo TrybeTunes</h1>
        {
          isLoading ? <Loading /> : (
            <form className="login-container">
              <input
                type="text"
                name="inputValue"
                data-testid="login-name-input"
                onChange={ this.handleInputChange }
                value={ inputValue }
                placeholder="Digite o seu nome aqui!"
              />
              <button
                type="submit"
                data-testid="login-submit-button"
                disabled={ inputValue.length < minLen }
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
