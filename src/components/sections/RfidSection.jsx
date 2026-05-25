import { IMAGES, RFID, SECTION_IDS } from "../../constants";
import SectionBanner from "../layout/SectionBanner";

export default function RfidSection() {
  return (
    <section id={SECTION_IDS.rfid} className="scroll-mt-16">
      <SectionBanner title={RFID.bannerTitle} imageUrl={IMAGES.laptop} />

      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
          {RFID.intro.map((p) => (
            <p key={p.slice(0, 40)}>{p}</p>
          ))}
        </div>
        <img
          src={IMAGES.rfid}
          alt="RFID technology"
          className="w-full h-auto max-h-96 object-cover rounded-lg"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-14 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {RFID.cards.map((card) => (
          <article
            key={card.title}
            className="border-2 border-dashed border-slate-800 rounded-lg p-4 flex flex-col min-h-[220px]"
          >
            <h3 className="font-bold text-sm mb-2">{card.title}</h3>
            <p className="text-xs leading-relaxed text-slate-700 flex-1">{card.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
