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
          The Prism Core
        </div>
        <div className="decentralizedLine"/>
        <div className="decentralizedText-text">
          Prism is an ideal infrastructure to deploy DeFi
          applications upon.
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
                Prism provides a more flexible
                infrastructure for DeFi applications
                through its vertical and horizontal
                scalability.
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
                Prism can easily operate as a
                sidechain of any Ethereumcompatible public chain and
                communicate with the Cosmos
                ecosystem. This is achieved by Prism
                EVM, Prism Bridge and the IBC
                protocol.
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
                Prism can perform 1000+ TPS. DeFi
                applications deployed on Prism enjoy
                higher transaction rates at lower gas
                cost.
              </div>
            </div>
          </Col>
          <Col xxl={12} xl={12} lg={24}>
            <div className="child">
              <div className="childImg">
                <img src={child4}/>
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
    </div>
  )
}

export default Decentralized

