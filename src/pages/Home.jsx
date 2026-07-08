import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { ArrowRight, Code2, Terminal, Database } from "lucide-react";
import { SiReact, SiJavascript } from "react-icons/si";

const floatVariants = {
  initial: (custom) => ({ opacity: 0, y: 50, rotate: custom.rotate }),
  float: (custom) => ({
    opacity: 1,
    y: ["-10px", "10px", "-10px"],
    rotate: [custom.rotate - 3, custom.rotate + 3, custom.rotate - 3],
    transition: {
      opacity: { duration: 1, delay: 0.5 + custom.delay * 0.2 },
      y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: custom.delay },
      rotate: { duration: 8, repeat: Infinity, ease: "easeInOut", delay: custom.delay },
    },
  }),
};

const floatingIcons = [
  { icon: <Code2 className="w-6 h-6 sm:w-8 sm:h-8 text-sky-400" />, positioning: "top-[15%] left-[5%] sm:left-[10%] lg:left-[15%]", rotate: -15, delay: 0 },
  { icon: <span className="font-mono text-xl sm:text-2xl text-violet-400 font-bold">{"{ }"}</span>, positioning: "top-[45%] left-[2%] sm:left-[5%] lg:left-[8%]", rotate: 0, delay: 1.5 },
  { icon: <Terminal className="w-6 h-6 sm:w-8 sm:h-8 text-indigo-400" />, positioning: "bottom-[20%] left-[10%] sm:left-[15%] lg:left-[20%]", rotate: 10, delay: 3 },
  { icon: <Database className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-400" />, positioning: "top-[15%] right-[5%] sm:right-[10%] lg:right-[15%]", rotate: 15, delay: 0.5 },
  { icon: <SiReact className="w-6 h-6 sm:w-8 sm:h-8 text-sky-400" />, positioning: "top-[45%] right-[2%] sm:right-[5%] lg:right-[8%]", rotate: -10, delay: 2 },
  { icon: <SiJavascript className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400" />, positioning: "bottom-[20%] right-[10%] sm:right-[15%] lg:right-[20%]", rotate: -15, delay: 2.5 },
];

export default function Home() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">

      {/* Background Orbital Rings */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[600px] h-[600px] sm:w-[900px] sm:h-[900px] rounded-full border border-white/5 absolute" />
        <div className="w-[800px] h-[800px] sm:w-[1300px] sm:h-[1300px] rounded-full border border-white/[0.02] absolute" />
      </div>

      {/* Horizon Glow */}
      <div className="absolute bottom-0 left-0 right-0 h-[400px] pointer-events-none">
        <div className="absolute bottom-[-150px] left-1/2 -translate-x-1/2 w-[150%] sm:w-[120%] h-[300px] rounded-[100%] bg-brand/10 blur-[80px]" />
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-sky-500/40 to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[200px] bg-sky-500/20 blur-[100px] rounded-t-full" />
      </div>

      {/* Floating Tech Icons (hidden on small mobile to avoid clutter) */}
      {floatingIcons.map((item, i) => (
        <motion.div
          key={i}
          custom={{ rotate: item.rotate, delay: item.delay }}
          variants={floatVariants}
          initial="initial"
          animate="float"
          className={`absolute hidden sm:flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md shadow-2xl ${item.positioning}`}
          style={{ zIndex: 0 }}
        >
          {item.icon}
        </motion.div>
      ))}

      {/* Decorative grid lines */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(56,189,248,1) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="text-center max-w-3xl relative z-10">

        {/* Availability badge */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8
                     border border-sky-500/25 bg-sky-500/8 text-sm text-sky-300"
          style={{ background: "rgba(56,189,248,0.07)" }}
        >
          <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
          Available for opportunities
        </motion.div>

        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.05 }}
          className="flex flex-col items-center justify-center gap-2"
        >
          <span className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-200">
            Hi, I&apos;m
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight whitespace-nowrap">
            <span
              style={{
                background: "linear-gradient(135deg, #38bdf8 0%, #a78bfa 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Parthasarathy Palanialagu
            </span>
          </h1>
        </motion.div>

        {/* Role */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
          className="mt-4 text-xl md:text-2xl text-gray-400 font-medium"
        >
          Full Stack Developer
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-6 text-gray-500 max-w-xl mx-auto leading-relaxed text-base md:text-lg"
        >
          I craft elegant digital experiences with clean code and modern
          technologies. Passionate about building products that make a difference.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55 }}
          className="mt-10 flex justify-center gap-4 flex-wrap"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm
                       text-black transition-all duration-300 hover:shadow-lg hover:shadow-sky-400/25 hover:scale-105"
            style={{ background: "linear-gradient(135deg, #38bdf8, #0ea5e9)" }}
          >
            View Projects
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm
                       text-gray-300 border border-white/10 bg-white/[0.03]
                       hover:border-sky-400/40 hover:text-white hover:bg-white/[0.06]
                       transition-all duration-300"
          >
            Contact Me
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-10 flex justify-center gap-4"
        >
          {[
            {
              href: "https://github.com/PARTHASARATHYPALANIALAGU",
              icon: <FaGithub size={18} />,
              label: "GitHub",
            },
            {
              href: "https://www.linkedin.com/in/parthasarathy-palanialagu-347351321",
              icon: <FaLinkedinIn size={18} />,
              label: "LinkedIn",
            },
            {
              href: "mailto:sarathyalagu@gmail.com",
              icon: <HiOutlineMail size={20} />,
              label: "Email",
            },
          ].map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="p-3 rounded-xl border border-white/10 bg-white/[0.03] text-gray-400
                         hover:text-sky-400 hover:border-sky-400/30 hover:bg-sky-400/5
                         transition-all duration-200"
            >
              {icon}
            </a>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-20 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] tracking-[0.25em] text-gray-600 uppercase">Scroll</span>
          <motion.div
            className="w-px h-10 bg-gradient-to-b from-gray-600 to-transparent"
            animate={{ scaleY: [1, 0.5, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </section>
  );
}
