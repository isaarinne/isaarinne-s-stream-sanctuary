import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Twitch, Instagram, MessageCircle, Music2, Radio, Gamepad2, MessageSquare, ArrowUpRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { MusicToggle } from "@/components/MusicToggle";
import profile from "@/assets/isa-profile.png";
import img2 from "@/assets/isa-2.png";
import img3 from "@/assets/isa-3.png";
import img4 from "@/assets/isa-4.png";

export const Route = createFileRoute("/")({ component: Index });

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
};

function Index() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div id="top" className="min-h-screen overflow-x-hidden">
      <Navbar />
      <MusicToggle />

      {/* HERO */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center px-6 pt-24">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "var(--gradient-glow)" }} />
        <motion.div style={{ y, opacity }} className="relative max-w-5xl w-full text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.6, filter: "blur(20px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mb-10 relative"
          >
            <motion.div style={{ scale }} className="w-40 h-40 sm:w-48 sm:h-48 mx-auto rounded-full overflow-hidden ring-1 ring-border shadow-2xl">
              <img src={profile} alt="isaarinne portrait" className="w-full h-full object-cover" />
            </motion.div>
            <div className="absolute inset-0 -z-10 blur-3xl opacity-40" style={{ background: "var(--gradient-glow)" }} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary border border-border text-xs text-muted-foreground mb-6"
          >
            <span className="relative flex w-2 h-2">
              <span className="absolute inset-0 rounded-full bg-accent animate-ping opacity-75" />
              <span className="relative rounded-full bg-accent w-2 h-2" />
            </span>
            Live on Twitch
          </motion.div>

          <h1 className="font-display text-6xl sm:text-8xl md:text-9xl leading-[0.95] tracking-tight">
            isa<span className="italic text-muted-foreground">arinne</span>
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto"
          >
            Streaming Overwatch & Just Chatting. Cozy vibes, sharp aim, and a community that feels like home.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-3"
          >
            <a
              href="https://www.twitch.tv/isaarinne"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background text-sm font-medium hover:scale-[1.03] transition-transform"
            >
              <Twitch className="w-4 h-4" />
              Watch on Twitch
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="https://discord.com/invite/mAYjD2HX3p"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-secondary border border-border text-sm font-medium hover:bg-muted transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Join Discord
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* STREAM EMBED */}
      <section id="stream" className="px-6 py-24 sm:py-32">
        <motion.div {...fadeUp} className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
            <div>
              <p className="text-sm text-muted-foreground uppercase tracking-widest mb-2">Live channel</p>
              <h2 className="font-display text-5xl sm:text-6xl">The stream.</h2>
            </div>
            <a
              href="https://www.twitch.tv/isaarinne"
              target="_blank"
              rel="noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-1"
            >
              Open on Twitch <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="aspect-video rounded-3xl overflow-hidden border border-border shadow-2xl bg-card"
          >
            <iframe
              src={`https://player.twitch.tv/?channel=isaarinne&parent=${typeof window !== "undefined" ? window.location.hostname : "localhost"}&muted=true`}
              className="w-full h-full"
              allowFullScreen
              title="isaarinne Twitch stream"
            />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
            {[
              { icon: Gamepad2, label: "Overwatch", desc: "Ranked grinds & comp games" },
              { icon: MessageSquare, label: "Just Chatting", desc: "Cozy hangouts with chat" },
              { icon: Radio, label: "Most nights", desc: "Follow to never miss a stream" },
            ].map((c, i) => (
              <motion.div
                key={c.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="p-5 rounded-2xl bg-card border border-border"
              >
                <c.icon className="w-5 h-5 mb-3 text-muted-foreground" />
                <div className="font-medium">{c.label}</div>
                <div className="text-sm text-muted-foreground mt-1">{c.desc}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ABOUT */}
      <section id="about" className="px-6 py-24 sm:py-32 border-t border-border/50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeUp}>
            <p className="text-sm text-muted-foreground uppercase tracking-widest mb-3">About</p>
            <h2 className="font-display text-5xl sm:text-6xl leading-tight">
              A little corner of the internet.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Isa streams on Twitch with a warm, low-key energy — somewhere between a late-night
              call with a friend and a focused Overwatch session. Expect honest conversations,
              good music, and the occasional clutch.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-6">
              <div>
                <div className="font-display text-4xl">Overwatch</div>
                <div className="text-sm text-muted-foreground">Main game</div>
              </div>
              <div>
                <div className="font-display text-4xl">Chill</div>
                <div className="text-sm text-muted-foreground">House rules</div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-border shadow-2xl"
          >
            <img src={img2} alt="isaarinne" className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </section>

      {/* GALLERY / CLIPS */}
      <section id="clips" className="px-6 py-24 sm:py-32 border-t border-border/50">
        <motion.div {...fadeUp} className="max-w-6xl mx-auto">
          <p className="text-sm text-muted-foreground uppercase tracking-widest mb-2">Moments</p>
          <h2 className="font-display text-5xl sm:text-6xl mb-12">Off the stream.</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[img3, img4, profile, img2, img3, img4].map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 3) * 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6 }}
                className={`relative overflow-hidden rounded-2xl border border-border ${
                  i % 5 === 0 ? "aspect-[3/4] md:row-span-2 md:aspect-[3/5]" : "aspect-square"
                }`}
              >
                <img src={src} alt="" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* TIKTOK */}
      <section className="px-6 py-24 sm:py-32 border-t border-border/50">
        <motion.div {...fadeUp} className="max-w-6xl mx-auto text-center">
          <p className="text-sm text-muted-foreground uppercase tracking-widest mb-2">TikTok</p>
          <h2 className="font-display text-5xl sm:text-6xl mb-4">Short form, big personality.</h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-10">
            Catch the highlights, the bits, and the behind-the-scenes on TikTok.
          </p>
          <a
            href="https://www.tiktok.com/@isaarinne"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background text-sm font-medium hover:scale-[1.03] transition-transform"
          >
            <Music2 className="w-4 h-4" />
            @isaarinne on TikTok
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>
      </section>

      {/* SOCIALS GRID */}
      <section id="socials" className="px-6 py-24 sm:py-32 border-t border-border/50">
        <motion.div {...fadeUp} className="max-w-6xl mx-auto">
          <p className="text-sm text-muted-foreground uppercase tracking-widest mb-2">Find me</p>
          <h2 className="font-display text-5xl sm:text-6xl mb-12">Every link, one place.</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { icon: Twitch, label: "Twitch", handle: "twitch.tv/isaarinne", href: "https://www.twitch.tv/isaarinne", desc: "Live streams — Overwatch & Just Chatting" },
              { icon: MessageCircle, label: "Discord", handle: "discord.gg/isaarinne", href: "https://discord.com/invite/mAYjD2HX3p", desc: "Join the community server" },
              { icon: Instagram, label: "Instagram", handle: "@isaarinne", href: "https://www.instagram.com/isaarinne", desc: "Photos & daily moments" },
              { icon: Music2, label: "TikTok", handle: "@isaarinne", href: "https://www.tiktok.com/@isaarinne", desc: "Clips & short videos" },
            ].map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.6 }}
                  whileHover={{ y: -4 }}
                  className="group p-6 rounded-2xl bg-card border border-border hover:border-foreground/30 transition-colors flex items-center gap-5"
                >
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium">{s.label}</div>
                    <div className="text-sm text-muted-foreground">{s.desc}</div>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </section>

      <footer className="px-6 py-12 border-t border-border/50 text-center text-sm text-muted-foreground">
        <p className="font-display text-2xl text-foreground mb-2">isaarinne</p>
        <p>© {new Date().getFullYear()} — See you on stream.</p>
      </footer>
    </div>
  );
}
