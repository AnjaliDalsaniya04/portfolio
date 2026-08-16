import Image from "next/image";
import { personalData } from "../data";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="relative my-12 lg:my-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="ABOUT ME" />

        <div className="mt-14 grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left */}
          <div className="order-2 lg:order-1">
            <p className="text-base font-bold tracking-[0.25em] text-brand-green sm:text-lg">
              WHO I AM?
            </p>
            <p className="mt-6 text-lg leading-9 text-gray-200 sm:text-xl sm:leading-10">
              {personalData.description}
            </p>

            <dl className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-lg border border-line bg-panel p-5">
                <dt className="text-sm tracking-widest text-gray-500">ROLE</dt>
                <dd className="mt-1 text-lg font-semibold text-white">
                  {personalData.designation}
                </dd>
              </div>
              <div className="rounded-lg border border-line bg-panel p-5">
                <dt className="text-sm tracking-widest text-gray-500">
                  LOCATION
                </dt>
                <dd className="mt-1 text-lg font-semibold text-white">
                  {personalData.address}
                </dd>
              </div>
            </dl>
          </div>

          {/* Right — profile image with decorative border */}
          <div className="order-1 flex justify-center lg:order-2">
            <div className="relative">
              <span className="absolute -top-4 -left-4 h-24 w-24 rounded-tl-2xl border-t-4 border-l-4 border-brand-pink" />
              <span className="absolute -right-4 -bottom-4 h-24 w-24 rounded-br-2xl border-r-4 border-b-4 border-brand-violet" />
              <Image
                src={personalData.profile}
                alt={`Portrait of ${personalData.name}`}
                width={320}
                height={320}
                priority
                className="relative z-10 h-[280px] w-[280px] rounded-2xl object-cover grayscale transition-all duration-500 hover:grayscale-0 sm:h-[320px] sm:w-[320px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
