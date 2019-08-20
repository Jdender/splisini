import { createElement, useReducer, Fragment } from 'react';
import { Output } from './Output';
import { Input } from './Input';

export type Action =
    { type: 'push', value: string } |
    { type: 'flush' };

const reducer = (state: string[], action: Action) => {
    switch (action.type) {

        case 'push':
            return [...state, action.value];

        case 'flush':
            return [];

        default:
            throw new Error();
    }
};

export const App = () => {

    const [buffer, dispatch] = useReducer(reducer, []);

    return <div className="container">

        <Output buffer={buffer}/>
        <Input dispatch={dispatch}/>

    </div>;
};
