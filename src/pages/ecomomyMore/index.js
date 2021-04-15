import './index.css'
import economyMore from '../../image/economyMore/economyMore.png'

function EconomyMore() {
  return(
    <div className="economyMore">
      <img className="economyMoreImg" src={economyMore} data-aos="fade-up"/>
      <div className="economyMoreText" data-aos="fade-left">
        <div className="economyMore-title">
          Web3 Blockchain Economy
        </div>
        <div className="lineBox">
          <div className="economyMoreLine"/>
        </div>
        <div className="economyMoreText-text1">
          More than ever, people are demanding freedom, privacy,
          security and efficiency in financial transactions.
        </div>
        <div className="economyMoreText-text2">
          Innovative DeFi applications are the key to transitioning
          human societies into the Web3 economy.
        </div>
      </div>
    </div>
  )
}

export default EconomyMore
