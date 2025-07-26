'use client';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-bold mb-4">
                <span className="font-pacifico text-blue-400">Ahmett Nuur</span>
              </h3>
              <p className="text-gray-400 mb-4">
                Full Stack Developer passionate about creating impactful technology solutions for East Africa.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors cursor-pointer">
                  <i className="ri-github-fill text-lg"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors cursor-pointer">
                  <i className="ri-linkedin-fill text-lg"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors cursor-pointer">
                  <i className="ri-tiktok-fill text-lg"></i>
                </a>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Home</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white transition-colors cursor-pointer">About</a></li>
                <li><a href="#skills" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Skills</a></li>
                <li><a href="#projects" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Projects</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Contact</a></li>
              </ul>
            </div>
            
            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <i className="ri-mail-line text-blue-400"></i>
                  <span className="text-gray-400">ahmett@example.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <i className="ri-map-pin-line text-blue-400"></i>
                  <span className="text-gray-400">Somalia, East Africa</span>
                </div>
                <div className="flex items-center gap-3">
                  <i className="ri-time-line text-blue-400"></i>
                  <span className="text-gray-400">Available for freelance</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 Ahmett Nuur – Portfolio Website | Built with Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}