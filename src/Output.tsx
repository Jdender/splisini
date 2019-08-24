import { createElement, FC, useRef, useLayoutEffect } from 'react';

interface Props {
    buffer: string[];
}

export const Output: FC<Props> = ({ buffer }) => {

    const ul = useRef<HTMLUListElement>(null as any);

    // Scroll to bottom on new li added
    useLayoutEffect(() => {
        ul.current.scrollTop = ul.current.scrollHeight;
    });

    return <ul

        className="output"
        ref={ul}

        children={buffer.map((str, i) =>
            <li key={i}>{str}</li>
        )}
    />;
};
