import { personalData } from "../data";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-panel">
      <div className="mx-auto max-w-7xl px-4 py-8 text-center sm:px-6 lg:px-8">
        <p className="text-base text-gray-400">
          © Portfolio of {personalData.name}
        </p>
      </div>
    </footer>
  );
}
