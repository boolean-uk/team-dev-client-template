import { render } from '@testing-library/react';
import '@testing-library/jest-dom'
import Dashboard from '../pages/dashboard';
import App from '../App';

describe("App", () => {
    test('renders learn react link', () => {
        render(<App />);
        const linkElement = screen.getByText(/learn react/i);
        expect(linkElement).toBeInTheDocument();
      });
      test('a user must be logged in to be able to see the dashboard', () => {
        const { dashboard } = render(<Dashboard />)
        expect(dashboard).toBeEmptyDOMElement()
      })
})

