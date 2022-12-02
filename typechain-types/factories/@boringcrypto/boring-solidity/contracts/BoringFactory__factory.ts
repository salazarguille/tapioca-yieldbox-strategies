/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  BoringFactory,
  BoringFactoryInterface,
} from "../../../../@boringcrypto/boring-solidity/contracts/BoringFactory";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "masterContract",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: true,
        internalType: "address",
        name: "cloneAddress",
        type: "address",
      },
    ],
    name: "LogDeploy",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "clonesOf",
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
    inputs: [
      {
        internalType: "address",
        name: "masterContract",
        type: "address",
      },
    ],
    name: "clonesOfCount",
    outputs: [
      {
        internalType: "uint256",
        name: "cloneCount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "masterContract",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "bool",
        name: "useCreate2",
        type: "bool",
      },
    ],
    name: "deploy",
    outputs: [
      {
        internalType: "address",
        name: "cloneAddress",
        type: "address",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "masterContractOf",
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

const _bytecode =
  "0x608060405234801561001057600080fd5b506104cf806100206000396000f3fe60806040526004361061003f5760003560e01c80631f54245b146100445780638fd4365414610074578063bafe4f1414610094578063fba96be8146100ca575b600080fd5b610057610052366004610373565b61010e565b6040516001600160a01b0390911681526020015b60405180910390f35b34801561008057600080fd5b5061005761008f36600461040e565b61031f565b3480156100a057600080fd5b506100576100af366004610438565b6000602081905290815260409020546001600160a01b031681565b3480156100d657600080fd5b506101006100e5366004610438565b6001600160a01b031660009081526001602052604090205490565b60405190815260200161006b565b60006001600160a01b03851661016a5760405162461bcd60e51b815260206004820181905260248201527f426f72696e67466163746f72793a204e6f206d6173746572436f6e7472616374604482015260640160405180910390fd5b606085901b82156101dc576000858560405161018792919061045a565b60405180910390209050604051733d602d80600a3d3981f3363d3d373d3d3d363d7360601b81528260148201526e5af43d82803e903d91602b57fd5bf360881b6028820152816037826000f593505050610221565b604051733d602d80600a3d3981f3363d3d373d3d3d363d7360601b81528160148201526e5af43d82803e903d91602b57fd5bf360881b60288201526037816000f09250505b6001600160a01b038083166000818152602081815260408083208054958c166001600160a01b03199687168117909155835260018083528184208054918201815584529190922001805490931682179092559051631377d1f560e21b8152634ddf47d4903490610297908990899060040161046a565b6000604051808303818588803b1580156102b057600080fd5b505af11580156102c4573d6000803e3d6000fd5b5050505050816001600160a01b0316866001600160a01b03167fd62166f3c2149208e51788b1401cc356bf5da1fc6c7886a32e18570f57d88b3b878760405161030e92919061046a565b60405180910390a350949350505050565b6001602052816000526040600020818154811061033b57600080fd5b6000918252602090912001546001600160a01b03169150829050565b80356001600160a01b038116811461036e57600080fd5b919050565b6000806000806060858703121561038957600080fd5b61039285610357565b9350602085013567ffffffffffffffff808211156103af57600080fd5b818701915087601f8301126103c357600080fd5b8135818111156103d257600080fd5b8860208285010111156103e457600080fd5b6020830195508094505050506040850135801515811461040357600080fd5b939692955090935050565b6000806040838503121561042157600080fd5b61042a83610357565b946020939093013593505050565b60006020828403121561044a57600080fd5b61045382610357565b9392505050565b8183823760009101908152919050565b60208152816020820152818360408301376000818301604090810191909152601f909201601f1916010191905056fea264697066735822122076f0417e24293f201c49f69b7291f691fed7685b43c8e4de1323563e27bdb98b64736f6c634300080f0033";

type BoringFactoryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BoringFactoryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BoringFactory__factory extends ContractFactory {
  constructor(...args: BoringFactoryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<BoringFactory> {
    return super.deploy(overrides || {}) as Promise<BoringFactory>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): BoringFactory {
    return super.attach(address) as BoringFactory;
  }
  override connect(signer: Signer): BoringFactory__factory {
    return super.connect(signer) as BoringFactory__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BoringFactoryInterface {
    return new utils.Interface(_abi) as BoringFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BoringFactory {
    return new Contract(address, _abi, signerOrProvider) as BoringFactory;
  }
}
