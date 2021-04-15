import './index.css'
import {RightCircleOutlined} from '@ant-design/icons'
import crossChain from "../../image/crossChain/crossChainImg.png";

function CrossChain() {
  return(
    <div className="crossChain">
      <div className="crossChainText" data-aos="fade-right">
        <div className="crossChainText-title">
          A synthetic asset protocol
        </div>
        <div className="crossChainText-title">
          that supports cross-chain
        </div>
        <div className="crossChainLine"/>
        <div className="crossChainText-text1">
          Shadows is a hub for issuing, trading, lending and borrowing derivative assets.
        </div>
        <div className="crossChainText-text2">
          Shadows is dedicated to bringing traditional financial assets onto blockchain.
        </div>
        <div className="crossChainBtn">
          <span>Enter Shadows </span>
          <RightCircleOutlined />
        </div>
      </div>
      <img className="crossChainImg" src={crossChain} data-aos="fade-left"/>
    </div>
  )
}

export default CrossChain
