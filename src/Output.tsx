import { createElement, FC, useRef, useEffect } from 'react';

interface Props {
    buffer: string[];
}

export const Output: FC<Props> = ({ buffer }) => {
    
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const ul = useRef<HTMLUListElement>(null as any);

    // Scroll to bottom on new li added
    useEffect(() => {

        const observer = new MutationObserver(() => ul.current.scrollTop = ul.current.scrollHeight);

        observer.observe(ul.current, { childList: true });

        return () => observer.disconnect();
    });

    return <ul

        className="output"
        ref={ul}

        children={buffer.map(str => 
            <li>{str}</li>
        )}
    />;
};
