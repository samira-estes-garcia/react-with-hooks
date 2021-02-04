import React from 'react' 

import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
Enzyme.configure({ adapter: new Adapter() });

import { act } from 'react-dom/test-utils';
import useCustomHook from './useCustomHook';

describe.only('useCustomHook', () => {
    // it('works', () => {
        //const results = useCustomHook();
        //^^ can't do that, hooks can only be called in function components
        // let results;
        // function HookWrapper() {
        //     results = useCustomHook();
        //     return null;
        // }
        // mount(<HookWrapper />);
        // expect(results.count).toEqual(0);
        
        //you can also create a function to render custom hooks instead of writing it out every time
        let results;
        const renderHook = hook => {
            function HookWrapper() {
                results = hook();
                return null;
            }
            mount(<HookWrapper />)
            return results;
        };
        it('works', () => {
            renderHook(useCustomHook);
            expect(results.count).toEqual(0);
            act(() => {
                results.increment();
            })
            expect(results.count).toEqual(1);
        })
});