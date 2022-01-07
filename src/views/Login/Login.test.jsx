import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Login from '../Login/Login';
import { ProvideAuth } from '../../context/ProvideAuth';

it('should render Login comp + snapshot test', () => {
  const { container } = render(
    <MemoryRouter>
      <ProvideAuth>
        <Login />
      </ProvideAuth>
    </MemoryRouter>
  );

  expect(container).toMatchSnapshot();
});
