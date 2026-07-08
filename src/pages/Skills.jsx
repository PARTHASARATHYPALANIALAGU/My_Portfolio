import { motion } from "framer-motion";
import {
  SiJavascript, SiPython, SiReact, SiNextdotjs, SiTailwindcss,
  SiNodedotjs, SiMysql, SiMongodb, SiExpress, SiGithub,
  SiVscodium, SiFigma, SiGooglecolab, SiSqlite,
} from "react-icons/si";
import { FaJava, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { VscCode } from "react-icons/vsc";

const skillGroups = [
  {
    title: "Languages",
    accent: "#38bdf8",
    bg: "rgba(56,189,248,0.06)",
    border: "rgba(56,189,248,0.15)",
    items: [
      { name: "Java", icon: <FaJava className="text-orange-400" /> },
      { name: "Python", icon: <SiPython className="text-blue-400" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
      { name: "C", icon: <VscCode className="text-gray-400" /> },
    ],
  },
  {
    title: "Frontend",
    accent: "#a78bfa",
    bg: "rgba(139,92,246,0.06)",
    border: "rgba(139,92,246,0.15)",
    items: [
      { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
      { name: "React", icon: <SiReact className="text-cyan-400" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400" /> },
    ],
  },
  {
    title: "Backend",
    accent: "#34d399",
    bg: "rgba(52,211,153,0.06)",
    border: "rgba(52,211,153,0.15)",
    items: [
      { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
      { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
      { name: "MySQL", icon: <SiMysql className="text-blue-300" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
      { name: "SQLite", icon: <SiSqlite className="text-sky-300" /> },
    ],
  },
  {
    title: "Tools",
    accent: "#fb923c",
    bg: "rgba(251,146,60,0.06)",
    border: "rgba(251,146,60,0.15)",
    items: [
      { name: "GitHub", icon: <SiGithub className="text-gray-300" /> },
      { name: "VS Code", icon: <SiVscodium className="text-blue-400" /> },
      { name: "Figma", icon: <SiFigma className="text-pink-400" /> },
      { name: "Google Colab", icon: <SiGooglecolab className="text-orange-400" /> },
    ],
  },
];

export default function Skills() {
  return (
    <section className="py-32">
      {/* Heading */}
      <div className="text-center mb-20">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs font-semibold tracking-[0.2em] text-violet-400 uppercase mb-3"
        >
          What I Know
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold"
        >
          Skills &{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #38bdf8 0%, #a78bfa 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Technologies
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-4 text-gray-500"
        >
          Technologies I work with to bring ideas to life
        </motion.p>
      </div>

      {/* Skill Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {skillGroups.map((group, index) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="relative group rounded-2xl p-7 flex flex-col overflow-hidden border border-white/[0.05] shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] transition-shadow duration-300"
            style={{
              background: "rgba(11, 17, 30, 0.6)",
              backdropFilter: "blur(20px)",
            }}
          >
            {/* Radial hover glow */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
              style={{
                background: `radial-gradient(circle at 10% 10%, ${group.accent}15 0%, transparent 60%)`,
                boxShadow: `inset 0 0 0 1px ${group.accent}25`,
              }}
            />

            {/* Top border accent line */}
            <div
              className="absolute top-0 left-0 right-0 h-[1.5px] opacity-60 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: `linear-gradient(90deg, transparent, ${group.accent}, transparent)` }}
            />

            {/* Category title */}
            <div className="flex items-center gap-3 mb-7 relative z-10">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center bg-black/40 border border-white/5"
                style={{ boxShadow: `0 0 15px ${group.accent}20` }}
              >
                <div className="w-2 h-2 rounded-full" style={{ background: group.accent, boxShadow: `0 0 10px ${group.accent}` }} />
              </div>
              <h3 className="text-sm font-black uppercase tracking-widest text-white">
                {group.title}
              </h3>
            </div>

            {/* Skill pills with icons */}
            <div className="flex flex-wrap gap-2.5 relative z-10 mt-auto">
              {group.items.map((item) => (
                <div
                  key={item.name}
                  className="group/pill flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-gray-300
                             bg-[#060c17]/80 border border-white/[0.06] hover:border-white/20 hover:bg-white/[0.04] hover:text-white transition-all duration-300 cursor-default
                             shadow-[0_4px_12px_rgba(0,0,0,0.3)] hover:-translate-y-0.5"
                >
                  <span className="text-base group-hover/pill:scale-110 transition-transform duration-300">
                    {item.icon}
                  </span>
                  <span className="tracking-wide">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
