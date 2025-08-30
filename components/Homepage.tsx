"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Play,
  ArrowRight,
  Dumbbell,
  Users,
  Clock,
  MapPin,
  Phone,
  Mail,
  Star,
  CheckCircle,
  Target,
  Instagram,
  Facebook,
  Menu,
  X,
  Apple,
  Award,
  BookOpen,
} from "lucide-react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const navRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const featuresRef = useRef<HTMLDivElement>(null)
  const pricingRef = useRef<HTMLDivElement>(null)
  const locationsRef = useRef<HTMLDivElement>(null)
  const transformationsRef = useRef<HTMLDivElement>(null)
  const nutritionistsRef = useRef<HTMLDivElement>(null)

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial setup
      gsap.set([titleRef.current, subtitleRef.current, buttonRef.current, statsRef.current], {
        opacity: 0,
        y: 100,
      })
      gsap.set(navRef.current, { opacity: 0, y: -50 })

      // Navigation animation
      gsap.to(navRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.2,
      })

      // Stagger navigation items
      gsap.fromTo(
        ".nav-item",
        { opacity: 0, y: -20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          delay: 0.8,
          ease: "power2.out",
        },
      )

      // Hero content timeline
      const tl = gsap.timeline({ delay: 1 })
      tl.to(subtitleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
      })
        .to(
          titleRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.4",
        )
        .to(
          buttonRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.6",
        )
        .to(
          statsRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.4",
        )

      // Scroll-triggered animations
      gsap.fromTo(
        ".feature-card",
        { opacity: 0, y: 50, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: featuresRef.current,
            start: "top 80%",
          },
        },
      )

      gsap.fromTo(
        ".pricing-card",
        { opacity: 0, y: 50, rotationY: 15 },
        {
          opacity: 1,
          y: 0,
          rotationY: 0,
          duration: 1,
          stagger: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: pricingRef.current,
            start: "top 80%",
          },
        },
      )

      gsap.fromTo(
        ".location-card",
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: locationsRef.current,
            start: "top 80%",
          },
        },
      )

      gsap.fromTo(
        ".transformation-card",
        { opacity: 0, scale: 0.8, rotation: 5 },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: transformationsRef.current,
            start: "top 80%",
          },
        },
      )

      gsap.fromTo(
        ".nutritionist-card",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: nutritionistsRef.current,
            start: "top 80%",
          },
        },
      )

      // Floating animations
      gsap.to(".floating-element", {
        y: -20,
        duration: 3,
        ease: "power2.inOut",
        repeat: -1,
        yoyo: true,
        stagger: 0.5,
      })

      // Pulse animations
      gsap.to(".pulse-element", {
        scale: 1.1,
        duration: 2,
        ease: "power2.inOut",
        repeat: -1,
        yoyo: true,
        stagger: 0.3,
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={heroRef} className="min-h-screen bg-black text-white">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />

        {/* Floating geometric elements */}
        <div className="floating-element absolute top-20 left-20 w-32 h-32 border-2 border-red-500/10 rotate-45" />
        <div className="floating-element absolute top-40 right-32 w-24 h-24 bg-gradient-to-r from-red-500/5 to-amber-500/5 rounded-full" />
        <div className="floating-element absolute bottom-40 left-40 w-40 h-40 border border-amber-500/10 rounded-full" />
        <div className="floating-element absolute bottom-20 right-20 w-28 h-28 bg-red-500/5 transform rotate-12" />

        {/* Animated particles */}
        <div className="pulse-element absolute top-1/4 left-1/4 w-2 h-2 bg-red-500/30 rounded-full" />
        <div className="pulse-element absolute top-3/4 right-1/3 w-1 h-1 bg-amber-500/40 rounded-full" />
        <div className="pulse-element absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-red-500/20 rounded-full" />
      </div>

      {/* Navigation */}
      <nav
        ref={navRef}
        className="relative z-50 flex items-center justify-between px-4 sm:px-6 lg:px-12 py-4 sm:py-6 bg-black/80 backdrop-blur-sm border-b border-gray-800/50"
      >
        <div className="flex items-center space-x-2 sm:space-x-3">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center shadow-lg">
            <Dumbbell className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </div>
          <div>
            <div className="font-bold text-base sm:text-lg text-red-100">FITNESS FEVER</div>
            <div className="text-xs text-red-300">Fitness • Nutrition • Wellness</div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          <Link
            href="/"
            className="nav-item text-red-100 hover:text-red-500 transition-all duration-300 font-medium text-sm tracking-wider relative group"
          >
            HOME
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full" />
          </Link>
          <Link
            href="/about"
            className="nav-item text-red-200 hover:text-red-500 transition-all duration-300 font-medium text-sm tracking-wider relative group"
          >
            ABOUT
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full" />
          </Link>
          <Link
            href="/programs"
            className="nav-item text-red-200 hover:text-red-500 transition-all duration-300 font-medium text-sm tracking-wider relative group"
          >
            PROGRAMS
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full" />
          </Link>
          <Link
            href="/diet"
            className="nav-item text-red-200 hover:text-red-500 transition-all duration-300 font-medium text-sm tracking-wider relative group"
          >
            NUTRITION
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full" />
          </Link>
          <Link
            href="/pricing"
            className="nav-item text-red-200 hover:text-red-500 transition-all duration-300 font-medium text-sm tracking-wider relative group"
          >
            PRICING
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full" />
          </Link>
          <Link
            href="/locations"
            className="nav-item text-red-200 hover:text-red-500 transition-all duration-300 font-medium text-sm tracking-wider relative group"
          >
            LOCATIONS
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full" />
          </Link>
          <Link
            href="/contact"
            className="nav-item text-red-200 hover:text-red-500 transition-all duration-300 font-medium text-sm tracking-wider relative group"
          >
            CONTACT
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full" />
          </Link>
        </div>

        {/* Desktop Right Side */}
        <div className="hidden lg:flex items-center space-x-4">
          <div className="flex items-center space-x-3">
            <Instagram className="w-4 h-4 text-red-400 hover:text-red-500 cursor-pointer transition-colors" />
            <Facebook className="w-4 h-4 text-red-400 hover:text-red-500 cursor-pointer transition-colors" />
          </div>
          <Button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 text-sm font-medium">JOIN NOW</Button>
        </div>

        {/* Mobile Right Side */}
        <div className="flex lg:hidden items-center space-x-3">
          <Button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 text-sm font-medium">JOIN</Button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-red-200 hover:text-red-500 transition-colors p-2"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-sm border-b border-gray-800/50 lg:hidden">
            <div className="px-4 py-6 space-y-4">
              <Link
                href="/"
                className="block text-red-100 hover:text-red-500 transition-colors font-medium text-base tracking-wider py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                HOME
              </Link>
              <Link
                href="/about"
                className="block text-red-200 hover:text-red-500 transition-colors font-medium text-base tracking-wider py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                ABOUT
              </Link>
              <Link
                href="/programs"
                className="block text-red-200 hover:text-red-500 transition-colors font-medium text-base tracking-wider py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                PROGRAMS
              </Link>
              <Link
                href="/diet-planning"
                className="block text-red-200 hover:text-red-500 transition-colors font-medium text-base tracking-wider py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                NUTRITION
              </Link>
              <Link
                href="/pricing"
                className="block text-red-200 hover:text-red-500 transition-colors font-medium text-base tracking-wider py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                PRICING
              </Link>
              <Link
                href="/contact"
                className="block text-red-200 hover:text-red-500 transition-colors font-medium text-base tracking-wider py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                CONTACT
              </Link>
              <div className="flex items-center space-x-4 pt-4 border-t border-gray-800">
                <Instagram className="w-5 h-5 text-red-400 hover:text-red-500 cursor-pointer transition-colors" />
                <Facebook className="w-5 h-5 text-red-400 hover:text-red-500 cursor-pointer transition-colors" />
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-0">
        <div className="relative z-10 max-w-7xl mx-auto px-0 lg:px-12 w-full">
          <div className="max-w-4xl">
            <div ref={subtitleRef} className="flex flex-col sm:flex-row sm:items-center mb-4 sm:mb-6">
              <div className="flex items-center mb-2 sm:mb-0">
                <MapPin className="w-4 h-4 text-red-500 mr-2" />
                <span className="text-red-500 text-sm font-semibold tracking-wider uppercase">Best Gym in Mumbai</span>
              </div>
              <Badge className="ml-0 sm:ml-4 bg-red-600 text-white w-fit">Fitness • Nutrition • Wellness</Badge>
            </div>

            <h1
              ref={titleRef}
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] mb-6 sm:mb-8 tracking-tight text-red-50"
            >
              Transform Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
                Fitness Journey
              </span>
              <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-red-200 font-normal mt-2 sm:mt-4">
                in Mumbai
              </span>
            </h1>

            <div
              ref={buttonRef}
              className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8 sm:mb-12"
            >
              <Button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold group shadow-lg">
                <span className="flex items-center justify-center">
                  Start Your Transformation
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Button>

              <Button
                variant="outline"
                className="border-red-500/30 text-red-100 hover:bg-red-900/20 px-6 py-4 sm:py-6 group bg-transparent"
              >
                <Play className="mr-2 h-4 w-4 sm:h-5 sm:w-5 fill-current" />
                Virtual Gym Tour
              </Button>
            </div>

            {/* Key Benefits - Mobile Responsive Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
              <div className="text-center p-3 sm:p-4 bg-gray-900/30 rounded-lg backdrop-blur-sm">
                <Award className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500 mx-auto mb-2" />
                <div className="text-xs sm:text-sm font-medium text-red-200">Certified Trainers</div>
              </div>
              <div className="text-center p-3 sm:p-4 bg-gray-900/30 rounded-lg backdrop-blur-sm">
                <Apple className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 mx-auto mb-2" />
                <div className="text-xs sm:text-sm font-medium text-red-200">Sports Nutritionists</div>
              </div>
              <div className="text-center p-3 sm:p-4 bg-gray-900/30 rounded-lg backdrop-blur-sm">
                <Dumbbell className="w-5 h-5 sm:w-6 sm:h-6 text-red-500 mx-auto mb-2" />
                <div className="text-xs sm:text-sm font-medium text-red-200">Modern Equipment</div>
              </div>
              <div className="text-center p-3 sm:p-4 bg-gray-900/30 rounded-lg backdrop-blur-sm">
                <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-500 mx-auto mb-2" />
                <div className="text-xs sm:text-sm font-medium text-red-200">Custom Diet Plans</div>
              </div>
            </div>

            {/* Operating Hours - Mobile Responsive */}
            <div className="bg-gray-900/30 rounded-lg p-3 sm:p-4 backdrop-blur-sm">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 mr-2" />
                  <span className="font-medium text-sm sm:text-base text-red-100">Operating Hours</span>
                </div>
                <div className="text-xs sm:text-sm text-red-200 sm:text-right">
                  <div>Mon-Sat: 6 AM - 11 PM</div>
                  <div>Sunday: 9 AM - 1 PM</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section - Mobile Responsive */}
        <div
          ref={statsRef}
          className="absolute bottom-4 sm:bottom-8 left-4 sm:left-6 lg:left-12 right-4 sm:right-6 lg:right-12"
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 bg-black/60 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-gray-800/50">
            <div className="text-center group cursor-pointer">
              <div className="text-xl sm:text-2xl font-bold text-red-500 mb-1 transition-transform duration-300 group-hover:scale-110">
                2
              </div>
              <div className="text-xs text-red-300 uppercase tracking-wider">Locations</div>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="text-xl sm:text-2xl font-bold text-red-500 mb-1 transition-transform duration-300 group-hover:scale-110">
                5★
              </div>
              <div className="text-xs text-red-300 uppercase tracking-wider">Rated</div>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="text-xl sm:text-2xl font-bold text-red-500 mb-1 transition-transform duration-300 group-hover:scale-110">
                15+
              </div>
              <div className="text-xs text-red-300 uppercase tracking-wider">Hours Daily</div>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="text-xl sm:text-2xl font-bold text-red-500 mb-1 transition-transform duration-300 group-hover:scale-110">
                ₹1K
              </div>
              <div className="text-xs text-red-300 uppercase tracking-wider">Starting Price</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Fitness Fever Section */}
      <section ref={featuresRef} className="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-red-50">
              Why Choose <span className="text-red-500">Fitness Fever?</span>
            </h2>
            <p className="text-red-200 text-lg max-w-2xl mx-auto">
              We combine fitness expertise with sports nutrition to deliver complete wellness solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Certified Trainers & Sports Nutritionists */}
            <Card className="feature-card bg-gray-900/50 border-gray-800 hover:border-red-500/50 transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-500/30 transition-colors">
                  <Award className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-red-100">Certified Trainers & Sports Nutritionists</h3>
                <p className="text-red-200 mb-4">
                  Our team includes certified fitness trainers and qualified sports nutritionists who work together to
                  optimize your results
                </p>
                <div className="flex items-center text-sm text-red-500">
                  <CheckCircle className="w-4 h-4 mr-1" />
                  Expert guidance for fitness & nutrition
                </div>
              </CardContent>
            </Card>

            {/* Modern Equipment & Spacious Facilities */}
            <Card className="feature-card bg-gray-900/50 border-gray-800 hover:border-red-500/50 transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-500/30 transition-colors">
                  <Dumbbell className="w-6 h-6 text-blue-500" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-red-100">Modern Equipment & Spacious Facilities</h3>
                <p className="text-red-200 mb-4">
                  State-of-the-art equipment, AC environment, and spacious workout areas designed for optimal training
                  experience
                </p>
                <div className="flex items-center text-sm text-blue-500">
                  <CheckCircle className="w-4 h-4 mr-1" />
                  Best equipped gym in Mumbai
                </div>
              </CardContent>
            </Card>

            {/* Customized Fitness & Diet Plans */}
            <Card className="feature-card bg-gray-900/50 border-gray-800 hover:border-red-500/50 transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-500/30 transition-colors">
                  <BookOpen className="w-6 h-6 text-green-500" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-red-100">Customized Fitness & Diet Plans</h3>
                <p className="text-red-200 mb-4">
                  Personalized workout routines and nutrition plans tailored to your specific goals and lifestyle
                </p>
                <div className="flex items-center text-sm text-green-500">
                  <CheckCircle className="w-4 h-4 mr-1" />
                  Personalized approach to fitness
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Popular Programs Section */}
      <section className="relative py-12 sm:py-16 lg:py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-red-50">
              Our Popular <span className="text-red-500">Programs</span>
            </h2>
            <p className="text-red-200 text-lg max-w-2xl mx-auto">
              From strength training to sports nutrition coaching, we offer comprehensive programs for every fitness
              goal
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-gray-900/50 border-gray-800 hover:border-red-500/50 transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-red-500/20 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:bg-red-500/30 transition-colors">
                  <Dumbbell className="w-8 h-8 text-red-500" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-red-100">Strength Training</h3>
                <p className="text-red-200 text-sm mb-4">
                  Build muscle and increase strength with our expert-guided programs
                </p>
                <Link href="/programs">
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white text-sm">Learn More</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800 hover:border-green-500/50 transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:bg-green-500/30 transition-colors">
                  <Apple className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-red-100">Sports Nutrition</h3>
                <p className="text-red-200 text-sm mb-4">Personalized diet plans by certified sports nutritionists</p>
                <Link href="/diet-planning">
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white text-sm">Learn More</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800 hover:border-blue-500/50 transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:bg-blue-500/30 transition-colors">
                  <Users className="w-8 h-8 text-blue-500" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-red-100">Group Classes</h3>
                <p className="text-red-200 text-sm mb-4">
                  Yoga, CrossFit, Zumba, and HIIT classes for all fitness levels
                </p>
                <Link href="/programs">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm">Learn More</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800 hover:border-purple-500/50 transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:bg-purple-500/30 transition-colors">
                  <Target className="w-8 h-8 text-purple-500" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-red-100">Personal Training</h3>
                <p className="text-red-200 text-sm mb-4">One-on-one coaching with certified fitness professionals</p>
                <Link href="/programs">
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white text-sm">Learn More</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Meet Our Sports Nutrition Experts Section */}
      <section
        ref={nutritionistsRef}
        className="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-900 to-black"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-red-50">
              Meet Our Sports Nutrition <span className="text-red-500">Experts</span>
            </h2>
            <p className="text-red-200 text-lg max-w-2xl mx-auto">
              Our certified sports nutritionists help you achieve optimal performance through personalized diet planning
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="nutritionist-card bg-gray-900/50 border-gray-800 hover:border-green-500/50 transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-white font-bold text-lg">DR</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-red-100">Dr. Priya Sharma</h3>
                <p className="text-green-500 text-sm mb-3">Sports Nutritionist</p>
                <p className="text-red-200 text-sm mb-4">
                  M.Sc. Sports Nutrition, 8+ years experience in athletic performance nutrition and weight management
                </p>
                <div className="flex items-center justify-center text-sm text-green-500">
                  <Award className="w-4 h-4 mr-1" />
                  Certified Sports Nutritionist
                </div>
              </CardContent>
            </Card>

            <Card className="nutritionist-card bg-gray-900/50 border-gray-800 hover:border-green-500/50 transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-white font-bold text-lg">RK</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-red-100">Rahul Kumar</h3>
                <p className="text-blue-500 text-sm mb-3">Clinical Nutritionist</p>
                <p className="text-red-200 text-sm mb-4">
                  B.Sc. Nutrition & Dietetics, specializes in therapeutic nutrition and lifestyle disease management
                </p>
                <div className="flex items-center justify-center text-sm text-blue-500">
                  <Award className="w-4 h-4 mr-1" />
                  Clinical Nutrition Expert
                </div>
              </CardContent>
            </Card>

            <Card className="nutritionist-card bg-gray-900/50 border-gray-800 hover:border-green-500/50 transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-white font-bold text-lg">AS</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-red-100">Anita Singh</h3>
                <p className="text-purple-500 text-sm mb-3">Fitness Nutritionist</p>
                <p className="text-red-200 text-sm mb-4">
                  M.Sc. Food & Nutrition, expert in body composition optimization and supplement guidance
                </p>
                <div className="flex items-center justify-center text-sm text-purple-500">
                  <Award className="w-4 h-4 mr-1" />
                  Body Composition Specialist
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link href="/diet-planning">
              <Button className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-3">
                <Apple className="w-4 h-4 mr-2" />
                Book Nutrition Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section ref={locationsRef} className="relative py-12 sm:py-16 lg:py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-red-50">
              Our <span className="text-red-500">Locations</span>
            </h2>
            <p className="text-red-200 text-lg">
              Two premium locations in Mumbai's northern suburbs for your convenience
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="location-card bg-gray-900/50 border-gray-800 hover:border-red-500/50 transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mr-4">
                    <MapPin className="w-6 h-6 text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-red-50">Bhayandar East</h3>
                    <Badge className="mt-1 bg-green-600 text-white text-xs">Main Branch</Badge>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="text-red-200">
                    <div className="font-medium mb-1">Address:</div>
                    <div className="text-sm">
                      1st Floor, Kunal Shopping Arcade,
                      <br />
                      Navghar Road, Bhayandar East,
                      <br />
                      Thane – 401105
                    </div>
                  </div>

                  <div className="text-red-200">
                    <div className="font-medium mb-1">Operating Hours:</div>
                    <div className="text-sm">
                      Mon-Sat: 6 AM - 11 PM
                      <br />
                      Sunday: 9 AM - 1 PM
                    </div>
                  </div>

                  <div className="text-red-200">
                    <div className="font-medium mb-1">Facilities:</div>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <Badge variant="outline" className="text-xs border-red-500/30 text-red-200">
                        AC Gym Floor
                      </Badge>
                      <Badge variant="outline" className="text-xs border-red-500/30 text-red-200">
                        Nutrition Consultation
                      </Badge>
                      <Badge variant="outline" className="text-xs border-red-500/30 text-red-200">
                        Free Parking
                      </Badge>
                      <Badge variant="outline" className="text-xs border-red-500/30 text-red-200">
                        Lockers
                      </Badge>
                    </div>
                  </div>
                </div>

                <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                  <MapPin className="w-4 h-4 mr-2" />
                  Get Directions
                </Button>
              </CardContent>
            </Card>

            <Card className="location-card bg-gray-900/50 border-gray-800 hover:border-red-500/50 transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mr-4">
                    <MapPin className="w-6 h-6 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-red-50">Borivali West</h3>
                    <Badge className="mt-1 bg-blue-600 text-white text-xs">Premium Branch</Badge>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="text-red-200">
                    <div className="font-medium mb-1">Address:</div>
                    <div className="text-sm">
                      1st Floor, Rosemar Apartment,
                      <br />
                      Holy Cross Road, IC Colony,
                      <br />
                      Borivali West, Mumbai – 400103
                    </div>
                  </div>

                  <div className="text-red-200">
                    <div className="font-medium mb-1">Operating Hours:</div>
                    <div className="text-sm">
                      Daily: 6 AM - 11 PM
                      <br />
                      <span className="text-green-500">Extended Hours</span>
                    </div>
                  </div>

                  <div className="text-red-200">
                    <div className="font-medium mb-1">Special Features:</div>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <Badge variant="outline" className="text-xs border-red-500/30 text-red-200">
                        Steam Room
                      </Badge>
                      <Badge variant="outline" className="text-xs border-red-500/30 text-red-200">
                        Massage Therapy
                      </Badge>
                      <Badge variant="outline" className="text-xs border-red-500/30 text-red-200">
                        Premium Equipment
                      </Badge>
                      <Badge variant="outline" className="text-xs border-red-500/30 text-red-200">
                        Nutrition Consultancy
                      </Badge>
                    </div>
                  </div>
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  <MapPin className="w-4 h-4 mr-2" />
                  Get Directions
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        ref={transformationsRef}
        className="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-900 to-black"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-red-50">
              What Our <span className="text-red-500">Members Say</span>
            </h2>
            <p className="text-red-200 text-lg">Real transformations powered by fitness + nutrition</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="transformation-card bg-gray-900/50 border-gray-800 hover:border-red-500/50 transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex justify-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-red-200 text-sm text-center mb-4">
                  "The combination of expert training and sports nutrition guidance helped me lose 15kg in 6 months. The
                  nutritionist's meal plans were game-changing!"
                </p>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mb-2 mx-auto">
                    <span className="text-white font-bold text-sm">MB</span>
                  </div>
                  <h3 className="font-bold text-red-100">Meera Bhatia</h3>
                  <p className="text-red-300 text-sm">Weight Loss Success</p>
                </div>
              </CardContent>
            </Card>

            <Card className="transformation-card bg-gray-900/50 border-gray-800 hover:border-red-500/50 transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex justify-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-red-200 text-sm text-center mb-4">
                  "Best equipped gym with experienced trainers and amazing sports nutritionists. The personalized diet
                  plan boosted my performance significantly!"
                </p>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-2 mx-auto">
                    <span className="text-white font-bold text-sm">RK</span>
                  </div>
                  <h3 className="font-bold text-red-100">Rajesh Kumar</h3>
                  <p className="text-red-300 text-sm">Athletic Performance</p>
                </div>
              </CardContent>
            </Card>

            <Card className="transformation-card bg-gray-900/50 border-gray-800 hover:border-red-500/50 transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex justify-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-red-200 text-sm text-center mb-4">
                  "The nutrition consultation was incredibly detailed. My nutritionist helped me understand my body's
                  needs and created a sustainable eating plan."
                </p>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mb-2 mx-auto">
                    <span className="text-white font-bold text-sm">PS</span>
                  </div>
                  <h3 className="font-bold text-red-100">Priya Sharma</h3>
                  <p className="text-red-300 text-sm">Nutrition Success</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-3">
              <Instagram className="w-4 h-4 mr-2" />
              Follow Us for More Success Stories
            </Button>
          </div>
        </div>
      </section>

      {/* Start Your Fitness Journey Today Section */}
      <section className="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-red-600 to-red-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Start Your Fitness Journey Today</h2>
          <p className="text-red-100 text-lg mb-8 max-w-2xl mx-auto">
            Join Mumbai's best equipped gym with certified trainers, sports nutritionists, and modern facilities.
            Transform your body and mind with our comprehensive approach to fitness and wellness.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
              <Phone className="w-5 h-5 mr-2" />
              Call Now for Membership
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg bg-transparent"
            >
              <Apple className="w-5 h-5 mr-2" />
              Book Nutrition Consultation
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-red-100">
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-2" />
              <span>Certified Trainers</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-2" />
              <span>Sports Nutritionists</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-2" />
              <span>Custom Diet Plans</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-2" />
              <span>Free Trial Available</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-red-500/30 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Dumbbell className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-bold text-lg text-red-100">FITNESS FEVER</div>
                  <div className="text-xs text-red-300">Fitness • Nutrition • Wellness</div>
                </div>
              </div>
              <p className="text-red-200 text-sm">
                Mumbai's best equipped gym with certified trainers, sports nutritionists, and comprehensive fitness
                solutions.
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-4 text-red-100">Bhayandar East</h3>
              <div className="space-y-2 text-sm text-red-200">
                <div className="flex items-start">
                  <MapPin className="w-4 h-4 mr-2 text-red-500 mt-0.5 flex-shrink-0" />
                  <span>
                    Kunal Shopping Arcade,
                    <br />
                    Navghar Road, Thane – 401105
                  </span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2 text-red-500 flex-shrink-0" />
                  <span>Mon-Sat: 6 AM - 11 PM</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-bold mb-4 text-red-100">Borivali West</h3>
              <div className="space-y-2 text-sm text-red-200">
                <div className="flex items-start">
                  <MapPin className="w-4 h-4 mr-2 text-red-500 mt-0.5 flex-shrink-0" />
                  <span>
                    Rosemar Apartment,
                    <br />
                    Holy Cross Road, Mumbai – 400103
                  </span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2 text-red-500 flex-shrink-0" />
                  <span>Daily: 6 AM - 11 PM</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-bold mb-4 text-red-100">Connect With Us</h3>
              <div className="space-y-3 text-sm text-red-200">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2 text-red-500 flex-shrink-0" />
                  <span>Call for Membership</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2 text-red-500 flex-shrink-0" />
                  <span>info@fitnessfever.com</span>
                </div>
                <div className="flex items-center space-x-3 mt-4">
                  <Instagram className="w-5 h-5 text-red-500 hover:text-red-400 cursor-pointer transition-colors" />
                  <Facebook className="w-5 h-5 text-red-500 hover:text-red-400 cursor-pointer transition-colors" />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-red-500/20 text-center">
            <p className="text-red-300 text-sm">© 2024 Fitness Fever Gym. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
