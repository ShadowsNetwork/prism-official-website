import './index.css'
import prismImg from '../../image/prism/prismImg.png'

function AboutPrism() {
  return(
    <div className="aboutPrism">
      <div className="prismText" data-aos="fade-up">
        <div className="prismText-title">
          What is Prism
        </div>
        <div className="prismText-text">
          Prism Network is based on Substrate and has
          high scalability and cross-chain capabilities.
          It is also compatible with other public chain ecosystems
          such as Ethereum and BSC. It is highly efficient,
          convenient and secure.
        </div>
        <div className="prismText-text">
          Developers will be able to create and deploy
          DeFi applications on Prism Network simply, quickly
          and at low cost. Prism Network's cross-chain
          capabilities can help DeFi applications gain better
          liquidity and more ecological users.
        </div>
      </div>
        <img className="prismImg" src={prismImg} alt="加载失败" data-aos="fade-up"/>
    </div>
  )
}

export default AboutPrism
