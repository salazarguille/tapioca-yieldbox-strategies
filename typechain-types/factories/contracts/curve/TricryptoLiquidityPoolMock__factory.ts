/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  TricryptoLiquidityPoolMock,
  TricryptoLiquidityPoolMockInterface,
} from "../../../contracts/curve/TricryptoLiquidityPoolMock";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_weth",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "uint256[3]",
        name: "amounts",
        type: "uint256[3]",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "add_liquidity",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[3]",
        name: "amounts",
        type: "uint256[3]",
      },
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    name: "calc_token_amount",
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
        name: "token_amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "calc_withdraw_one_coin",
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
        name: "_token_amount",
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
    name: "remove_liquidity_one_coin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "token",
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
    name: "weth",
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
  "0x608060405234801561001057600080fd5b5060405161178138038061178183398101604081905261002f916100cc565b600180546001600160a01b0319166001600160a01b0383161790556040517d90e40fbeea1d3a4abc8955e946fe31cdcf66f634e100000000000000000090610076906100bf565b908152602001604051809103906000f080158015610098573d6000803e3d6000fd5b50600080546001600160a01b0319166001600160a01b0392909216919091179055506100fc565b61102c8061075583390190565b6000602082840312156100de57600080fd5b81516001600160a01b03811681146100f557600080fd5b9392505050565b61064a8061010b6000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c80633883e119146100675780633fc8cef31461008d5780634515cef3146100b85780634fb08c5e146100cd578063f1dc3cc9146100df578063fc0c546a146100f2575b600080fd5b61007a610075366004610504565b610105565b6040519081526020015b60405180910390f35b6001546100a0906001600160a01b031681565b6040516001600160a01b039091168152602001610084565b6100cb6100c636600461053c565b610111565b005b61007a6100db366004610567565b5090565b6100cb6100ed366004610589565b61020b565b6000546100a0906001600160a01b031681565b60408201355b92915050565b60015461012d906001600160a01b03163330604086013561029e565b60005460408051637c928fe960e01b81529084013560048201526001600160a01b0390911690637c928fe990602401600060405180830381600087803b15801561017657600080fd5b505af115801561018a573d6000803e3d6000fd5b50506000546040805163a9059cbb60e01b81523360048201529086013560248201526001600160a01b03909116925063a9059cbb91506044016020604051808303816000875af11580156101e2573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061020691906105b5565b505050565b6000546040516323b872dd60e01b8152336004820152306024820152604481018590526001600160a01b03909116906323b872dd906064016020604051808303816000875af1158015610262573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061028691906105b5565b50600154610206906001600160a01b031633856103c7565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b179052915160009283929088169161030291906105d9565b6000604051808303816000865af19150503d806000811461033f576040519150601f19603f3d011682016040523d82523d6000602084013e610344565b606091505b509150915081801561036e57508051158061036e57508080602001905181019061036e91906105b5565b6103bf5760405162461bcd60e51b815260206004820181905260248201527f426f72696e6745524332303a205472616e7366657246726f6d206661696c656460448201526064015b60405180910390fd5b505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b179052915160009283929087169161042391906105d9565b6000604051808303816000865af19150503d8060008114610460576040519150601f19603f3d011682016040523d82523d6000602084013e610465565b606091505b509150915081801561048f57508051158061048f57508080602001905181019061048f91906105b5565b6104db5760405162461bcd60e51b815260206004820152601c60248201527f426f72696e6745524332303a205472616e73666572206661696c65640000000060448201526064016103b6565b5050505050565b806060810183101561010b57600080fd5b801515811461050157600080fd5b50565b6000806080838503121561051757600080fd5b61052184846104e2565b91506060830135610531816104f3565b809150509250929050565b6000806080838503121561054f57600080fd5b61055984846104e2565b946060939093013593505050565b6000806040838503121561057a57600080fd5b50508035926020909101359150565b60008060006060848603121561059e57600080fd5b505081359360208301359350604090920135919050565b6000602082840312156105c757600080fd5b81516105d2816104f3565b9392505050565b6000825160005b818110156105fa57602081860181015185830152016105e0565b81811115610609576000828501525b50919091019291505056fea2646970667358221220ddc0621e3341761c1438f55785dfe2a9fb0d61642f9c73f35ce7b0cda76c14e664736f6c634300080f0033610100604052600a60c0908152692a32b9ba102a37b5b2b760b11b60e0526004906200002c9082620001a8565b50604080518082019091526002815261151560f21b6020820152600590620000559082620001a8565b506006805460ff191660121790553480156200007057600080fd5b506040516200102c3803806200102c833981016040819052620000939162000274565b4660a0819052620000f790604080517f47e79534a245952e8b16893a336b85a3d9ea9fa8c573f3d803afb92a794692186020820152908101829052306060820152600090608001604051602081830303815290604052805190602001209050919050565b6080526003556200028e565b634e487b7160e01b600052604160045260246000fd5b600181811c908216806200012e57607f821691505b6020821081036200014f57634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620001a357600081815260208120601f850160051c810160208610156200017e5750805b601f850160051c820191505b818110156200019f578281556001016200018a565b5050505b505050565b81516001600160401b03811115620001c457620001c462000103565b620001dc81620001d5845462000119565b8462000155565b602080601f831160018114620002145760008415620001fb5750858301515b600019600386901b1c1916600185901b1785556200019f565b600085815260208120601f198616915b82811015620002455788860151825594840194600190910190840162000224565b5085821015620002645787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6000602082840312156200028757600080fd5b5051919050565b60805160a051610d78620002b46000396000610908015260006109390152610d786000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c806370a082311161008c57806395d89b411161006657806395d89b41146101bb578063a9059cbb146101c3578063d505accf146101d6578063dd62ed3e146101e957600080fd5b806370a08231146101665780637c928fe9146101865780637ecebe001461019b57600080fd5b806306fdde03146100d4578063095ea7b3146100f257806318160ddd1461011557806323b872dd1461012c578063313ce5671461013f5780633644e5151461015e575b600080fd5b6100dc610214565b6040516100e99190610aed565b60405180910390f35b610105610100366004610b3c565b6102a2565b60405190151581526020016100e9565b61011e60035481565b6040519081526020016100e9565b61010561013a366004610b66565b61030e565b60065461014c9060ff1681565b60405160ff90911681526020016100e9565b61011e610531565b61011e610174366004610ba2565b60006020819052908152604090205481565b610199610194366004610bc4565b610540565b005b61011e6101a9366004610ba2565b60026020526000908152604090205481565b6100dc61054d565b6101056101d1366004610b3c565b61055a565b6101996101e4366004610bdd565b6106b1565b61011e6101f7366004610c50565b600160209081526000928352604080842090915290825290205481565b6004805461022190610c83565b80601f016020809104026020016040519081016040528092919081815260200182805461024d90610c83565b801561029a5780601f1061026f5761010080835404028352916020019161029a565b820191906000526020600020905b81548152906001019060200180831161027d57829003601f168201915b505050505081565b3360008181526001602090815260408083206001600160a01b038716808552925280832085905551919290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925906102fd9086815260200190565b60405180910390a350600192915050565b600081156104da576001600160a01b0384166000908152602081905260409020548281101561037d5760405162461bcd60e51b815260206004820152601660248201527545524332303a2062616c616e636520746f6f206c6f7760501b60448201526064015b60405180910390fd5b836001600160a01b0316856001600160a01b0316146104d8576001600160a01b0385166000908152600160209081526040808320338452909152902054600019811461044257838110156104135760405162461bcd60e51b815260206004820152601860248201527f45524332303a20616c6c6f77616e636520746f6f206c6f7700000000000000006044820152606401610374565b61041d8482610cd3565b6001600160a01b03871660009081526001602090815260408083203384529091529020555b6001600160a01b0385166104915760405162461bcd60e51b815260206004820152601660248201527545524332303a206e6f207a65726f206164647265737360501b6044820152606401610374565b61049b8483610cd3565b6001600160a01b0380881660009081526020819052604080822093909355908716815290812080548692906104d1908490610cea565b9091555050505b505b826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161051f91815260200190565b60405180910390a35060019392505050565b600061053b610904565b905090565b61054a338261095b565b50565b6005805461022190610c83565b6000811515806105725750336001600160a01b038416145b156106745733600090815260208190526040902054828110156105d05760405162461bcd60e51b815260206004820152601660248201527545524332303a2062616c616e636520746f6f206c6f7760501b6044820152606401610374565b336001600160a01b03851614610672576001600160a01b03841661062f5760405162461bcd60e51b815260206004820152601660248201527545524332303a206e6f207a65726f206164647265737360501b6044820152606401610374565b6106398382610cd3565b33600090815260208190526040808220929092556001600160a01b0386168152908120805485929061066c908490610cea565b90915550505b505b6040518281526001600160a01b0384169033907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906020016102fd565b6001600160a01b0387166107075760405162461bcd60e51b815260206004820152601860248201527f45524332303a204f776e65722063616e6e6f74206265203000000000000000006044820152606401610374565b8342106107475760405162461bcd60e51b815260206004820152600e60248201526d115490cc8c0e88115e1c1a5c995960921b6044820152606401610374565b6001600160a01b038716600081815260026020526040812080546001926107f1927f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c9928d928d928d929161079a83610d02565b909155506040805160208101969096526001600160a01b0394851690860152929091166060840152608083015260a082015260c0810188905260e00160405160208183030381529060405280519060200120610a27565b6040805160008152602081018083529290925260ff871690820152606081018590526080810184905260a0016020604051602081039080840390855afa15801561083f573d6000803e3d6000fd5b505050602060405103516001600160a01b03161461089f5760405162461bcd60e51b815260206004820152601860248201527f45524332303a20496e76616c6964205369676e617475726500000000000000006044820152606401610374565b6001600160a01b038781166000818152600160209081526040808320948b168084529482529182902089905590518881527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050505050565b60007f000000000000000000000000000000000000000000000000000000000000000046146109365761053b46610a7c565b507f000000000000000000000000000000000000000000000000000000000000000090565b60008160035461096b9190610cea565b90506003548110156109af5760405162461bcd60e51b815260206004820152600d60248201526c4d696e74206f766572666c6f7760981b6044820152606401610374565b60038190556001600160a01b038316600090815260208190526040812080548492906109dc908490610cea565b90915550506040518281526001600160a01b038416906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a3505050565b600060405180604001604052806002815260200161190160f01b815250610a4c610904565b83604051602001610a5f93929190610d1b565b604051602081830303815290604052805190602001209050919050565b604080517f47e79534a245952e8b16893a336b85a3d9ea9fa8c573f3d803afb92a794692186020820152908101829052306060820152600090608001610a5f565b60005b83811015610ad8578181015183820152602001610ac0565b83811115610ae7576000848401525b50505050565b6020815260008251806020840152610b0c816040850160208701610abd565b601f01601f19169190910160400192915050565b80356001600160a01b0381168114610b3757600080fd5b919050565b60008060408385031215610b4f57600080fd5b610b5883610b20565b946020939093013593505050565b600080600060608486031215610b7b57600080fd5b610b8484610b20565b9250610b9260208501610b20565b9150604084013590509250925092565b600060208284031215610bb457600080fd5b610bbd82610b20565b9392505050565b600060208284031215610bd657600080fd5b5035919050565b600080600080600080600060e0888a031215610bf857600080fd5b610c0188610b20565b9650610c0f60208901610b20565b95506040880135945060608801359350608088013560ff81168114610c3357600080fd5b9699959850939692959460a0840135945060c09093013592915050565b60008060408385031215610c6357600080fd5b610c6c83610b20565b9150610c7a60208401610b20565b90509250929050565b600181811c90821680610c9757607f821691505b602082108103610cb757634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b600082821015610ce557610ce5610cbd565b500390565b60008219821115610cfd57610cfd610cbd565b500190565b600060018201610d1457610d14610cbd565b5060010190565b60008451610d2d818460208901610abd565b9190910192835250602082015260400191905056fea26469706673582212206f869a754f07fbc51004538b7b12b8bc518f083782f4589e37cc84bfcbf31f4764736f6c634300080f0033";

type TricryptoLiquidityPoolMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TricryptoLiquidityPoolMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TricryptoLiquidityPoolMock__factory extends ContractFactory {
  constructor(...args: TricryptoLiquidityPoolMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _weth: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TricryptoLiquidityPoolMock> {
    return super.deploy(
      _weth,
      overrides || {}
    ) as Promise<TricryptoLiquidityPoolMock>;
  }
  override getDeployTransaction(
    _weth: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_weth, overrides || {});
  }
  override attach(address: string): TricryptoLiquidityPoolMock {
    return super.attach(address) as TricryptoLiquidityPoolMock;
  }
  override connect(signer: Signer): TricryptoLiquidityPoolMock__factory {
    return super.connect(signer) as TricryptoLiquidityPoolMock__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TricryptoLiquidityPoolMockInterface {
    return new utils.Interface(_abi) as TricryptoLiquidityPoolMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TricryptoLiquidityPoolMock {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as TricryptoLiquidityPoolMock;
  }
}