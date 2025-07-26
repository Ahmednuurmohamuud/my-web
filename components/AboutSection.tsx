'use client';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">About Me</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
      
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative inline-block">
                <img 
            src="/ahmed.png"
            alt="Axmednur Mohamud Warsame"
            className="w-80 h-80 rounded-full object-cover object-top shadow-2xl mx-auto"
/>
                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                  <i className="ri-code-s-slash-line text-2xl text-white"></i>
                </div>
              </div>
            </div>
            
            <div>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                I am a passionate Full Stack Developer based in Somalia, dedicated to creating innovative technology solutions that drive social impact across East Africa. With a strong foundation in modern web technologies and a deep understanding of local challenges, I build scalable platforms that make a real difference in people's lives.
              </p>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                My expertise spans both frontend and backend development, with a particular focus on education and employment technology. I believe in the power of technology to transform communities and create opportunities for growth and development.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-code-box-line text-2xl text-blue-600"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">3+</h3>
                  <p className="text-gray-600 font-medium">Projects</p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-graduation-cap-line text-2xl text-green-600"></i>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800">Education</h3>
                  <p className="text-gray-600 font-medium">& Employment</p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-map-pin-line text-2xl text-purple-600"></i>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800">Based in</h3>
                  <p className="text-gray-600 font-medium">Somalia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}