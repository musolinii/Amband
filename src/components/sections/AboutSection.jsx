import { ABOUT, IMAGES, SECTION_IDS } from "../../constants";
import SectionBanner from "../layout/SectionBanner";

function FlipCard({ front, title, body, list, intro }) {
  return (
    <div className="flip-card w-full max-w-md mx-auto">
      <div className="flip-card-inner">
        <div className="flip-card-front flex items-center justify-center border-2 border-slate-900 rounded-lg bg-slate-50">
          <h3 className="font-bold text-lg">{front}</h3>
        </div>
        <div className="flip-card-back flex flex-col items-center justify-center border-2 border-slate-900 rounded-lg bg-white p-4 text-sm leading-relaxed overflow-y-auto">
          <h3 className="font-bold mb-3">{title}</h3>
          {intro && <p className="mb-2 text-center">{intro}</p>}
          {body && <p className="text-center">{body}</p>}
          {list && (
            <ul className="mt-2 list-disc pl-5 text-left w-full">
              {list.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default function AboutSection() {
  return (
    <section id={SECTION_IDS.about} className="scroll-mt-16">
      <SectionBanner title={ABOUT.bannerTitle} imageUrl={IMAGES.teamBanner} />

      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h2 className="text-lg md:text-xl font-bold mb-4">{ABOUT.heading}</h2>
          {ABOUT.paragraphs.map((p) => (
            <p key={p.slice(0, 40)} className="text-sm md:text-base leading-relaxed mb-4 text-slate-700">
              {p}
            </p>
          ))}
        </div>
        <div
          className="min-h-[240px] rounded-lg bg-cover bg-center"
          style={{ backgroundImage: `url('${IMAGES.team}')` }}
          role="img"
          aria-label="Team"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-14 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {ABOUT.cards.map((card) => (
          <FlipCard
            key={card.front}
            front={card.front}
            title={card.title}
            body={"body" in card ? card.body : undefined}
            intro={"intro" in card ? card.intro : undefined}
            list={"list" in card ? card.list : undefined}
          />
        ))}
      </div>
    </section>
  );
}
