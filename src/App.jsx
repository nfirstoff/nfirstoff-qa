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
    <div className="relative min-h-screen bg-[#f4f6fa] text-gray-900 overflow-x-hidden">
      {/* Background gradient blobs */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
        <div className="animate-blob1 absolute -left-32 -top-32 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-pink-300/30 via-pink-200/20 to-transparent blur-3xl" />
        <div className="animate-blob2 absolute -right-32 top-1/4 h-[450px] w-[450px] rounded-full bg-gradient-to-br from-blue-300/25 via-blue-200/15 to-transparent blur-3xl" />
        <div className="animate-blob3 absolute bottom-1/4 left-1/3 h-[400px] w-[400px] rounded-full bg-gradient-to-br from-purple-300/25 via-purple-200/15 to-transparent blur-3xl" />
        <div className="animate-blob1 absolute -bottom-32 right-1/4 h-[350px] w-[350px] rounded-full bg-gradient-to-br from-teal-300/20 via-teal-200/10 to-transparent blur-3xl" />
        <div className="animate-blob2 absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-yellow-200/15 via-yellow-100/10 to-transparent blur-3xl" />
      </div>

      <div className="relative z-10">
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
    </div>
  )
}
