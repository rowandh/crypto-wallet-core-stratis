import { Key } from '../../derivation';
export declare class BTCTxProvider {
    lib: any;
    selectCoins(recipients: Array<{
        amount: number;
    }>, utxos: Array<{
        value: number;
        utxo: {
            mintHeight: number;
        };
    }>, fee: number): {
        value: number;
        utxo: {
            mintHeight: number;
        };
    }[];
    create({ recipients, utxos, change, wallet, fee }: {
        recipients: any;
        utxos?: any[];
        change: any;
        wallet: any;
        fee?: number;
    }): any;
    getSignature(params: {
        tx: string;
        keys: Array<Key>;
    }): void;
    applySignature(params: {
        tx: string;
        keys: Array<Key>;
    }): void;
    getHash(params: {
        tx: string;
    }): void;
    sign(params: {
        tx: string;
        keys: Array<Key>;
        utxos: any[];
    }): any;
    getRelatedUtxos({ outputs, utxos }: {
        outputs: any;
        utxos: any;
    }): any;
    getOutputsFromTx({ tx }: {
        tx: any;
    }): any;
    getSigningAddresses({ tx, utxos }: {
        tx: any;
        utxos: any;
    }): string[];
}
//# sourceMappingURL=index.d.ts.map