import { FaAward, FaBookOpen, FaCertificate, FaGraduationCap } from "react-icons/fa";
import { MdSchool } from "react-icons/md";
import { educations } from "../data";
import SectionHeading from "./SectionHeading";

// Small badges that orbit the illustration.
const badges = [
  { Icon: FaCertificate, className: "top-2 right-8 text-amber-300", delay: "0s" },
  { Icon: FaBookOpen, className: "top-20 left-0 text-sky-300", delay: "0.8s" },
  { Icon: MdSchool, className: "bottom-12 right-0 text-brand-green", delay: "1.6s" },
  { Icon: FaAward, className: "bottom-0 left-12 text-brand-pink", delay: "2.4s" },
];

function Illustration() {
  return (
    <div className="relative flex h-80 w-80 items-center justify-center">
      <span className="absolute inset-4 rounded-full bg-gradient-to-br from-brand-pink/25 via-brand-violet/5 to-brand-violet/30 blur-2xl" />
      <span className="animate-spin-slow absolute inset-0 rounded-full border-2 border-dashed border-brand-pink/40" />
      <span className="absolute inset-10 rounded-full border border-brand-violet/25" />

      <div className="animate-float relative flex h-44 w-44 items-center justify-center rounded-full border border-line bg-panel shadow-2xl shadow-black/60">
        <FaGraduationCap className="text-brand-green" size={86} />
      </div>

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

function Card({ duration, title, subtitle, grade }) {
  return (
    <article className="rounded-lg border border-brand-violet/60 bg-panel p-5 transition-all duration-300 hover:-translate-y-1 hover:border-brand-violet hover:shadow-lg hover:shadow-brand-violet/10 sm:p-6">
      {duration && (
        <p className="text-base font-semibold text-brand-green">{duration}</p>
      )}
      <h3 className="mt-3 text-xl font-bold text-white sm:text-2xl">{title}</h3>
      <p className="mt-1.5 text-base font-medium text-brand-pink">{subtitle}</p>
      {grade && <p className="mt-3 text-base text-gray-400">{grade}</p>}
    </article>
  );
}

export default function Education() {
  return (
    <section id="education" className="relative my-12 lg:my-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:hidden">
          <SectionHeading title="EDUCATION" />
        </div>

        <div className="mt-10 grid grid-cols-1 gap-10 lg:mt-0 lg:grid-cols-2 lg:gap-16">
          {/* Left — heading and illustration pinned together as a single block. */}
          <div className="hidden lg:block">
            <div className="sticky top-24 flex flex-col items-center gap-10">
              <SectionHeading title="EDUCATION" />
              <Illustration />
            </div>
          </div>

          {/* Right — timeline of cards */}
          <div className="relative flex flex-col gap-6 lg:pt-2">
            <span className="absolute top-3 bottom-3 left-[5px] hidden w-[2px] bg-gradient-to-b from-brand-pink via-brand-violet to-transparent lg:block" />

            {educations.map((edu) => (
              <div key={edu.id} className="relative lg:pl-10">
                <span className="absolute top-8 left-0 hidden h-3 w-3 rounded-full bg-brand-pink ring-4 ring-navy lg:block" />
                <Card
                  duration={edu.duration}
                  title={edu.title}
                  subtitle={edu.institution}
                  grade={edu.grade}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
