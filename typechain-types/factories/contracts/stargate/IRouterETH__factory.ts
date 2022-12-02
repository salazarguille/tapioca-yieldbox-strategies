/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IRouterETH,
  IRouterETHInterface,
} from "../../../contracts/stargate/IRouterETH";

const _abi = [
  {
    inputs: [],
    name: "addLiquidityETH",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "poolId",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "stargateEthVault",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "stargateRouter",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class IRouterETH__factory {
  static readonly abi = _abi;
  static createInterface(): IRouterETHInterface {
    return new utils.Interface(_abi) as IRouterETHInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IRouterETH {
    return new Contract(address, _abi, signerOrProvider) as IRouterETH;
  }
}
