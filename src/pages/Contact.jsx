import { Mail, MapPin, Github, Linkedin, Send, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "sarathyalagu@gmail.com",
    href: "mailto:sarathyalagu@gmail.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Karur, Tamil Nadu",
    href: null,
  },
];

const socials = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/PARTHASARATHYPALANIALAGU",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/parthasarathy-palanialagu-347351321",
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:sarathyalagu@gmail.com",
  },
];

export default function Contact() {
  return (
    <section className="py-32 overflow-hidden">
      {/* Heading */}
      <div className="text-center mb-20">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs font-semibold tracking-[0.2em] text-sky-400 uppercase mb-3"
        >
          Let&apos;s Talk
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold"
        >
          Get In{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #38bdf8 0%, #a78bfa 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Touch
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-4 text-gray-500 max-w-xl mx-auto"
        >
          Have a question or want to work together? Feel free to reach out!
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">

        {/* LEFT — info */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="lg:col-span-2 space-y-8"
        >
          <div>
            <div className="inline-flex p-3 rounded-xl mb-5 border border-sky-500/20 bg-sky-500/10">
              <MessageSquare className="w-6 h-6 text-sky-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Let&apos;s Connect</h3>
            <p className="text-gray-500 leading-relaxed">
              I&apos;m always open to discussing new projects, creative ideas, or opportunities.
              Whether you have a question or just want to say hi, I&apos;ll get back to you!
            </p>
          </div>

          {/* Contact info items */}
          <div className="space-y-4">
            {contactInfo.map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="flex items-center gap-4">
                <div className="flex-shrink-0 p-3 rounded-xl border border-white/[0.07] bg-white/[0.03]">
                  <Icon className="w-4 h-4 text-sky-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-600 mb-0.5">{label}</p>
                  {href ? (
                    <a href={href} className="text-gray-300 hover:text-sky-400 transition-colors text-sm">
                      {value}
                    </a>
                  ) : (
                    <p className="text-gray-300 text-sm">{value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Social links */}
          <div>
            <p className="text-xs text-gray-600 uppercase tracking-widest mb-4">Find me on</p>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, label, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  whileHover={{ y: -3 }}
                  className="p-3.5 rounded-xl border border-white/[0.07] bg-white/[0.03]
                             text-gray-400 hover:text-sky-400 hover:border-sky-400/30
                             hover:bg-sky-400/5 transition-all duration-200"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* RIGHT — form */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="lg:col-span-3 rounded-2xl p-8 border border-white/[0.07] overflow-hidden relative"
          style={{ background: "rgba(11,17,30,0.65)", backdropFilter: "blur(20px)" }}
        >
          {/* Subtle top glow */}
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(56,189,248,0.3), transparent)" }}
          />

          <form className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block mb-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-xl text-sm text-gray-300 placeholder-gray-600
                             bg-black/40 border border-white/[0.07]
                             focus:outline-none focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500/20
                             transition-all duration-200"
                />
              </div>
              <div>
                <label className="block mb-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">Email</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-xl text-sm text-gray-300 placeholder-gray-600
                             bg-black/40 border border-white/[0.07]
                             focus:outline-none focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500/20
                             transition-all duration-200"
                />
              </div>
            </div>

            <div>
              <label className="block mb-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">Subject</label>
              <input
                type="text"
                placeholder="What's this about?"
                className="w-full px-4 py-3 rounded-xl text-sm text-gray-300 placeholder-gray-600
                           bg-black/40 border border-white/[0.07]
                           focus:outline-none focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500/20
                           transition-all duration-200"
              />
            </div>

            <div>
              <label className="block mb-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">Message</label>
              <textarea
                rows="5"
                placeholder="Your message..."
                className="w-full px-4 py-3 rounded-xl text-sm text-gray-300 placeholder-gray-600
                           bg-black/40 border border-white/[0.07]
                           focus:outline-none focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500/20
                           transition-all duration-200 resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl font-semibold text-sm text-black
                         flex items-center justify-center gap-2
                         hover:shadow-lg hover:shadow-sky-400/20 hover:scale-[1.01]
                         transition-all duration-200"
              style={{ background: "linear-gradient(135deg, #38bdf8, #0ea5e9)" }}
            >
              Send Message <Send className="w-4 h-4" />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
