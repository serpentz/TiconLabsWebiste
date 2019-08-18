import React from 'react';
import ReactDOM from 'react-dom';
import Container from './Container';
import {BrowserRouter } from 'react-router-dom'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter> <Container /></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
