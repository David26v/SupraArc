import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Cpu,
  Layout,
  Server,
  Cloud,
  Database,
  FileCode,
  Code,
  Layers,
  Globe,
  Gauge,
  Smartphone,
} from "lucide-react";

const Technologies = () => {
  const technologies = [
    { name: "React", icon: Layout, color: "blue", category: "Frontend" },
    { name: "Next.js", icon: FileCode, color: "black", category: "Frontend" },
    { name: "TypeScript", icon: Code, color: "blue", category: "Frontend" },
    { name: "Node.js", icon: Server, color: "green", category: "Backend" },
    { name: "Python", icon: Code, color: "yellow", category: "Backend" },
    { name: "AWS", icon: Cloud, color: "orange", category: "Cloud" },
    { name: "Docker", icon: Layers, color: "blue", category: "DevOps" },
    { name: "GraphQL", icon: Globe, color: "purple", category: "API" },
    { name: "MongoDB", icon: Database, color: "green", category: "Database" },
    { name: "PostgreSQL", icon: Database, color: "blue", category: "Database" },
    { name: "Redis", icon: Gauge, color: "red", category: "Cache" },
    { name: "Flutter", icon: Smartphone, color: "blue", category: "Mobile" },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge
            variant="outline"
            className="border-blue-600 text-blue-600 mb-6 px-4 py-2 text-sm font-medium flex items-center justify-center mx-auto gap-2"
          >
            <Cpu className="w-4 h-4" />
            Technology Stack
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Powered by Modern
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We leverage cutting-edge tools and frameworks to build scalable, high-performance applications that stand out in today’s digital landscape.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 md:gap-6">
          {technologies.map((tech, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden cursor-pointer transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-100/50 border-none bg-white rounded-2xl"
              style={{
                background: 'linear-gradient(145deg, #ffffff, #f8f9ff)',
              }}
            >
              {/* Subtle gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

              {/* Icon Container */}
              <CardContent className="p-5 text-center pt-6 pb-4 flex flex-col items-center justify-center h-full">
                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md ${
                    tech.color === "black" ? "bg-gray-100" : `bg-${tech.color}-100`
                  }`}
                  style={{
                    boxShadow: `0 4px 14px rgba(0, 0, 0, 0.05)`,
                  }}
                >
                  <tech.icon
                    className={`w-8 h-8 transition-colors duration-300 ${
                      tech.color === "black"
                        ? "text-gray-800 group-hover:text-white"
                        : `text-${tech.color}-600 group-hover:text-white`
                    }`}
                  />
                </div>

                {/* Name */}
                <h3
                  className={`font-semibold text-gray-800 text-sm md:text-base transition-colors duration-300 group-hover:text-${tech.color}-600`}
                  style={{
                    textShadow: '0 1px 2px rgba(0,0,0,0.05)',
                  }}
                >
                  {tech.name}
                </h3>
              </CardContent>

              {/* Optional: Category tag (hidden until hover) */}
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full whitespace-nowrap">
                {tech.category}
              </div>
            </Card>
          ))}
        </div>

        {/* Decorative Elements for Visual Depth */}
        <div className="mt-12 flex justify-center">
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-20"></div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;