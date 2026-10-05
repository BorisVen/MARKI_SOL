import { Connection, Transaction } from '@solana/web3.js';

// Phantom in the browser: the injected extension provider.

const getInjectedProvider = () =>
    (window as any).phantom?.solana ?? (window as any).solana ?? null;

export const connectPhantomWallet = async (_force = false): Promise<string> => {
    const provider = getInjectedProvider();
    if (!provider) {
        throw new Error('Phantom wallet not found. Install the Phantom browser extension.');
    }
    const response = await provider.connect();
    const publicKey = response?.publicKey?.toString() ?? provider.publicKey?.toString() ?? '';
    if (!publicKey) throw new Error('Phantom returned no public key.');
    return publicKey;
};

export const signAndSendPhantomTransaction = async (
    transaction: Transaction,
    _connection: Connection,
): Promise<string> => {
    const provider = getInjectedProvider();
    if (!provider) throw new Error('Phantom wallet not found.');
    const result = await provider.signAndSendTransaction(transaction);
    const signature = typeof result === 'string' ? result : result?.signature;
    if (!signature) throw new Error('Phantom returned no transaction signature.');
    return signature;
};
