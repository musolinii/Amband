import { COMMUNICATIONS, IMAGES, SECTION_IDS } from "../../constants";
import SectionBanner from "../layout/SectionBanner";

export default function CommunicationsSection() {
  return (
    <section id={SECTION_IDS.communications} className="scroll-mt-16">
      <SectionBanner title={COMMUNICATIONS.bannerTitle} imageUrl={IMAGES.laptop} />

      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {COMMUNICATIONS.items.map((item) => (
          <article key={item.title} className="leading-relaxed">
            <h3 className="text-lg md:text-xl font-bold text-blue-900 mb-3">{item.title}</h3>
            {item.paragraphs.map((p) => (
              <p key={p.slice(0, 40)} className="text-sm text-slate-700 mb-3">
                {p}
              </p>
            ))}
            {"image" in item && item.image && (
              <img
                src={item.image}
                alt={item.imageAlt ?? item.title}
                className="w-full rounded-lg mt-2 max-h-64 object-cover"
              />
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
