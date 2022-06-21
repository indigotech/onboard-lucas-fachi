import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';
import App from './App';
import { debug } from 'console';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello World/i);
  expect(linkElement).toBeInTheDocument();
});


it('renders without crashing', () => {
  const div = document.createElement('div');
  debugger;
  ReactDOM.render(<App />, div);
});