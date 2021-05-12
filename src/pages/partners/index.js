import './index.css'
import image3 from '../../image/partners/image3.png'
import image4 from '../../image/partners/image4.png'
import image5 from '../../image/partners/image5.png'
import image6 from '../../image/partners/image6.png'
import image7 from '../../image/partners/image7.png'
import image8 from '../../image/partners/image8.png'
import image9 from '../../image/partners/image9.png'
import image10 from '../../image/partners/image10.png'
import image11 from '../../image/partners/image11.png'
import image12 from '../../image/partners/image12.png'



function Partners() {
  return (
    <div className="partners">
      <div data-aos="fade-up">
        <div className="partners-title">Partners</div>
        <div className="partners-text">Proudly powered by an extensive network of industry leaders</div>
      </div>
      <div className="box" data-aos="fade-up">
        <div className="partnersContent">
          <div className="partnersContent-box">
            <div className="partnersOne">
              <a href={"https://www.a195.capital/"} target={"_blank"}>
                <img className="wow pulse" data-wow-duration="1.5s"
                     data-wow-delay="0.3s"
                     src={image3}/>
              </a>
              <a><img className="wow pulse"
                      data-wow-duration="1.5s"
                      data-wow-delay="0.3s"
                      src={image4}/>
              </a>
              <a href={"https://www.alphabit.fund/"} target={"_blank"}>
                <img className="wow pulse" data-wow-duration="1.5s"
                     data-wow-delay="0.3s"
                     src={image5}/>
              </a>
              <a href={"https://au21.capital/"} target={"_blank"}>
                <img className="wow pulse" data-wow-duration="1.5s"
                     data-wow-delay="0.3s"
                     src={image6}/>
              </a>
              <a href={"https://www.bitcoin.com/"} target={"_blank"}>
                <img className="wow pulse" data-wow-duration="1.5s"
                     data-wow-delay="0.3s"
                     src={image7}/>
              </a>
            </div>
            <div className="partnersTwo">
              <a href={"https://www.blocksync.com/"} target={"_blank"}>
                <img className="wow pulse" data-wow-duration="1.5s"
                     data-wow-delay="0.3s"
                     src={image8}/>
              </a>
              <a href={"http://candaq.com/#/"} target={"_blank"}>
                <img className="wow pulse" data-wow-duration="1.5s"
                     data-wow-delay="0.3s"
                     src={image9}/>
              </a>
              <a href={"https://www.chaincapital.group/"} target={"_blank"}>
                <img className="wow pulse"
                     data-wow-duration="1.5s"
                     data-wow-delay="0.3s"
                     src={image10}/>
              </a>
              <a href={"http://consensus-lab.com/"} target={"_blank"}>
                <img className="wow pulse" data-wow-duration="1.5s"
                     data-wow-delay="0.3s"
                     src={image11}/>
              </a>
              <a href={"https://cryptomeriacapital.com/"} target={"_blank"}>
                <img className="wow pulse"
                     data-wow-duration="1.5s"
                     data-wow-delay="0.3s"
                     src={image12}/>
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Partners
