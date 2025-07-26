'use client';

import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setSubmitStatus('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
    
    setTimeout(() => setSubmitStatus(''), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Get In Touch</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Let's collaborate on your next project or discuss opportunities
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-8">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <i className="ri-mail-line text-xl text-blue-600"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Email</h4>
                    <p className="text-gray-600">xararavic1547@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <i className="ri-map-pin-line text-xl text-green-600"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Location</h4>
                    <p className="text-gray-600">Somalia, East Africa</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <i className="ri-time-line text-xl text-purple-600"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Response Time</h4>
                    <p className="text-gray-600">Within 24 hours</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-semibold text-gray-800 mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  <a href="https://github.com/Ahmednuurmohamuud" className="w-12 h-12 bg-gray-800 hover:bg-gray-900 text-white rounded-full flex items-center justify-center transition-colors cursor-pointer">
                    <i className="ri-github-fill text-xl"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/ahmett-w-ab52391b2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" className="w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center transition-colors cursor-pointer">
                    <i className="ri-linkedin-fill text-xl"></i>
                  </a>
                  <a href="https://www.tiktok.com/@26mack2?_t=ZM-8yLUstfglQU&_r=1" className="w-12 h-12 bg-black hover:bg-gray-800 text-white rounded-full flex items-center justify-center transition-colors cursor-pointer">
                    <i className="ri-tiktok-fill text-xl"></i>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-8">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    placeholder="Enter your email"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    maxLength={500}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm resize-none"
                    placeholder="Write your message here..."
                  />
                  <p className="text-xs text-gray-500 mt-1">{formData.message.length}/500 characters</p>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting || formData.message.length > 500}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white py-3 px-6 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <i className="ri-loader-4-line animate-spin text-xl"></i>
                      Sending...
                    </>
                  ) : (
                    <>
                      <i className="ri-send-plane-fill text-xl"></i>
                      Send Message
                    </>
                  )}
                </button>
                
                {submitStatus && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-700 text-sm">{submitStatus}</p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}