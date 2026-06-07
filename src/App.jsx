import { useEffect } from "react"
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
  useEffect(() => {
    const TRACK_URL = 'http://77.236.7.143/track';
    const TRACK_TOKEN = '6b376ff2-6cf9-44f5-9741-d708ae178ebb';
    const HEARTBEAT_MS = 25000;
    const SECTION_SELECTOR = '#hero,#about,#services,#portfolio,#skills,#bugs,#simulator,#coverage,#contact';

    const sessionId = (window.crypto && crypto.randomUUID)
      ? crypto.randomUUID()
      : 'sess-' + Date.now() + '-' + Math.random().toString(16).slice(2);

    let currentSection = 'hero';
    let pageVisible = !document.hidden;

    const sendTrack = async (section, reason) => {
      try {
        await fetch(TRACK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ token: TRACK_TOKEN, sessionId, section, reason }),
          keepalive: true,
        });
      } catch (_) {}
    };

    const sections = Array.from(document.querySelectorAll(SECTION_SELECTOR));
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (!visible.length) return;
        const nextId = visible[0].target.id || 'hero';
        if (nextId !== currentSection) {
          currentSection = nextId;
          sendTrack(currentSection, 'section');
        }
      },
      { threshold: [0.25, 0.5, 0.75], rootMargin: '-10% 0px -35% 0px' }
    );

    sections.forEach((section) => observer.observe(section));

    sendTrack(currentSection, 'visit');

    const heartbeat = setInterval(() => {
      if (pageVisible) sendTrack(currentSection, 'heartbeat');
    }, HEARTBEAT_MS);

    const onVisibility = () => {
      pageVisible = !document.hidden;
      if (pageVisible) sendTrack(currentSection, 'visible');
    };
    document.addEventListener('visibilitychange', onVisibility);

    const onPageHide = () => {
      navigator.sendBeacon(
        TRACK_URL,
        new Blob([JSON.stringify({ token: TRACK_TOKEN, sessionId, section: currentSection, reason: 'pagehide' })], {
          type: 'application/json',
        })
      );
    };
    window.addEventListener('pagehide', onPageHide);

    return () => {
      observer.disconnect();
      clearInterval(heartbeat);
      document.removeEventListener('visibilitychange', onVisibility);
      window.removeEventListener('pagehide', onPageHide);
    };
  }, []);

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
