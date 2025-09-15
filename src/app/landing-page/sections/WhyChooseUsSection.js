import React from 'react'
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Users, Zap, HeadphonesIcon, TrendingUp, Award } from 'lucide-react';


const WhyChooseUsSection = () => {
  return (
    <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <Badge className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 mb-6">
            <Target className="w-4 h-4 mr-2" />
            Why SupraArc
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Businesses Choose
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">SupraArc Technologies</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            We combine technical excellence with business acumen to deliver solutions that not only work flawlessly but also drive measurable business growth.
          </p>

          <div className="space-y-6">
            {[
              {
                title: "Expert Team",
                description: "Senior developers with 10+ years of experience in enterprise solutions",
                icon: Users
              },
              {
                title: "Agile Process",
                description: "Flexible development approach with weekly sprints and continuous delivery",
                icon: Zap
              },
              {
                title: "24/7 Support",
                description: "Round-the-clock monitoring and support to ensure 99.9% uptime",
                icon: HeadphonesIcon
              },
              {
                title: "Proven Results",
                description: "Average 3x ROI for our clients within the first year",
                icon: TrendingUp
              }
            ].map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
            alt="Team collaboration"
            className="rounded-2xl shadow-2xl"
          />
          <Card className="absolute -bottom-8 -left-8 bg-white shadow-xl">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">98%</div>
                  <div className="text-gray-600">Client Satisfaction</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  </section>

  )
}

export default WhyChooseUsSection
