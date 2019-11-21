import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { Counter } from '../Counter';

it('renders correctly', () => 
{
   const counter = renderer.create(<Counter />).toJSON();
   expect(counter).toMatchSnapshot();
});

it('starts with a count of 0', () => 
{
   const wrapper = shallow(<Counter />);

   const text = wrapper.find('p').text();     
   expect(text).toEqual('Current Count: 0');
});

it('increments the count when the increment-button is clicked', () =>
{
   const wrapper = shallow(<Counter />);
   const incrementBtn = wrapper.find('button.increment');
   
   incrementBtn.simulate('click');

   const text = wrapper.find('p').text();    
   expect(text).toEqual('Current Count: 1');
});

it('decrements the count when the decrement-button is clicked', () =>
{
   const wrapper = shallow(<Counter />);
   const decrementBtn = wrapper.find('button.decrement');
   
   decrementBtn.simulate('click');

   const text = wrapper.find('p').text();    
   expect(text).toEqual('Current Count: -1');
});

