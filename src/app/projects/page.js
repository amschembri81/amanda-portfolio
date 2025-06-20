import Navbar from "../../components/Navbar";
import Link from "next/link";

export default function ProjectsOverview() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black text-white pt-28 p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">My Projects</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Project 1 */}
          <Link
            href="/projects/project1"
            className="bg-gray-800 p-4 rounded-lg shadow hover:bg-gray-700 transition"
          >
            <h2 className="text-xl font-semibold text-teal-400 mb-2">
              SuperStore Sales Dashboard
            </h2>
            <p>
              A Tableau dashboard that transforms SuperStore sales data into
              clear, actionable insights—highlighting my skills in data
              cleaning, visual analytics, and UX-focused design to help
              stakeholders quickly understand performance and make informed
              decisions.
            </p>
          </Link>

          {/* Project 2 */}
          <Link
            href="/projects/project2"
            className="bg-gray-800 p-4 rounded-lg shadow hover:bg-gray-700 transition"
          >
            <h2 className="text-xl font-semibold text-teal-400 mb-2">
              Project 2
            </h2>
            <p>Coming Soon!</p>
          </Link>

          {/* Project 3 */}
          <Link
            href="/projects/project3"
            className="bg-gray-800 p-4 rounded-lg shadow hover:bg-gray-700 transition"
          >
            <h2 className="text-xl font-semibold text-teal-400 mb-2">
              Project 3
            </h2>
            <p>Coming Soon!</p>
          </Link>

          {/* Project 4 */}
          <Link
            href="/projects/project4"
            className="bg-gray-800 p-4 rounded-lg shadow hover:bg-gray-700 transition"
          >
            <h2 className="text-xl font-semibold text-teal-400 mb-2">
              Project 4
            </h2>
            <p>Coming Soon!</p>
          </Link>

          {/* Project 5 */}
          <Link
            href="/projects/project5"
            className="bg-gray-800 p-4 rounded-lg shadow hover:bg-gray-700 transition"
          >
            <h2 className="text-xl font-semibold text-teal-400 mb-2">
              Project 5
            </h2>
            <p>Coming Soon!</p>
          </Link>
        </div>
      </main>
    </>
  );
}
