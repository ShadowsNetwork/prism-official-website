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
          <Col span={2}>Features</Col>
          <Col span={2}>Roadmap</Col>
          <Col span={2}>Medium</Col>
          <Col span={5}>Docs</Col>
          <Col span={1}><a href={"https://twitter.com/shadows_defi"} target={"_blank"}><img className="twitter" src={twitter} alt="加载失败"/></a></Col>
          <Col span={1}><a href={"https://t.me/Shadows_defi"} target={"_blank"}><img className="fly" src={fly} alt="加载失败"/></a></Col>
        </Row>
      </div>
      <div className="menuMobile">
        <Row>
          <Col span={1}/>
          <Col span={5}><img className="logoImg" src={logoImg} alt="加载失败" /></Col>
          <Col span={1}/>
          <Col span={4}>Features</Col>
          <Col span={4}>Roadmap</Col>
          <Col span={4}>Medium</Col>
          <Col span={3}>Docs</Col>
        </Row>
      </div>
      <Dashboard/>
    </div>
  );
}

export default App;
