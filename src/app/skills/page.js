"use client";
import React, { useEffect, useState } from "react";

export default function Skills() {
  const [navHeight, setNavHeight] = useState(0);

  useEffect(() => {
    // Dynamically get the height of the navigation bar
    const nav = document.querySelector("nav");
    if (nav) {
      setNavHeight(nav.offsetHeight);
    }
  }, []);

  const skillSections = [
    {
      title: "Analytics & Visualization",
      skills: [
        "Advanced Google Sheets",
        "Excel",
        "Power BI",
        "Tableau",
        "Looker Studio",
        "Dashboard design",
        "Data storytelling",
      ],
    },
    {
      title: "Design & UX",
      skills: [
        "Figma",
        "WCAG Accessibility",
        "Responsive layouts",
        "User-centered design",
      ],
    },
    {
      title: "Automation & Optimization",
      skills: [
        "Workflow automation",
        "Process improvement",
        "Zapier",
        "Google Apps Script",
      ],
    },
    {
      title: "Content & Support",
      skills: [
        "Technical writing",
        "Customer support documentation",
        "Ticket triage",
        "Team communication",
      ],
    },
    {
      title: "Data & Programming",
      skills: [
        "Python",
        "R",
        "Pandas",
        "NumPy",
        "SQL",
        "Google Sheets",
        "Excel",
        "Jupyter Notebook",
      ],
    },
    {
      title: "Web & UI/UX Development",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "React Native",
        "TailwindCSS",
        "Figma",
        "WCAG",
      ],
    },
    {
      title: "Data Visualization & Frontend Libraries",
      skills: ["Chart.js", "D3.js", "Streamlit"],
    },
    {
      title: "Machine Learning & Explainability",
      skills: ["XGBoost", "LightGBM", "SHAP"],
    },
    {
      title: "APIs & Back-End Development",
      skills: ["Node.js", "Express", "MongoDB"],
    },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen bg-zinc-900 text-white px-6 pb-20"
      // Adjust padding top to account for fixed navbar height + extra spacing
      style={{ paddingTop: `${navHeight ? navHeight + 40 : 100}px` }}
    >
      <div className="text-center mb-16">
        {/* Main "Skills" heading with responsive sizing */}
        <h2 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
          Skills
        </h2>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {skillSections.map((section, index) => (
          <div
            key={index}
            // Added 'w-full' to ensure the card takes full width of its grid column
            className="bg-zinc-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 h-full flex flex-col w-full"
          >
            <h3 className="text-xl font-bold text-gray-100 mb-4 border-b border-zinc-700 pb-2">
              {section.title}
            </h3>
            <ul className="list-disc list-inside text-sm space-y-2 text-gray-300 flex-grow">
              {section.skills.map((skill, idx) => (
                <li key={idx} className="flex items-center">
                  <span className="mr-2 text-zinc-400">•</span> {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}