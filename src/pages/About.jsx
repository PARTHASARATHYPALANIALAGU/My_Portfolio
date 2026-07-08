import { motion } from "framer-motion";
import { FaUser, FaBullseye } from "react-icons/fa";
import { HiAcademicCap } from "react-icons/hi";

const cards = [
  {
    title: "About Me",
    text: "Aspiring Full-Stack Developer skilled in Java, Python, JavaScript, React, and Node.js. I build clean and responsive web applications with MySQL/SQLite. Passionate about UI/UX and improving DSA skills.",
    icon: <FaUser />,
    gradient: "from-sky-500/10 to-sky-500/0",
    iconBg: "bg-sky-500/15",
    iconColor: "text-sky-400",
    glowColor: "rgba(56,189,248,0.12)",
  },
  {
    title: "Education",
    text: "B.Tech in Computer Technology (2023–2027) at Bannari Amman Institute of Technology, maintaining 85%. Higher Secondary (2023) from Bharani Vidhyalaya Senior Secondary School with 75%.",
    icon: <HiAcademicCap />,
    gradient: "from-violet-500/10 to-violet-500/0",
    iconBg: "bg-violet-500/15",
    iconColor: "text-violet-400",
    glowColor: "rgba(139,92,246,0.12)",
  },
  {
    title: "Goals",
    text: "To build impactful full-stack applications using modern tech. Improve UI/UX, backend skills, and DSA. Contribute to real-world projects and grow professionally in the tech industry.",
    icon: <FaBullseye />,
    gradient: "from-emerald-500/10 to-emerald-500/0",
    iconBg: "bg-emerald-500/15",
    iconColor: "text-emerald-400",
    glowColor: "rgba(52,211,153,0.12)",
  },
];

export default function About() {
  return (
    <section className="py-32">
      {/* Section heading */}
      <div className="text-center mb-20">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs font-semibold tracking-[0.2em] text-sky-400 uppercase mb-3"
        >
          Who I Am
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold"
        >
          About{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #38bdf8 0%, #a78bfa 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Me
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-4 text-gray-500 max-w-md mx-auto"
        >
          A brief introduction to who I am and what drives me
        </motion.p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: i * 0.12, ease: "easeOut" }}
            viewport={{ once: true }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="relative group rounded-2xl p-8 overflow-hidden cursor-default
                       border border-white/[0.07]"
            style={{ background: "rgba(11,17,30,0.65)", backdropFilter: "blur(20px)" }}
          >
            {/* Top gradient shimmer */}
            <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${card.gradient}`} />

            {/* Background glow on hover */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                background: `radial-gradient(ellipse at 30% 0%, ${card.glowColor} 0%, transparent 60%)`,
              }}
            />

            {/* Icon */}
            <div
              className={`relative w-12 h-12 rounded-xl ${card.iconBg} flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110`}
            >
              <span className={`${card.iconColor} text-lg`}>{card.icon}</span>
            </div>

            {/* Title */}
            <h3 className="text-lg font-bold text-white mb-3 group-hover:text-sky-300 transition-colors duration-200">
              {card.title}
            </h3>

            {/* Text */}
            <p className="text-gray-500 leading-relaxed text-sm">{card.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
