import { createElement } from 'react';
import { Output } from './Output';
import { Input } from './Input';
import { useImmer } from 'use-immer';

export type UpdateBufferType = (f: (draft: string[]) => void | string[]) => void;

export const App = () => {

    const defaul = [...Array(30).keys()]
        .map(i => `Doot ${i}`);

    const [buffer, updateBuffer] = useImmer(defaul);

    return <div className="container">

        <Output buffer={buffer}/>
        <Input updateBuffer={updateBuffer}/>

    </div>;
};
