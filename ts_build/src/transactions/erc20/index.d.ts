import { ETHTxProvider } from '../eth';
export declare class ERC20TxProvider extends ETHTxProvider {
    getERC20Contract(tokenContractAddress: string): import("web3-eth-contract").Contract;
    create(params: {
        recipients: Array<{
            address: string;
            amount: string;
        }>;
        nonce: number;
        gasPrice: number;
        data: string;
        gasLimit: number;
        tokenAddress: string;
        network: string;
        chainId?: number;
    }): string;
    encodeData(params: {
        recipients: Array<{
            address: string;
            amount: string;
        }>;
        tokenAddress: string;
    }): any;
}
//# sourceMappingURL=index.d.ts.map