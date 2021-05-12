import './index.css'
import fleetImg from '../../image/fleet/fleetImg.png'

function Fleet() {
  return (
    <div className="fleet">
      <div className="fleetText" data-aos="fade-right">
        <div className="fleetText-title">
          Prism Carrier 
        </div>
        <div className="fleetText-title">
         Fleet
        </div>
    
        <div className="fleetText-text">
         Key elements of Web3 blockchain economies:
         Synthetic assets，Collateralized lending，
         Stable coinsSwaps，Payments，Insurance，
         NFT，Oracle
        </div>
        <div className="fleetText-text">
         PSM (Prism Token) will be the nuclear power 
         fuel for the entire Prism carrier fleet.
        </div>
      </div>
      <img className="fleetImg" src={fleetImg} data-aos="fade-left"/>
    </div>
  )
}

export default Fleet
