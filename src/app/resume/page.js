export default function ResumePage() {
  return (
    <main className="min-h-screen bg-black text-white py-12 px-6 flex flex-col items-center justify-center pt-32">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-300">
        My Resume
      </h1>
      <p className="text-lg text-gray-300 mb-8 text-center max-w-xl">
        Download my latest resume to learn more about my professional experience, skills, and qualifications.
      </p>

      <div className="flex flex-col items-center space-y-4">
        <a
          href="/assets/Amanda Schembri.pdf" 
          download="Amanda_Schembri_Resume.pdf" 
          className="inline-block bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition duration-300 ease-in-out shadow-lg"
        >
          Download Resume (PDF)
        </a>

        {/* Optional: Embed a PDF viewer if desired, but direct download is simpler and more reliable */}
        {/* <div className="mt-8 w-full max-w-3xl" style={{ height: '80vh' }}>
          <iframe
            src="/assets/Amanda Schembri.pdf"
            width="100%"
            height="100%"
            style={{ border: 'none' }}
            title="Amanda Schembri Resume"
          >
            This browser does not support PDFs. Please download the resume using the link above.
          </iframe>
        </div> */}
      </div>
    </main>
  );
}