import { createElement, createContext } from 'react';
import { render } from 'react-dom';
import { App } from './App';
import { createClient, Client } from './client';

export const clientContext = createContext<Client>(null as any);

void async function() {

    const client = await createClient({
        baseURL: 'http://localhost:8080/',
    });

    const Root = () => (
        <clientContext.Provider value={client}>
            <App/>
        </clientContext.Provider>
    );

    render(<Root/>, document.getElementById('app'));
}();
