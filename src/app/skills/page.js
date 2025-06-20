export default function Skills() {
    return (
      <section id="skills" className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Featured Skills */}
            <div>
              <h3 className="text-xl font-semibold mb-2 text-blue-400">Featured Skills</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li><strong>Analytics & Visualization:</strong> Advanced Google Sheets, dashboard design, data visualization</li>
                <li><strong>Design & UX:</strong> UX/Web Design (Figma, WCAG), responsive layouts</li>
                <li><strong>Automation & Optimization:</strong> Workflow automation, process improvement</li>
                <li><strong>Content & Support:</strong> Technical writing, customer support documentation</li>
              </ul>
            </div>
  
            {/* Core Technical Skills */}
            <div>
              <h3 className="text-xl font-semibold mb-2 text-blue-400">Core Technical Skills</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li><strong>Data & Analytics:</strong> Google Sheets, Excel, SQL, Tableau, Looker, R, Python</li>
                <li><strong>Web & UI/UX:</strong> HTML, CSS, JavaScript, React, Responsive Web Design, Figma, WCAG</li>
                <li><strong>Automation & Tools:</strong> Zapier, Google Apps Script, Jira, Confluence, Git, VS Code</li>
                <li><strong>Back-End & Databases:</strong> Node.js, MongoDB</li>
                <li><strong>Support & Documentation:</strong> Ticket triage, knowledge base writing, team communication</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
  