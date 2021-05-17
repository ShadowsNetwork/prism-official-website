import './index.css'
import {Row, Col} from 'antd';
import 'antd/dist/antd.css';
import Economy from "../economy";
import EconomyMore from "../ecomomyMore";
import Fleet from "../fleet";
import highScalability from '../../image/decentralized/highScalability.png';
import richFunctions from '../../image/decentralized/richFunctions.png';
import lowBarriers from '../../image/decentralized/lowBarriers.png';
import highSecurity from '../../image/decentralized/highSecurity.png';
import blockchain from '../../image/economyMore/blockchain.png'
import economy from '../../image/economy/economy.png'

function Decentralized() {
  return(
    <div className="decentralized">
      <img src={blockchain} className="blockchainBac"/>
      <img src={economy} className="economy-content-img"/>
      <div className="economyMoreBac">
        <div className="decentralizedText"  data-aos="fade-up">
          <div className="decentralizedText-title">
          Decentralized
          </div>
          <div className="decentralizedText-text">
          Elastic blockchains are highly performant, decentralized, configurable,
          Ethereum compatible, and use the latest breakthroughs in modern cryptography
          to provide provable security.
          </div>
          <a href="https://github.com/ShadowsNetwork/whitepaper/blob/main/DOWSTokenomics.pdf" target={"_blank"}>
            <button className="decentralizedButton"></button>
         </a>
        </div>
        <div className="decentralized-content" data-aos="fade-up">
          <Row>
            <Col xxl={6} xl={6} lg={12}>
              <div className="child">
                <div className="childImg">
                  <img src={highScalability}/>
                </div>
                <div>High scalability</div>
                <div>
                  Prism provides a more flexible
                  infrastructure for DeFi applications
                  through its vertical and horizontal
                  scalability.
                </div>
              </div>
            </Col>
            <Col xxl={6} xl={6} lg={12}>
              <div className="child">
                <div className="childImg">
                  <img src={richFunctions}/>
                </div>
                <div>Rich functions</div>
                <div>
                  Prism can easily operate as a
                  sidechain of any Ethereum compatible public chain and
                  communicate with the Cosmos
                  ecosystem. This is achieved by Prism
                  EVM, Prism Bridge and the IBC
                  protocol.
                </div>
              </div>
            </Col>
            <Col xxl={6} xl={6} lg={12}>
              <div className="child">
                <div className="childImg">
                  <img src={lowBarriers}/>
                </div>
                <div>Low Barriers</div>
                <div>
                  Prism can perform 1000+ TPS. DeFi
                  applications deployed on Prism enjoy
                  higher transaction rates at lower gas
                  cost.
                </div>
              </div>
            </Col>
            <Col xxl={6} xl={6} lg={12}>
              <div className="child">
                <div className="childImg">
                  <img src={highSecurity}/>
                </div>
                <div>High security</div>
                <div>
                  Prism is built on Substate, and the
                  inherent security of the Rust
                  language eliminates runtime
                  exceptions.
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <Economy/>
        <EconomyMore/>
        <Fleet/>
      </div>
    </div>
  )
}

export default Decentralized

