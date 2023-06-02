/* import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';
import createMemoryHistory from 'history';
import App from './App';

describe('<App />', () => {
  it('É possível navegar até a página /search', () => {
    const history = createMemoryHistory();
    render(
      <Router history={ history }>
        <App />
      </Router>,
    );

    const loginInput = screen.getByTestId('login-name-input');
    const loginBtn = screen.getByTestId('login-submit-button');
    userEvent.type(loginInput, 'Juan Oros')
    
    act(() => {
      userEvent.click(loginBtn);
    });

    expect(history.location.pathname).toBe('/search');
  });

  it('É possível navegar até a página /favorites', () => {
    const history = createMemoryHistory({ initialEntries: ['/favorites'] });
    render(
      <Router history={ history }>
        <App />
      </Router>,
    );

    expect(history.location.pathname).toBe('/favorites');
  });

  it('É possível navegar até a rota inválida /*', () => {
    const history = createMemoryHistory();
    render(
      <Router history={ history }>
        <App />
      </Router>,
    );

    act(() => {
      history.push('/withoutName');
    });

    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent(/not found/i);
  });

}); */
