import React, { useState, useEffect } from 'react'

export default function MyComponent({ onCountChange = () => {} }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        onCountChange(count);
    });

    return (
        <div>
            <p>Count: {count}</p>
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

// a hook is a special function that lets you "hook into" react features. useState is a hook that lets you add React state to function components.
// If you write a function component and realize you need to add some state to it, you previously needed to convert it to a class
// now you can use a Hook insdie the existing function component.
