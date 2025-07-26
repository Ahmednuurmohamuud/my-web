'use client';

export default function ProjectsSection() {
  const projects = [
    {
      title: "EduConnect Platform",
      description: "A comprehensive educational platform connecting students with tutors across Somalia, featuring real-time messaging, course management, and progress tracking.",
      image: "https://readdy.ai/api/search-image?query=Modern%20educational%20platform%20interface%20on%20laptop%20screen%2C%20clean%20dashboard%20with%20student%20progress%20charts%2C%20course%20cards%2C%20and%20messaging%20features%2C%20bright%20and%20professional%20design%2C%20educational%20technology%20concept%2C%20Somalia%20context&width=500&height=300&seq=project-001&orientation=landscape",
      stack: ["Django", "React", "PostgreSQL", "WebSocket"],
      liveDemo: "#",
      github: "#"
    },
    {
      title: "JobBridge Somalia",
      description: "Employment matching platform that connects skilled professionals with opportunities across East Africa, with AI-powered job recommendations and skills assessment.",
      image: "https://readdy.ai/api/search-image?query=Professional%20job%20search%20platform%20interface%2C%20modern%20dashboard%20with%20job%20listings%2C%20candidate%20profiles%2C%20and%20matching%20algorithms%2C%20clean%20corporate%20design%2C%20African%20professional%20context%2C%20employment%20technology&width=500&height=300&seq=project-002&orientation=landscape",
      stack: ["Python", "Django REST", "React", "Redis"],
      liveDemo: "#",
      github: "#"
    },
    {
      title: "Community Health Tracker",
      description: "Mobile-first web application for tracking community health metrics and connecting healthcare providers with remote communities in rural areas.",
      image: "https://readdy.ai/api/search-image?query=Healthcare%20mobile%20application%20interface%2C%20medical%20dashboard%20with%20health%20statistics%2C%20patient%20records%2C%20and%20community%20health%20tracking%20features%2C%20clean%20medical%20design%2C%20healthcare%20technology%20for%20Africa&width=500&height=300&seq=project-003&orientation=landscape",
      stack: ["React", "Tailwind CSS", "Django", "REST APIs"],
      liveDemo: "#",
      github: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Showcasing my work in building impactful technology solutions for East Africa
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.stack.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap cursor-pointer flex items-center justify-center gap-2">
                      <i className="ri-external-link-line"></i>
                      Live Demo
                    </button>
                    <button className="flex-1 bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap cursor-pointer flex items-center justify-center gap-2">
                      <i className="ri-github-fill"></i>
                      GitHub
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105 whitespace-nowrap cursor-pointer flex items-center gap-2 mx-auto">
              <i className="ri-github-line text-xl"></i>
              View All Projects
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}