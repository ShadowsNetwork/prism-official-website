import './index.css'
import tabContent from '../../image/workflows/tabContent.png'
import marked from 'marked'
import hljs from "highlight.js";
import 'highlight.js/styles/monokai-sublime.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";

const MARKDOWN_TEXT = `
\`\`\`javascript
let HDWalletProvider =
  require("truffle-hdwallet-provider");
let privateKey = "[YOUR_PRIVATE_KEY]";
let endpoint  = "[YOUR_PRISM_CHAIN_ENDPOINT]"; 

module.exports = {
  networks: {
      development: {
          host: "localhost",
          port: 7545,
          network_id: "*"
      },
      prism: {
          provider: function() {
              return new HDWalletProvider(
                  process.env.MNEMONIC,
                  endpoint
              )
          },
          network_id: 2417
      }
  },
};
\`\`\`
`;

const HARDHAT_TEXT = `
\`\`\`javascript
let HDWalletProvider =
  require("truffle-hdwallet-provider");
let privateKey = "[YOUR_PRIVATE_KEY]";
let endpoint  = "[YOUR_PRISM_CHAIN_ENDPOINT]"; 

module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.6.12",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200
          },
        },
      },
    ]
  },
  networks: {
    rinkeby: {
      url: "https://rinkeby.infura.io/v3/$\{infuraKey\}",
      accounts: {mnemonic: mnemonic},
      loggingEnabled: true
    },
    prism: {
      url: endpoint,
      accounts: {mnemonic: mnemonic},
      loggingEnabled: true,
      gasPrice: parseInt(we3utils.toWei("20", "gwei")),
    }
  },
  namedAccounts: {
    deployer: {
        default: 0, // here this will by default take the first account as deployer
        shadowsOwner: 1
    },
    feeCollector:{
        default: 1, // here this will by default take the second account as feeCollector (so in the test this will be a different account than the deployer)
    }
  }
};
\`\`\`
`;

const WEB3JS_TEXT = `
\`\`\`javascript
let HDWalletProvider =
  require("truffle-hdwallet-provider");
let privateKey = "[YOUR_PRIVATE_KEY]";
let wsEndpoint  = "[YOUR_PRISM_CHAIN_WS_ENDPOINT]"; 

var Web3 = require('web3');
// use the given Provider, e.g in Mist, or instantiate a new websocket provider
var web3 = new Web3(Web3.givenProvider || wsEndpoint);

var contract = new web3.eth.Contract(abi, address);

var batch = new web3.BatchRequest();
batch.add(web3.eth.getBalance.request('0x0000000000000000000000000000000000000000', 'latest', callback));
batch.add(contract.methods.balance(address).call.request({from: '0x0000000000000000000000000000000000000000'}, callback2));
batch.execute();
\`\`\`
`;

const WEB3PY_TEXT = `
\`\`\`python
from web3 import Web3
w3 = Web3(Web3.HTTPProvider('YOUR_PRISM_CHAIN_WS_ENDPOINT'))

ExampleContract = w3.eth.contract(abi=abi, bytecode=bytecode)
tx_hash = ExampleContract.constructor().transact()
tx_receipt = w3.eth.wait_for_transaction_receipt(tx_hash)

deployed_contract.functions.getMyValue().call()
deployed_contract.caller().getMyValue()

new_filter = web3.eth.filter('latest')
new_filter.get_all_entries()
\`\`\`
`;

// marked.setOptions({
//   langPrefix: "hljs language-",
//   highlight: function (code) {
//     return hljs.highlightAuto(code, ["html", "javascript"]).value;
//   }
// });

function Workflows() {

  return(
    <div className="workflows">
      <div className="workflowsImg" data-aos="fade-right">
        <Tabs>
          <TabList>
            <Tab><div className="tabClick">TRUFFLE</div></Tab>
            <Tab><div className="tabUnclick">HARDHAT</div></Tab>
            <Tab><div className="tabUnclick">WEB3.JS</div></Tab>
            <Tab><div className="tabUnclick">WEB3.PY</div></Tab>
          </TabList>

          <TabPanel>
            <div className="tabBox">
              <img className="tabContent" src={tabContent}/>
              <div className="tabContentText">
                <div className="tabContentText-text" dangerouslySetInnerHTML={{ __html: marked(MARKDOWN_TEXT) }} />
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="tabBox">
              <img className="tabContent" src={tabContent}/>
              <div className="tabContentText">
                <div className="tabContentText-text" dangerouslySetInnerHTML={{ __html: marked(HARDHAT_TEXT) }} />
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="tabBox">
              <img className="tabContent" src={tabContent}/>
              <div className="tabContentText">
                <div className="tabContentText-text" dangerouslySetInnerHTML={{ __html: marked(WEB3JS_TEXT) }} />
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="tabBox">
              <img className="tabContent" src={tabContent}/>
              <div className="tabContentText">
                <div className="tabContentText-text" dangerouslySetInnerHTML={{ __html: marked(WEB3PY_TEXT) }} />
              </div>
            </div>
          </TabPanel>
        </Tabs>
        {/*<div className="tab">*/}
        {/*  <div className="tabClick">TRUFFLE</div>*/}
        {/*  <div className="tabUnclick">WEB3.JS</div>*/}
        {/*  <div className="tabUnclick">WEB3.PY</div>*/}
        {/*  <div className="tabUnclick">REMIX</div>*/}
        {/*</div>*/}
        <a href="https://github.com/ShadowsNetwork/whitepaper/blob/main/ShadowsWhitepaperV2.0General.pdf" target={"_blank"}><button className="workflowsButton"></button></a>
      </div>
      <div className="workflowsText" data-aos="fade-up">
        <div className="workflows-title">Native to your</div>
        <div className="workflows-title">existing</div>
        <div className="workflows-title">workflows</div>
        <div className="workflowsText-text">
          <div>
            Prism is fully compatible with Ethereum. Prism EVM
            RPC is a protocol layer that supports all tools of
            the Ethernet ecosystem, such as MetaMask, Web3js,
            Etherjs, Truffle, Hardhat, etc. One can deploy DApps
            and smart contracts immediately without additional coding.
          </div>
          {/*<div>*/}
          {/*Prism EVM RPC is a protocol layer that supports all tools of the Ethernet ecosystem, such as MetaMask, Web3js, Etherjs, Truffle, Hardhat, etc. Thus deploying existing Dapps on Prism Network is very easy. */}
          {/*</div>*/}
        </div>
      </div>
      <div className="workflows-foot"></div>
    </div>
  )
}

export default Workflows
