import type { Metadata } from "next";
import { teko, saira } from "../fonts";
import { ORANGE, BLUE } from "../brand";
import PageHero from "../components/PageHero";
import SocialIcons from "../components/SocialIcons";
import InstagramEmbed from "../components/InstagramEmbed";

const FB_TIMELINE =
  "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ff3tornadoalley&tabs=timeline&width=500&height=620&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true";

export const metadata: Metadata = {
  title: "Contact Us | Tornado Alley F3",
  description:
    "Get in touch with F3 Tornado Alley. Reach out via email or connect with us on social media for questions about workouts, locations, and getting started.",
  keywords: ["F3 Tornado Alley contact", "F3 Oklahoma contact", "F3 workout questions", "F3 Tornado Alley email"],
  alternates: { canonical: "/contact-us/" },
  openGraph: {
    title: "Contact Us | Tornado Alley F3",
    description: "Get in touch with F3 Tornado Alley via email or social media.",
    url: "https://tornadoalley.f3nation.com/contact-us/",
    images: ["/images/og-image.png"],
  },
};

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
            <SocialIcons size={30} className="gap-5" />
          </div>
        </div>
      </div>

      {/* ============ LATEST POSTS (social embeds) ============ */}
      <section className="max-w-5xl mx-auto px-6 pb-20">
        <h2 className={`${teko.className} font-black italic uppercase text-3xl md:text-4xl mb-6`}>
          Latest Posts
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Facebook page timeline */}
          <div className="bg-[#111E33] border-t-4 p-4 flex items-center justify-center" style={{ borderColor: BLUE }}>
            <iframe
              src={FB_TIMELINE}
              title="F3 Tornado Alley on Facebook"
              loading="lazy"
              className="w-full max-w-125 h-155 border-0 rounded-sm bg-white"
              scrolling="no"
              allow="encrypted-media"
            />
          </div>

          {/* Instagram post */}
          <div className="bg-[#111E33] border-t-4 p-4 flex items-center justify-center" style={{ borderColor: ORANGE }}>
            <InstagramEmbed url="https://www.instagram.com/p/DZA6Y5GnMs-/" />
          </div>
        </div>
        <p className="text-gray-500 text-sm mt-4">
          Follow us on X &amp; TikTok for more — see the links above.
        </p>
      </section>
    </main>
  );
}
