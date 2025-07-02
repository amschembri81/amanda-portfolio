import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function DesignProjectsOverview() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black text-white pt-28 p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">Overview of Design Projects</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Project 1: GalleryPal */}
          <Link
            href="/design/design1"
            className="bg-gray-800 p-4 rounded-lg shadow hover:bg-gray-700 transition"
          >
            <h2 className="text-xl font-semibold text-gray-400 mb-2">GalleryPal</h2>
            <p>
              A mobile app prototype that enhances museum visits by offering audio insights,
              artwork scanning, maps, and personalized curation—designed in Figma with a
              user-centered experience in mind.
            </p>
          </Link>

          {/* Project 2 */}
          <Link
            href="/design/design2"
            className="bg-gray-800 p-4 rounded-lg shadow hover:bg-gray-700 transition"
          >
            <h2 className="text-xl font-semibold text-gray-400 mb-2">Project 2</h2>
            <p>A brief description of the design project can go here.</p>
          </Link>

          {/* Project 3 */}
          <Link
            href="/design/design3"
            className="bg-gray-800 p-4 rounded-lg shadow hover:bg-gray-700 transition"
          >
            <h2 className="text-xl font-semibold text-gray-400 mb-2">Project 3</h2>
            <p>A brief description of the design project can go here.</p>
          </Link>

          {/* Project 4 */}
          <Link
            href="/design/design4"
            className="bg-gray-800 p-4 rounded-lg shadow hover:bg-gray-700 transition"
          >
            <h2 className="text-xl font-semibold text-gray-400 mb-2">Project 4</h2>
            <p>A brief description of the design project can go here.</p>
          </Link>

          {/* Project 5 */}
          <Link
            href="/design/design5"
            className="bg-gray-800 p-4 rounded-lg shadow hover:bg-gray-700 transition"
          >
            <h2 className="text-xl font-semibold text-gray-400 mb-2">Project 5</h2>
            <p>A brief description of the design project can go here.</p>
          </Link>

          {/* Project 6 */}
          <Link
            href="/design/design6"
            className="bg-gray-800 p-4 rounded-lg shadow hover:bg-gray-700 transition"
          >
            <h2 className="text-xl font-semibold text-gray-400 mb-2">Project 6</h2>
            <p>A brief description of the design project can go here.</p>
          </Link>
        </div>
      </main>
    </>
  );
}