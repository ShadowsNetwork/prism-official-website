import './index.css'
import fleetImg from '../../image/fleet/fleetImg.png'

function Fleet() {
  return (
    <div className="fleet">
      <div className="fleetText" data-aos="fade-right">
        <div className="fleetText-title">
          Prism Carrier Fleet
        </div>
        <div className="fleetLine"/>
        <div className="fleetText-text">
          PSM (Prism Token) will be the nuclear power fuel for the entire Prism carrier fleet.
        </div>
      </div>
      <img className="fleetImg" src={fleetImg} data-aos="fade-left"/>
    </div>
  )
}

export default Fleet
