import './index.css'
import tabContent from '../../image/workflows/tabContent.png'
import marked from "marked";
import hljs from "highlight.js";
const MARKDOWN_TEXT = `
\`\`\`javascript
let HDWalletProvider =
  require("truffle-hdwallet-provider");
let privateKey = "[YOUR_PRIVATE_KEY]";
et skale = "[YOUR_SKALE_CHAIN_ENDPOINT]"; 

module.exports = {
  networks: { 
    skale: {
      provider: () => new 
        HDWalletProvider(privateKey, skale),
      gasPrice: 0,
\`\`\`
`;

marked.setOptions({
  langPrefix: "hljs language-",
  highlight: function (code) {
    return hljs.highlightAuto(code, ["html", "javascript"]).value;
  }
});

function Workflows() {
  return(
    <div className="workflows">
      <div className="workflowsImg" data-aos="fade-right">
        <div className="tab">
          <div className="tabClick">TRUFFLE</div>
          <div className="tabUnclick">WEB3.JS</div>
          <div className="tabUnclick">WEB3.PY</div>
          <div className="tabUnclick">REMIX</div>
        </div>
        <div className="tabBox">
          <img className="tabContent" src={tabContent}/>
          <div className="tabContentText">
            <div className="tabContentText-text" dangerouslySetInnerHTML={{ __html: marked(MARKDOWN_TEXT) }} />
          </div>
        </div>
      </div>
      <div className="workflowsText" data-aos="fade-left">
        <div className="workflows-title">Native to your existing</div>
        <div className="workflows-title">workflows</div>
        <div className="line"/>
        <div className="workflowsText-text">
          <div>
            SKALE Network eliminates unnecessary complexity
            so that you can speed up your dApps and smart contracts
            in no time with essentially no additional coding.
          </div>
          <div>
            Use your existing deployment script (for example — truffle,
            as in this code sample) and just change 2 lines of code to
            deploy your solidity smart contracts to a configurable decentralized
            elastic sidechain.
          </div>
        </div>
      </div>
    </div>
  )
}

export default Workflows
