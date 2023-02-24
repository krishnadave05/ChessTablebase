import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Chessboard from "chessboardjsx";
import Sidebar from './sidebar';

describe('App', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('renders a Chessboard with the correct props', () => {
    const wrapper = shallow(<App />);
    const chessboard = wrapper.find(Chessboard);
    expect(chessboard.prop('width')).toEqual(400);
    expect(chessboard.prop('position')).toEqual('start');
  });

  it('renders a Sidebar component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Sidebar)).toHaveLength(1);
  });
});