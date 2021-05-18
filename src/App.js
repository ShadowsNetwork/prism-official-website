import './App.css';
import {Row, Col} from 'antd';
import 'antd/dist/antd.css';
import Dashboard from "./pages/dashboard";
import logoImg from './image/logo.png'
import twitter from './image/top/topTwitter.png'
import fly from './image/top/topFly.png'
import 'aos/dist/aos.css';
import AOS from 'aos';

function App() {
  AOS.init({
    duration: 1500,
    easing: 'ease-in-sine',
    delay: 200,
  })
  return (
    <div className="app">
      <div className="menu">
        <Row>
          <Col span={2}/>
          <Col span={4}><a href={""}><img className="logoImg" src={logoImg} alt="加载失败"/></a></Col>
          <Col span={3}/>
          <Col span={2}><a className="menuText" href={"#"} target={"_blank"}>Features</a></Col>
          <Col span={2}><a className="menuText" href={"#"} target={"_blank"}>Roadmap</a></Col>
          <Col span={2}><a className="menuText" href={"#"} target={"_blank"}>Medium</a></Col>
          <Col span={5}><a className="menuText" href={"#"} target={"_blank"}>Docs</a></Col>
          <Col span={1}><a className="menuText" href={"https://twitter.com/shadows_defi"} target={"_blank"}><img className="twitter" src={twitter} alt="加载失败"/></a></Col>
          <Col span={1}><a className="menuText" href={"https://t.me/Shadows_defi"} target={"_blank"}><img className="fly" src={fly} alt="加载失败"/></a></Col>
        </Row>
      </div>
      <div className="menuMobile">
        <Row>
          <Col span={1}/>
          <Col span={5}><img className="logoImg" src={logoImg} alt="加载失败" /></Col>
          <Col span={1}/>
          <Col span={4}><a className="menuText" href={"#"} target={"_blank"}>Features</a></Col>
          <Col span={4}><a className="menuText" href={"#"} target={"_blank"} >Roadmap</a></Col>
          <Col span={4}><a className="menuText" href={"#"} target={"_blank"}>Medium</a></Col>
          <Col span={3}><a className="menuText" href={"#"} target={"_blank"}>Docs</a></Col>
        </Row>
      </div>
      <Dashboard/>
    </div>
  );
}

export default App;
