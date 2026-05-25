import { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { HOME, IMAGES, SECTION_IDS } from "../../constants";
import ContactForm from "../forms/ContactForm";
import { scrollToSection } from "../../utils/scrollToSection";

export default function HomeSection() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <section id={SECTION_IDS.home} className="scroll-mt-16">
      <div
        className="w-full min-h-[200px] h-48 md:h-72 bg-cover bg-center"
        style={{ backgroundImage: `url('${IMAGES.hero}')` }}
        role="img"
        aria-label="Amband hero"
      />

      <div className="max-w-7xl mx-auto px-4 py-10 md:py-14">
        <h1 className="text-2xl md:text-3xl font-bold text-center">{HOME.welcomeTitle}</h1>
        <p className="mt-6 text-sm md:text-base text-center max-w-3xl mx-auto leading-relaxed text-slate-700">
          {HOME.welcomeBody}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 bg-slate-200">
        <div className="p-6 md:p-10 lg:p-14 order-2 md:order-1">
          <h2 className="text-xl md:text-2xl font-bold mb-6">{HOME.whoWeAreTitle}</h2>
          <h3 className="text-lg md:text-xl font-bold mb-4">{HOME.philosophyTitle}</h3>
          {HOME.philosophyParagraphs.map((p) => (
            <p key={p.slice(0, 40)} className="text-sm md:text-base leading-relaxed mb-4 text-slate-700">
              {p}
            </p>
          ))}
        </div>
        <div
          className="min-h-[200px] md:min-h-[320px] bg-cover bg-center order-1 md:order-2"
          style={{ backgroundImage: `url('${IMAGES.team}')` }}
          role="img"
          aria-label="Amband team"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10">
        <h2 className="text-xl md:text-2xl font-bold text-center mb-8">{HOME.ourWorkTitle}</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {HOME.workItems.map((item) => (
            <article
              key={item.title}
              className="p-4 rounded-lg border border-slate-200 bg-white shadow-sm"
            >
              <h3 className="font-bold mb-3">{item.title}</h3>
              <p className="text-sm leading-relaxed text-slate-700 mb-3">{item.body}</p>
              {"list" in item && item.list && (
                <ul className="text-sm list-disc pl-5 mb-3 text-slate-700">
                  {item.list.map((li) => (
                    <li key={li}>{li}</li>
                  ))}
                </ul>
              )}
              <button
                type="button"
                onClick={() => scrollToSection(item.sectionId)}
                className="text-blue-700 text-sm font-medium hover:underline"
              >
                Read More
              </button>
            </article>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <img
          src={IMAGES.mobile}
          alt="Mobile app development"
          className="w-full max-w-sm mx-auto h-auto"
        />
        <div>
          <h2 className="text-xl md:text-2xl font-bold mb-4">{HOME.mobileTitle}</h2>
          <p className="text-sm md:text-base leading-relaxed text-slate-700">{HOME.mobileBody}</p>
        </div>
      </div>

      <div className="bg-blue-900 text-white py-12 px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-3">{HOME.ctaTitle}</h2>
        <p className="text-sm md:text-base mb-6">{HOME.ctaBody}</p>
        <button
          type="button"
          onClick={() => setContactOpen(true)}
          className="bg-white text-slate-900 px-6 py-2.5 rounded-md text-sm font-medium hover:bg-slate-200 transition"
        >
          {HOME.ctaButton}
        </button>
      </div>

      <Modal open={contactOpen} onClose={() => setContactOpen(false)}>
        <Box className="fixed inset-0 flex items-center justify-center p-4 pointer-events-none">
          <Box className="pointer-events-auto max-h-[90vh] overflow-y-auto w-full max-w-lg">
            <ContactForm onSuccess={() => setContactOpen(false)} />
          </Box>
        </Box>
      </Modal>
    </section>
  );
}
