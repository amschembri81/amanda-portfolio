import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="home" className="min-h-screen flex flex-col items-center justify-center px-4 pt-38 bg-black text-white">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-4">
          Hi, I'm Amanda Morrison <span role="img" aria-label="waving hand">👋🏻</span>
        </h1>

        <p className="text-xl text-center text-gray-300 max-w-2xl mb-6">
          I'm a Data Analyst with a strong foundation in UX Design and Web Development.
          I blend data storytelling, dashboard design, and front-end skills to uncover insights and create intuitive user experiences.
        </p>
      </main>
    </>
  );
}
