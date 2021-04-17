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
      {/*<div className="footContentLine">*/}
      {/*  <div/><div/><div/><div/><div/>*/}
      {/*</div>*/}
      <div className="footContentTo">
        <div/>
        <div className="contentBox"/>
        <div className="contentBox"/>
        <div className="contentBox"/>
        <div className="contentBox"/>
        <div/>
        <div className="footIcon">
          <div className="footIcon-item">
            <a href={"#"}><img src={footTwitter}/></a>
          </div>
          <div className="footIcon-item">
            <a href={"#"}><img src={footGithub}/></a>
          </div>
          <div className="footIcon-item">
            <a href={"#"}><img src={footFly}/></a>
          </div>
          <div className="footIcon-item">
            <a href={"#"}><img src={footEmail}/></a>
          </div>
          <div className="footIcon-item">
            <a href={"#"}><img src={footMail}/></a>
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
