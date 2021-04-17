import './index.css'
import { Row, Col } from 'antd';
import child1 from '../../image/decentralized/child1.png'
import child2 from '../../image/decentralized/child2.png'
import child3 from '../../image/decentralized/child3.png'
import child4 from '../../image/decentralized/child4.png'

function Decentralized() {
  return(
    <div className="decentralized">
      <div className="decentralizedText"  data-aos="fade-up">
        <div className="decentralizedText-title">
          Decentralized
        </div>
        <div className="decentralizedLine"/>
        <div className="decentralizedText-text">
          Elastic blockchains are highly
          performant, decentralized, configurable,
          Ethereum compatible, and use the latest
          breakthroughs in modern cryptography
          to provide provable security.
        </div>
      </div>
      <div className="decentralized-content" data-aos="fade-up">
        <Row>
          <Col xxl={12} xl={12} lg={24}>
            <div className="child">
              <div className="childImg">
                <img src={child1}/>
              </div>
              <div>High scalability</div>
              <div>
              Scalability is another key feature of Prism; there are two types of scalabilities. 
              Prism provides a more robust infrastructure for DeFi applications through vertical and horizontal scalability.
              </div>
            </div>
          </Col>
          <Col xxl={12} xl={12} lg={24}>
            <div className="child">
              <div className="childImg">
                <img src={child2}/>
              </div>
              <div>Rich functions</div>
              <div>
              Prism is not only fully compatible with Ethereum, but also provides Prism Bridge to make Prism as a sidechain of other public chains. At the same time, Prism also supports the IBC protocol, which can easily communicate with the Cosmos ecosystem.
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xxl={12} xl={12} lg={24}>
            <div className="child">
              <div className="childImg">
                <img src={child3}/>
              </div>
              <div>High performance</div>
              <div>
              The Prism sidechain is a Layer 2 solution; it operates independently and has a greater capacity and higher transaction rates compared to the main Ethernet network. 
              </div>
            </div>
          </Col>
          <Col xxl={12} xl={12} lg={24}>
            <div className="child">
              <div className="childImg">
                <img src={child4}/>
              </div>
              <div>Cross-chain</div>
              <div>
              Prism will also develop a cross-chain protocol that is fully compatible with Ethereum, facilitating the flow of asserts among chains. This allows Prism Network to operate not only as a Polkadot parachain, but also as a side chain of any public chain such as Ethereum, BSC, HECO, all sharing a powerful ecology.
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Decentralized

