import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot, faMicrophone } from "@fortawesome/free-solid-svg-icons";
import { CONTACT, IMAGES, SECTION_IDS, SITE } from "../../constants";
import SectionBanner from "../layout/SectionBanner";
import ContactForm from "../forms/ContactForm";

export default function ContactSection() {
  return (
    <section id={SECTION_IDS.contact} className="scroll-mt-16">
      <SectionBanner title={CONTACT.bannerTitle} imageUrl={IMAGES.laptop} />

      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        <div className="flex flex-col items-center md:items-start gap-2">
          <FontAwesomeIcon icon={faLocationDot} className="text-blue-900 text-xl" />
          <p className="font-bold text-lg">Address</p>
          <p className="text-sm text-slate-700">
            {SITE.address.line1} {SITE.address.line2}
          </p>
        </div>
        <div className="flex flex-col items-center md:items-start gap-2">
          <FontAwesomeIcon icon={faMicrophone} className="text-blue-900 text-xl" />
          <p className="font-bold text-lg">Phones</p>
          <p className="text-sm text-slate-700">Support: {SITE.phone}</p>
        </div>
        <div className="flex flex-col items-center md:items-start gap-2">
          <FontAwesomeIcon icon={faEnvelope} className="text-blue-900 text-xl" />
          <p className="font-bold text-lg">Email</p>
          <p className="text-sm text-slate-700">{SITE.email}</p>
        </div>
      </div>

      <p className="text-center text-sm text-slate-600 px-4 mb-8">{CONTACT.inquiryNote}</p>

      <div className="max-w-7xl mx-auto px-4 pb-14 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="w-full aspect-[4/3] min-h-[280px] rounded-lg overflow-hidden">
          <iframe
            title="Amband office location"
            src={SITE.mapEmbedUrl}
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
