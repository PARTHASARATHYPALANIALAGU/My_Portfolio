import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Intersection observer to track active section
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.55 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Detect scroll to add blur/border
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClass = (id) =>
    `relative text-sm font-medium transition-colors duration-200 ${active === id
      ? "text-sky-400"
      : "text-gray-400 hover:text-white"
    }`;

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-[#0b111e]/80 backdrop-blur-xl border-b border-white/[0.06] shadow-lg shadow-black/20"
          : "bg-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2.5"
          >
            <div className="p-1.5 rounded-lg bg-sky-500/10 border border-sky-500/20">
              <Code2 className="w-4 h-4 text-sky-400" />
            </div>
            <span className="font-bold text-white text-[13px] tracking-wide whitespace-nowrap">
              Parthasarathy Palanialagu
            </span>
          </motion.div>

          {/* Desktop Nav */}
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden md:flex items-center gap-8"
          >
            {NAV_LINKS.map(({ id, label }) => (
              <a key={id} href={`#${id}`} className={linkClass(id)}>
                {label}
                {active === id && (
                  <motion.span
                    layoutId="active-underline"
                    className="absolute -bottom-1 left-0 h-[2px] w-full bg-sky-400 rounded-full"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </motion.nav>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="md:hidden p-2 rounded-lg border border-white/10 hover:border-sky-400/40 transition text-gray-300"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed top-[65px] left-0 right-0 z-40 bg-[#0b111e]/95 backdrop-blur-xl border-b border-white/[0.06]"
          >
            <nav className="flex flex-col px-6 py-4 gap-4">
              {NAV_LINKS.map(({ id, label }) => (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={() => setMenuOpen(false)}
                  className={`text-base font-medium py-2 border-b border-white/5 last:border-0 ${active === id ? "text-sky-400" : "text-gray-400"
                    }`}
                >
                  {label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
