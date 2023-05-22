/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  TricryptoLiquidityPoolMock,
  TricryptoLiquidityPoolMockInterface,
} from "../../../../contracts/curve/mocks/TricryptoLiquidityPoolMock";

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
  "0x6080604090808252346101e05780612470803803809161001f82856101e5565b83396020928391810103126101e057516001600160a01b0390818116908190036101e057600180546001600160a01b031990811690921790558351611ca3808201946001600160401b039490929091858711828810176101ca576107cd823960a08652600e60a08701526d496e707574546f6b656e4d6f636b60901b60c087015260e083870152600360e08701526249544d60e81b61010087015269021e19e0c9bab240000087870152601260608701523060808701526101208160009703019086f080156101c0571680928554161784558451636a53a25d60e11b81528181600481865afa9182156101c0578592610185575b5050610128575b83516105c490816102098239f35b803b1561018157908280926004865180968193631d0dc26760e01b83525af18015610177571561011a5782116101635750815238808061011a565b634e487b7160e01b81526041600452602490fd5b84513d84823e3d90fd5b8280fd5b90809250813d83116101b9575b61019c81836101e5565b810103126101b5575180151581036101b5573880610113565b8380fd5b503d610192565b86513d87823e3d90fd5b634e487b7160e01b600052604160045260246000fd5b600080fd5b601f909101601f19168101906001600160401b038211908210176101ca5760405256fe608060408181526004918236101561001657600080fd5b600092833560e01c9182633883e119146102f8575081633fc8cef3146102cf5781634515cef3146101a25781634fb08c5e14610184578163f1dc3cc914610091575063fc0c546a1461006757600080fd5b3461008d578160031936011261008d57905490516001600160a01b039091168152602090f35b5080fd5b90503461018057606036600319011261018057825482516323b872dd60e01b81523381840190815230602082810191909152933560408201819052936001600160a01b03939091839185169082908990829060600103925af18015610176579261014594926101409261013295610148575b50600154935163a9059cbb60e01b60208201523360248201526044810192909252909392169183906064820190565b03601f198101845283610328565b61037d565b80f35b6101689060203d811161016f575b6101608183610328565b810190610360565b5038610103565b503d610156565b84513d87823e3d90fd5b8280fd5b91905034610180578060031936011261018057602092505190358152f35b83833461008d57608036600319011261008d573660641161008d5760015481516323b872dd60e01b6020820152336024820152306044828101919091523560648201819052916001600160a01b03916102049183166101408260848101610132565b80845416803b156102cb578480916024865180948193637c928fe960e01b8352888c8401525af180156101765761029c575b508354835163a9059cbb60e01b81523396810196875260208088019490945294958592908390036040019183918891165af19081156102935750610278575080f35b61028f9060203d811161016f576101608183610328565b5080f35b513d84823e3d90fd5b67ffffffffffffffff81959295116102b8578352926020610236565b634e487b7160e01b825260418652602482fd5b8480fd5b50503461008d578160031936011261008d5760015490516001600160a01b039091168152602090f35b84903461008d57608036600319011261008d573660641161008d576064358015150361008d576020906044358152f35b90601f8019910116810190811067ffffffffffffffff82111761034a57604052565b634e487b7160e01b600052604160045260246000fd5b90816020910312610378575180151581036103785790565b600080fd5b6040805167ffffffffffffffff94936001600160a01b0390931692909182018581118382101761034a576040526020928383527f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564848401526000808386829551910182855af1903d156104ad573d9687116104995761041d9495966040519061040f88601f19601f8401160183610328565b81528093873d92013e6104ba565b8051908161042a57505050565b828061043a938301019101610360565b156104425750565b6084906040519062461bcd60e51b82526004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b6064820152fd5b634e487b7160e01b83526041600452602483fd5b915061041d939495506060915b9192901561051c57508151156104ce575090565b3b156104d75790565b60405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606490fd5b82519091501561052f5750805190602001fd5b6040519062461bcd60e51b82528160208060048301528251908160248401526000935b828510610575575050604492506000838284010152601f80199101168101030190fd5b848101820151868601604401529381019385935061055256fea2646970667358221220d55f91702134c779c9009097778402de28e1eb7e70ede853e0ecc288ed9a81d864736f6c63430008120033610140604081815234620006785762001ca380380380916200002282866200067d565b843982019060a083830312620006785782516001600160401b03811162000678578262000051918501620006a1565b602084015190926001600160401b038211620006785762000074918501620006a1565b818401519060608501519460ff8616809603620006785760800151906001600160a01b038216820362000678578351948585016001600160401b038111878210176200042757855260018652603160f81b6020870190815281519092906001600160401b0381116200042757600354600181811c911680156200066d575b60208210146200054d57601f811162000603575b50806020601f82116001146200057a576000916200056e575b508160011b916000199060031b1c1916176003555b8051906001600160401b038211620004275760045490600182811c9216801562000563575b60208310146200054d5781601f849311620004d8575b50602090601f831160011462000449576000926200043d575b50508160011b916000199060031b1c1916176004555b60208151910120945190208460e052610100958187524660a05284519060208201927f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f978885528784015260608301524660808301523060a083015260a0825260c082019282841060018060401b038511176200042757838752825190206080523060c052610120968752620002343362000718565b8060ff19600a541617600a55604d81116200033757600a0a6103e890808202918204036200033757600955600754336001600160a01b0390911603620003e45750506001600160a01b038116156200039157620002919062000718565b30156200034d57600254818101809111620003375760025530600052600060205281600020818154019055815190815260007fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60203093a38261ff0019600a541617600a555190611541928362000762843960805183611376015260a05183611442015260c05183611340015260e051836113c5015251826113eb015251816113a20152f35b634e487b7160e01b600052601160045260246000fd5b815162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606490fd5b825162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608490fd5b907f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657261010460649362461bcd60e51b8452602060c4820152602060e48201520152fd5b634e487b7160e01b600052604160045260246000fd5b01519050388062000188565b6004600090815293507f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b91905b601f1984168510620004bc576001945083601f19811610620004a2575b505050811b016004556200019e565b015160001960f88460031b161c1916905538808062000493565b8181015183556020948501946001909301929091019062000476565b60046000529091507f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b601f840160051c8101916020851062000542575b90601f859493920160051c01905b8181106200053257506200016f565b6000815584935060010162000523565b909150819062000515565b634e487b7160e01b600052602260045260246000fd5b91607f169162000159565b9050830151386200011f565b600360009081527fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b9250601f198416905b818110620005ea57509083600194939210620005d0575b5050811b0160035562000134565b85015160001960f88460031b161c191690553880620005c2565b9192602060018192868a015181550194019201620005ab565b60036000527fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b601f830160051c8101916020841062000662575b601f0160051c01905b81811062000655575062000106565b6000815560010162000646565b90915081906200063d565b90607f1690620000f2565b600080fd5b601f909101601f19168101906001600160401b038211908210176200042757604052565b919080601f8401121562000678578251906001600160401b038211620004275760405191602091620006dd601f8301601f19168401856200067d565b818452828287010111620006785760005b8181106200070457508260009394955001015290565b8581018301518482018401528201620006ee565b600780546001600160a01b039283166001600160a01b0319821681179092559091167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0600080a356fe60806040818152600480361015610021575b505050361561001f57600080fd5b005b600092833560e01c90816306fdde0314610d0557508063095ea7b314610cdb57806318160ddd14610cbc5780631d0dc26714610c8457806321442ec914610c4c57806322ae81af14610c2e57806323b872dd14610b645780632e1a7d4d146109c4578063313ce567146109a25780633644e5151461097e578063395093511461092e578063449a52f81461090157806370a08231146108ca578063715018a61461086d5780637c928fe9146107765780637ecebe001461073e5780638da5cb5b1461071557806395d89b4114610611578063996517cf146105f2578063a457c2d71461054b578063a9059cbb1461051a578063d0e30db0146104d6578063d4a744ba146104af578063d505accf146102c5578063d6b5a2db1461029b578063dd62ed3e14610252578063e01d55c51461022c5763f2fde38b03610011573461022857602036600319011261022857610177610e40565b90610180610e71565b6001600160a01b039182169283156101d6575050600754826bffffffffffffffffffffffff60a01b821617600755167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08380a380f35b906020608492519162461bcd60e51b8352820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152fd5b8280fd5b83823461024e57602036600319011261024e57610247610e71565b3560095580f35b5080fd5b50503461024e578060031936011261024e5780602092610270610e40565b610278610e5b565b6001600160a01b0391821683526001865283832091168252845220549051908152f35b83823461024e57602036600319011261024e576102c2906102ba610e71565b353330610f24565b80f35b5082903461024e5760e036600319011261024e576102e1610e40565b6102e9610e5b565b90604435926064356084359060ff821682036104ab578042116104685760018060a01b03908185169283895260056020528989208054906001820190558a519260208401917f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98352868d860152858a1660608601528a608086015260a085015260c084015260c0835260e083019267ffffffffffffffff9381811085821117610455578c525190209061039a61133d565b928b5192602084019461190160f01b8652602285015260428401526042835260808301908382109082111761044257916103ed93916103e5938d5260c4359260a435925190206112ae565b919091611194565b16036103ff57506102c2939450611092565b606490602087519162461bcd60e51b8352820152601e60248201527f45524332305065726d69743a20696e76616c6964207369676e617475726500006044820152fd5b634e487b7160e01b8b526041875260248bfd5b634e487b7160e01b8c526041885260248cfd5b875162461bcd60e51b8152602081850152601d60248201527f45524332305065726d69743a206578706972656420646561646c696e650000006044820152606490fd5b8680fd5b50503461024e578160031936011261024e5760209060ff600a5460081c1690519015158152f35b50508160031936011261024e576104ed3433611468565b513481527fe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c60203392a280f35b50503461024e578060031936011261024e5760209061054461053a610e40565b6024359033610f24565b5160018152f35b5082346105ef57826003193601126105ef57610565610e40565b918360243592338152600160205281812060018060a01b038616825260205220549082821061059e576020856105448585038733611092565b608490602086519162461bcd60e51b8352820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b6064820152fd5b80fd5b50503461024e578160031936011261024e576020906009549051908152f35b5091903461024e578160031936011261024e57805191809380549160019083821c9282851694851561070b575b60209586861081146106f8578589529081156106d4575060011461067c575b610678878761066e828c0383610ec9565b5191829182610df7565b0390f35b81529295507f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b5b8284106106c157505050826106789461066e9282010194388061065d565b80548685018801529286019281016106a3565b60ff19168887015250505050151560051b830101925061066e82610678388061065d565b634e487b7160e01b845260228352602484fd5b93607f169361063e565b50503461024e578160031936011261024e5760075490516001600160a01b039091168152602090f35b50503461024e57602036600319011261024e5760209181906001600160a01b03610766610e40565b1681526005845220549051908152f35b5082903461024e57602036600319011261024e5780359060ff600a5460081c166107b4575b506102c291923384526008602052429084205533611468565b600954821161082a573383526008602052838320546201518081018091116108175742101561079b57606490602085519162461bcd60e51b8352820152601460248201527345524332304d6f636b3a20746f6f206561726c7960601b6044820152fd5b634e487b7160e01b845260118252602484fd5b606490602085519162461bcd60e51b8352820152601960248201527f45524332304d6f636b3a20616d6f756e7420746f6f20626967000000000000006044820152fd5b83346105ef57806003193601126105ef57610886610e71565b600780546001600160a01b0319811690915581906001600160a01b03167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08280a380f35b50503461024e57602036600319011261024e5760209181906001600160a01b036108f2610e40565b16815280845220549051908152f35b50503461024e573660031901126105ef576102c261091d610e40565b610925610e71565b60243590611468565b50503461024e578060031936011261024e57610544602092610977610951610e40565b338352600186528483206001600160a01b03821684528652918490205460243590610f01565b9033611092565b50503461024e578160031936011261024e5760209061099b61133d565b9051908152f35b50503461024e578160031936011261024e5760209060ff600a54169051908152f35b503461022857602080600319360112610b6057813591338552848252828486205410610b37573315610aec573385528482528385205490838210610a9e57508290338652858352038385205581600254036002558383518381527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef833392a38380838015610a94575b8280929181923390f115610a88577f7fcf532c15f0a6db0bd6d0e038bea71d30d808c7d98cb3bf7268a95bf5081b659192519283523392a280f35b505051903d90823e3d90fd5b6108fc9150610a4d565b845162461bcd60e51b8152908101839052602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b6064820152608490fd5b60849184519162461bcd60e51b8352820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b6064820152fd5b60649184519162461bcd60e51b8352820152600560248201526422b93937b960d91b6044820152fd5b8380fd5b5082903461024e57606036600319011261024e57610b80610e40565b610b88610e5b565b91846044359460018060a01b038416815260016020528181203382526020522054906000198203610bc2575b602086610544878787610f24565b848210610beb5750918391610be06020969561054495033383611092565b919394819350610bb4565b606490602087519162461bcd60e51b8352820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152fd5b50503461024e578160031936011261024e5760209051620151808152f35b50503461024e57602036600319011261024e5760209181906001600160a01b03610c74610e40565b1681526008845220549051908152f35b83346105ef57806003193601126105ef57610c9d610e71565b600a5461ff0060ff8260081c161560081b169061ff00191617600a5580f35b50503461024e578160031936011261024e576020906002549051908152f35b50503461024e578060031936011261024e57602090610544610cfb610e40565b6024359033611092565b9291905034610b605783600319360112610b6057600354600181811c9186908281168015610ded575b6020958686108214610dda5750848852908115610db85750600114610d5f575b610678868661066e828b0383610ec9565b929550600383527fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b5b828410610da557505050826106789461066e928201019438610d4e565b8054868501880152928601928101610d88565b60ff191687860152505050151560051b830101925061066e8261067838610d4e565b634e487b7160e01b845260229052602483fd5b93607f1693610d2e565b6020808252825181830181905290939260005b828110610e2c57505060409293506000838284010152601f8019910116010190565b818101860151848201604001528501610e0a565b600435906001600160a01b0382168203610e5657565b600080fd5b602435906001600160a01b0382168203610e5657565b6007546001600160a01b03163303610e8557565b606460405162461bcd60e51b815260206004820152602060248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152fd5b90601f8019910116810190811067ffffffffffffffff821117610eeb57604052565b634e487b7160e01b600052604160045260246000fd5b91908201809211610f0e57565b634e487b7160e01b600052601160045260246000fd5b6001600160a01b0390811691821561103f5716918215610fee57600082815280602052604081205491808310610f9a57604082827fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef958760209652828652038282205586815220818154019055604051908152a3565b60405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b6064820152608490fd5b60405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608490fd5b60405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b6064820152608490fd5b6001600160a01b0390811691821561114357169182156110f35760207f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925918360005260018252604060002085600052825280604060002055604051908152a3565b60405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608490fd5b60405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608490fd5b600581101561129857806111a55750565b600181036111f25760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e617475726500000000000000006044820152606490fd5b6002810361123f5760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e677468006044820152606490fd5b60031461124857565b60405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b6064820152608490fd5b634e487b7160e01b600052602160045260246000fd5b9291907f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a083116113315791608094939160ff602094604051948552168484015260408301526060820152600093849182805260015afa156113245781516001600160a01b0381161561131e579190565b50600190565b50604051903d90823e3d90fd5b50505050600090600390565b307f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316148061143f575b15611398577f000000000000000000000000000000000000000000000000000000000000000090565b60405160208101907f000000000000000000000000000000000000000000000000000000000000000082527f000000000000000000000000000000000000000000000000000000000000000060408201527f000000000000000000000000000000000000000000000000000000000000000060608201524660808201523060a082015260a0815260c0810181811067ffffffffffffffff821117610eeb5760405251902090565b507f0000000000000000000000000000000000000000000000000000000000000000461461136f565b6001600160a01b03169081156114c6577fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef6020826114aa600094600254610f01565b60025584845283825260408420818154019055604051908152a3565b60405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606490fdfea26469706673582212200d3a38af08736115cc6fa6b01c9a85c37db75c5e74cc2280947f7c1e839b0e5964736f6c63430008120033";

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
