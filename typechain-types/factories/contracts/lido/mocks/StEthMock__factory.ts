/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  StEthMock,
  StEthMockInterface,
} from "../../../../contracts/lido/mocks/StEthMock";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "initialSupply",
        type: "uint256",
      },
    ],
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
        name: "dst",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "Deposit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
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
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "src",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "Withdrawal",
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
    inputs: [],
    name: "MINT_WINDOW",
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
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
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
        name: "account",
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
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
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
    inputs: [],
    name: "deposit",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "extractTokens",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "hasMintRestrictions",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
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
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
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
    inputs: [],
    name: "isStakingPaused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "mintLimit",
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
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "mintTo",
    outputs: [],
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
    name: "mintedAt",
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
        name: "owner",
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
    inputs: [
      {
        internalType: "address",
        name: "owner",
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
    name: "renounceOwnership",
    outputs: [],
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
    name: "submit",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
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
    name: "toggleRestrictions",
    outputs: [],
    stateMutability: "nonpayable",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_newVal",
        type: "uint256",
      },
    ],
    name: "updateMintLimit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x61014034620005b0576001600160401b0390601f90601f1962001bbe388190038085018316840193919082851087861117620004bf5780839260409687528339602092839181010312620005b05751918351946200005d86620005b5565b60098652828601916853744574684d6f636b60b81b83528551926200008284620005b5565b600684526553544554484d60d01b85850152865197620000a289620005b5565b600192838a52868a0193603160f81b855282518c8111620004bf5760039081548381811c91168015620005a5575b8b8210146200058f5788811162000544575b50808a898211600114620004e157600091620004d5575b5060001982841b1c191690831b1781555b8751918d8311620004bf5760049889548281811c91168015620004b4575b8c8210146200049f57808a8d921162000452575b50508a90898511600114620003e75784955090849291600095620003db575b50501b92600019911b1c19161785555b51902096519020968660e052610100978089524660a052865190858201907f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f998a83528984015260608301524660808301523060a083015260a0825260c082019282841090841117620003c657828852815190206080523060c052610120978852620001f733620005d1565b600a805460ff19166012179055683635c9adc5dea00000600955600754336001600160a01b03919091160362000385575050331562000334576200023b33620005d1565b3015620002f5575060025490838201809211620002e057506000917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9160025530835282815284832084815401905584519384523093a38261ff0019600a541617600a5551906115a392836200061b843960805183611301015260a051836113cd015260c051836112cb015260e05183611350015251826113760152518161132d0152f35b601190634e487b7160e01b6000525260246000fd5b60649285519262461bcd60e51b845283015260248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152fd5b5060849184519162461bcd60e51b8352820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152fd5b907f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726101046064938762461bcd60e51b85528060c483015260e48201520152fd5b604185634e487b7160e01b6000525260246000fd5b0151935038806200015b565b9291948416928a600052848c600020948d6000905b898383106200043957505050106200041e575b50505050811b0185556200016b565b01519060f884600019921b161c19169055388080806200040f565b8686015189559097019694850194889350018e620003fc565b8b6000528a826000209181880160051c830193881062000495575b0160051c019083905b8281106200048857508c91506200013c565b6000815501839062000476565b925081926200046d565b60228b634e487b7160e01b6000525260246000fd5b90607f169062000128565b634e487b7160e01b600052604160045260246000fd5b905085015138620000f9565b8585931690846000528c600020918d6000905b8282106200052c575050831162000513575b5050811b0181556200010a565b87015160001983861b60f8161c19169055388062000506565b838b0151855588969094019392830192018e620004f4565b826000528a6000208980840160051c8201928d851062000585575b0160051c019084905b82811062000578575050620000e2565b6000815501849062000568565b925081926200055f565b634e487b7160e01b600052602260045260246000fd5b90607f1690620000d0565b600080fd5b604081019081106001600160401b03821117620004bf57604052565b600780546001600160a01b039283166001600160a01b0319821681179092559091167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0600080a356fe60806040818152600480361015610021575b505050361561001f57600080fd5b005b600092833560e01c90816306fdde0314610c9057508063095ea7b314610c6657806318160ddd14610c475780631d0dc26714610c0f5780631ea7ca8914610bf457806321442ec914610bbc57806322ae81af14610b9e57806323b872dd14610ad45780632e1a7d4d14610934578063313ce567146109125780633644e515146108ee578063395093511461089e578063449a52f81461087157806370a082311461083a578063715018a6146107dd5780637c928fe9146107c05780637ecebe00146107885780638da5cb5b1461075f57806395d89b411461065b578063996517cf1461063c578063a1903eab14610608578063a457c2d714610561578063a9059cbb14610530578063d0e30db0146104ec578063d4a744ba146104c5578063d505accf146102db578063d6b5a2db146102b1578063dd62ed3e14610268578063e01d55c5146102425763f2fde38b03610011573461023e57602036600319011261023e5761018d610dcb565b90610196610dfc565b6001600160a01b039182169283156101ec575050600754826bffffffffffffffffffffffff60a01b821617600755167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08380a380f35b906020608492519162461bcd60e51b8352820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152fd5b8280fd5b8382346102645760203660031901126102645761025d610dfc565b3560095580f35b5080fd5b50503461026457806003193601126102645780602092610286610dcb565b61028e610de6565b6001600160a01b0391821683526001865283832091168252845220549051908152f35b838234610264576020366003190112610264576102d8906102d0610dfc565b353330610eaf565b80f35b508290346102645760e0366003190112610264576102f7610dcb565b6102ff610de6565b90604435926064356084359060ff821682036104c15780421161047e5760018060a01b03908185169283895260056020528989208054906001820190558a519260208401917f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98352868d860152858a1660608601528a608086015260a085015260c084015260c0835260e083019267ffffffffffffffff938181108582111761046b578c52519020906103b06112c8565b928b5192602084019461190160f01b86526022850152604284015260428352608083019083821090821117610458579161040393916103fb938d5260c4359260a43592519020611239565b91909161111f565b160361041557506102d893945061101d565b606490602087519162461bcd60e51b8352820152601e60248201527f45524332305065726d69743a20696e76616c6964207369676e617475726500006044820152fd5b634e487b7160e01b8b526041875260248bfd5b634e487b7160e01b8c526041885260248cfd5b875162461bcd60e51b8152602081850152601d60248201527f45524332305065726d69743a206578706972656420646561646c696e650000006044820152606490fd5b8680fd5b50503461026457816003193601126102645760209060ff600a5460081c1690519015158152f35b5050816003193601126102645761050334336113f3565b513481527fe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c60203392a280f35b50503461026457806003193601126102645760209061055a610550610dcb565b6024359033610eaf565b5160018152f35b50823461060557826003193601126106055761057b610dcb565b918360243592338152600160205281812060018060a01b03861682526020522054908282106105b45760208561055a858503873361101d565b608490602086519162461bcd60e51b8352820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b6064820152fd5b80fd5b5050602036600319011261026457602090610621610dcb565b5061062b34611496565b610636343333610eaf565b51348152f35b5050346102645781600319360112610264576020906009549051908152f35b50919034610264578160031936011261026457805191809380549160019083821c92828516948515610755575b60209586861081146107425785895290811561071e57506001146106c6575b6106c287876106b8828c0383610e54565b5191829182610d82565b0390f35b81529295507f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b5b82841061070b57505050826106c2946106b8928201019438806106a7565b80548685018801529286019281016106ed565b60ff19168887015250505050151560051b83010192506106b8826106c238806106a7565b634e487b7160e01b845260228352602484fd5b93607f1693610688565b50503461026457816003193601126102645760075490516001600160a01b039091168152602090f35b5050346102645760203660031901126102645760209181906001600160a01b036107b0610dcb565b1681526005845220549051908152f35b838234610264576020366003190112610264576102d89035611496565b83346106055780600319360112610605576107f6610dfc565b600780546001600160a01b0319811690915581906001600160a01b03167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08280a380f35b5050346102645760203660031901126102645760209181906001600160a01b03610862610dcb565b16815280845220549051908152f35b50503461026457366003190112610605576102d861088d610dcb565b610895610dfc565b602435906113f3565b50503461026457806003193601126102645761055a6020926108e76108c1610dcb565b338352600186528483206001600160a01b03821684528652918490205460243590610e8c565b903361101d565b50503461026457816003193601126102645760209061090b6112c8565b9051908152f35b50503461026457816003193601126102645760209060ff600a54169051908152f35b503461023e57602080600319360112610ad057813591338552848252828486205410610aa7573315610a5c573385528482528385205490838210610a0e57508290338652858352038385205581600254036002558383518381527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef833392a38380838015610a04575b8280929181923390f1156109f8577f7fcf532c15f0a6db0bd6d0e038bea71d30d808c7d98cb3bf7268a95bf5081b659192519283523392a280f35b505051903d90823e3d90fd5b6108fc91506109bd565b845162461bcd60e51b8152908101839052602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b6064820152608490fd5b60849184519162461bcd60e51b8352820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b6064820152fd5b60649184519162461bcd60e51b8352820152600560248201526422b93937b960d91b6044820152fd5b8380fd5b5082903461026457606036600319011261026457610af0610dcb565b610af8610de6565b91846044359460018060a01b038416815260016020528181203382526020522054906000198203610b32575b60208661055a878787610eaf565b848210610b5b5750918391610b506020969561055a9503338361101d565b919394819350610b24565b606490602087519162461bcd60e51b8352820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152fd5b50503461026457816003193601126102645760209051620151808152f35b5050346102645760203660031901126102645760209181906001600160a01b03610be4610dcb565b1681526008845220549051908152f35b50503461026457816003193601126102645751908152602090f35b8334610605578060031936011261060557610c28610dfc565b600a5461ff0060ff8260081c161560081b169061ff00191617600a5580f35b5050346102645781600319360112610264576020906002549051908152f35b50503461026457806003193601126102645760209061055a610c86610dcb565b602435903361101d565b9291905034610ad05783600319360112610ad057600354600181811c9186908281168015610d78575b6020958686108214610d655750848852908115610d435750600114610cea575b6106c286866106b8828b0383610e54565b929550600383527fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b5b828410610d3057505050826106c2946106b8928201019438610cd9565b8054868501880152928601928101610d13565b60ff191687860152505050151560051b83010192506106b8826106c238610cd9565b634e487b7160e01b845260229052602483fd5b93607f1693610cb9565b6020808252825181830181905290939260005b828110610db757505060409293506000838284010152601f8019910116010190565b818101860151848201604001528501610d95565b600435906001600160a01b0382168203610de157565b600080fd5b602435906001600160a01b0382168203610de157565b6007546001600160a01b03163303610e1057565b606460405162461bcd60e51b815260206004820152602060248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152fd5b90601f8019910116810190811067ffffffffffffffff821117610e7657604052565b634e487b7160e01b600052604160045260246000fd5b91908201809211610e9957565b634e487b7160e01b600052601160045260246000fd5b6001600160a01b03908116918215610fca5716918215610f7957600082815280602052604081205491808310610f2557604082827fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef958760209652828652038282205586815220818154019055604051908152a3565b60405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b6064820152608490fd5b60405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608490fd5b60405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b6064820152608490fd5b6001600160a01b039081169182156110ce571691821561107e5760207f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925918360005260018252604060002085600052825280604060002055604051908152a3565b60405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608490fd5b60405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608490fd5b600581101561122357806111305750565b6001810361117d5760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e617475726500000000000000006044820152606490fd5b600281036111ca5760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e677468006044820152606490fd5b6003146111d357565b60405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b6064820152608490fd5b634e487b7160e01b600052602160045260246000fd5b9291907f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a083116112bc5791608094939160ff602094604051948552168484015260408301526060820152600093849182805260015afa156112af5781516001600160a01b038116156112a9579190565b50600190565b50604051903d90823e3d90fd5b50505050600090600390565b307f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031614806113ca575b15611323577f000000000000000000000000000000000000000000000000000000000000000090565b60405160208101907f000000000000000000000000000000000000000000000000000000000000000082527f000000000000000000000000000000000000000000000000000000000000000060408201527f000000000000000000000000000000000000000000000000000000000000000060608201524660808201523060a082015260a0815260c0810181811067ffffffffffffffff821117610e765760405251902090565b507f000000000000000000000000000000000000000000000000000000000000000046146112fa565b6001600160a01b0316908115611451577fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef602082611435600094600254610e8c565b60025584845283825260408420818154019055604051908152a3565b60405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606490fd5b60ff600a5460081c166114c0575b6114be9033600052600860205242604060002055336113f3565b565b600954811161152857336000526008602052604060002054620151808101809111610e99574210156114a45760405162461bcd60e51b815260206004820152601460248201527345524332304d6f636b3a20746f6f206561726c7960601b6044820152606490fd5b60405162461bcd60e51b815260206004820152601960248201527f45524332304d6f636b3a20616d6f756e7420746f6f20626967000000000000006044820152606490fdfea2646970667358221220d2cf93c284d3349d209a965701082f95bff04ccbb2d4e83e3b32834a0a93466164736f6c63430008120033";

type StEthMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: StEthMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class StEthMock__factory extends ContractFactory {
  constructor(...args: StEthMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    initialSupply: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<StEthMock> {
    return super.deploy(initialSupply, overrides || {}) as Promise<StEthMock>;
  }
  override getDeployTransaction(
    initialSupply: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(initialSupply, overrides || {});
  }
  override attach(address: string): StEthMock {
    return super.attach(address) as StEthMock;
  }
  override connect(signer: Signer): StEthMock__factory {
    return super.connect(signer) as StEthMock__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): StEthMockInterface {
    return new utils.Interface(_abi) as StEthMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): StEthMock {
    return new Contract(address, _abi, signerOrProvider) as StEthMock;
  }
}