import React from 'react'
import {  Code,  Menu, X} from 'lucide-react';
import { Button } from '@/components/ui/button';

const NavBar = ({scrolled,isMenuOpen}) => {
  return (
    <div>
       <nav className={`fixed top-0 w-full backdrop-blur-md z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 shadow-lg' : 'bg-white/80'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform">
                <Code className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">SupraArk</span>
                <div className="text-xs text-blue-600 font-medium tracking-wider">TECHNOLOGIES</div>
              </div>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Home</a>
              <a href="#services" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Services</a>
              <a href="#work" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Portfolio</a>
              <a href="#process" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Process</a>
              <a href="#testimonials" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Reviews</a>
              <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg transform hover:scale-105 transition-all">
                Contact Us
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden pb-6 space-y-4">
              <a href="#about" className="block text-gray-600 hover:text-blue-600 transition-colors font-medium">Home</a>
              <a href="#services" className="block text-gray-600 hover:text-blue-600 transition-colors font-medium">Services</a>
              <a href="#work" className="block text-gray-600 hover:text-blue-600 transition-colors font-medium">Portfolio</a>
              <a href="#process" className="block text-gray-600 hover:text-blue-600 transition-colors font-medium">Process</a>
              <a href="#testimonials" className="block text-gray-600 hover:text-blue-600 transition-colors font-medium">Reviews</a>
              <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                Get Free Consultation
              </Button>
            </div>
          )}
        </div>
      </nav>
    </div>
  )
}

export default NavBar
