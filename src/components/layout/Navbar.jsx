import { useState, useEffect } from "react";
import { IMAGES, NAV_ITEMS, SECTION_IDS } from "../../constants";
import { scrollToSection } from "../../utils/scrollToSection";

function NavLink({ label, sectionId, onNavigate, className = "" }) {
  return (
    <button
      type="button"
      onClick={() => onNavigate(sectionId)}
      className={`text-left w-full md:w-auto text-slate-800 hover:text-blue-700 transition-colors ${className}`}
    >
      {label}
    </button>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [expanded, setExpanded] = useState(null);

  const navigate = (sectionId) => {
    scrollToSection(sectionId);
    setMenuOpen(false);
    setExpanded(null);
  };

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={() => navigate(SECTION_IDS.home)}
          className="shrink-0"
          aria-label="Go to home"
        >
          <img src={IMAGES.logo} alt="Amband logo" className="h-10 w-auto md:h-12" />
        </button>

        <ul className="hidden lg:flex items-center gap-5 text-sm">
          {NAV_ITEMS.map((item) =>
            item.children ? (
              <li key={item.label} className="relative group">
                <button
                  type="button"
                  onClick={() => navigate(item.sectionId)}
                  className="text-slate-800 hover:text-blue-700 font-medium"
                >
                  {item.label}
                </button>
                <ul className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all min-w-[240px]">
                  <li className="bg-white border border-slate-200 rounded-md shadow-lg py-1">
                    {item.children.map((child) => (
                      <li key={child.label}>
                        <button
                          type="button"
                          onClick={() => navigate(child.sectionId)}
                          className="block w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 whitespace-nowrap"
                        >
                          {child.label}
                        </button>
                      </li>
                    ))}
                  </li>
                </ul>
              </li>
            ) : (
              <li key={item.label}>
                <NavLink
                  label={item.label}
                  sectionId={item.sectionId}
                  onNavigate={navigate}
                  className="font-medium"
                />
              </li>
            )
          )}
        </ul>

        <button
          type="button"
          className="lg:hidden p-2 text-slate-800 rounded-md hover:bg-slate-100"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((o) => !o)}
        >
          {menuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {menuOpen && (
        <>
          <div
            className="lg:hidden fixed inset-0 top-[60px] bg-black/40 z-40"
            aria-hidden
            onClick={() => setMenuOpen(false)}
          />
          <div className="lg:hidden fixed inset-x-0 top-[60px] bottom-0 z-50 bg-white overflow-y-auto">
            <ul className="flex flex-col p-4 gap-1 text-base">
              {NAV_ITEMS.map((item) => (
                <li key={item.label} className="border-b border-slate-100 last:border-0">
                  {item.children ? (
                    <>
                      <button
                        type="button"
                        className="flex w-full items-center justify-between py-3 font-medium text-slate-800"
                        onClick={() =>
                          setExpanded((e) => (e === item.label ? null : item.label))
                        }
                      >
                        {item.label}
                        <span className="text-slate-400">
                          {expanded === item.label ? "−" : "+"}
                        </span>
                      </button>
                      {expanded === item.label && (
                        <ul className="pb-3 pl-4 flex flex-col gap-2">
                          <li>
                            <NavLink
                              label={`All ${item.label}`}
                              sectionId={item.sectionId}
                              onNavigate={navigate}
                              className="text-sm text-blue-700"
                            />
                          </li>
                          {item.children.map((child) => (
                            <li key={child.label}>
                              <NavLink
                                label={child.label}
                                sectionId={child.sectionId}
                                onNavigate={navigate}
                                className="text-sm"
                              />
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <div className="py-3">
                      <NavLink
                        label={item.label}
                        sectionId={item.sectionId}
                        onNavigate={navigate}
                        className="font-medium"
                      />
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </nav>
  );
}
