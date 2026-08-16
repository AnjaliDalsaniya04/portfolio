import { SiClaude } from "react-icons/si";
import {
  TbBinaryTree,
  TbBoxMultiple,
  TbBrandOpenai,
  TbGhost2,
  TbRocket,
  TbTerminal2,
} from "react-icons/tb";
import { DEVICON_BASE, skills } from "../data";
import SectionHeading from "./SectionHeading";

// Icons for entries devicon does not publish.
//   chatgpt / claude -> real brand marks (OpenAI, Claude).
//   codex / kiro / antigravity -> no brand glyph exists in any icon set, so
//   these are deliberate stand-ins: a CLI prompt, a ghost, a rocket.
//   dsa / oop -> concepts rather than products: a binary tree and stacked
//   objects are the conventional symbols.
const REACT_ICONS = {
  chatgpt: TbBrandOpenai,
  claude: SiClaude,
  codex: TbTerminal2,
  kiro: TbGhost2,
  antigravity: TbRocket,
  dsa: TbBinaryTree,
  oop: TbBoxMultiple,
};

function SkillIcon({ skill }) {
  const Icon = skill.reactIcon ? REACT_ICONS[skill.reactIcon] : null;

  if (Icon) {
    return (
      <Icon
        aria-hidden="true"
        className={`h-12 w-12 transition-transform duration-300 group-hover:scale-110 sm:h-14 sm:w-14 ${
          skill.color ?? "text-gray-200"
        }`}
      />
    );
  }

  // Remote CDN SVGs are served as plain <img>: next/image would need
  // remotePatterns + dangerouslyAllowSVG for third-party SVG.
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`${DEVICON_BASE}${skill.icon}`}
      alt={`${skill.name} logo`}
      width={56}
      height={56}
      loading="lazy"
      className={`h-12 w-12 transition-transform duration-300 group-hover:scale-110 sm:h-14 sm:w-14 ${
        skill.invert ? "invert" : ""
      }`}
    />
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative my-12 lg:my-24">
      <div className="pointer-events-none absolute inset-x-0 top-1/2 h-64 bg-brand-violet/5 blur-[120px]" />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="SKILLS" />

        {/* Fixed-width cards in a centred wrap rather than a rigid grid, so a
            row that does not divide evenly still centres instead of leaving an
            orphan card hanging on the left. */}
        <div className="mt-14 flex flex-wrap justify-center gap-4 sm:gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group flex w-[calc(50%-0.5rem)] flex-col items-center justify-center gap-4 rounded-lg border border-line bg-panel px-4 py-8 transition-all duration-300 hover:-translate-y-1 hover:border-brand-violet sm:w-36 lg:w-40"
            >
              <SkillIcon skill={skill} />
              <p className="text-center text-sm font-medium text-gray-300 sm:text-base">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
