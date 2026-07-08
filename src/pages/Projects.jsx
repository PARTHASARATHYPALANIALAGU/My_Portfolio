import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const projects = [
  {
    number: "01",
    title: "Sri Vishnu Package - Official Website",
    description:
      "A premium, modern web presence for a packaging solutions provider showcasing manufacturing expertise, product range, and technical machinery. Features an Interactive Box Size Calculator, fluid animations, responsive design, and direct contact integration.",
    tech: ["React.js", "Vite", "Tailwind CSS", "Framer Motion", "react-countup", "EmailJS"],
    github: "https://github.com/PARTHASARATHYPALANIALAGU/SriVishnuPackage-Website.git",
    live: "https://sri-vishnu-package-website.vercel.app/",
    accent: "#38bdf8",
    category: "Web",
  },
  {
    number: "02",
    title: "Employee Attendance Management System",
    description:
      "A comprehensive full-stack web application designed to track employee attendance, manage staff records, and automate monthly payroll. Features an Admin Dashboard, bulk entry workflows, JWT-secured auth, and automatic salary reports via local SQLite persistence.",
    tech: ["React.js", "Node.js", "Express.js", "SQLite", "JWT"],
    github: "https://github.com/PARTHASARATHYPALANIALAGU/Employee_Attendance_Management.git",
    live: "#",
    accent: "#a78bfa",
    category: "Full Stack",
  },
  {
    number: "03",
    title: "College Bus Tracking App",
    description:
      "An Android application for real-time college bus tracking featuring role-based access for students, drivers, and administrators. Enables live location tracking, route search, and integrates mapping APIs with cloud-based storage for efficient management.",
    tech: ["Java", "XML", "Firebase", "OpenStreet Maps API"],
    github: "#",
    live: "#",
    accent: "#34d399",
    category: "Mobile",
  },
  {
    number: "04",
    title: "Jewellery Retrieval System",
    description:
      "AI-powered jewellery search engine supporting multi-modal search: text, image, sketch, OCR, and voice. Built with CLIP for visual intelligence and FAISS for high-performance retrieval.",
    tech: ["FastAPI", "CLIP", "FAISS", "React.js", "Tailwind CSS", "Whisper", "BLIP"],
    github: "https://github.com/PARTHASARATHYPALANIALAGU/Jewellery_Retrieval_System",
    live: "#",
    accent: "#f59e0b",
    category: "AI / ML",
    highlight: true,
  },
  {
    number: "05",
    title: "ClinAssist — Clinical Intake & Triage",
    description:
      "Speech-driven AI medical intake assistant using voice activity detection, LLM-based symptom extraction (Llama 3.1), and a deterministic risk engine to triage patients into Critical / High / Moderate / Low urgency.",
    tech: ["FastAPI", "Whisper", "Llama 3.1", "Groq", "Piper TTS", "SQLite", "Vanilla JS"],
    github: "https://github.com/PARTHASARATHYPALANIALAGU/Clin_Assist",
    live: "#",
    accent: "#f472b6",
    category: "AI / ML",
    highlight: true,
  },
];

export default function Projects() {
  return (
    <section className="py-32">
      {/* Heading */}
      <div className="text-center mb-20">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs font-semibold tracking-[0.2em] text-sky-400 uppercase mb-3"
        >
          What I&apos;ve Built
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold"
        >
          My{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #38bdf8 0%, #a78bfa 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Projects
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-4 text-gray-500 max-w-xl mx-auto"
        >
          A selection of projects that showcase my skills — from full-stack web apps to AI-powered systems
        </motion.p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
            viewport={{ once: true }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="relative group flex flex-col rounded-2xl p-7 overflow-hidden border border-white/[0.07]"
            style={{ background: "rgba(11,17,30,0.65)", backdropFilter: "blur(20px)" }}
          >
            {/* Hover glow */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
              style={{
                background: `radial-gradient(ellipse at 0% 0%, ${project.accent}18 0%, transparent 60%)`,
                boxShadow: `0 0 0 1px ${project.accent}22`,
              }}
            />

            {/* Top row: number + category badge */}
            <div className="flex items-start justify-between mb-3">
              <span
                className="text-5xl font-black tabular-nums leading-none select-none"
                style={{ color: `${project.accent}25` }}
              >
                {project.number}
              </span>
              <span
                className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border mt-1"
                style={{
                  color: project.accent,
                  background: `${project.accent}12`,
                  borderColor: `${project.accent}30`,
                }}
              >
                {project.category}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-lg font-bold text-white mb-3 leading-snug group-hover:text-sky-300 transition-colors duration-200">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1">
              {project.description}
            </p>

            {/* Tech badges */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-2.5 py-1 rounded-md font-medium border"
                  style={{
                    color: project.accent,
                    background: `${project.accent}12`,
                    borderColor: `${project.accent}25`,
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-5 text-gray-500 text-sm font-medium pt-4 border-t border-white/[0.06]">
              {project.github !== "#" && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 hover:text-white transition-colors duration-200"
                >
                  <FiGithub className="w-4 h-4" /> Code
                </a>
              )}
              {project.live !== "#" && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 hover:text-white transition-colors duration-200"
                >
                  <FiExternalLink className="w-4 h-4" /> Live Demo
                </a>
              )}
              {project.github === "#" && project.live === "#" && (
                <span className="text-xs text-gray-600 italic">Links coming soon</span>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
