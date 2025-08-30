"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  ArrowLeft,
  Dumbbell,
  Apple,
  Target,
  TrendingDown,
  TrendingUp,
  Zap,
  Award,
  CheckCircle,
  Phone,
  Calendar,
  User,
  Mail,
  MessageSquare,
  Send,
} from "lucide-react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function DietPlanningPage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const whyNutritionRef = useRef<HTMLDivElement>(null)
  const dietPlansRef = useRef<HTMLDivElement>(null)
  const nutritionistsRef = useRef<HTMLDivElement>(null)
  const consultationRef = useRef<HTMLDivElement>(null)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    goal: "",
    message: "",
  })

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      gsap.fromTo(
        ".hero-content",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.3 },
      )

      // Why nutrition animation
      gsap.fromTo(
        ".nutrition-benefit",
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: whyNutritionRef.current,
            start: "top 80%",
          },
        },
      )

      // Diet plans animation
      gsap.fromTo(
        ".diet-plan-card",
        { opacity: 0, y: 50, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: dietPlansRef.current,
            start: "top 80%",
          },
        },
      )

      // Nutritionists animation
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

      // Consultation form animation
      gsap.fromTo(
        ".form-element",
        { opacity: 0, x: 30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: consultationRef.current,
            start: "top 80%",
          },
        },
      )
    }, heroRef)

    return () => ctx.revert()
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Nutrition consultation form submitted:", formData)
    setFormData({
      name: "",
      email: "",
      phone: "",
      goal: "",
      message: "",
    })
  }

  return (
    <div ref={heroRef} className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 lg:px-12 py-6 bg-black/80 backdrop-blur-sm border-b border-gray-800/50">
        <Link href="/" className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center">
            <Dumbbell className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="font-bold text-red-100">FITNESS FEVER</div>
            <div className="text-xs text-red-300">Diet Planning</div>
          </div>
        </Link>

        <Link href="/" className="flex items-center text-red-200 hover:text-red-500 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="hero-content text-center">
            <h1 className="text-5xl md:text-6xl font-black mb-6 text-red-50">
              Personalized <span className="text-green-500">Diet Planning</span>
            </h1>
            <p className="text-xl text-red-100 max-w-3xl mx-auto mb-8">with Our Sports Nutritionists in Mumbai</p>
            <p className="text-lg text-red-200 max-w-4xl mx-auto mb-8">
              Get custom meal plans designed by certified sports nutritionists at Fitness Fever. Boost your performance
              and results with expert diet planning tailored to your fitness goals.
            </p>
            <div className="flex items-center justify-center space-x-8 text-sm text-red-200">
              <div className="flex items-center">
                <Apple className="w-4 h-4 text-green-500 mr-2" />
                <span>Custom Meal Plans</span>
              </div>
              <div className="flex items-center">
                <Award className="w-4 h-4 text-green-500 mr-2" />
                <span>Certified Nutritionists</span>
              </div>
              <div className="flex items-center">
                <Target className="w-4 h-4 text-green-500 mr-2" />
                <span>Goal-Specific Plans</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Nutrition is Key to Fitness */}
      <section ref={whyNutritionRef} className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-red-50">
              Why Nutrition is Key to <span className="text-green-500">Fitness</span>
            </h2>
            <p className="text-red-200 text-lg max-w-2xl mx-auto">
              Proper nutrition accounts for 70% of your fitness results. Here's why it matters
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <Card className="nutrition-benefit bg-gray-900/50 border-gray-800 p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-red-100">Fuels Performance</h3>
                    <p className="text-red-200 text-sm">
                      Proper nutrition provides the energy and nutrients your body needs for optimal workout performance
                      and faster recovery.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="nutrition-benefit bg-gray-900/50 border-gray-800 p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-red-100">Accelerates Results</h3>
                    <p className="text-red-200 text-sm">
                      The right nutrition plan can accelerate muscle building, fat loss, and overall body composition
                      improvements by up to 3x.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="nutrition-benefit bg-gray-900/50 border-gray-800 p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-purple-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-red-100">Supports Recovery</h3>
                    <p className="text-red-200 text-sm">
                      Strategic nutrition timing and composition helps reduce muscle soreness and speeds up recovery
                      between workouts.
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="nutrition-benefit bg-gray-900/50 border-gray-800 p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Apple className="w-6 h-6 text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-red-100">Optimizes Health</h3>
                    <p className="text-red-200 text-sm">
                      A well-planned diet improves overall health markers including energy levels, sleep quality, and
                      immune function.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="nutrition-benefit bg-gray-900/50 border-gray-800 p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-yellow-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-red-100">Prevents Plateaus</h3>
                    <p className="text-red-200 text-sm">
                      Proper nutrition periodization helps break through fitness plateaus and maintains consistent
                      progress toward your goals.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="nutrition-benefit bg-gray-900/50 border-gray-800 p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-indigo-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-red-100">Long-term Success</h3>
                    <p className="text-red-200 text-sm">
                      Sustainable nutrition habits ensure long-term maintenance of your fitness achievements and overall
                      wellness.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Diet Plans for Every Goal */}
      <section ref={dietPlansRef} className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-red-50">
              Custom Diet Plans for <span className="text-green-500">Every Goal</span>
            </h2>
            <p className="text-red-200 text-lg">
              Our sports nutritionists create personalized meal plans based on your specific objectives
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Weight Loss Diets */}
            <Card className="diet-plan-card bg-gray-900/50 border-gray-800 hover:border-red-500/50 transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-red-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-red-500/30 transition-colors">
                  <TrendingDown className="w-8 h-8 text-red-500" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-red-50">Weight Loss Diets</h3>
                <p className="text-red-200 mb-6">
                  Scientifically designed calorie-deficit plans that promote sustainable fat loss while preserving lean
                  muscle mass and maintaining energy levels.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-red-200">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span>Customized calorie targets</span>
                  </div>
                  <div className="flex items-center text-sm text-red-200">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span>Macro-nutrient optimization</span>
                  </div>
                  <div className="flex items-center text-sm text-red-200">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span>Meal timing strategies</span>
                  </div>
                  <div className="flex items-center text-sm text-red-200">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span>Sustainable food choices</span>
                  </div>
                </div>
                <Badge className="bg-red-600 text-white mb-4">Fat Loss Focus</Badge>
                <Button className="w-full bg-red-600 hover:bg-red-700 text-white">Get Weight Loss Plan</Button>
              </CardContent>
            </Card>

            {/* Muscle Gain Diets */}
            <Card className="diet-plan-card bg-gray-900/50 border-gray-800 hover:border-blue-500/50 transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-500/30 transition-colors">
                  <TrendingUp className="w-8 h-8 text-blue-500" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-red-50">Muscle Gain Diets</h3>
                <p className="text-red-200 mb-6">
                  High-protein, calorie-surplus plans designed to support muscle growth, strength gains, and optimal
                  recovery from intense training sessions.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-red-200">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span>High-quality protein sources</span>
                  </div>
                  <div className="flex items-center text-sm text-red-200">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span>Strategic carb timing</span>
                  </div>
                  <div className="flex items-center text-sm text-red-200">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span>Recovery nutrition</span>
                  </div>
                  <div className="flex items-center text-sm text-red-200">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span>Supplement guidance</span>
                  </div>
                </div>
                <Badge className="bg-blue-600 text-white mb-4">Muscle Building</Badge>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Get Muscle Gain Plan</Button>
              </CardContent>
            </Card>

            {/* Athletic Performance Nutrition */}
            <Card className="diet-plan-card bg-gray-900/50 border-gray-800 hover:border-green-500/50 transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-green-500/30 transition-colors">
                  <Zap className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-red-50">Athletic Performance Nutrition</h3>
                <p className="text-red-200 mb-6">
                  Sport-specific nutrition plans that optimize energy systems, enhance endurance, improve power output,
                  and accelerate recovery for athletes.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-red-200">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span>Pre/post workout nutrition</span>
                  </div>
                  <div className="flex items-center text-sm text-red-200">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span>Hydration strategies</span>
                  </div>
                  <div className="flex items-center text-sm text-red-200">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span>Competition day planning</span>
                  </div>
                  <div className="flex items-center text-sm text-red-200">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span>Performance supplements</span>
                  </div>
                </div>
                <Badge className="bg-green-600 text-white mb-4">Performance Focus</Badge>
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white">Get Performance Plan</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Meet Our Nutrition Experts */}
      <section ref={nutritionistsRef} className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-red-50">
              Meet Our Nutrition <span className="text-green-500">Experts</span>
            </h2>
            <p className="text-red-200 text-lg">
              Certified sports nutritionists dedicated to optimizing your health and performance
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="nutritionist-card bg-gray-900/50 border-gray-800 hover:border-green-500/50 transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-white font-bold text-lg">DR</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-red-100">Dr. Priya Sharma</h3>
                <p className="text-green-500 text-sm mb-3">Chief Sports Nutritionist</p>
                <p className="text-red-200 text-sm mb-4">
                  M.Sc. Sports Nutrition, Ph.D. Clinical Nutrition. 12+ years experience in athletic performance
                  nutrition, weight management, and metabolic optimization.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-center text-xs text-green-500">
                    <Award className="w-3 h-3 mr-1" />
                    Certified Sports Nutritionist (ISSN)
                  </div>
                  <div className="flex items-center justify-center text-xs text-green-500">
                    <Award className="w-3 h-3 mr-1" />
                    Precision Nutrition Level 2 Certified
                  </div>
                </div>
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white text-sm">Book Consultation</Button>
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
                  B.Sc. Nutrition & Dietetics, M.Sc. Clinical Nutrition. Specializes in therapeutic nutrition, diabetes
                  management, and lifestyle disease prevention.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-center text-xs text-blue-500">
                    <Award className="w-3 h-3 mr-1" />
                    Registered Dietitian (RD)
                  </div>
                  <div className="flex items-center justify-center text-xs text-blue-500">
                    <Award className="w-3 h-3 mr-1" />
                    Certified Diabetes Educator
                  </div>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm">Book Consultation</Button>
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
                  M.Sc. Food & Nutrition. Expert in body composition optimization, supplement guidance, and meal
                  planning for fitness goals and body transformation.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-center text-xs text-purple-500">
                    <Award className="w-3 h-3 mr-1" />
                    Body Composition Specialist
                  </div>
                  <div className="flex items-center justify-center text-xs text-purple-500">
                    <Award className="w-3 h-3 mr-1" />
                    Certified Nutrition Coach
                  </div>
                </div>
                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white text-sm">
                  Book Consultation
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Book a Nutrition Consultation */}
      <section ref={consultationRef} className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-red-50">
              Book a Nutrition <span className="text-green-500">Consultation</span>
            </h2>
            <p className="text-red-200 text-lg">
              Get personalized nutrition guidance from our certified sports nutritionists
            </p>
          </div>

          <Card className="bg-gray-900/50 border-gray-800">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="form-element">
                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-red-100">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-red-400" />
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="pl-10 bg-gray-800 border-gray-700 text-red-100 placeholder-red-400"
                        placeholder="Enter your full name"
                      />
                    </div>
                  </div>

                  <div className="form-element">
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-red-100">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-red-400" />
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="pl-10 bg-gray-800 border-gray-700 text-red-100 placeholder-red-400"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="form-element">
                    <label htmlFor="phone" className="block text-sm font-medium mb-2 text-red-100">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-red-400" />
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="pl-10 bg-gray-800 border-gray-700 text-red-100 placeholder-red-400"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>

                  <div className="form-element">
                    <label htmlFor="goal" className="block text-sm font-medium mb-2 text-red-100">
                      Primary Goal *
                    </label>
                    <select
                      id="goal"
                      name="goal"
                      required
                      value={formData.goal}
                      onChange={handleInputChange}
                      className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md text-red-100"
                    >
                      <option value="">Select your primary goal</option>
                      <option value="weight-loss">Weight Loss</option>
                      <option value="muscle-gain">Muscle Gain</option>
                      <option value="athletic-performance">Athletic Performance</option>
                      <option value="general-health">General Health & Wellness</option>
                      <option value="body-composition">Body Composition</option>
                      <option value="medical-nutrition">Medical Nutrition Therapy</option>
                    </select>
                  </div>
                </div>

                <div className="form-element">
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-red-100">
                    Additional Information
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-red-400" />
                    <Textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="pl-10 bg-gray-800 border-gray-700 text-red-100 placeholder-red-400 resize-none"
                      placeholder="Tell us about your current diet, health conditions, food preferences, or any specific concerns..."
                    />
                  </div>
                </div>

                <div className="form-element">
                  <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white py-4 text-lg">
                    <Send className="w-5 h-5 mr-2" />
                    Book Nutrition Consultation
                  </Button>
                </div>
              </form>

              <div className="mt-8 p-4 bg-gray-800/50 rounded-lg">
                <h4 className="font-semibold mb-2 text-red-100">What to expect in your consultation:</h4>
                <ul className="text-sm text-red-200 space-y-1">
                  <li>• Comprehensive nutritional assessment and body composition analysis</li>
                  <li>• Personalized meal plan based on your goals and preferences</li>
                  <li>• Supplement recommendations and timing strategies</li>
                  <li>• Ongoing support and plan adjustments as needed</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Ready to Transform Your Nutrition?</h2>
          <p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto">
            Join hundreds of members who have achieved their fitness goals with our expert nutrition guidance. Start
            your personalized diet plan today!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
              <Phone className="w-5 h-5 mr-2" />
              Call for Consultation
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg bg-transparent"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Online
            </Button>
          </div>

          <div className="mt-8 flex items-center justify-center space-x-8 text-green-100">
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-2" />
              <span>Certified Nutritionists</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-2" />
              <span>Personalized Plans</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-2" />
              <span>Proven Results</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
