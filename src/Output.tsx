import { createElement, FC } from 'react';

interface Props {
    buffer: string[];
}

export const Output: FC<Props> = ({ buffer }) => {

    return <ul className="output">

        {buffer.map(str => 
            <li>{str}</li>
        )}

    </ul>;
};
