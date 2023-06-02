import React from 'react';
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
    const value = target.type === 'file' ? target.files[0] : target.value;

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
      <div>
        <Header />
        {
          isLoadinng ? <Loading /> : (
            <div>
              {/* // This is a change state input file
              <input
              type="file"
              name="image"
              onChange={ this.handleChange }
            /> */}
              <img src={ image } alt={ name } />
              <h4>Url Link</h4>
              <input
                type="text"
                value={ image }
                name="image"
                onChange={ this.handleChange }
              />

              <h4>Name</h4>
              <input
                type="text"
                value={ name }
                name="name"
                onChange={ this.handleChange }
              />

              <h4>E-mail</h4>
              <input
                type="email"
                value={ email }
                name="email"
                placeholder='Whire your email here'
                onChange={ this.handleChange }
              />

              <h4>Description</h4>
              <textarea
                type="checkbox"
                value={ description }
                name="description"
                placeholder='Whire your description here'
                onChange={ this.handleChange }
              />

              <button
              onClick={ this.editProfile }
              >
                SAVE PROFILE
              </button>
            </div>
          )
        }
      </div>
    );
  }
}

export default ProfileEdit;
