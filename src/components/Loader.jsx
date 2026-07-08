import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader() {
  const name = "Parthasarathy Palanialagu";
  const role = "Full Stack Developer";
  const [nameIndex, setNameIndex] = useState(0);
  const [roleIndex, setRoleIndex] = useState(0);
  const [roleStarted, setRoleStarted] = useState(false);

  useEffect(() => {
    // Type name first
    if (nameIndex < name.length) {
      const t = setTimeout(() => setNameIndex((i) => i + 1), 35);
      return () => clearTimeout(t);
    } else if (!roleStarted) {
      setRoleStarted(true);
    }
  }, [nameIndex, roleStarted, name.length]);

  useEffect(() => {
    if (!roleStarted) return;
    if (roleIndex < role.length) {
      const t = setTimeout(() => setRoleIndex((i) => i + 1), 25);
      return () => clearTimeout(t);
    }
  }, [roleIndex, roleStarted, role.length]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center"
      style={{ background: "linear-gradient(160deg, #060d1a 0%, #0b111e 50%, #0a0f1c 100%)" }}
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 2.4, duration: 0.7 }}
    >
      {/* Glow blob */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] opacity-30 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, rgba(56,189,248,0.35) 0%, transparent 70%)" }}
      />

      {/* Monogram */}
      <motion.div
        className="relative mb-6"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="w-20 h-20 rounded-2xl border border-sky-400/30 bg-sky-500/10 flex items-center justify-center shadow-lg shadow-sky-400/10">
          <span
            className="text-3xl font-black"
            style={{
              background: "linear-gradient(135deg, #38bdf8, #a78bfa)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            PP
          </span>
        </div>
        {/* Rotating ring */}
        <motion.div
          className="absolute -inset-2 rounded-[20px] border border-sky-400/20"
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          style={{ borderTopColor: "#38bdf8" }}
        />
      </motion.div>

      {/* Name typing */}
      <motion.h1
        className="text-xl font-bold text-white mb-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {name.slice(0, nameIndex)}
        {nameIndex < name.length && (
          <span className="animate-pulse text-sky-400">|</span>
        )}
      </motion.h1>

      {/* Role typing */}
      <motion.p
        className="text-sm text-gray-500 mb-8 h-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {role.slice(0, roleIndex)}
        {roleStarted && roleIndex < role.length && (
          <span className="animate-pulse text-sky-500">|</span>
        )}
      </motion.p>

      {/* Progress bar */}
      <div className="w-52 h-[2px] bg-white/5 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ background: "linear-gradient(90deg, #38bdf8, #a78bfa)" }}
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 2.2, ease: "easeInOut" }}
        />
      </div>
    </motion.div>
  );
}
