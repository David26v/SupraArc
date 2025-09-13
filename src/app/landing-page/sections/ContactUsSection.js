import React from "react";
import { Mail, MessageSquare, Rocket, CheckCircle, Users, Star, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";



const ContactUsSection = () => {
  return (
    <section
      id="contact-us"
      className="py-24 md:py-32 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating orbs */}
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-16 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-cyan-300/10 rounded-full blur-2xl animate-bounce animation-delay-2000"></div>

        {/* Subtle grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        {/* Trust Badges & Stats — kept for credibility */}
        

        {/* Badge + Headline — now more conversational */}
        <Badge
          className="bg-white/20 text-white border-white/30 mb-8 px-6 py-3 backdrop-blur-sm mx-auto max-w-md"
          variant="secondary"
        >
          <Rocket className="w-4 h-4 mr-2" />
          Let’s Build Something Amazing Together
        </Badge>

        <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight text-center">
          Ready to Take the Next Step?
          <span className="block bg-gradient-to-r from-yellow-200 to-orange-200 bg-clip-text text-transparent">
            We’re here to help.
          </span>
        </h2>

        <p className="text-lg md:text-xl text-blue-100 mb-16 max-w-4xl mx-auto leading-relaxed text-center">
          Whether you have a question, a project idea, or just want to chat — we respond within 24 hours. 
          No bots. No delays. Just real people ready to listen.
        </p>

        

        {/* Main Contact Grid: Form + Info Cards */}
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          
          {/* Left Column: Contact Form */}
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-10 border border-white/20 shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Get in Touch</h3>
            <p className="text-blue-100 mb-8">
              Fill out the form below and we’ll reply within 24 hours. Let’s turn your vision into reality.
            </p>

            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-blue-100 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="John Doe"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-yellow-300 transition-all"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-blue-100 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-yellow-300 transition-all"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-blue-100 mb-2">
                  Tell us about your project
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell us what you need... (e.g., website redesign, app development, digital strategy)"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-yellow-300 transition-all resize-none"
                  required
                ></textarea>
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-blue-900 hover:from-yellow-500 hover:to-orange-600 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 text-xl font-semibold mt-2"
              >
                <Mail className="mr-3 w-5 h-5" />
                Send Message
              </Button>
            </form>

            {/* Success message placeholder (for JS integration) */}
            <div className="hidden mt-6 p-4 bg-green-500/20 border border-green-400/30 rounded-xl text-green-100 text-sm">
              <CheckCircle className="w-5 h-5 inline mr-2" />
              Thanks! We'll be in touch soon.
            </div>
          </div>

          {/* Right Column: Contact Info + Trust Icons */}
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Let’s Talk</h3>
              <ul className="space-y-5">
                <li className="flex items-start">
                  <div className="flex-shrink-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full p-2 text-white mt-1">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="ml-4">
                    <p className="text-white font-medium">Email</p>
                    <p className="text-blue-100">info@supraark.com</p>
                  </div>
                </li>

                <li className="flex items-start">
                  <div className="flex-shrink-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full p-2 text-white mt-1">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="ml-4">
                    <p className="text-white font-medium">Call Us</p>
                    <p className="text-blue-100">+1 (555) 123-4567</p>
                  </div>
                </li>

                <li className="flex items-start">
                  <div className="flex-shrink-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full p-2 text-white mt-1">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="ml-4">
                    <p className="text-white font-medium">Location</p>
                    <p className="text-blue-100">San Francisco, CA • Remote worldwide</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Testimonial Snippet — now embedded as a quote card */}
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/20">
              <div className="flex items-center text-yellow-200 mb-3">
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
              </div>
              <p className="text-blue-100 italic mb-4">
                “SupraArk transformed our website into a conversion machine. Our leads increased by 217% in just 3 months.”
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  JD
                </div>
                <span className="ml-3 text-white font-medium">John D., CEO @ TechNova</span>
              </div>
            </div>

            {/* Quick CTA Button — same as primary but styled differently */}
            <Button
              size="lg"
              variant="outline"
              className="w-full bg-transparent border-2 border-white/40 text-white hover:bg-white/10 hover:border-white/60 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-lg px-6 py-6 font-semibold backdrop-blur-sm"
            >
              <MessageSquare className="mr-3 w-5 h-5" />
              Chat With Us Live
            </Button>
          </div>
        </div>

        {/* Optional: Footer note */}
        <div className="mt-16 text-center">
          <p className="text-blue-200">
            Prefer to send a direct message?{" "}
            <a
              href="mailto:hello@supraark.tech"
              className="text-white underline hover:text-blue-100 transition-colors"
            >
              Email us directly →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;