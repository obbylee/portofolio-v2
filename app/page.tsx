import SideContent from "@/components/shared/aside";
import About from "@/components/shared/about";
import Experiences from "@/components/shared/experiences";
import Works from "@/components/shared/works";

export default function Home() {
  return (
    <div className="w-full max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 px-6">
      <SideContent />

      <main className="min-h-screen py-8 font-mono">
        <About />

        <Experiences />

        <Works />

        <footer className="bg-white dark:bg-gray-900 py-8 text-center text-gray-600 dark:text-gray-400 text-sm border-t border-gray-200 dark:border-gray-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="mb-2">&copy; 2025 Lee. All rights reserved.</p>
            <p>
              Built with <span className="font-semibold">Nextjs</span> and{" "}
              <span className="font-semibold">Tailwind CSS</span>, deployed with{" "}
              <a
                href="https://vercel.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 dark:text-blue-400 hover:underline"
              >
                Vercel
              </a>
              .
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
