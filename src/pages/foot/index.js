import './index.css'
import footGithub from '../../image/foot/footGithub.png'
import footFly from '../../image/foot/footFly.png'
import footEmail from '../../image/foot/footEmail.png'
import footMail from '../../image/foot/footMail.png'
import footTwitter from '../../image/foot/footTwitter.png'

function Foot() {
  return(
    <div className="foot">
      <div className="footContent">
        <div className="footContent-text">
          <span>Prism Network is a community-based</span>
          <span>platform that will power the Web3 economy and</span>
          <span>numerous DeFi applications.</span>
        </div>
        <div/>
      </div>
      <div className="footContentLine">
        <div/><div/><div/><div/><div/>
      </div>
      <div className="footContentTo">
        <div/>
        <div className="contentBox"/>
        <div className="contentBox"/>
        <div className="contentBox"/>
        <div className="contentBox"/>
        <div/>
        <div className="footIcon">
          <div className="footIcon-item">
            <img src={footTwitter}/>
          </div>
          <div className="footIcon-item">
            <img src={footGithub}/>
          </div>
          <div className="footIcon-item">
            <img src={footFly}/>
          </div>
          <div className="footIcon-item">
            <img src={footEmail}/>
          </div>
          <div className="footIcon-item">
            <img src={footMail}/>
          </div>
        </div>
      </div>
      <div className="copyright">
        <span>c</span>
        <span>2021 Shadows Foundation</span>
      </div>
    </div>
  )
}

export default Foot
