import React from 'react'
import { Lightbulb, Palette, Code, Rocket, Layers, ChevronRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';


const ProcessSection = () => {
  return (
    <section id="process" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <Badge variant="outline" className="border-blue-600 text-blue-600 mb-6">
          <Layers className="w-4 h-4 mr-2" />
          Our Process
        </Badge>
        <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          How We Build
          <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Your Success</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          {
            step: "01",
            title: "Discovery",
            description: "We analyze your business needs and define project goals",
            icon: Lightbulb,
            color: "blue"
          },
          {
            step: "02",
            title: "Design",
            description: "Creating intuitive interfaces and seamless user experiences",
            icon: Palette,
            color: "purple"
          },
          {
            step: "03",
            title: "Development",
            description: "Building robust solutions with cutting-edge technologies",
            icon: Code,
            color: "green"
          },
          {
            step: "04",
            title: "Launch & Support",
            description: "Deploying your project and providing ongoing maintenance",
            icon: Rocket,
            color: "orange"
          }
        ].map((phase, index) => (
          <div key={index} className="relative">
            {index < 3 && (
              <div className="hidden lg:block absolute top-20 left-full w-full h-0.5 bg-gray-300 z-0">
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </div>
              </div>
            )}
            <Card className="relative z-10 hover:shadow-xl transition-all duration-300 bg-white">
              <CardContent className="p-6 text-center">
                <div className={`w-20 h-20 bg-gradient-to-br from-${phase.color}-500 to-${phase.color}-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                  <phase.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-gray-200 mb-2">{phase.step}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{phase.title}</h3>
                <p className="text-gray-600">{phase.description}</p>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  </section>

  )
}

export default ProcessSection
