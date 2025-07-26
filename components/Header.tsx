'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition-colors">
            <span className="font-pacifico">Ahmett</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#home" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Home
            </Link>
            <Link href="#about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              About
            </Link>
            <Link href="#skills" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Skills
            </Link>
            <Link href="#projects" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Projects
            </Link>
            <Link href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <div className="w-6 h-6 flex items-center justify-center">
              <i className={`${isMenuOpen ? 'ri-close-line' : 'ri-menu-line'} text-xl`}></i>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col space-y-3">
              <Link 
                href="#home" 
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="#about" 
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="#skills" 
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Skills
              </Link>
              <Link 
                href="#projects" 
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>
              <Link 
                href="#contact" 
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}