import './index.css'
import topImg from '../../image/top/topImg.png'

function Top() {
  return(
    <div className="top">
      <div className="topContent">
        <div className="topText" data-aos="fade-right">
          <span className="topText-title">Scalable Web3.0 defi</span>
          <span className="topText-title">infrastructure</span>
          <span className="topText-text">In the future, anyone can develop innovative DeFi applications on Prism Network to support the Web3.0 blockchain economy</span>
          <button className="topButton">Whitepaper</button>
        </div>
          <img className="topImg" src={topImg}/>
      </div>
      <div className="top-foot">Powered By Shadows</div>
    </div>
  )
}

export default Top
