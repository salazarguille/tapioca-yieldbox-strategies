/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  TricryptoStrategy,
  TricryptoStrategyInterface,
} from "../../../../contracts/curve/TricryptoLPStrategy.sol/TricryptoStrategy";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IYieldBox",
        name: "_yieldBox",
        type: "address",
      },
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "address",
        name: "_lpGauge",
        type: "address",
      },
      {
        internalType: "address",
        name: "_lpGetter",
        type: "address",
      },
      {
        internalType: "address",
        name: "_minter",
        type: "address",
      },
      {
        internalType: "address",
        name: "_multiSwapper",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "AmountDeposited",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "AmountQueued",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "AmountWithdrawn",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_old",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_new",
        type: "uint256",
      },
    ],
    name: "DepositThreshold",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_old",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_new",
        type: "address",
      },
    ],
    name: "LPGetterSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_old",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_new",
        type: "address",
      },
    ],
    name: "MultiSwapper",
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
    inputs: [],
    name: "cheapWithdrawable",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "claimOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "compound",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "compoundAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "result",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "contractAddress",
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
    name: "currentBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "depositThreshold",
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
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "deposited",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "description",
    outputs: [
      {
        internalType: "string",
        name: "description_",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "emergencyWithdraw",
    outputs: [
      {
        internalType: "uint256",
        name: "result",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "lpGauge",
    outputs: [
      {
        internalType: "contract ITricryptoLPGauge",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lpGetter",
    outputs: [
      {
        internalType: "contract ITricryptoLPGetter",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lpToken",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "minter",
    outputs: [
      {
        internalType: "contract ICurveMinter",
        name: "",
        type: "address",
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
        name: "name_",
        type: "string",
      },
    ],
    stateMutability: "pure",
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
  {
    inputs: [],
    name: "rewardToken",
    outputs: [
      {
        internalType: "contract IERC20",
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
        name: "amount",
        type: "uint256",
      },
    ],
    name: "setDepositThreshold",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_swapper",
        type: "address",
      },
    ],
    name: "setMultiSwapper",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_lpGetter",
        type: "address",
      },
    ],
    name: "setTricryptoLPGetter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "swapper",
    outputs: [
      {
        internalType: "contract ISwapper",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "tokenId",
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
    name: "tokenType",
    outputs: [
      {
        internalType: "enum TokenType",
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
        name: "newOwner",
        type: "address",
      },
      {
        internalType: "bool",
        name: "direct",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "renounce",
        type: "bool",
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
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdrawable",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "wrappedNative",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "yieldBox",
    outputs: [
      {
        internalType: "contract IYieldBox",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x61016060409080825234620004665760c08162002f0880380380916200002682856200046b565b83398101031262000466578051916001600160a01b039081841684036200046657602062000056818501620004a5565b9262000064838601620004a5565b956200007360608701620004a5565b966200009060a06200008860808a01620004a5565b9801620004a5565b916080528560a05260018060a01b031990838060009433858754161786558189519a33887f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08180a360016002551660e0521691828460035416176003551690846101009a838c52816101209b168b521694856004948554161784556376d8b11760e01b895286898581865afa9889156200045c57859962000419575b5080610140991689528751635fcbd28560e01b8152878186818a5afa9081156200037d579082918791620003d5575b5016918260c052885163095ea7b360e01b948582528682015288816044818a600019988960248401525af18015620003a957620003b3575b5085888360c0511660448c51809481938a83528d8c8401528960248401525af18015620003a957918991889362000387575b506044848d5116918c5194859384928a84528b8401528860248401525af180156200037d57928895949287926044956200035b575b5060e05116908a519889968795865285015260248401525af19081156200035057506200031b575b50505191612a339384620004d585396080518481816103a401528181610f8e0152611646015260a051846101be015260c0518481816103e4015281816117770152818161272a0152612851015260e051848181610259015281816108c701528181610f1c015281816111f501528181611ace015261250a015251838181610509015281816106d901528181610ff9015281816115fa015281816119a80152818161249f015281816126e201526128be0152518281816108260152818161115a01528181611a3a0152612036015251818181610177015281816107e301528181610df30152818161111f015281816119fe015261252d0152f35b816200033f92903d1062000348575b6200033681836200046b565b810190620004ba565b50388062000222565b503d6200032a565b8451903d90823e3d90fd5b6200037590883d8a1162000348576200033681836200046b565b5038620001fa565b89513d88823e3d90fd5b620003a190833d851162000348576200033681836200046b565b5038620001c5565b8a513d89823e3d90fd5b620003cd90893d8b1162000348576200033681836200046b565b503862000193565b809250898092503d831162000411575b620003f181836200046b565b810103126200040d57620004068291620004a5565b386200015b565b8580fd5b503d620003e5565b9098508681813d831162000454575b6200043481836200046b565b8101031262000450576200044890620004a5565b97386200012c565b8480fd5b503d62000428565b88513d87823e3d90fd5b600080fd5b601f909101601f19168101906001600160401b038211908210176200048f57604052565b634e487b7160e01b600052604160045260246000fd5b51906001600160a01b03821682036200046657565b90816020910312620004665751801515810362000466579056fe608060408181526004918236101561001657600080fd5b600092833560e01c91826306fdde0314612065575081630754617214612021578163078dfbe714611f1057816317d70f7c14611ef557816322a58c5d146119225781632b3297f9146118f957816330fa738c146118dd57816348dcb051146118b95781634cce992d146118595781634e71e0c8146117a65781635018830114610f4b5781635fcbd28514611762578163726c64f21461173a5781637284e416146116d1578163734daaa1146116b25781638da5cb5b1461168a578163afa91cc614611629578163c5ec7874146115e5578163ce845d1d14610f4b578163db2e21bc14610fbd578163de40657714610f79578163e30c397814610f50578163e3575f0514610f4b578163eb6d3a1114610f07578163ec32e1b914610d8a578163f3fef3a314610374578163f64920b8146101ed57508063f6b4dfb4146101aa5763f7c618c11461016457600080fd5b346101a657816003193601126101a657517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b5080fd5b50346101a657816003193601126101a657517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b91905034610370576020908160031936011261036c5761020b61211b565b845490936001600160a01b03916102259083163314612210565b81808254169516948684519387837fec75cca752304221051372b35f3488d6d59ae4be7bbbb04869f1e887318e12998480a37f0000000000000000000000000000000000000000000000000000000000000000169363095ea7b360e01b9283825284820152816024820152868160448185895af1801561036257908794939291610324575b506044929394886001600160601b0360a01b86541617855586519889958694855284015260001960248401525af190811561031b57506102e8578280f35b81813d8311610314575b6102fc81836121af565b810103126101a65761030d9061229f565b5038808280f35b503d6102f2565b513d85823e3d90fd5b929383813d831161035b575b61033a81836121af565b8101031261035857869461034f60449461229f565b509493926102aa565b80fd5b503d610330565b86513d84823e3d90fd5b8380fd5b8280fd5b9190503461037057806003193601126103705761038f61211b565b916001600160a01b039060248035916103cb337f00000000000000000000000000000000000000000000000000000000000000008616146127ed565b6103d3612989565b826103dc6126bb565b10610d3b57837f0000000000000000000000000000000000000000000000000000000000000000168551946370a0823160e01b808752308488015260209687818781875afa9081156106be578b91610d0e575b5086116106c8575b8751818152308582015287818781875afa9081156106be579087918c9161068d575b501061064b57898089519a848a8d019163a9059cbb60e01b8352169b8c898201528960448201526044815261048d8161215b565b519082875af161049b61225b565b8161060f575b50156105cd579086859493928b968a5180958193825230888301525afa9182156105c357859261058c575b5081610507575b50505050507f058b581e2433b8b02263f5b0e5c2889fcb7b3495112884a3147619038fba46d89251908152a2600160025580f35b7f000000000000000000000000000000000000000000000000000000000000000016803b1561057e578492836064928a5196879586946383df674760e01b865285015230908401528160448401525af180156105825761056a575b8080806104d3565b61057390612131565b61057e578438610562565b8480fd5b85513d84823e3d90fd5b945090508584813d81116105bc575b6105a581836121af565b810103126105b75788935190386104cc565b600080fd5b503d61059b565b88513d87823e3d90fd5b875162461bcd60e51b8152808501889052601c818701527f426f72696e6745524332303a205472616e73666572206661696c6564000000006044820152606490fd5b80915051888115918215610628575b50509050386104a1565b8380929350010312610647578761063f910161229f565b80883861061e565b8a80fd5b875162461bcd60e51b8152808501889052601f818701527f54726963727970746f4c5053747261746567793a206e6f7420656e6f756768006044820152606490fd5b809250898092503d83116106b7575b6106a681836121af565b810103126105b75786905138610459565b503d61069c565b89513d8d823e3d90fd5b8988516106d481612193565b5289827f0000000000000000000000000000000000000000000000000000000000000000168951633313458360e01b815230878201528981898186865af19081156107d5578391610cdd575b506107df575b8951838152308782015289818981855afa9081156107d55783916107a4575b50813b15610370578291604483928d519485938492631c683a1b60e11b84528c84015260018d8401525af1801561079a57610782575b5050610437565b61078b90612131565b61079657893861077b565b8980fd5b8a513d84823e3d90fd5b8093508a8092503d83116107ce575b6107bd81836121af565b810103126105b7578b915138610745565b503d6107b3565b8b513d85823e3d90fd5b90837f0000000000000000000000000000000000000000000000000000000000000000168a5184815230888201528a818a81855afa908115610cd3578391610ca2575b50857f000000000000000000000000000000000000000000000000000000000000000016803b1561036c5783858b8f838d915195869485936335313c2160e11b85528401525af18015610c8457908491610c8e575b50508b5185815230898201528b818b81865afa908115610c8457908d9392918591610c50575b508181116108b0575b5050505090610726565b906108ba9161268b565b61090589886003541692897f000000000000000000000000000000000000000000000000000000000000000016955180938192631fd177af60e11b83528861014098899685016123a1565b0381855afa928315610c46578e8e928c928896610c0f575b505051630b7ecdc960e31b815291908290819061093d9087908301612444565b0381855afa948515610b5b5794610be0575b50603284029380850460321481151715610b1957918f8a8f93916101c49261098061099997612710809b049061268b565b865163efa84c6d60e01b815297889687958601906123d8565b610144840152306101648401526101a0610184840152816101a48401525af18015610bd457918c8c928b9594610b9f575b505193848092888252308c8301525afa918215610b95578d92610b66575b508c85885416918c516305c43acd60e01b8152848a8201528c818c81875afa928315610b5b5792610b2c575b506032820282810460321483151715610b19578f959491868f958f9596610a428f988f95604497049061268b565b9051978896879563b529fe1d60e01b87528601528401525af19081156107d5578391610ae8575b50813b15610370578a516383df674760e01b815281888201523089820152836044820152838160648183875af18015610ade578b918591610ac7575b50506000805160206129de833981519152918c51908152a190893880806108a6565b610ad2919250612131565b61037057898338610aa5565b8c513d86823e3d90fd5b8093508a8092503d8311610b12575b610b0181836121af565b810103126105b7578b915138610a69565b503d610af7565b50634e487b7160e01b8f5260118952898ffd5b9091508b81813d8311610b54575b610b4481836121af565b810103126105b757519038610a14565b503d610b3a565b8e51903d90823e3d90fd5b9091508981813d8311610b8e575b610b7e81836121af565b810103126105b7575190386109e8565b503d610b74565b8b513d8f823e3d90fd5b9194508092503d8311610bcd575b610bb781836121af565b81010312610bc9578988928c386109ca565b8c80fd5b503d610bad565b8e8d51903d90823e3d90fd5b9093508b81813d8311610c08575b610bf881836121af565b810103126105b75751923861094f565b503d610bee565b61093d949396509081610c3692903d10610c3f575b610c2e81836121af565b8101906122ac565b9491923861091d565b503d610c24565b8e513d87823e3d90fd5b93505092508a82813d8311610c7d575b610c6a81836121af565b810103126105b7578d928c92513861089d565b503d610c60565b8d513d86823e3d90fd5b610c9790612131565b610370578238610877565b8093508b8092503d8311610ccc575b610cbb81836121af565b810103126105b7578c915138610822565b503d610cb1565b8c513d85823e3d90fd5b8093508a8092503d8311610d07575b610cf681836121af565b810103126105b7578b915138610720565b503d610cec565b90508781813d8311610d34575b610d2581836121af565b810103126105b757513861042f565b503d610d1b565b6025608492602087519362461bcd60e51b85528401528201527f54726963727970746f4c5053747261746567793a20616d6f756e74206e6f74206044820152641d985b1a5960da1b6064820152fd5b919050346103705760208060031936011261036c57610da761211b565b9160018060a01b0393610dbe858754163314612210565b8480600354169416938683519686837fe36d79dcda63d47bee388b7dde8bba0b326a1b459889de48dc94dcf3504eda4b8480a37f00000000000000000000000000000000000000000000000000000000000000001663095ea7b360e01b9283895284890152816024890152858860448185855af1978815610582578798610ec0575b509160449186949386519889958694855284015260001960248401525af1908115610eb75750610e83575b50506001600160601b0360a01b600354161760035580f35b81813d8311610eb0575b610e9781836121af565b8101031261037057610ea89061229f565b503880610e6b565b503d610e8d565b513d86823e3d90fd5b91965092918582813d8311610f00575b610eda81836121af565b81010312610efc5787968694610ef160449461229f565b509193945091610e40565b8680fd5b503d610ed0565b5050346101a657816003193601126101a657517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b6121ed565b5050346101a657816003193601126101a65760015490516001600160a01b039091168152602090f35b5050346101a657816003193601126101a657517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b9190503461037057826003193601126103705782546001600160a01b039390610fe99085163314612210565b808251610ff581612193565b52837f00000000000000000000000000000000000000000000000000000000000000001692825190633313458360e01b8252308183015260209560249287818581888b5af19081156113e85785916115b8575b5061110a575b5083516370a0823160e01b815230828201529486868481845afa9586156111005784966110d1575b50803b1561036c5760448492838893600189519788968795631c683a1b60e11b87528601528401525af180156110c7576110b3575b505051908152f35b6110bd8291612131565b61035857806110ab565b83513d84823e3d90fd5b9095508681813d83116110f9575b6110e981836121af565b810103126105b757519438611076565b503d6110df565b85513d86823e3d90fd5b84516370a0823160e01b8082523084830152917f000000000000000000000000000000000000000000000000000000000000000081169189818781865afa90811561146057879161158b575b50817f000000000000000000000000000000000000000000000000000000000000000016803b1561158757878091888c8c5194859384926335313c2160e11b84528c8401525af180156114d257908891611573575b505087519084825230868301528a828881875afa9182156114d2578892611544575b508082116111df575b5050505061104e565b6111e89161268b565b92816003541693611236837f0000000000000000000000000000000000000000000000000000000000000000169485928b5180938192631fd177af60e11b83526101409687958d85016123a1565b0381895afa91821561151d578992611527575b50508851630b7ecdc960e31b8152948b8680611267858b8301612444565b0381845afa95861561151d5789966114ee575b506032860295808704603214811517156114dc57916101c4888b8d946109806112a997612710809d049061268b565b610144840152306101648401526101a0610184840152816101a48401525af180156114d2578b92918a916114a3575b5087905180958193825230898301525afa91821561149957869261146a575b50835487516305c43acd60e01b815280860184905291169289828781875afa918215611460578792611431575b50603282028281046032148315171561141f578a939260449261134892049061268b565b91878951958694859363b529fe1d60e01b855289850152898401525af19081156111005784916113f2575b50853b1561036c5784516383df674760e01b8152818382015230848201528460448201528481606481838b5af180156113e857889186916113d1575b50506000805160206129de833981519152918651908152a138808080806111d6565b6113dc919250612131565b61036c578684386113af565b86513d87823e3d90fd5b90508681813d8311611418575b61140981836121af565b810103126105b7575138611373565b503d6113ff565b634e487b7160e01b8852601186528688fd5b9091508981813d8311611459575b61144981836121af565b810103126105b757519038611324565b503d61143f565b88513d89823e3d90fd5b9091508881813d8311611492575b61148281836121af565b810103126105b7575190386112f7565b503d611478565b87513d88823e3d90fd5b90809293503d83116114cb575b6114ba81836121af565b81010312610efc57899088386112d8565b503d6114b0565b89513d8a823e3d90fd5b634e487b7160e01b8a5260118852888afd5b9095508b81813d8311611516575b61150681836121af565b810103126105b75751943861127a565b503d6114fc565b8a513d8b823e3d90fd5b61153d9250803d10610c3f57610c2e81836121af565b3880611249565b9091508a81813d831161156c575b61155c81836121af565b810103126105b7575190386111cd565b503d611552565b61157c90612131565b610efc5786386111ab565b8780fd5b90508981813d83116115b1575b6115a281836121af565b810103126105b7575138611156565b503d611598565b90508781813d83116115de575b6115cf81836121af565b810103126105b7575138611048565b503d6115c5565b5050346101a657816003193601126101a657517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b8390346101a65760203660031901126101a65761168290611674337f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316146127ed565b61167c612989565b35612828565b600160025580f35b5050346101a657816003193601126101a657905490516001600160a01b039091168152602090f35b5050346101a657816003193601126101a6576020906005549051908152f35b5050346101a657816003193601126101a6578051611736916116f282612177565b602882527f43757276652d54726963727970746f20737472617465677920666f7220547269602083015267063727970746f4c560c41b8183015251918291826120d2565b0390f35b9050346103705782600319360112610370575490516001600160a01b03909116815260209150f35b5050346101a657816003193601126101a657517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b919050346103705782600319360112610370576001546001600160a01b039290918383169190338390036118165750508084549384167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08680a36001600160a01b03199283161783551660015580f35b906020606492519162461bcd60e51b8352820152602060248201527f4f776e61626c653a2063616c6c657220213d2070656e64696e67206f776e65726044820152fd5b905034610370576020366003190112610370577f3b779194d2cc7daf4de546bec10f6f325d421b2e202c11aa24e86e39845860cc9035916118a460018060a01b038554163314612210565b6005548151908152836020820152a160055580f35b5050346101a657816003193601126101a6576020906118d6612464565b9051908152f35b5050346101a657816003193601126101a6576020905160018152f35b5050346101a657816003193601126101a65760035490516001600160a01b039091168152602090f35b905034610370576020908160031936011261036c57803567ffffffffffffffff811161057e573660238201121561057e57848183013591611962836121d1565b9261196f875194856121af565b8084526024933685838501011161036c578185889401848301370101528351633313458360e01b815230818401526001600160a01b03927f0000000000000000000000000000000000000000000000000000000000000000841691858185818b875af1908115611eeb578891611ebe575b506119e9578680f35b85516370a0823160e01b8082523083830152947f000000000000000000000000000000000000000000000000000000000000000081169187818781865afa908115611d61578a91611e91575b5089827f000000000000000000000000000000000000000000000000000000000000000016803b156101a6578190888c51809481936335313c2160e11b83528b8b8401525af18015611e7457611e7e575b50885190878252308583015288828881875afa918215611e74578b92611e45575b50808211611ab8575b505050508680f35b611ac19161268b565b95816003541696611b0f837f0000000000000000000000000000000000000000000000000000000000000000169485928c5180938192631fd177af60e11b83526101409687958c85016123a1565b03818c5afa918215611e1e578c92611e28575b50508951630b7ecdc960e31b815297898980611b40858a8301612444565b0381845afa988915611e1e578c99611def575b506032890298808a0460321481151715611ddd578c93928c928392612710809d04611b7d9161268b565b835163efa84c6d60e01b8152968793849290611b9c908d8501906123d8565b6101448301523061016483015261018482016101a09052806101a48301525a926101c493f1928315611dd3578a93611da4575b5087905180958193825230888301525afa918215611d9a578992611d6b575b50825488516305c43acd60e01b8152808501849052911695878287818a5afa918215611d61578a92611d32575b506032820282810460321483151715611d2057611c4389938c9897969593604493049061268b565b91878b51998a94859363b529fe1d60e01b855288850152898401525af1948515611d16578495611ce3575b50813b1561036c57606485918580948a5196879586946383df674760e01b865285015230908401528160448401525af1801561058257611ccf575b50506000805160206129de8339815191529251908152a138808080808080808080611ab0565b611cd890612131565b61036c578338611ca9565b86809296508195503d8311611d0f575b611cfd81836121af565b810103126105b7578692519338611c6e565b503d611cf3565b87513d86823e3d90fd5b634e487b7160e01b8b5260118552868bfd5b9091508781813d8311611d5a575b611d4a81836121af565b810103126105b757519038611c1b565b503d611d40565b89513d8c823e3d90fd5b9091508681813d8311611d93575b611d8381836121af565b810103126105b757519038611bee565b503d611d79565b88513d8b823e3d90fd5b90809293503d8311611dcc575b611dbb81836121af565b810103126107965787908938611bcf565b503d611db1565b81513d8e823e3d90fd5b634e487b7160e01b8d5260118752888dfd5b9098508981813d8311611e17575b611e0781836121af565b810103126105b757519738611b53565b503d611dfd565b8b513d8e823e3d90fd5b611e3e9250803d10610c3f57610c2e81836121af565b3880611b22565b9091508881813d8311611e6d575b611e5d81836121af565b810103126105b757519038611aa7565b503d611e53565b8a513d8d823e3d90fd5b611e8a909a919a612131565b9838611a86565b90508781813d8311611eb7575b611ea881836121af565b81010312610796575138611a35565b503d611e9e565b90508581813d8311611ee4575b611ed581836121af565b810103126115875751386119e0565b503d611ecb565b87513d8a823e3d90fd5b5050346101a657816003193601126101a65751908152602090f35b9190503461037057606036600319011261037057611f2c61211b565b9160243591821515830361057e5760443592831515840361201d5760018060a01b03948591611f5f838954163314612210565b15612001571692831590811591611ff9575b5015611fbe5750508083549283167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08580a36001600160601b0360a01b8092161782556001541660015580f35b906020606492519162461bcd60e51b835282015260156024820152744f776e61626c653a207a65726f206164647265737360581b6044820152fd5b905038611f71565b9350505050166001600160601b0360a01b600154161760015580f35b8580fd5b5050346101a657816003193601126101a657517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b8385346103585780600319360112610358578183019083821067ffffffffffffffff8311176120bf5750611736935081526012825271043757276652d54726963727970746f2d4c560741b602083015251918291826120d2565b634e487b7160e01b815260418552602490fd5b6020808252825181830181905290939260005b82811061210757505060409293506000838284010152601f8019910116010190565b8181018601518482016040015285016120e5565b600435906001600160a01b03821682036105b757565b67ffffffffffffffff811161214557604052565b634e487b7160e01b600052604160045260246000fd5b6080810190811067ffffffffffffffff82111761214557604052565b6060810190811067ffffffffffffffff82111761214557604052565b6020810190811067ffffffffffffffff82111761214557604052565b90601f8019910116810190811067ffffffffffffffff82111761214557604052565b67ffffffffffffffff811161214557601f01601f191660200190565b346105b75760003660031901126105b75760206122086126bb565b604051908152f35b1561221757565b606460405162461bcd60e51b815260206004820152602060248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152fd5b3d15612286573d9061226c826121d1565b9161227a60405193846121af565b82523d6000602084013e565b606090565b51906001600160a01b03821682036105b757565b519081151582036105b757565b80910361014081126105b757604080519267ffffffffffffffff92606085018481118682101761214557808452608082126105b7576122ea8161215b565b6122f38361228b565b81526020830151608087015261230a84840161228b565b60a0870152606083015160c087015285526080607f198201126105b757829081516123348161215b565b6080840151815260a0840151602082015260c08401518382015260e08401516060820152602087015260ff1901126105b75781519283830190811184821017612145576123969161012091845261238e610100820161229f565b85520161229f565b602083015282015290565b6001600160a01b0391821681529116602082015260408101919091526000606082018190526080820181905260a082015260c00190565b60206040610120926060815160018060a01b03808251168852858201518689015284820151168488015201516060860152606083820151805160808801528481015160a08801528381015160c0880152015160e086015201518051151561010085015201511515910152565b61245181610180936123d8565b6000610160806101408401528201520190565b60409081519160209283810193633313458360e01b85523060248301526024825261248e82612177565b60008080935160018060a01b0397887f0000000000000000000000000000000000000000000000000000000000000000165afa946124ca61225b565b9583968491612674575b50806124e2575b5050505050565b81612556929394959697506003541690865190631fd177af60e11b82528180610140958693887f000000000000000000000000000000000000000000000000000000000000000016897f000000000000000000000000000000000000000000000000000000000000000016600485016123a1565b0381855afa9283156114995791859493918796936125909893612655575b505087518080988194630b7ecdc960e31b835260048301612444565b03915afa93841561264b57839461261c575b508190600454169360248651809681936305c43acd60e01b835260048301525afa938415612611575081936125e0575b5050509038808080806124db565b9091809350813d831161260a575b6125f881836121af565b810103126103585750513880806125d2565b503d6125ee565b51913d9150823e3d90fd5b9093508181813d8311612644575b61263481836121af565b81010312610370575192816125a2565b503d61262a565b85513d85823e3d90fd5b61266c929350803d10610c3f57610c2e81836121af565b903880612574565b9050828180518101031261036c57820151386124d4565b9190820391821161269857565b634e487b7160e01b600052601160045260246000fd5b9190820180921161269857565b6040516370a0823160e01b8082523060048301526020916001600160a01b039083816024817f000000000000000000000000000000000000000000000000000000000000000086165afa9283156127af5784916000946127bb575b5060246040518094819382523060048301527f0000000000000000000000000000000000000000000000000000000000000000165afa9081156127af5760009161277b575b5061277892506127739061276d612464565b926126ae565b6126ae565b90565b919282813d83116127a8575b61279181836121af565b81010312610358575051612778919061277361275b565b503d612787565b6040513d6000823e3d90fd5b9182819592953d83116127e6575b6127d381836121af565b8101031261035857508390519238612716565b503d6127c9565b156127f457565b60405162461bcd60e51b815260206004820152600c60248201526b09cdee840b2d2cad8c884def60a31b6044820152606490fd5b604080516370a0823160e01b81523060048201529092916020916001600160a01b0383826024817f000000000000000000000000000000000000000000000000000000000000000085165afa91821561297e5760009261294f575b5060055482116128b95750507f9447d5abbf0af693ca2937bf8b1ec6a8c9dc4fbac672911c633fb31c78e5e3ca929351908152a1565b9091507f00000000000000000000000000000000000000000000000000000000000000001693843b156105b7576000809560648351809881936383df674760e01b83528760048401523060248401528160448401525af1948515612944576000805160206129de8339815191529495612935575b5051908152a1565b61293e90612131565b3861292d565b50513d6000823e3d90fd5b90918482813d8311612977575b61296681836121af565b810103126103585750519038612883565b503d61295c565b86513d6000823e3d90fd5b60028054146129985760028055565b60405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606490fdfede22222b0ac0d69f2a19cd7b1443a29a5f37346640fff3506bdd6a9a9497f9d3a2646970667358221220ba01a31386b87ca2ad3feeedde80b27889022f4e19fba438b40ee61097938c3864736f6c63430008120033";

type TricryptoStrategyConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TricryptoStrategyConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TricryptoStrategy__factory extends ContractFactory {
  constructor(...args: TricryptoStrategyConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _yieldBox: PromiseOrValue<string>,
    _token: PromiseOrValue<string>,
    _lpGauge: PromiseOrValue<string>,
    _lpGetter: PromiseOrValue<string>,
    _minter: PromiseOrValue<string>,
    _multiSwapper: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TricryptoStrategy> {
    return super.deploy(
      _yieldBox,
      _token,
      _lpGauge,
      _lpGetter,
      _minter,
      _multiSwapper,
      overrides || {}
    ) as Promise<TricryptoStrategy>;
  }
  override getDeployTransaction(
    _yieldBox: PromiseOrValue<string>,
    _token: PromiseOrValue<string>,
    _lpGauge: PromiseOrValue<string>,
    _lpGetter: PromiseOrValue<string>,
    _minter: PromiseOrValue<string>,
    _multiSwapper: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _yieldBox,
      _token,
      _lpGauge,
      _lpGetter,
      _minter,
      _multiSwapper,
      overrides || {}
    );
  }
  override attach(address: string): TricryptoStrategy {
    return super.attach(address) as TricryptoStrategy;
  }
  override connect(signer: Signer): TricryptoStrategy__factory {
    return super.connect(signer) as TricryptoStrategy__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TricryptoStrategyInterface {
    return new utils.Interface(_abi) as TricryptoStrategyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TricryptoStrategy {
    return new Contract(address, _abi, signerOrProvider) as TricryptoStrategy;
  }
}
