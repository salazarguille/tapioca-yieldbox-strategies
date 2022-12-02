/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IAssetRegister,
  IAssetRegisterInterface,
} from "../../../contracts/interfaces/IAssetRegister";

const _abi = [
  {
    inputs: [
      {
        internalType: "enum TokenType",
        name: "tokenType",
        type: "uint8",
      },
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "contract IStrategy",
        name: "strategy",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "ids",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class IAssetRegister__factory {
  static readonly abi = _abi;
  static createInterface(): IAssetRegisterInterface {
    return new utils.Interface(_abi) as IAssetRegisterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IAssetRegister {
    return new Contract(address, _abi, signerOrProvider) as IAssetRegister;
  }
}
