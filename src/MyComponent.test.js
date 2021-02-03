import React from 'react' 
import MyComponent from './MyComponent';

import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

describe('MyComponent', () => {
    it('works', () => {
        expect(2 + 2).toEqual(4);
    })
})

