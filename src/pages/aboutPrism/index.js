import './index.css'
import prismImg from '../../image/prism/prismImg.png'

function AboutPrism() {
  return(
    <div className="aboutPrism">
      <div className="prismText" data-aos="fade-right">
        <div className="prismText-title">
          What is Prism
        </div>
        <div className="prismline"/>
        <div className="prismText-text">
          Prism Network is developed based on substrate and has high scalability
          and cross-chain capabilities. It is also compatible with other public chain
          ecosystems such as Ethereum BSC, and has the characteristics of high effi-ciency, convenience, and security.
        </div>
        <div className="prismText-text">
          Developers will be able to develop and deploy DeFi applications on Prism
          Network simply, quickly and at low cost. Prism Network's cross-chain cap-abilities can help DeFi applications gain better liquidity and more ecologi-cal users.
        </div>
      </div>
        <img className="prismImg" src={prismImg} data-aos="fade-left"/>
    </div>
  )
}

export default AboutPrism
