import { render, screen } from '@testing-library/react';
import App from './App';

test('renders generate lorem ipsum app title', () => {
  render(<App />);
  const linkElement = screen.getByText(/Generate Lorem Ipsum App/i);
  expect(linkElement).toBeInTheDocument();
});
