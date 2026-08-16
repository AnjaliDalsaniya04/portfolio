import { FaGithub } from "react-icons/fa";
import { projects } from "../data";
import SectionHeading from "./SectionHeading";

function ProjectCard({ project }) {
  return (
    <article className="overflow-hidden rounded-xl border border-line bg-panel transition-all duration-300 hover:-translate-y-1 hover:border-brand-violet">
      {/* Editor chrome */}
      <div className="flex items-center justify-between border-b border-line px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-red-500" />
          <span className="h-3 w-3 rounded-full bg-amber-400" />
          <span className="h-3 w-3 rounded-full bg-green-500" />
        </div>
        {project.code ? (
          <a
            href={project.code}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.name} source code on GitHub`}
            className="text-gray-400 transition-colors hover:text-brand-pink"
          >
            <FaGithub size={20} />
          </a>
        ) : (
          <span className="text-[10px] font-semibold tracking-widest text-gray-500">
            PRIVATE
          </span>
        )}
      </div>

      {/* Code body */}
      <div className="overflow-x-auto px-4 py-5 font-mono text-sm leading-8 sm:px-6 sm:text-base">
        <div className="min-w-[17rem]">
          <p>
            <span className="text-brand-pink">const</span>{" "}
            <span className="text-gray-100">project</span>{" "}
            <span className="text-brand-pink">=</span>{" "}
            <span className="text-gray-400">{"{"}</span>
          </p>

          <p className="pl-4">
            <span className="text-white">name:</span>{" "}
            <span className="text-amber-300">&apos;{project.name}&apos;</span>,
          </p>

          <p className="pl-4">
            <span className="text-white">tools:</span>{" "}
            <span className="text-gray-400">[</span>
            {project.tools.map((tool, i) => (
              <span key={tool}>
                <span className="text-amber-300">&apos;{tool}&apos;</span>
                {i !== project.tools.length - 1 && (
                  <span className="text-gray-400">, </span>
                )}
              </span>
            ))}
            <span className="text-gray-400">]</span>,
          </p>

          <p className="pl-4">
            <span className="text-white">myRole:</span>{" "}
            <span className="text-emerald-300">&apos;{project.role}&apos;</span>
            ,
          </p>

          <p className="pl-4">
            <span className="text-white">Description:</span>{" "}
            <span className="text-cyan-200">
              &apos;{project.description}&apos;
            </span>
            ,
          </p>

          <p>
            <span className="text-gray-400">{"};"}</span>
          </p>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative my-12 lg:my-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="PROJECTS" />

        <div className="mt-14 flex flex-col gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
