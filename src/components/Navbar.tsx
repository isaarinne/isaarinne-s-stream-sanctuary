import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Twitch, Instagram, MessageCircle, Music2 } from "lucide-react";

const links = [
  { label: "Twitch", href: "https://www.twitch.tv/isaarinne", icon: Twitch },
  { label: "Instagram", href: "https://www.instagram.com/isaarinne", icon: Instagram },
  { label: "TikTok", href: "https://www.tiktok.com/@isaarinne", icon: Music2 },
  { label: "Discord", href: "https://discord.com/invite/mAYjD2HX3p", icon: MessageCircle },
];

const sections = [
  { label: "Stream", href: "#stream" },
  { label: "About", href: "#about" },
  { label: "Clips", href: "#clips" },
  { label: "Socials", href: "#socials" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "backdrop-blur-xl bg-background/70 border-b border-border/50" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="font-display text-2xl tracking-tight">
          isaarinne
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          {sections.map((s) => (
            <a key={s.href} href={s.href} className="hover:text-foreground transition-colors">
              {s.label}
            </a>
          ))}
        </div>

        <div className="relative">
          <button
            onClick={() => setOpen((v) => !v)}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-foreground text-background text-sm font-medium hover:opacity-90 transition-opacity"
            aria-label="Open socials menu"
          >
            {open ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            <span className="hidden sm:inline">Socials</span>
          </button>

          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, y: -8, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.96 }}
                transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="absolute right-0 mt-3 w-64 rounded-2xl bg-card/95 backdrop-blur-xl border border-border shadow-2xl overflow-hidden"
              >
                <div className="p-2">
                  {links.map((l, i) => {
                    const Icon = l.icon;
                    return (
                      <motion.a
                        key={l.label}
                        href={l.href}
                        target="_blank"
                        rel="noreferrer"
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-secondary transition-colors text-sm"
                        onClick={() => setOpen(false)}
                      >
                        <Icon className="w-4 h-4 text-muted-foreground" />
                        <span>{l.label}</span>
                        <span className="ml-auto text-xs text-muted-foreground">@isaarinne</span>
                      </motion.a>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </motion.header>
  );
}
