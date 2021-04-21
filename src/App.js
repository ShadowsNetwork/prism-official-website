import './App.css';
import {Row, Col} from 'antd';
import 'antd/dist/antd.css';
import Dashboard from "./pages/dashboard";
import logoImg from './image/logo.png'
import github from './image/foot/footGithub.png'
import twitter from './image/foot/footTwitter.png'
import fly from './image/foot/footFly.png'
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
          <Col span={4}><a href={""}><img className="logoImg" src={logoImg}/></a></Col>
          <Col span={12}/>
          <Col span={1}><a href={"#"}><img className="github" src={github}/></a></Col>
          <Col span={1}><a href={"#"}><img className="twitter" src={twitter}/></a></Col>
          <Col span={1}><a href={"#"}><img className="fly" src={fly}/></a></Col>
        </Row>
      </div>
      <div className="menuMobile">
        <Row>
          <Col span={2}/>
          <Col span={4}><img className="logoImg" src={logoImg}/></Col>
          <Col span={8}/>
          <Col span={3}><img className="github" src={github}/></Col>
          <Col span={3}><img className="github" src={twitter}/></Col>
          <Col span={3}><img className="fly" src={fly}/></Col>
        </Row>
      </div>
      <Dashboard/>
    </div>
  );
}

export default App;
