/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  BalancerPoolMock,
  BalancerPoolMockInterface,
} from "../../../contracts/balancer/BalancerPoolMock";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "allowance",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
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
    name: "balanceOf",
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
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_val",
        type: "uint256",
      },
    ],
    name: "freeMint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getRate",
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
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
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
    name: "nonces",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "owner_",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
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
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
  {
    inputs: [
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
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
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
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x610100604052600a60c0908152692a32b9ba102a37b5b2b760b11b60e0526004906200002c908262000193565b50604080518082019091526002815261151560f21b602082015260059062000055908262000193565b506006805460ff191660121790553480156200007057600080fd5b504660a08190526a52b7d2dcc80cd2e400000090620000e290604080517f47e79534a245952e8b16893a336b85a3d9ea9fa8c573f3d803afb92a794692186020820152908101829052306060820152600090608001604051602081830303815290604052805190602001209050919050565b6080526003556200025f565b634e487b7160e01b600052604160045260246000fd5b600181811c908216806200011957607f821691505b6020821081036200013a57634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200018e57600081815260208120601f850160051c81016020861015620001695750805b601f850160051c820191505b818110156200018a5782815560010162000175565b5050505b505050565b81516001600160401b03811115620001af57620001af620000ee565b620001c781620001c0845462000104565b8462000140565b602080601f831160018114620001ff5760008415620001e65750858301515b600019600386901b1c1916600185901b1785556200018a565b600085815260208120601f198616915b8281101562000230578886015182559484019460019091019084016200020f565b50858210156200024f5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b60805160a051610da1620002856000396000610931015260006109620152610da16000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c806370a082311161008c57806395d89b411161006657806395d89b41146101e4578063a9059cbb146101ec578063d505accf146101ff578063dd62ed3e1461021257600080fd5b806370a082311461018f5780637c928fe9146101af5780637ecebe00146101c457600080fd5b806323b872dd116100c857806323b872dd14610147578063313ce5671461015a5780633644e51514610179578063679aefce1461018157600080fd5b806306fdde03146100ef578063095ea7b31461010d57806318160ddd14610130575b600080fd5b6100f761023d565b6040516101049190610b16565b60405180910390f35b61012061011b366004610b65565b6102cb565b6040519015158152602001610104565b61013960035481565b604051908152602001610104565b610120610155366004610b8f565b610337565b6006546101679060ff1681565b60405160ff9091168152602001610104565b61013961055a565b670de0b6b3a7640000610139565b61013961019d366004610bcb565b60006020819052908152604090205481565b6101c26101bd366004610bed565b610569565b005b6101396101d2366004610bcb565b60026020526000908152604090205481565b6100f7610576565b6101206101fa366004610b65565b610583565b6101c261020d366004610c06565b6106da565b610139610220366004610c79565b600160209081526000928352604080842090915290825290205481565b6004805461024a90610cac565b80601f016020809104026020016040519081016040528092919081815260200182805461027690610cac565b80156102c35780601f10610298576101008083540402835291602001916102c3565b820191906000526020600020905b8154815290600101906020018083116102a657829003601f168201915b505050505081565b3360008181526001602090815260408083206001600160a01b038716808552925280832085905551919290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925906103269086815260200190565b60405180910390a350600192915050565b60008115610503576001600160a01b038416600090815260208190526040902054828110156103a65760405162461bcd60e51b815260206004820152601660248201527545524332303a2062616c616e636520746f6f206c6f7760501b60448201526064015b60405180910390fd5b836001600160a01b0316856001600160a01b031614610501576001600160a01b0385166000908152600160209081526040808320338452909152902054600019811461046b578381101561043c5760405162461bcd60e51b815260206004820152601860248201527f45524332303a20616c6c6f77616e636520746f6f206c6f770000000000000000604482015260640161039d565b6104468482610cfc565b6001600160a01b03871660009081526001602090815260408083203384529091529020555b6001600160a01b0385166104ba5760405162461bcd60e51b815260206004820152601660248201527545524332303a206e6f207a65726f206164647265737360501b604482015260640161039d565b6104c48483610cfc565b6001600160a01b0380881660009081526020819052604080822093909355908716815290812080548692906104fa908490610d13565b9091555050505b505b826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161054891815260200190565b60405180910390a35060019392505050565b600061056461092d565b905090565b6105733382610984565b50565b6005805461024a90610cac565b60008115158061059b5750336001600160a01b038416145b1561069d5733600090815260208190526040902054828110156105f95760405162461bcd60e51b815260206004820152601660248201527545524332303a2062616c616e636520746f6f206c6f7760501b604482015260640161039d565b336001600160a01b0385161461069b576001600160a01b0384166106585760405162461bcd60e51b815260206004820152601660248201527545524332303a206e6f207a65726f206164647265737360501b604482015260640161039d565b6106628382610cfc565b33600090815260208190526040808220929092556001600160a01b03861681529081208054859290610695908490610d13565b90915550505b505b6040518281526001600160a01b0384169033907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90602001610326565b6001600160a01b0387166107305760405162461bcd60e51b815260206004820152601860248201527f45524332303a204f776e65722063616e6e6f7420626520300000000000000000604482015260640161039d565b8342106107705760405162461bcd60e51b815260206004820152600e60248201526d115490cc8c0e88115e1c1a5c995960921b604482015260640161039d565b6001600160a01b0387166000818152600260205260408120805460019261081a927f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c9928d928d928d92916107c383610d2b565b909155506040805160208101969096526001600160a01b0394851690860152929091166060840152608083015260a082015260c0810188905260e00160405160208183030381529060405280519060200120610a50565b6040805160008152602081018083529290925260ff871690820152606081018590526080810184905260a0016020604051602081039080840390855afa158015610868573d6000803e3d6000fd5b505050602060405103516001600160a01b0316146108c85760405162461bcd60e51b815260206004820152601860248201527f45524332303a20496e76616c6964205369676e61747572650000000000000000604482015260640161039d565b6001600160a01b038781166000818152600160209081526040808320948b168084529482529182902089905590518881527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050505050565b60007f0000000000000000000000000000000000000000000000000000000000000000461461095f5761056446610aa5565b507f000000000000000000000000000000000000000000000000000000000000000090565b6000816003546109949190610d13565b90506003548110156109d85760405162461bcd60e51b815260206004820152600d60248201526c4d696e74206f766572666c6f7760981b604482015260640161039d565b60038190556001600160a01b03831660009081526020819052604081208054849290610a05908490610d13565b90915550506040518281526001600160a01b038416906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a3505050565b600060405180604001604052806002815260200161190160f01b815250610a7561092d565b83604051602001610a8893929190610d44565b604051602081830303815290604052805190602001209050919050565b604080517f47e79534a245952e8b16893a336b85a3d9ea9fa8c573f3d803afb92a794692186020820152908101829052306060820152600090608001610a88565b60005b83811015610b01578181015183820152602001610ae9565b83811115610b10576000848401525b50505050565b6020815260008251806020840152610b35816040850160208701610ae6565b601f01601f19169190910160400192915050565b80356001600160a01b0381168114610b6057600080fd5b919050565b60008060408385031215610b7857600080fd5b610b8183610b49565b946020939093013593505050565b600080600060608486031215610ba457600080fd5b610bad84610b49565b9250610bbb60208501610b49565b9150604084013590509250925092565b600060208284031215610bdd57600080fd5b610be682610b49565b9392505050565b600060208284031215610bff57600080fd5b5035919050565b600080600080600080600060e0888a031215610c2157600080fd5b610c2a88610b49565b9650610c3860208901610b49565b95506040880135945060608801359350608088013560ff81168114610c5c57600080fd5b9699959850939692959460a0840135945060c09093013592915050565b60008060408385031215610c8c57600080fd5b610c9583610b49565b9150610ca360208401610b49565b90509250929050565b600181811c90821680610cc057607f821691505b602082108103610ce057634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b600082821015610d0e57610d0e610ce6565b500390565b60008219821115610d2657610d26610ce6565b500190565b600060018201610d3d57610d3d610ce6565b5060010190565b60008451610d56818460208901610ae6565b9190910192835250602082015260400191905056fea2646970667358221220eb2f13c48f0a8cbae294c4a831f38aa96a99dc942cd7f442a5b55304413233b864736f6c634300080f0033";

type BalancerPoolMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BalancerPoolMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BalancerPoolMock__factory extends ContractFactory {
  constructor(...args: BalancerPoolMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<BalancerPoolMock> {
    return super.deploy(overrides || {}) as Promise<BalancerPoolMock>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): BalancerPoolMock {
    return super.attach(address) as BalancerPoolMock;
  }
  override connect(signer: Signer): BalancerPoolMock__factory {
    return super.connect(signer) as BalancerPoolMock__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BalancerPoolMockInterface {
    return new utils.Interface(_abi) as BalancerPoolMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BalancerPoolMock {
    return new Contract(address, _abi, signerOrProvider) as BalancerPoolMock;
  }
}
