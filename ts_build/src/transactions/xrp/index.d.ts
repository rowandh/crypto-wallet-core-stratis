import { Key } from '../../derivation';
export declare class XRPTxProvider {
    create(params: {
        recipients: Array<{
            address: string;
            amount: string;
        }>;
        data: string;
        tag: number;
        sourceAddress: string;
        invoiceID: string;
        fee: string;
        nonce: number;
    }): Promise<string | void>;
    sign(params: {
        tx: string;
        key: Key;
    }): {
        signedTransaction: string;
        id: string;
    };
}
//# sourceMappingURL=index.d.ts.map