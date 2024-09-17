// import './App.css'
import NavBar from "./navBar"
import LandingSection from "./landingSec"
import CapabilitySection from "./capabilitySec"
import Footer from "./footer"
import GraphSection from "./graph"
import LowerCards from "./lowerCards"
import DownloadSection from "./downloadSec"
import WhySection from "./whySec"

function App() {
  return (
    <div>
      <NavBar />
      <LandingSection /><br /><br /><br />
      <CapabilitySection />
      <GraphSection />
      <WhySection /><br /><br />
      <LowerCards /><br /><br /><br />
      <DownloadSection /><br /><br /><br />
      <Footer />
    </div>
  )
}

export default App
