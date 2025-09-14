import React from 'react'
import { Mail, Code,  Clock,  Github, Linkedin, Twitter, Instagram, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Logo/>
                <div>
                  <span className="text-2xl font-bold">SupraArc</span>
                  <div className="text-xs text-blue-400">TECHNOLOGIES</div>
                </div>
              </div>
              <p className="text-gray-400 mb-6">
                Building the future of digital experiences, one project at a time.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Services</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Web Development</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Mobile Apps</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">E-Commerce</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Cloud Solutions</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">UI/UX Design</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Company</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Home</a></li>
                <li><a href="#work" className="text-gray-400 hover:text-blue-400 transition-colors">Portfolio</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-blue-400 transition-colors">Services</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Get in Touch</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <span>info@supraarc.com</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-blue-400" />
                  <span>Mon - Fri: 9:00 - 18:00</span>
                </li>
              </ul>
              <Button className="mt-6 bg-blue-600 hover:bg-blue-700 w-full">
                Contact Us
              </Button>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 mb-4 md:mb-0">
                © 2025 SupraArc Technologies. All rights reserved.
              </p>
              <div className="flex space-x-6 text-gray-400">
                <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-blue-400 transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer
