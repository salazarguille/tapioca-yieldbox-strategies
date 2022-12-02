/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  BoringBatchable,
  BoringBatchableInterface,
} from "../../../../../@boringcrypto/boring-solidity/contracts/BoringBatchable.sol/BoringBatchable";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes",
        name: "innerError",
        type: "bytes",
      },
    ],
    name: "BatchError",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes[]",
        name: "calls",
        type: "bytes[]",
      },
      {
        internalType: "bool",
        name: "revertOnFail",
        type: "bool",
      },
    ],
    name: "batch",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "permitToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610542806100206000396000f3fe6080604052600436106100295760003560e01c80637c516e941461002e578063d2423b5114610050575b600080fd5b34801561003a57600080fd5b5061004e610049366004610228565b610063565b005b61004e61005e3660046102b1565b6100f5565b60405163d505accf60e01b81526001600160a01b0388811660048301528781166024830152604482018790526064820186905260ff8516608483015260a4820184905260c4820183905289169063d505accf9060e401600060405180830381600087803b1580156100d357600080fd5b505af11580156100e7573d6000803e3d6000fd5b505050505050505050505050565b60005b828110156101a957600080308686858181106101165761011661033c565b90506020028101906101289190610352565b6040516101369291906103a0565b600060405180830381855af49150503d8060008114610171576040519150601f19603f3d011682016040523d82523d6000602084013e610176565b606091505b5091509150811580156101865750835b1561019457610194816101af565b505080806101a1906103b0565b9150506100f8565b50505050565b6044815110156101dd578060405163d935448560e01b81526004016101d4919061042f565b60405180910390fd5b600481019050808060200190518101906101f7919061045f565b60405162461bcd60e51b81526004016101d4919061042f565b6001600160a01b038116811461022557600080fd5b50565b600080600080600080600080610100898b03121561024557600080fd5b883561025081610210565b9750602089013561026081610210565b9650604089013561027081610210565b9550606089013594506080890135935060a089013560ff8116811461029457600080fd5b979a969950949793969295929450505060c08201359160e0013590565b6000806000604084860312156102c657600080fd5b833567ffffffffffffffff808211156102de57600080fd5b818601915086601f8301126102f257600080fd5b81358181111561030157600080fd5b8760208260051b850101111561031657600080fd5b60209283019550935050840135801515811461033157600080fd5b809150509250925092565b634e487b7160e01b600052603260045260246000fd5b6000808335601e1984360301811261036957600080fd5b83018035915067ffffffffffffffff82111561038457600080fd5b60200191503681900382131561039957600080fd5b9250929050565b8183823760009101908152919050565b6000600182016103d057634e487b7160e01b600052601160045260246000fd5b5060010190565b60005b838110156103f25781810151838201526020016103da565b838111156101a95750506000910152565b6000815180845261041b8160208601602086016103d7565b601f01601f19169290920160200192915050565b6020815260006104426020830184610403565b9392505050565b634e487b7160e01b600052604160045260246000fd5b60006020828403121561047157600080fd5b815167ffffffffffffffff8082111561048957600080fd5b818401915084601f83011261049d57600080fd5b8151818111156104af576104af610449565b604051601f8201601f19908116603f011681019083821181831017156104d7576104d7610449565b816040528281528760208487010111156104f057600080fd5b6105018360208301602088016103d7565b97965050505050505056fea2646970667358221220dbb59f1f90cc4f8b7a1483ba01a2ee59ea2b63426f05506f3bf03b20a2735cc064736f6c634300080f0033";

type BoringBatchableConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BoringBatchableConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BoringBatchable__factory extends ContractFactory {
  constructor(...args: BoringBatchableConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<BoringBatchable> {
    return super.deploy(overrides || {}) as Promise<BoringBatchable>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): BoringBatchable {
    return super.attach(address) as BoringBatchable;
  }
  override connect(signer: Signer): BoringBatchable__factory {
    return super.connect(signer) as BoringBatchable__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BoringBatchableInterface {
    return new utils.Interface(_abi) as BoringBatchableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BoringBatchable {
    return new Contract(address, _abi, signerOrProvider) as BoringBatchable;
  }
}
