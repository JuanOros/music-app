import React from 'react';
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
      <div>
        <Header />
        {
          isLoadinng ? <Loading /> : (
            <div>
              <img src={ image } alt={ name } />
              <h4>Name</h4>
              <p>{ name === '' ? 'update your profile' : name }</p>
              <h4>E-mail</h4>
              <p>{ email === '' ? 'update your profile' : email }</p>
              <h4>Description</h4>
              <p>{ description === '' ? 'update your profile' : description }</p>
              <button
              onClick={ this.editProfile }
              >
                EDIT PROFILE
              </button>
            </div>
          )
        }
      </div>
    );
  }
}

export default Profile;
