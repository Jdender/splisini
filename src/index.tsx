import { createElement, createContext } from 'react';
import { render } from 'react-dom';
import { App } from './App';
import { Client } from './client/Client';

export const clientContext = createContext<Client>(null as any);

void async function() {

    const client = new Client({
        baseURL: 'http://localhost:8080/',
    });

    await client.login();

    const Root = () => (
        <clientContext.Provider value={client}>
            <App/>
        </clientContext.Provider>
    );

    render(<Root/>, document.getElementById('app'));
}();
