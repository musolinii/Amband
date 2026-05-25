import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUp,
  faEnvelope,
  faGlobe,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { ABOUT, FOOTER_QUICK_LINKS, SECTION_IDS, SITE } from "../../constants";
import { scrollToSection } from "../../utils/scrollToSection";

export default function SiteFooter() {
  return (
    <>
      <footer className="bg-slate-100 py-8 text-slate-600 w-full">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm leading-relaxed">
            <div>
              <h3 className="text-lg font-bold mb-4 text-slate-800">About Us</h3>
              <p>{ABOUT.footerBlurb}</p>
              <p className="mt-3">{ABOUT.footerBlurbContinued}</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 text-slate-800">Quick Links</h3>
              <ul className="space-y-1">
                {FOOTER_QUICK_LINKS.map((label) => (
                  <li key={label}>
                    <button
                      type="button"
                      onClick={() => scrollToSection(SECTION_IDS.services)}
                      className="hover:underline text-left"
                    >
                      {label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 text-slate-800">Contact</h3>
              <p className="mb-2">
                <FontAwesomeIcon icon={faPhone} className="mr-2" />
                {SITE.phone}
              </p>
              <p className="mb-2">
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                {SITE.email}
              </p>
              <p className="mb-2">
                <FontAwesomeIcon icon={faLocationDot} className="mr-2" />
                {SITE.address.line1}
                <br />
                {SITE.address.line2}
                <br />
                {SITE.address.line3}
              </p>
              <p>
                <FontAwesomeIcon icon={faGlobe} className="mr-2" />
                {SITE.website}
              </p>
            </div>
          </div>
        </div>
      </footer>

      <footer className="bg-slate-200 text-slate-600 py-4 w-full">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between gap-4">
          <p className="text-sm text-slate-500">{SITE.copyright}</p>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="p-2 rounded-full hover:bg-slate-400/30 transition"
            aria-label="Back to top"
          >
            <FontAwesomeIcon icon={faArrowUp} />
          </button>
        </div>
      </footer>
    </>
  );
}
