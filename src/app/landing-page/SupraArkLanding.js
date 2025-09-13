import React, { useState, useEffect } from "react";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import HeroSection from "./sections/HeroSection";
import ServiceSection from "./sections/ServiceSection";
import PortFolioSection from "./sections/PortFolioSection";
import ProcessSection from "./sections/ProcessSection";
import Testimonials from "./sections/Testimonials";
import Technologies from "./sections/Technologies";
import WhyChooseUsSection from "./sections/WhyChooseUsSection";
import ContactUsSection from "./sections/ContactUsSection";

<style jsx>{`
@keyframes blob {
  0% {
    transform: translate(0px, 0px) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
  100% {
    transform: translate(0px, 0px) scale(1);
  }
}
@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0px);
  }
}
.animate-blob {
  animation: blob 7s infinite;
}
.animate-float {
  animation: float 3s ease-in-out infinite;
}
.animation-delay-2000 {
  animation-delay: 2s;
}
.animation-delay-4000 {
  animation-delay: 4s;
}
`}</style>

const SupraArkLanding = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
      content:
        "SupraArk transformed our digital presence completely. Their custom e-commerce solution increased our conversion rate by 250%.",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    },
    {
      name: "Michael Roberts",
      role: "Founder, DataSync",
      content:
        "The team's expertise in scalable infrastructure saved us months of development time. Highly recommend their services.",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
    },
    {
      name: "Emily Johnson",
      role: "Director, Creative Studios",
      content:
        "Their publishing platform revolutionized how we distribute content. The results exceeded all our expectations.",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <NavBar scrolled={scrolled} />

      <HeroSection />

      <ServiceSection />

      <PortFolioSection />

      <ProcessSection />

      <Testimonials
        testimonials={testimonials}
        activeTestimonial={activeTestimonial}
      />

      <Technologies />

      <WhyChooseUsSection />

      <ContactUsSection />

      <Footer />
    </div>
  );
};

export default SupraArkLanding;
