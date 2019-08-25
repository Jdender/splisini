import { Client } from './client/Client';
import { UpdateBufferType } from './App';

export const PREFIX = '/';

interface Commands {
    [command: string]: undefined | ((args: string[], client: Client, updateBuffer: UpdateBufferType) => void);
}

const commands: Commands = {

    echo: (args, _, updateBuffer) => {
        updateBuffer(draft => {
            draft.push('echo> ' + args.join(' '));
        });
    },
};

interface HandleCommandInput {
    message: string;
    client: Client;
    updateBuffer: UpdateBufferType;
}

export const handleCommand = ({ message, client, updateBuffer }: HandleCommandInput) => {

    const args = message.slice(PREFIX.length).split(/\s/g);

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const command = args.shift()!.toLowerCase();
    if (!command) return;

    const handler = commands[command];

    if (!handler) return updateBuffer(draft => {
        draft.push(`> No command by the name ${command} found.`);
    });

    handler(args, client, updateBuffer);
};

