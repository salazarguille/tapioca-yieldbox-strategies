/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  LPStakingMock,
  LPStakingMockInterface,
} from "../../../contracts/stargate/LPStakingMock";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_lpToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "_stg",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "lpToken",
    outputs: [
      {
        internalType: "contract ERC20Mock",
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
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "pendingStargate",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "poolInfo",
    outputs: [
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
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "reward",
    outputs: [
      {
        internalType: "contract ERC20Mock",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "stargate",
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
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "userInfo",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "rewardDebt",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516105cf3803806105cf83398101604081905261002f9161007c565b600080546001600160a01b039384166001600160a01b031991821617909155600180549290931691161790556100af565b80516001600160a01b038116811461007757600080fd5b919050565b6000806040838503121561008f57600080fd5b61009883610060565b91506100a660208401610060565b90509250929050565b610511806100be6000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c80635fcbd2851161005b5780635fcbd2851461014a5780636c099dee1461015d57806393f1a40b1461016e578063e2bbb1581461019657600080fd5b80631526fe271461008d578063228cb733146100df5780632f607fdd1461010a578063441a3e7014610135575b600080fd5b6100b061009b366004610422565b50600080546001600160a01b03169181908190565b604080516001600160a01b03909516855260208501939093529183015260608201526080015b60405180910390f35b6001546100f2906001600160a01b031681565b6040516001600160a01b0390911681526020016100d6565b61012761011836600461043b565b678ac7230489e8000092915050565b6040519081526020016100d6565b610148610143366004610477565b6101a9565b005b6000546100f2906001600160a01b031681565b6001546001600160a01b03166100f2565b61018161017c36600461043b565b610282565b604080519283526020830191909152016100d6565b6101486101a4366004610477565b6102fa565b600054604051637c928fe960e01b8152600481018390526001600160a01b0390911690637c928fe990602401600060405180830381600087803b1580156101ef57600080fd5b505af1158015610203573d6000803e3d6000fd5b505060005460405163a9059cbb60e01b8152336004820152602481018590526001600160a01b03909116925063a9059cbb91506044015b6020604051808303816000875af1158015610259573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061027d9190610499565b505050565b600080546040516370a0823160e01b815230600482015282916001600160a01b0316906370a0823190602401602060405180830381865afa1580156102cb573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102ef91906104c2565b946000945092505050565b806000036103e557600154604051637c928fe960e01b8152678ac7230489e8000060048201526001600160a01b0390911690637c928fe990602401600060405180830381600087803b15801561034f57600080fd5b505af1158015610363573d6000803e3d6000fd5b505060015460405163a9059cbb60e01b8152336004820152678ac7230489e8000060248201526001600160a01b03909116925063a9059cbb91506044016020604051808303816000875af11580156103bf573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103e39190610499565b505b6000546040516323b872dd60e01b8152336004820152306024820152604481018390526001600160a01b03909116906323b872dd9060640161023a565b60006020828403121561043457600080fd5b5035919050565b6000806040838503121561044e57600080fd5b8235915060208301356001600160a01b038116811461046c57600080fd5b809150509250929050565b6000806040838503121561048a57600080fd5b50508035926020909101359150565b6000602082840312156104ab57600080fd5b815180151581146104bb57600080fd5b9392505050565b6000602082840312156104d457600080fd5b505191905056fea2646970667358221220b8d5fe85dfb11878820837e5796e7949d1286b550bd9b229d0853bc28a2ae8a664736f6c634300080f0033";

type LPStakingMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: LPStakingMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class LPStakingMock__factory extends ContractFactory {
  constructor(...args: LPStakingMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _lpToken: PromiseOrValue<string>,
    _stg: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<LPStakingMock> {
    return super.deploy(
      _lpToken,
      _stg,
      overrides || {}
    ) as Promise<LPStakingMock>;
  }
  override getDeployTransaction(
    _lpToken: PromiseOrValue<string>,
    _stg: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_lpToken, _stg, overrides || {});
  }
  override attach(address: string): LPStakingMock {
    return super.attach(address) as LPStakingMock;
  }
  override connect(signer: Signer): LPStakingMock__factory {
    return super.connect(signer) as LPStakingMock__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LPStakingMockInterface {
    return new utils.Interface(_abi) as LPStakingMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LPStakingMock {
    return new Contract(address, _abi, signerOrProvider) as LPStakingMock;
  }
}