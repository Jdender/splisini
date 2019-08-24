import { createElement, FC, useState } from 'react';

interface Props {
    updateBuffer: (f: (draft: string[]) => void | string[]) => void;
}

export const Input: FC<Props> = ({ updateBuffer }) => {

    const [content, setContent] = useState('');

    return <input

        className="input"

        // Two way bind
        value={content}
        onChange={e => setContent(e.target.value)}

        placeholder="> Message / Command"

        onKeyPress={e => {

            if (e.key !== 'Enter') return;

            updateBuffer(draft => {
                draft.push(content);
            });

            setContent('');
        }}

    />;
};
