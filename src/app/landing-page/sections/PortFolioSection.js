import React from 'react'
import { Star, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card ,CardContent } from '@/components/ui/card';

const PortFolioSection = () => {
  return (
    <section id="work" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="border-blue-600 text-blue-600 mb-6">
              <Star className="w-4 h-4 mr-2" />
              Portfolio Showcase
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Recent Success
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Stories</span>
            </h2>
          </div>

          {/* Featured Projects with Images */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-300">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop" 
                  alt="KleverBook Platform"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-8">
                <Badge className="bg-green-100 text-green-700 mb-4">Live Project</Badge>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">KleverBook® Platform</h3>
                <p className="text-gray-600 mb-4">Revolutionary ad-supported reading application serving 50,000+ daily active users with seamless content delivery.</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge variant="outline">React Native</Badge>
                  <Badge variant="outline">AWS</Badge>
                  <Badge variant="outline">Node.js</Badge>
                  <Badge variant="outline">MongoDB</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <Button variant="outline" className="group">
                  View Project <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-300">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop" 
                  alt="Decade 2 Publishing"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-8">
                <Badge className="bg-blue-100 text-blue-700 mb-4">Featured</Badge>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Decade 2 Publishing</h3>
                <p className="text-gray-600 mb-4">Next-generation digital publishing platform processing millions of transactions with enterprise-grade security.</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge variant="outline">Next.js</Badge>
                  <Badge variant="outline">Stripe</Badge>
                  <Badge variant="outline">PostgreSQL</Badge>
                  <Badge variant="outline">Redis</Badge>
                </div>
                <div className="flex items-center justify-between">
                  
                  <Button variant="outline" className="group">
                    View Project <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* More Projects Grid */}
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Gallery Aurora",
                category: "Visual Platform",
                image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
                tech: ["Vue.js", "Firebase"],
                metrics: "10K+ Artists"
              },
              {
                name: "Galaxie Music",
                category: "Streaming Service",
                image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
                tech: ["React", "WebRTC"],
                metrics: "1M+ Streams"
              },
              {
                name: "Impact Records",
                category: "Digital Label",
                image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=400&h=300&fit=crop",
                tech: ["Angular", "Spotify API"],
                metrics: "500+ Artists"
              },
              {
                name: "Digital Ad Card",
                category: "Ad Platform",
                image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop",
                tech: ["Node.js", "Redis"],
                metrics: "5M+ Impressions"
              }
            ].map((project, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer">
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={project.image} 
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white font-bold">{project.metrics}</p>
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <Badge variant="outline" className="mb-2 text-xs">{project.category}</Badge>
                  <h4 className="font-bold text-gray-900 mb-2">{project.name}</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.tech.map((t, i) => (
                      <span key={i} className="text-xs text-gray-500">{t}{i < project.tech.length - 1 && ' •'}</span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
  )
}

export default PortFolioSection
