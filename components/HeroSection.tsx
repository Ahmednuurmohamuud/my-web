'use client';

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('/com.jpg')`,
      }}
    >
      {/* Overlay for contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60"></div>

      <div className="relative z-10 container mx-auto px-6 text-center text-white flex flex-col items-center justify-center">
        <h1 className="text-4xl sm:text-6xl font-bold mb-4 leading-tight drop-shadow-lg">
          <span className="text-blue-400 font-pacifico block mb-2"></span>
          Full Stack Developer
        </h1>

        <p className="text-lg sm:text-2xl mb-8 max-w-2xl text-gray-200 drop-shadow">
          Building Scalable Platforms for Social Impact in East Africa
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
  href="/Ahmednuur CV.pdf"
  download
  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold text-lg transition-all transform hover:scale-105 shadow-md flex items-center gap-2"
>
  <i className="ri-download-line text-xl"></i>
  Download CV
</a>
          <button  id="projects" className="border border-white text-white hover:bg-white hover:text-gray-900 px-6 py-3 rounded-full font-semibold text-lg transition-all transform hover:scale-105 shadow-md">
            <i className="ri-eye-line mr-2"></i>
            View Projects
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white animate-bounce z-10">
        <i className="ri-arrow-down-line text-3xl"></i>
      </div>
    </section>
  );
}
