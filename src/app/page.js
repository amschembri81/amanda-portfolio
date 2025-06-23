import Navbar from './components/Navbar'; 

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="home" className="min-h-screen flex flex-col items-center justify-center px-4 pt-38 bg-black text-white">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-4">
          Hi, I&apos;m Amanda Morrison{" "}
          <span role="img" aria-label="waving hand">👋🏻</span>
        </h1>

        <p className="text-xl text-center text-gray-300 max-w-2xl mb-6">
          I&apos;m a Data Analyst with a strong foundation in UX Design and Web Development.
          I blend data storytelling, dashboard design, and front-end skills to uncover insights and create intuitive user experiences.
        </p>

        <p className="text-sm italic text-gray-400 text-center mt-4">
          I’m currently transitioning my work to this custom-built portfolio site. Thanks for your patience while things come together!
        </p>
      </main>
    </>
  );
}