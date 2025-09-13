import React, { useState } from "react";
import { Code, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import Logo from "./Logo";

const NavBar = ({ scrolled }) => {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className={`fixed top-0 w-full backdrop-blur-md z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 shadow-lg" : "bg-white/80"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-4">
           <Logo/>
            <div>
              <span className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                SupraArk
              </span>
              <div className="text-xs text-blue-600 font-medium tracking-wider">
                TECHNOLOGIES
              </div>
            </div>
          </div>

          {/* Desktop Navigation — Uses NavigationMenu correctly */}
          <NavigationMenu className="hidden md:block">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#about"
                  asChild // 👈 REQUIRED to render as <a>
                  className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
                >
                  <a href="#about">Home</a>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#services"
                  asChild
                  className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
                >
                  <a href="#services">Services</a>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#work"
                  asChild
                  className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
                >
                  <a href="#work">Portfolio</a>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#process"
                  asChild
                  className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
                >
                  <a href="#process">Process</a>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#testimonials"
                  asChild
                  className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
                >
                  <a href="#testimonials">Reviews</a>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#testimonials"
                  asChild
                  className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
                >
                  <a href="#contact-us">Contact Us</a>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg transform hover:scale-105 transition-all">
                  Get Free Consultation
                </Button>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Mobile Hamburger Menu — Uses Sheet */}
          <div className="md:hidden flex items-center">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="p-2">
                  {open ? (
                    <X className="w-6 h-6 text-gray-700" />
                  ) : (
                    <Menu className="w-6 h-6 text-gray-700" />
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-64 p-0 bg-white shadow-xl border-l"
              >
                <div className="flex flex-col space-y-6 p-6">
                  {/* Mobile links — NO NavigationMenuLink here! Just plain anchors */}
                  <a
                    href="#about"
                    className="block py-3 text-gray-600 hover:text-blue-600 font-medium transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    Home
                  </a>
                  <a
                    href="#services"
                    className="block py-3 text-gray-600 hover:text-blue-600 font-medium transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    Services
                  </a>
                  <a
                    href="#work"
                    className="block py-3 text-gray-600 hover:text-blue-600 font-medium transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    Portfolio
                  </a>
                  <a
                    href="#process"
                    className="block py-3 text-gray-600 hover:text-blue-600 font-medium transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    Process
                  </a>
                  <a
                    href="#testimonials"
                    className="block py-3 text-gray-600 hover:text-blue-600 font-medium transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    Reviews
                  </a>
                  <Button
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white mt-4"
                    onClick={() => setOpen(false)}
                  >
                    Get Free Consultation
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
