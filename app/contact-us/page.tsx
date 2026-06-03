import type { Metadata } from "next";
import { teko, saira } from "../fonts";
import { ORANGE, BLUE } from "../brand";
import PageHero from "../components/PageHero";

export const metadata: Metadata = {
  title: "Contact Us | Tornado Alley F3",
  description:
    "Get in touch with F3 Tornado Alley. Reach out via email or connect with us on social media for questions about workouts, locations, and getting started.",
  keywords: ["F3 Tornado Alley contact", "F3 Oklahoma contact", "F3 workout questions", "F3 Tornado Alley email"],
  openGraph: {
    title: "Contact Us | Tornado Alley F3",
    description: "Get in touch with F3 Tornado Alley via email or social media.",
    url: "https://tornadoalley.f3nation.com/contact-us",
  },
};

const socials = [
  { name: "Facebook", href: "https://www.facebook.com/f3tornadoalley" },
  { name: "Instagram", href: "https://www.instagram.com/f3tornadoalley/" },
  { name: "X / Twitter", href: "https://x.com/f3tornadoalley" },
  { name: "TikTok", href: "https://www.tiktok.com/@f3tornadoalley" },
];

export default function ContactUsPage() {
  return (
    <main className={`${saira.className} min-h-screen bg-[#0A1424] text-white`}>
      <PageHero
        kicker="Get In Touch"
        title="Contact Us"
        subtitle="Questions about workouts, locations, or getting started? We'd love to hear from you."
      />

      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Email */}
          <div className="bg-[#111E33] border-t-4 p-8" style={{ borderColor: ORANGE }}>
            <h2 className={`${teko.className} font-black italic uppercase text-3xl mb-3`}>Email Us</h2>
            <p className="text-gray-400 mb-5">Send us a note and we&apos;ll get back to you as soon as possible.</p>
            <a
              href="mailto:f3tornadoalley@gmail.com"
              className="group inline-flex items-center gap-2 font-bold uppercase tracking-wide transition-colors"
              style={{ color: "#5BB4E8" }}
            >
              f3tornadoalley@gmail.com
              <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </a>
          </div>

          {/* Social */}
          <div className="bg-[#111E33] border-t-4 p-8" style={{ borderColor: BLUE }}>
            <h2 className={`${teko.className} font-black italic uppercase text-3xl mb-3`}>Follow Us</h2>
            <p className="text-gray-400 mb-5">Stay connected and follow our latest updates on social media.</p>
            <div className="flex flex-col gap-2.5">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 font-semibold uppercase tracking-wide text-gray-300 transition-colors hover:text-white"
                >
                  {s.name}
                  <span className="transition-transform duration-200 group-hover:translate-x-1" style={{ color: ORANGE }}>↗</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
