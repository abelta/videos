import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom'
import App from './App';
import handlersSetupServer from './mocks/node'; 

const server = handlersSetupServer;

describe("App", () => {

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())


test('renders react links', async() => {
  render(
    <Router>
      <App />
    </Router>
  );
  expect(screen.getByText(/home/i)).toBeInTheDocument();
  expect(screen.getByText(/video 1/i)).toBeInTheDocument();
});

});