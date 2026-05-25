import { IMAGES, SECTION_IDS, SERVICES } from "../../constants";
import SectionBanner from "../layout/SectionBanner";

export default function ServicesSection() {
  return (
    <section id={SECTION_IDS.services} className="scroll-mt-16">
      <SectionBanner title={SERVICES.bannerTitle} imageUrl={IMAGES.services} />

      <div className="max-w-7xl mx-auto px-4 py-10">
        <h2 className="text-xl md:text-2xl font-bold text-blue-900 text-center mb-2">
          {SERVICES.introTitle}
        </h2>
        <p className="text-sm md:text-base text-center text-slate-600 mb-10">{SERVICES.introBody}</p>

        <div className="flex flex-col gap-12">
          {SERVICES.items.map((item) => (
            <article
              key={item.title}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center"
            >
              <img
                src={item.image}
                alt={item.imageAlt}
                className={`w-full h-48 md:h-64 object-cover rounded-lg ${
                  item.imageFirst ? "" : "md:order-2"
                }`}
              />
              <div
                className={`${item.imageFirst ? "md:text-left" : "md:text-right md:order-1"}`}
              >
                <h3 className="text-lg font-bold text-blue-900 mb-2">{item.title}</h3>
                <p className="text-sm italic mb-2">
                  <strong>{item.subtitle}</strong>
                </p>
                <p className="text-sm leading-relaxed text-slate-700">{item.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
