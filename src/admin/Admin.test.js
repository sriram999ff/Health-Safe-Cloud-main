import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Admin from './Admin';

test('renders the admin dashboard heading', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <Admin />
    </MemoryRouter>
  );
  expect(screen.getByRole('heading', { level: 1, name: /Dashboard/i })).toBeTruthy();
});

test('renders the hospital list page for the hospitals route', () => {
  render(
    <MemoryRouter initialEntries={['/hospitals']}>
      <Admin />
    </MemoryRouter>
  );

  expect(screen.getByText(/Hospital List/i)).toBeTruthy();
});
