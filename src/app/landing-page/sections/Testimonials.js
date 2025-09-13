import React from 'react'
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';

const Testimonials = ({testimonials,activeTestimonial}) => {
  return (
    <div>
       <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="border-blue-600 text-blue-600 mb-6">
              <Quote className="w-4 h-4 mr-2" />
              Client Testimonials
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              What Our Clients
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Say About Us</span>
            </h2>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-0 shadow-xl">
              <CardContent className="p-12">
                <Quote className="w-12 h-12 text-blue-600 mb-6 opacity-50" />
                <p className="text-2xl text-gray-700 leading-relaxed mb-8 italic">
                  "{testimonials[activeTestimonial].content}"
                </p>
                <div className="flex items-center">
                  <img 
                    src={testimonials[activeTestimonial].image}
                    alt={testimonials[activeTestimonial].name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonials[activeTestimonial].name}</h4>
                    <p className="text-gray-600">{testimonials[activeTestimonial].role}</p>
                  </div>
                  <div className="ml-auto flex space-x-2">
                    {[0, 1, 2].map((index) => (
                      <button
                        key={index}
                        onClick={() => setActiveTestimonial(index)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          index === activeTestimonial ? 'bg-blue-600 w-8' : 'bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Client Logos */}
            <div className="mt-16">
              <p className="text-center text-gray-500 mb-8">Trusted by leading companies worldwide</p>
              <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
                {['TechFlow', 'DataSync', 'CloudVentures', 'DigitalPro', 'NextGen'].map((company, index) => (
                  <div key={index} className="text-2xl font-bold text-gray-400">
                    {company}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Testimonials
