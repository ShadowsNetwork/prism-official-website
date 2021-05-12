import './index.css'
import AboutPrism from "../aboutPrism";


function Top() {
  return(
    <div className="top">
      <div className="topContent">
        <div className="topText" data-aos="fade-right">
          <span className="topText-title">Web3.0 Scalable </span>
          <span className="topText-title">DeFi Computer</span>
          <span className="topText-text">In the future, anyone can develop innovative DeFi
          applications on Prism Network to support the Web3.0
          blockchain economy</span>
          <a href={"https://github.com/ShadowsNetwork/whitepaper/blob/main/ShadowsWhitepaperV2.0General.pdf"} target={"_blank"}><button className="topButton"></button></a>
        </div>
      </div>
      <div className="top-foot"></div>
      <AboutPrism/>
    </div>
  )
}

export default Top
