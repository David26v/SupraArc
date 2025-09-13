import React from 'react'
import {  Globe, CheckCircle, Smartphone, Database, BarChart3, Cloud, Palette, ChevronRight,  Settings, } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

const ServiceSection = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <Badge variant="outline" className="border-blue-600 text-blue-600 mb-6">
          <Settings className="w-4 h-4 mr-2" />
          Our Services
        </Badge>
        <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Complete Digital
          <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Solutions Suite</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          From concept to deployment, we offer end-to-end digital services that drive real business results
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            icon: Globe,
            title: "Web Development",
            description: "Custom websites and web applications built with cutting-edge technologies",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
            features: ["React/Next.js", "Node.js", "AWS Cloud", "API Integration"]
          },
          {
            icon: Smartphone,
            title: "Mobile Apps",
            description: "Native and cross-platform mobile applications for iOS and Android",
            image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop",
            features: ["React Native", "Flutter", "iOS/Android", "App Store Deploy"]
          },
          {
            icon: Database,
            title: "E-Commerce Solutions",
            description: "Scalable online stores with payment integration and inventory management",
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
            features: ["Shopify", "WooCommerce", "Payment Gateway", "Inventory System"]
          },
          {
            icon: Cloud,
            title: "Cloud Infrastructure",
            description: "Secure, scalable cloud solutions optimized for performance",
            image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop",
            features: ["AWS/Azure", "DevOps", "Auto-scaling", "24/7 Monitoring"]
          },
          {
            icon: Palette,
            title: "UI/UX Design",
            description: "User-centered design that converts visitors into customers",
            image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop",
            features: ["User Research", "Wireframing", "Prototyping", "A/B Testing"]
          },
          {
            icon: BarChart3,
            title: "Digital Marketing",
            description: "Data-driven marketing strategies that deliver measurable ROI",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
            features: ["SEO/SEM", "Social Media", "Analytics", "Content Strategy"]
          }
        ].map((service, index) => (
          <Card key={index} className="group hover:shadow-2xl transition-all duration-300 overflow-hidden bg-white">
            <div className="h-48 overflow-hidden">
              <img 
                src={service.image} 
                alt={service.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <CardContent className="p-6">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mb-4 -mt-10 relative bg-white shadow-lg">
                <service.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <div className="space-y-2">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center text-sm text-gray-500">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    {feature}
                  </div>
                ))}
              </div>
              <Button variant="ghost" className="mt-4 group-hover:text-blue-600 transition-colors">
                Learn More <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
  )
}

export default ServiceSection
