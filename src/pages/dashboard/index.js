
import Top from "../top";
import Workflows from "../workflows";
import Decentralized from "../decentralized";
import CrossChain from "../crossChain";
import Partners from "../partners";
import Foot from "../foot";
import './index.css'

function Dashboard() {
  return (
    <div className="dashboard">
      <Top/>
      <Workflows/>
      <Decentralized/>
      <CrossChain/>
      <Partners/>
      <Foot/>
    </div>
  )
}

export default Dashboard
