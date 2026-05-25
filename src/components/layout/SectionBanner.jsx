export default function SectionBanner({ title, imageUrl, darkText = false }) {
  return (
    <div
      className="w-full min-h-[120px] h-32 md:h-40 bg-cover bg-center grid"
      style={{ backgroundImage: `url('${imageUrl}')` }}
    >
      <span
        className={`place-self-center text-lg md:text-xl font-semibold px-4 text-center ${
          darkText ? "text-slate-900" : "text-white drop-shadow"
        }`}
      >
        {title}
      </span>
    </div>
  );
}
