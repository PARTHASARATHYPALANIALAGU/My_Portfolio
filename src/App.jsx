import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import AnimateSection from "./components/AnimateSection";
import Loader from "./components/Loader";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Skills from "./pages/Skills";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div
          className="min-h-screen text-white relative overflow-x-hidden"
          style={{ background: "linear-gradient(160deg, #060d1a 0%, #0b111e 40%, #0a0f1c 100%)" }}
        >
          {/* Ambient glow blobs */}
          <div
            aria-hidden="true"
            className="pointer-events-none fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-30 blur-3xl -z-0"
            style={{ background: "radial-gradient(ellipse at center, rgba(56,189,248,0.25) 0%, transparent 70%)" }}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none fixed bottom-0 right-0 w-[500px] h-[400px] opacity-20 blur-3xl -z-0"
            style={{ background: "radial-gradient(ellipse at center, rgba(139,92,246,0.3) 0%, transparent 70%)" }}
          />

          <Navbar />

          {/* GLOBAL PAGE CONTAINER */}
          <main className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
            <section id="home">
              <AnimateSection>
                <Home />
              </AnimateSection>
            </section>

            <section id="about">
              <AnimateSection>
                <About />
              </AnimateSection>
            </section>

            <section id="skills">
              <AnimateSection>
                <Skills />
              </AnimateSection>
            </section>

            <section id="projects">
              <AnimateSection>
                <Projects />
              </AnimateSection>
            </section>

            <section id="contact">
              <AnimateSection>
                <Contact />
              </AnimateSection>
            </section>
          </main>

         
        </div>
      )}
    </>
  );
}
