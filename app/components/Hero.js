import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { MdDownload } from "react-icons/md";
import { personalData } from "../data";

const socials = [
  { href: personalData.github, label: "GitHub", Icon: FaGithub },
  { href: personalData.linkedIn, label: "LinkedIn", Icon: FaLinkedin },
  { href: personalData.leetcode, label: "LeetCode", Icon: SiLeetcode },
];

function Line({ children, indent = 0 }) {
  return (
    <p style={{ paddingLeft: `${indent * 1}rem` }} className="leading-7">
      {children}
    </p>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-16 lg:pt-36">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-brand-violet/20 blur-[110px]" />
      <div className="pointer-events-none absolute top-40 right-0 h-72 w-72 rounded-full bg-brand-pink/10 blur-[120px]" />

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-8">
        {/* Left */}
        <div className="animate-fade-up order-2 lg:order-1">
          <h1 className="text-4xl font-bold leading-snug text-white sm:text-5xl lg:text-[3.25rem] lg:leading-[1.2]">
            Hello, <br />
            This is{" "}
            <span className="text-brand-pink">{personalData.name}</span>
            <br className="hidden sm:block" />
            I&apos;m a Professional{" "}
            <span className="text-brand-green">
              {personalData.designation}
            </span>
            .
          </h1>

          <div className="my-8 flex items-center gap-5">
            {socials.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:text-brand-pink"
              >
                <Icon size={34} />
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="rounded-full bg-gradient-to-r from-brand-pink to-brand-violet px-7 py-3.5 text-center text-base font-semibold tracking-wide text-white transition-transform duration-300 hover:scale-105"
            >
              CONTACT ME
            </a>
            <a
              href={personalData.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2 rounded-full border border-brand-pink px-7 py-3.5 text-base font-semibold tracking-wide text-brand-pink transition-colors duration-300 hover:bg-brand-pink hover:text-white"
            >
              GET RESUME
              <MdDownload size={18} />
            </a>
          </div>
        </div>

        {/* Right — code editor card */}
        <div className="order-1 w-full lg:order-2">
          <div className="overflow-hidden rounded-xl border border-line bg-panel shadow-2xl shadow-black/40">
            <div className="flex items-center gap-2 border-b border-line px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-red-500" />
              <span className="h-3 w-3 rounded-full bg-amber-400" />
              <span className="h-3 w-3 rounded-full bg-green-500" />
            </div>

            <div className="overflow-x-auto px-4 py-5 font-mono text-sm sm:px-6 sm:text-base">
              <div className="min-w-[19rem] text-gray-300">
                <Line>
                  <span className="text-brand-pink">const</span>{" "}
                  <span className="text-gray-100">coder</span>{" "}
                  <span className="text-brand-pink">=</span>{" "}
                  <span className="text-gray-400">{"{"}</span>
                </Line>

                <Line indent={1}>
                  <span className="text-white">name:</span>{" "}
                  <span className="text-amber-300">
                    &apos;{personalData.name}&apos;
                  </span>
                  ,
                </Line>
                <Line indent={1}>
                  <span className="text-white">role:</span>{" "}
                  <span className="text-amber-300">
                    &apos;{personalData.designation}&apos;
                  </span>
                  ,
                </Line>
                <Line indent={1}>
                  <span className="text-white">languages:</span>{" "}
                  <span className="text-gray-400">[</span>
                  <span className="text-amber-300">
                    &apos;JavaScript&apos;, &apos;Java&apos;
                  </span>
                  <span className="text-gray-400">]</span>,
                </Line>
                <Line indent={1}>
                  <span className="text-white">backend:</span>{" "}
                  <span className="text-gray-400">[</span>
                  <span className="text-amber-300">
                    &apos;Node.js&apos;, &apos;Express.js&apos;
                  </span>
                  <span className="text-gray-400">]</span>,
                </Line>
                <Line indent={1}>
                  <span className="text-white">databases:</span>{" "}
                  <span className="text-gray-400">[</span>
                  <span className="text-amber-300">
                    &apos;PostgreSQL&apos;, &apos;MongoDB&apos;,
                    &apos;MySQL&apos;
                  </span>
                  <span className="text-gray-400">]</span>,
                </Line>
                <Line indent={1}>
                  <span className="text-white">tools:</span>{" "}
                  <span className="text-gray-400">[</span>
                  <span className="text-amber-300">
                    &apos;Git&apos;, &apos;Postman&apos;, &apos;VS Code&apos;
                  </span>
                  <span className="text-gray-400">]</span>,
                </Line>
                <Line indent={1}>
                  <span className="text-white">aiTools:</span>{" "}
                  <span className="text-gray-400">[</span>
                  <span className="text-amber-300">
                    &apos;ChatGPT&apos;, &apos;Claude&apos;,
                    &apos;Codex&apos;
                  </span>
                  <span className="text-gray-400">]</span>,
                </Line>
                <Line indent={1}>
                  <span className="text-white">currentlyBuilding:</span>{" "}
                  <span className="text-amber-300">
                    &apos;HRMS-ERP System&apos;
                  </span>
                  ,
                </Line>

                <Line indent={1}>
                  <span className="text-white">hireable:</span>{" "}
                  <span className="text-brand-violet">function</span>
                  <span className="text-gray-400">() {"{"}</span>
                </Line>
                <Line indent={2}>
                  <span className="text-brand-pink">return</span>{" "}
                  <span className="text-gray-400">(</span>
                </Line>
                <Line indent={3}>
                  <span className="text-cyan-300">this</span>.
                  <span className="text-white">cleanRestApis</span>{" "}
                  <span className="text-brand-pink">&&</span>
                </Line>
                <Line indent={3}>
                  <span className="text-cyan-300">this</span>.
                  <span className="text-white">optimizedQueries</span>{" "}
                  <span className="text-brand-pink">&&</span>
                </Line>
                <Line indent={3}>
                  <span className="text-cyan-300">this</span>.
                  <span className="text-white">secureAuth</span>{" "}
                  <span className="text-brand-pink">&&</span>
                </Line>
                <Line indent={3}>
                  <span className="text-cyan-300">this</span>.
                  <span className="text-white">cgpa</span>{" "}
                  <span className="text-brand-pink">&gt;=</span>{" "}
                  <span className="text-emerald-300">8.48</span>
                </Line>
                <Line indent={2}>
                  <span className="text-gray-400">);</span>
                </Line>
                <Line indent={1}>
                  <span className="text-gray-400">{"}"}</span>
                </Line>
                <Line>
                  <span className="text-gray-400">{"};"}</span>
                  <span className="animate-blink ml-1 inline-block h-4 w-2 translate-y-[2px] bg-brand-green" />
                </Line>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
