import React from 'react'
import {  ArrowRight, Users, CheckCircle, Sparkles, Play, Award, TrendingUp, Clock ,Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute top-40 left-40 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <Badge className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 border-blue-200 hover:bg-blue-200 transition-all transform hover:scale-105">
                <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
                Trusted by 100+ Businesses Worldwide
              </Badge>
              
              <div className="space-y-6">
                <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
                  Build Your
                  <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Digital Future</span>
                  <span className="text-3xl md:text-4xl text-gray-600 font-normal mt-4 block">With SupraArk Technologies</span>
                </h1>
                
                <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-lg">
                  We craft exceptional digital experiences that transform businesses and delight users worldwide.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 text-lg px-8 py-6"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5 animate-pulse" />
                </Button>
                <Button 
                  variant="outline"
                  size="lg"
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 transition-all duration-300 text-lg px-8 py-6 group"
                >
                  <Play className="mr-2 w-5 h-5 group-hover:animate-pulse" />
                  Watch Demo
                </Button>
              </div>

              {/* Enhanced Stats with Icons */}
              <div className="grid grid-cols-4 gap-6 pt-8 border-t border-gray-200">
                <div className="text-center group">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:bg-blue-600 transition-colors">
                    <Briefcase className="w-6 h-6 text-blue-600 group-hover:text-white" />
                  </div>
                  <div className="text-3xl font-bold text-blue-600">20+</div>
                  <div className="text-xs text-gray-500">Projects Done</div>
                </div>
                <div className="text-center group">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:bg-green-600 transition-colors">
                    <Users className="w-6 h-6 text-green-600 group-hover:text-white" />
                  </div>
                  <div className="text-3xl font-bold text-green-600">20+</div>
                  <div className="text-xs text-gray-500">Happy Clients</div>
                </div>
                
                <div className="text-center group">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:bg-orange-600 transition-colors">
                    <Clock className="w-6 h-6 text-orange-600 group-hover:text-white" />
                  </div>
                  <div className="text-3xl font-bold text-orange-600">24/7</div>
                  <div className="text-xs text-gray-500">Support</div>
                </div>
              </div>
            </div>
            
            {/* Enhanced Hero Visual with Mock Video Player */}
            <div className="relative">
              {/* Main Card with Video Preview */}
              <Card className="bg-gradient-to-br from-gray-900 to-gray-800 shadow-2xl transform hover:scale-105 transition-all duration-500 overflow-hidden group">
                <div className="relative h-96">
                  <img 
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop" 
                    alt="Team collaboration"
                    className="w-full h-full object-cover opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                 
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white text-xl font-bold mb-2">See How We Work</h3>
                    <p className="text-gray-300 text-sm">2:30 min overview of our process</p>
                  </div>
                </div>
              </Card>
              
              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 transform rotate-12 animate-float">
                <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white shadow-xl">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5" />
                      <span className="text-sm font-bold">100% Success Rate</span>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="absolute -bottom-6 -left-6 transform -rotate-6 animate-float animation-delay-2000">
                <Card className="bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-xl">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="w-5 h-5" />
                      <span className="text-sm font-bold">3x Faster Delivery</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default HeroSection
