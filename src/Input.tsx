import { createElement, Dispatch, FC, useState } from 'react';
import { Action } from './App';

interface Props {
    dispatch: Dispatch<Action>;
}

export const Input: FC<Props> = ({ dispatch }) => {

    const [content, setContent] = useState('');

    return <input

        className="input"

        // Two way bind
        value={content}
        onChange={e => setContent(e.target.value)}

        onKeyPress={e => {

            if (e.key !== 'Enter') return;

            dispatch({
                type: 'push',
                value: content,
            });

            setContent('');
        }}
    
    />;
};
