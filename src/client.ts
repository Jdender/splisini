import axios, { AxiosInstance } from 'axios';

interface CreateClientOptions {
    baseURL: string;
}

export interface Client {
    http: AxiosInstance;
}

export const createClient = async (options: CreateClientOptions): Promise<Client> => {

    const http = axios.create({
        baseURL: options.baseURL,
    });

    return {
        http,
    };
};
