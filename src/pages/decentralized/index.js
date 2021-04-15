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
                The standard for security in distributed systems;
                BFT guarantees that the network can reach consensus even
                when up to one third of participants are malicious.
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
                Following the same model as the Internet, this
                protocol recognizes latencies of nodes and the network, allowing
                messages to take an indefinite period of time to deliver.
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
              <div>Low barriers</div>
              <div>
                The standard for security in distributed systems; BFT guarantees that
                the network can reach consensus even when up to one third of
                participants are malicious.
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
                Following the same model as the Internet, this
                protocol recognizes latencies of nodes and the network, allowing
                messages to take an indefinite period of time to deliver.
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Decentralized

