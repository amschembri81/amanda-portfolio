"use client";
import Navbar from "../../../components/Navbar";

export default function Project4() {
  return (
    <>
      <Navbar />
      <div className="pt-32 p-8 max-w-4xl mx-auto text-white bg-black min-h-screen">
        <h1 className="text-4xl font-bold mb-4 text-center text-gray-300">
          Real-Time Data Streaming Dashboard
        </h1>

        <p className="text-lg mb-6 text-gray-300 text-center">
          This project demonstrates real-time data streaming using FastAPI,
          WebSockets, and Chart.js. The dashboard includes live purchase
          updates, interactive charts, clickstream logs, and a CSV export
          feature.
        </p>

        {/* Summary */}
        <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-300">📊 Project Summary</h2>
        <ul className="list-disc list-inside mb-6 text-gray-300">
          <li>Built a real-time dashboard that streams purchase data live.</li>
          <li>Used FastAPI with WebSockets for backend data streaming.</li>
          <li>Frontend developed in React with Chart.js for live updates.</li>
          <li>Displays outcome distributions, purchase trends, and raw logs.</li>
        </ul>

        {/* Tools */}
        <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-300">🧰 Tools Used</h2>
        <ul className="list-disc list-inside mb-6 text-gray-300">
          <li>FastAPI, WebSockets</li>
          <li>React, Chart.js, Tailwind CSS</li>
          <li>Python for server-side data prep</li>
        </ul>

        {/* Screenshots */}
        <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-300">📷 Dashboard Screenshots</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <a
            href="/images/project4/Outcome_Distribution.png"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/project4/Outcome_Distribution.png"
              alt="Outcome Distribution"
              className="rounded shadow-md w-full hover:scale-105 transition-transform duration-200"
            />
          </a>
          <a
            href="/images/project4/Realtime_Product_Price.png"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/project4/Realtime_Product_Price.png"
              alt="Real-Time Product Price Stream"
              className="rounded shadow-md w-full hover:scale-105 transition-transform duration-200"
            />
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          <a
            href="/images/project4/Live_Purchase_Amount.png"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/project4/Live_Purchase_Amount.png"
              alt="Live Purchase Amount"
              className="rounded shadow-md w-full hover:scale-105 transition-transform duration-200"
            />
          </a>
          <a
            href="/images/project4/Live_Clickstream_Data.png"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/project4/Live_Clickstream_Data.png"
              alt="Live Clickstream Data"
              className="rounded shadow-md w-full hover:scale-105 transition-transform duration-200"
            />
          </a>
        </div>

        {/* CSV Download */}
        <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-300">📁 Download Sample Data</h2>
        <p className="text-gray-300 mb-4">
          Download a sample of the cleaned clickstream data used in the project.
        </p>
        <a
          href="/templates/cleaned_clickstream.csv"
          target="_blank"
          className="inline-block bg-gray-600 text-white px-6 py-3 rounded hover:bg-gray-700 transition mb-10"
          download
        >
          Download CSV
        </a>

        {/* GitHub Link */}
        <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-300">📂 GitHub Repository</h2>
        <p>
          <a
            href="https://github.com/amschembri81/live_data_stream"
            target="_blank"
            className="text-blue-500 underline"
          >
            View Project on GitHub
          </a>
        </p>
      </div>
    </>
  );
}