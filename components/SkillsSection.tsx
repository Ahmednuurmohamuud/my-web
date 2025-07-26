'use client';

export default function SkillsSection() {
  const skills = [
    { name: 'Django', icon: 'ri-code-s-slash-line', color: 'bg-green-500' },
    { name: 'Python', icon: 'ri-code-line', color: 'bg-blue-500' },
    { name: 'React', icon: 'ri-reactjs-line', color: 'bg-cyan-500' },
    { name: 'Tailwind CSS', icon: 'ri-css3-line', color: 'bg-teal-500' },
    { name: 'GitHub', icon: 'ri-github-fill', color: 'bg-gray-800' },
    { name: 'REST APIs', icon: 'ri-api-line', color: 'bg-orange-500' },
    { name: 'Figma', icon: 'ri-figma-line', color: 'bg-purple-500' }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Skills & Technologies</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              I work with modern technologies to build robust and scalable applications
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
            {skills.map((skill, index) => (
              <div 
                key={index}
                className="bg-gray-50 hover:bg-white p-6 rounded-xl text-center transition-all duration-300 transform hover:scale-105 hover:shadow-lg group cursor-pointer"
              >
                <div className={`w-16 h-16 ${skill.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <i className={`${skill.icon} text-2xl text-white`}></i>
                </div>
                <h3 className="font-semibold text-gray-800 text-sm">{skill.name}</h3>
              </div>
            ))}
          </div>
          
          <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Always Learning</h3>
              <p className="text-gray-700 max-w-2xl mx-auto">
                I'm constantly expanding my skill set and staying up-to-date with the latest technologies and best practices in web development. Currently exploring cloud technologies and advanced React patterns.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}