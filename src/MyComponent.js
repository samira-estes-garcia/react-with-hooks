import React, { useState, useEffect } from 'react'

export default function MyComponent({ onCountChange = () => {} }) {
    const [count, setCount] = useState(0);
    //returns count aka current state, and setCount is the function that updates count
    //similar to this.state.count and this.setState

    useEffect(() => {
        onCountChange(count);
    });
    //whenever this component rerenders, give the callback a call to let parent component know that something changed

    return (
        <div>
            <p>Count: {count}</p>
            {/* we can use count directly instead of reading it as this.state.count */}
            <button
                onClick={() => {
                    setCount(count + 1);
                }}
                >
                    Increment Count
                </button>
        </div>
    );
}

//useState

// a hook is a special function that lets you "hook into" react features. useState is a hook that lets you add React state to function components.
// If you write a function component and realize you need to add some state to it, you previously needed to convert it to a class
// now you can use a Hook insdie the existing function component.
//calling useState declares a "state variable". useState is essentially this.state. normally variables "disappear" when the function exits, but state variables are preserved by react
//the only argument you pass to useState is the initial state. it doesnt need to be an object, it can just be a number or a string. if you need to store two different values in state, call useState twice
//useState returns a pair of values: the current state and a function that updates it. 
//similar to this.state.stateVariable and this.setState

//useEffect

//by using useEffect, you tell React your component needs to do something after render
//useEffect is called inside a component so that it can access state variables or props right from the effect.
//useEffect runs both after the first render and after every update