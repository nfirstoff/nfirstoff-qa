import Navbar from "./components/layout/Navbar"
import Footer from "./components/layout/Footer"
import Hero from "./components/sections/Hero"
import About from "./components/sections/About"
import Services from "./components/sections/Services"
import Expertise from "./components/sections/Expertise"
import Portfolio from "./components/sections/Portfolio"
import Skills from "./components/sections/Skills"
import Metrics from "./components/features/Metrics"
import BugReportGallery from "./components/features/BugReportGallery"
import QASimulator from "./components/features/QASimulator"
import TestingCoverage from "./components/features/TestingCoverage"
import BugGame from "./components/features/BugGame"
import QAToolbox from "./components/features/QAToolbox"
import HowIUseAI from "./components/features/HowIUseAI"
import InvestigationFlow from "./components/features/InvestigationFlow"
import QADocs from "./components/features/QADocs"
import Availability from "./components/features/Availability"
import Contact from "./components/sections/Contact"

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Expertise />
        <Portfolio />
        <Metrics />
        <Skills />
        <BugReportGallery />
        <QASimulator />
        <TestingCoverage />
        <BugGame />
        <QAToolbox />
        <HowIUseAI />
        <InvestigationFlow />
        <QADocs />
        <Availability />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
