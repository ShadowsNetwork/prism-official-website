
import Top from "../top";
import AboutPrism from "../aboutPrism";
import Workflows from "../workflows";
import Decentralized from "../decentralized";
import Economy from "../economy";
import EconomyMore from "../ecomomyMore";
import Fleet from "../fleet";
import CrossChain from "../crossChain";
import Partners from "../partners";
import Foot from "../foot";

function Dashboard() {
  return (
    <div className="dashboard">
      <Top/>
      <AboutPrism/>
      <Workflows/>
      <Decentralized/>
      <Economy/>
      <EconomyMore/>
      <Fleet/>
      <CrossChain/>
      <Partners/>
      <Foot/>
    </div>
  )
}

export default Dashboard
