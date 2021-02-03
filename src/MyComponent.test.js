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
    });
    it('renders', () => {
        console.log(wrapper.debug());
        expect(wrapper).not.toBeNull();
    })
})

