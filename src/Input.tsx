import { createElement, FC, useState, useContext } from 'react';
import { handleCommand, PREFIX } from './commands';
import { UpdateBufferType } from './App';
import { clientContext } from '.';

interface Props {
    updateBuffer: UpdateBufferType;
}

export const Input: FC<Props> = ({ updateBuffer }) => {

    const client = useContext(clientContext);

    const [content, setContent] = useState('');

    const handleMessage = () => {

        updateBuffer(draft => {
            draft.push(content);
        });
    };

    return <input

        className="input"

        // Two way bind
        value={content}
        onChange={e => setContent(e.target.value)}

        placeholder="> Message / Command"

        onKeyPress={e => {

            if (e.key !== 'Enter') return;

            if (!content.startsWith(PREFIX)) handleMessage();

            else handleCommand({
                message: content,
                client,
                updateBuffer,
            });

            setContent('');
        }}

    />;
};
