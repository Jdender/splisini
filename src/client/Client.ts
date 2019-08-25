import axios, { AxiosInstance } from 'axios';
import { Channel } from './types';

interface CreateClientOptions {
    baseURL: string;
}

export class Client {

    private http: AxiosInstance;

    constructor(options: CreateClientOptions) {

        this.http = axios.create({
            baseURL: options.baseURL,
        });
    }

    private currentChannel: Channel;

    private channelTree: Channel;

    async login() {
        // !notimplemented
    }

    findChannel(channel: Channel, id: number): Channel | null {
        if (channel.id === id) return channel;

        else if (channel.children) return channel.children.find(chan =>
                Boolean(this.findChannel(chan, id))
            ) || null;

        else return null;
    }
}
