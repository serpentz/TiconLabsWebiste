import React from 'react';
import ReactDOM from 'react-dom';
import Component from './Component';
import {BrowserRouter } from 'react-router-dom'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter> <Component /></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
