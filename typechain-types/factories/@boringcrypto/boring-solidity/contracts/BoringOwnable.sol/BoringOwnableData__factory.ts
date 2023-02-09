/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  BoringOwnableData,
  BoringOwnableDataInterface,
} from "../../../../../@boringcrypto/boring-solidity/contracts/BoringOwnable.sol/BoringOwnableData";

const _abi = [
  {
    inputs: [],
    name: "owner",
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
    name: "pendingOwner",
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
  "0x6080604052348015600f57600080fd5b5060ad8061001e6000396000f3fe6080604052348015600f57600080fd5b506004361060325760003560e01c80638da5cb5b146037578063e30c3978146065575b600080fd5b6000546049906001600160a01b031681565b6040516001600160a01b03909116815260200160405180910390f35b6001546049906001600160a01b03168156fea2646970667358221220bb189e2c31dcc014a92179e477bce942081d6ca93b5a0df68cabacf4aaab126e64736f6c634300080f0033";

type BoringOwnableDataConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BoringOwnableDataConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BoringOwnableData__factory extends ContractFactory {
  constructor(...args: BoringOwnableDataConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<BoringOwnableData> {
    return super.deploy(overrides || {}) as Promise<BoringOwnableData>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): BoringOwnableData {
    return super.attach(address) as BoringOwnableData;
  }
  override connect(signer: Signer): BoringOwnableData__factory {
    return super.connect(signer) as BoringOwnableData__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BoringOwnableDataInterface {
    return new utils.Interface(_abi) as BoringOwnableDataInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BoringOwnableData {
    return new Contract(address, _abi, signerOrProvider) as BoringOwnableData;
  }
}