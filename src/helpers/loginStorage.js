export const readUser = () => JSON.parse(localStorage.getItem('user'));
const setUser = (user) => localStorage.setItem('user', JSON.stringify(user));

export const createUser = (user) => {
  const emptyUser = {
    name: '',
    email: '',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTdmrjoiXGVFEcd1cX9Arb1itXTr2u8EKNpw&usqp=CAU',
    description: '',
  };
  setUser({ ...emptyUser, ...user });
};
