// Shared heading used by Experience, Skills, Projects, Education and Contact.
//
// The flanking lines are `flex-1` with a max width rather than a fixed width, so
// the heading fits whatever container it is dropped into. In a full-width
// section they grow to the 40-unit cap and look exactly as before; inside the
// narrower sticky column on Experience/Education they shrink to fit instead of
// overflowing.
export default function SectionHeading({ title }) {
  return (
    <div className="w-full">
      <div className="flex items-center justify-start gap-4">
        <span className="section-title-line h-[2px] min-w-6 flex-1 max-w-16 sm:max-w-40" />
        <h2 className="shrink-0 rounded-md bg-panel px-5 py-2.5 text-xl font-bold tracking-[0.15em] text-white sm:px-8 sm:text-2xl">
          {title}
        </h2>
        <span className="section-title-line h-[2px] min-w-6 flex-1 max-w-16 sm:max-w-40" />
      </div>
    </div>
  );
}
