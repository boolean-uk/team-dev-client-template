import { render } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom'
// import App from './App';
import Login from './pages/login';
import Button from './components/button';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
test('it should not send an empty login form ', () => {
  const handleSubmit = jest.fn()
  render(<Login />)
  render(<Button onClick={handleSubmit} />)
  const submitButton = screen.getByRole('button', { text: /log in/i})
})
