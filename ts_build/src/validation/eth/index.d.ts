import { IValidation } from '..';
export declare class EthValidation implements IValidation {
    validateAddress(_network: string, address: string): boolean;
    validateUri(addressUri: string): boolean;
    private sanitizeEthereumUri;
}
//# sourceMappingURL=index.d.ts.map