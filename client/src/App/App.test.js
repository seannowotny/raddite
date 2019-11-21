import React from 'react';
import App from './App';
import renderer from 'react-test-renderer';

it('renders correctly', () => 
{
  const counter = renderer.create(<App />).toJSON();
  expect(counter).toMatchSnapshot();
});