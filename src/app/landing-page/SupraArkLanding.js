import React, { useState, useEffect } from 'react';
import { Mail, Code, Globe, Zap, Star, ArrowRight, Shield, Users, CheckCircle, Smartphone, Monitor, Database, Sparkles, Layers, Rocket, Play, Award, TrendingUp, Clock, HeadphonesIcon, BarChart3, Cpu, Cloud, Lock, Palette, MessageSquare, ChevronRight, ExternalLink, Github, Linkedin, Twitter, Instagram, Menu, X, Quote, Building2, Target, Lightbulb, Settings, Server, Briefcase, FileCode, Layout, Gauge } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import HeroSection from './sections/HeroSection';
import ServiceSection from './sections/ServiceSection';

const SupraArkLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CEO, TechFlow Inc.",
      content: "SupraArk transformed our digital presence completely. Their custom e-commerce solution increased our conversion rate by 250%.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
    },
    {
      name: "Michael Roberts",
      role: "Founder, DataSync",
      content: "The team's expertise in scalable infrastructure saved us months of development time. Highly recommend their services.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop"
    },
    {
      name: "Emily Johnson",
      role: "Director, Creative Studios",
      content: "Their publishing platform revolutionized how we distribute content. The results exceeded all our expectations.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-white">

      <NavBar 
          scrolled ={scrolled}
          isMenuOpen ={isMenuOpen}
      />

      {/* Enhanced Hero Section with Video Background Effect */}
      <HeroSection/>

      <ServiceSection/>

      {/* Enhanced Portfolio Section */}
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

      {/* Process Section */}
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

      {/* Testimonials Section */}
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

      {/* Technology Stack */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="border-blue-600 text-blue-600 mb-6">
              <Cpu className="w-4 h-4 mr-2" />
              Technology Stack
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Powered by Modern
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Technologies</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: 'React', icon: Layout, color: 'blue' },
              { name: 'Node.js', icon: Server, color: 'green' },
              { name: 'AWS', icon: Cloud, color: 'orange' },
              { name: 'MongoDB', icon: Database, color: 'green' },
              { name: 'Next.js', icon: FileCode, color: 'black' },
              { name: 'TypeScript', icon: Code, color: 'blue' },
              { name: 'Docker', icon: Layers, color: 'blue' },
              { name: 'GraphQL', icon: Globe, color: 'purple' },
              { name: 'Redis', icon: Gauge, color: 'red' },
              { name: 'PostgreSQL', icon: Database, color: 'blue' },
              { name: 'Flutter', icon: Smartphone, color: 'blue' },
              { name: 'Python', icon: Code, color: 'yellow' }
            ].map((tech, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:scale-105 bg-white">
                <CardContent className="p-6 text-center">
                  <div className={`w-14 h-14 bg-${tech.color}-100 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-${tech.color}-600 transition-colors`}>
                    <tech.icon className={`w-7 h-7 text-${tech.color}-600 group-hover:text-white`} />
                  </div>
                  <p className="font-semibold text-gray-700">{tech.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 mb-6">
                <Target className="w-4 h-4 mr-2" />
                Why SupraArk
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Why Businesses Choose
                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">SupraArk Technologies</span>
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

      {/* CTA Section with Video Background Effect */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <Badge className="bg-white/20 text-white border-white/30 mb-6">
            <Rocket className="w-4 h-4 mr-2" />
            Start Today
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
            Ready to Transform Your
            <span className="block">Digital Presence?</span>
          </h2>
          
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            Join 100+ businesses that have already transformed their digital presence with SupraArk Technologies.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 text-xl px-10 py-7"
            >
              <Mail className="mr-3 w-6 h-6" />
              Get Free Consultation
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 text-xl px-10 py-7"
            >
              <MessageSquare className="mr-3 w-6 h-6" />
              Schedule a Call
            </Button>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <Footer/>

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
      `}</style>
    </div>
  );
};

export default SupraArkLanding;