import './index.css'
import economyImg from '../../image/economy/economy.png'

function Economy() {
  return (
    <div className="economy">
      <div data-aos="fade-up">
        <div className="economy-title">
          Web3.0 Blockchain Economy
        </div>
        <div className="economyLine"/>
        <div className="economy-text">
          The Prism sidechain is one of the independent Layer 2 solutions.
        </div>
        <div className="economy-text">
          Prism has a greater capacity and higher transaction speeds than the
          main Ethernet network.
        </div>
      </div>
        <img className="economyImg" src={economyImg} data-aos="fade-up"/>
    </div>
  )
}

export default Economy
