import { BIG_DATA, IMAGES, SECTION_IDS } from "../../constants";
import SectionBanner from "../layout/SectionBanner";

export default function BigDataSection() {
  return (
    <section id={SECTION_IDS.bigData} className="scroll-mt-16">
      <SectionBanner title={BIG_DATA.bannerTitle} imageUrl={IMAGES.subBanner} darkText />

      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <img
          src={IMAGES.bigData}
          alt="Big data"
          className="w-full max-h-96 object-contain rounded-lg order-2 lg:order-1"
        />
        <div className="text-sm md:text-base leading-relaxed text-slate-700 space-y-4 order-1 lg:order-2">
          {BIG_DATA.paragraphs.map((p) => (
            <p key={p.slice(0, 40)}>{p}</p>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-14 grid grid-cols-1 md:grid-cols-3 gap-6">
        {BIG_DATA.cards.map((card) => (
          <article
            key={card.title}
            className="border-2 border-dashed border-slate-800 rounded-lg p-6 text-center min-h-[200px] flex flex-col justify-center"
          >
            <h3 className="font-bold text-xl mb-3">{card.title}</h3>
            <p className="text-xs leading-relaxed text-slate-700">{card.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
