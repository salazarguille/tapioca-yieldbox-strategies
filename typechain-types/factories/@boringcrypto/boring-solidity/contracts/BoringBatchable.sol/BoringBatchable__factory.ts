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
  "0x6080806040523461001657610460908161001c8239f35b600080fdfe6080604052600436101561001257600080fd5b6000803560e01c9081637c516e941461003a575063d2423b511461003557600080fd5b6100b7565b3461009e5761010036600319011261009e57600435610058816100a1565b60243590610065826100a1565b604435610071816100a1565b60a43560ff8116810361009a576100979360e4359360c4359360843592606435926103a0565b80f35b8480fd5b80fd5b6001600160a01b038116036100b257565b600080fd5b60403660031901126100b25760043567ffffffffffffffff8082116100b257366023830112156100b25781600401359081116100b2573660248260051b840101116100b2576024359081151582036100b257602461011593016101c2565b005b908092918237016000815290565b634e487b7160e01b600052604160045260246000fd5b67ffffffffffffffff811161014f57604052565b610125565b90601f8019910116810190811067ffffffffffffffff82111761014f57604052565b67ffffffffffffffff811161014f57601f01601f191660200190565b3d156101bd573d906101a382610176565b916101b16040519384610154565b82523d6000602084013e565b606090565b91909160005b8381106101d55750505050565b8060051b820135601e19833603018112156100b257820180359067ffffffffffffffff82116100b25760200181360381136100b257600091829161021e60405180938193610117565b0390305af461022b610192565b901580610264575b61025f57506000198114610249576001016101c8565b634e487b7160e01b600052601160045260246000fd5b6102c7565b5083610233565b60005b83811061027e5750506000910152565b818101518382015260200161026e565b906020916102a78151809281855285808601910161026b565b601f01601f1916010190565b9060206102c492818152019061028e565b90565b6044815110610364576004810151810190602081602484019303126100b25760248101519067ffffffffffffffff82116100b2570190806043830112156100b25760248201519161031783610176565b916103256040519384610154565b838352604484830101116100b2576103609261034891604460208501910161026b565b60405162461bcd60e51b8152918291600483016102b3565b0390fd5b60405163d935448560e01b81526020600482015290819061036090602483019061028e565b60009103126100b257565b6040513d6000823e3d90fd5b919692956001600160a01b0395949193919286169190823b156100b25760ff60e496600099958a968a6040519d8e9c8d9b63d505accf60e01b8d521660048c01521660248a01526044890152606488015216608486015260a485015260c48401525af18015610425576104105750565b8061041d6104239261013b565b80610389565b565b61039456fea2646970667358221220e28ff9f10514658a261be56c103b8b0e5e6c0b529f17dfea7f66f04964c3025b64736f6c63430008120033";

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
