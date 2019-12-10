import { Key } from '../../derivation';
export declare class ETHTxProvider {
    create(params: {
        recipients: Array<{
            address: string;
            amount: string;
        }>;
        nonce: number;
        gasPrice: number;
        data: string;
        gasLimit: number;
        network: string;
        chainId?: number;
    }): string;
    getChainId(network: string): number;
    getSignatureObject(params: {
        tx: string;
        key: Key;
    }): any;
    getSignature(params: {
        tx: string;
        key: Key;
    }): string;
    getHash(params: {
        tx: string;
    }): string;
    applySignature(params: {
        tx: string;
        signature: any;
    }): string;
    sign(params: {
        tx: string;
        key: Key;
    }): string;
}
//# sourceMappingURL=index.d.ts.map