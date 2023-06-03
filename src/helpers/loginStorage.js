export const readUser = () => JSON.parse(localStorage.getItem('user'));
const setUser = (user) => localStorage.setItem('user', JSON.stringify(user));

export const createUser = (user) => {
  const emptyUser = {
    name: '',
    email: '',
    image: '',
    description: '',
  };
  setUser({ ...emptyUser, ...user });
};
