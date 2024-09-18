// import './App.css'
import NavBar from "./navBar"
import LandingSection from "./landingSec"
import CapabilitySection from "./capabilitySec"
import Footer from "./footer"
import GraphSection from "./graph"
import LowerCards from "./lowerCards"
import DownloadSection from "./downloadSec"
import WhySection from "./whySec"
import Marque from "./marq"
import News from "./news"
import Model from "./model"


function App() {
  return (
    <div>
      <NavBar />
      <LandingSection /><br /><br /><br />
      <CapabilitySection />
      <GraphSection />
      <WhySection /><br /><br /><br /><br /><br />
      <Marque /><br /><br /><br /><br /><br />
      <LowerCards /><br /><br /><br />
      <DownloadSection /><br /><br /><br />
      <News />
      <Footer />
    </div>
  )
}

export default App
