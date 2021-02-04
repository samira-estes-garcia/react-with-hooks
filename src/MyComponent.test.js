import React from 'react' 

import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
Enzyme.configure({ adapter: new Adapter() });

import MyComponent from './MyComponent';

describe('MyComponent', () => {
    const onCountChange = jest.fn();
    let wrapper;
    beforeEach(() => {
        wrapper = mount(<MyComponent onCountChange={onCountChange} />)
        //count is being set to 0 every time
    });
    it('renders', () => {
        // console.log(wrapper.debug());
        expect(wrapper).not.toBeNull();
    })
    //when call button, make sure useState button is correctly updated
    it('shows my default text', () => {
        expect(wrapper.find('p').text()).toEqual('Count: 0');
    })
    it('shows it correctly increments the count by 1', () => {
        wrapper.find('button').simulate('click');
        expect(wrapper.find('p').text()).toEqual('Count: 1');
    })
    it('shows it correctly increments the count by 4', () => {
        wrapper.find('button').simulate('click');
        wrapper.find('button').simulate('click');
        wrapper.find('button').simulate('click');
        wrapper.find('button').simulate('click');
        expect(wrapper.find('p').text()).toEqual('Count: 4');
    })
    it('shows it correctly increments the count by 1', () => {
        expect(onCountChange).toBeCalledTimes(1);
        wrapper.find('button').simulate('click');
        expect(onCountChange).toBeCalledTimes(2);
    })
})

