import { BsPersonWorkspace } from "react-icons/bs";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress, SiMongodb, SiPostgresql } from "react-icons/si";
import { experiences } from "../data";
import SectionHeading from "./SectionHeading";

// Small tech badges that orbit the illustration.
const badges = [
  { Icon: FaNodeJs, className: "top-2 left-8 text-green-400", delay: "0s" },
  { Icon: SiPostgresql, className: "top-16 right-0 text-sky-400", delay: "0.8s" },
  { Icon: SiExpress, className: "bottom-14 left-0 text-gray-200", delay: "1.6s" },
  { Icon: SiMongodb, className: "bottom-0 right-12 text-green-500", delay: "2.4s" },
];

function Illustration() {
  return (
    <div className="relative flex h-80 w-80 items-center justify-center">
      {/* Ambient glow */}
      <span className="absolute inset-4 rounded-full bg-gradient-to-br from-brand-violet/30 via-brand-violet/5 to-brand-pink/25 blur-2xl" />

      {/* Rotating dashed ring */}
      <span className="animate-spin-slow absolute inset-0 rounded-full border-2 border-dashed border-brand-violet/40" />

      {/* Static inner ring */}
      <span className="absolute inset-10 rounded-full border border-brand-pink/25" />

      {/* Core disc */}
      <div className="animate-float relative flex h-44 w-44 items-center justify-center rounded-full border border-line bg-panel shadow-2xl shadow-black/60">
        <BsPersonWorkspace className="text-brand-green" size={80} />
      </div>

      {/* Orbiting tech badges */}
      {badges.map(({ Icon, className, delay }, i) => (
        <span
          key={i}
          style={{ animationDelay: delay }}
          className={`animate-float absolute flex h-12 w-12 items-center justify-center rounded-xl border border-line bg-panel shadow-lg shadow-black/50 ${className}`}
        >
          <Icon size={24} />
        </span>
      ))}
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="relative my-12 lg:my-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Below lg there is no side column, so the heading sits on top as usual. */}
        <div className="lg:hidden">
          <SectionHeading title="EXPERIENCES" />
        </div>

        <div className="mt-10 grid grid-cols-1 gap-10 lg:mt-0 lg:grid-cols-2 lg:gap-16">
          {/* Left — heading and illustration pinned together as a single block,
              so neither can slide underneath the other while the cards scroll. */}
          <div className="hidden lg:block">
            <div className="sticky top-24 flex flex-col items-center gap-10">
              <SectionHeading title="EXPERIENCES" />
              <Illustration />
            </div>
          </div>

          {/* Right — timeline of cards */}
          <div className="relative flex flex-col gap-6 lg:pt-2">
            {/* Timeline spine */}
            <span className="absolute top-3 bottom-3 left-[5px] hidden w-[2px] bg-gradient-to-b from-brand-pink via-brand-violet to-transparent lg:block" />

            {experiences.map((exp) => (
              <div key={exp.id} className="relative lg:pl-10">
                {/* Timeline dot */}
                <span className="absolute top-8 left-0 hidden h-3 w-3 rounded-full bg-brand-pink ring-4 ring-navy lg:block" />

                <article className="rounded-lg border border-brand-violet/60 bg-panel p-5 transition-all duration-300 hover:-translate-y-1 hover:border-brand-violet hover:shadow-lg hover:shadow-brand-violet/10 sm:p-6">
                  <div className="flex flex-wrap items-center gap-2 text-base font-semibold">
                    <span className="text-brand-green">{exp.duration}</span>
                  </div>
                  <h3 className="mt-3 text-xl font-bold text-white sm:text-2xl">
                    {exp.title}
                  </h3>
                  <p className="mt-1.5 text-base font-medium text-brand-pink">
                    {exp.company}
                  </p>
                  <p className="mt-4 text-base leading-8 text-gray-400">
                    {exp.description}
                  </p>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
