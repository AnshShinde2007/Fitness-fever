"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ArrowLeft,
  Dumbbell,
  Award,
  Users,
  Target,
  Heart,
  Apple,
  BookOpen,
  Star,
  CheckCircle,
  Phone,
  Mail,
} from "lucide-react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function AboutPage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const missionRef = useRef<HTMLDivElement>(null)
  const teamRef = useRef<HTMLDivElement>(null)
  const whyChooseRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      gsap.fromTo(
        ".hero-content",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.3 },
      )

      // Mission animation
      gsap.fromTo(
        ".mission-card",
        { opacity: 0, y: 50, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: missionRef.current,
            start: "top 80%",
          },
        },
      )

      // Team animation
      gsap.fromTo(
        ".team-card",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: teamRef.current,
            start: "top 80%",
          },
        },
      )

      // Why choose animation
      gsap.fromTo(
        ".why-choose-card",
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: whyChooseRef.current,
            start: "top 80%",
          },
        },
      )
    }, heroRef)

    return () => ctx.revert()
  }, [])

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
            <div className="text-xs text-red-300">About Us</div>
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
              About <span className="text-red-500">Fitness Fever</span>
            </h1>
            <p className="text-xl text-red-100 max-w-3xl mx-auto mb-8">Your Fitness & Nutrition Partner in Mumbai</p>
            <p className="text-lg text-red-200 max-w-4xl mx-auto">
              We are Mumbai's premier fitness destination, combining state-of-the-art equipment with certified trainers
              and expert sports nutritionists to deliver comprehensive wellness solutions. Our mission is to transform
              lives through the perfect blend of fitness training and nutritional guidance.
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission & Core Values */}
      <section ref={missionRef} className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-red-50">
              Our Mission & <span className="text-red-500">Core Values</span>
            </h2>
            <p className="text-red-200 text-lg">
              Dedicated to transforming lives through fitness, nutrition, and wellness
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="mission-card bg-gray-900/50 border-gray-800 hover:border-red-500/50 transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-red-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-red-500/30 transition-colors">
                  <Target className="w-8 h-8 text-red-500" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-red-50">Our Mission</h3>
                <p className="text-red-200">
                  To empower individuals to achieve their fitness goals through expert training, personalized nutrition
                  guidance, and a supportive community environment that promotes long-term wellness.
                </p>
              </CardContent>
            </Card>

            <Card className="mission-card bg-gray-900/50 border-gray-800 hover:border-blue-500/50 transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-500/30 transition-colors">
                  <Heart className="w-8 h-8 text-blue-500" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-red-50">Our Values</h3>
                <p className="text-red-200">
                  Excellence in service, integrity in guidance, innovation in approach, and commitment to each member's
                  unique journey towards optimal health and fitness.
                </p>
              </CardContent>
            </Card>

            <Card className="mission-card bg-gray-900/50 border-gray-800 hover:border-green-500/50 transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-green-500/30 transition-colors">
                  <Users className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-red-50">Our Community</h3>
                <p className="text-red-200">
                  Building a supportive fitness family where members motivate each other, celebrate achievements, and
                  work together towards healthier, happier lives.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section ref={teamRef} className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-red-50">
              Meet Our <span className="text-red-500">Team</span>
            </h2>
            <p className="text-red-200 text-lg">Certified professionals dedicated to your health and performance</p>
          </div>

          {/* Certified Fitness Trainers */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold mb-8 text-center text-red-50">
              Certified <span className="text-red-500">Fitness Trainers</span>
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="team-card bg-gray-900/50 border-gray-800 hover:border-red-500/50 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <span className="text-white font-bold text-lg">VK</span>
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-red-100">Vikram Kumar</h4>
                  <p className="text-red-500 text-sm mb-3">Head Trainer & Fitness Director</p>
                  <p className="text-red-200 text-sm mb-4">
                    ACSM Certified, 10+ years experience in strength training, bodybuilding, and functional fitness.
                    Specializes in transformation programs.
                  </p>
                  <div className="flex items-center justify-center text-sm text-red-500">
                    <Award className="w-4 h-4 mr-1" />
                    ACSM Certified Personal Trainer
                  </div>
                </CardContent>
              </Card>

              <Card className="team-card bg-gray-900/50 border-gray-800 hover:border-red-500/50 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <span className="text-white font-bold text-lg">SP</span>
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-red-100">Sneha Patel</h4>
                  <p className="text-blue-500 text-sm mb-3">Group Fitness Instructor</p>
                  <p className="text-red-200 text-sm mb-4">
                    Certified Yoga & Pilates instructor with expertise in HIIT, Zumba, and functional training. 8+ years
                    of group fitness experience.
                  </p>
                  <div className="flex items-center justify-center text-sm text-blue-500">
                    <Award className="w-4 h-4 mr-1" />
                    RYT-500 Yoga Certified
                  </div>
                </CardContent>
              </Card>

              <Card className="team-card bg-gray-900/50 border-gray-800 hover:border-red-500/50 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <span className="text-white font-bold text-lg">AM</span>
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-red-100">Arjun Mehta</h4>
                  <p className="text-purple-500 text-sm mb-3">Strength & Conditioning Coach</p>
                  <p className="text-red-200 text-sm mb-4">
                    NSCA Certified with specialization in powerlifting, CrossFit, and athletic performance. Former
                    competitive athlete with 12+ years experience.
                  </p>
                  <div className="flex items-center justify-center text-sm text-purple-500">
                    <Award className="w-4 h-4 mr-1" />
                    NSCA-CSCS Certified
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Expert Sports Nutritionists */}
          <div>
            <h3 className="text-3xl font-bold mb-8 text-center text-red-50">
              Expert <span className="text-green-500">Sports Nutritionists</span>
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="team-card bg-gray-900/50 border-gray-800 hover:border-green-500/50 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <span className="text-white font-bold text-lg">DR</span>
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-red-100">Dr. Priya Sharma</h4>
                  <p className="text-green-500 text-sm mb-3">Chief Sports Nutritionist</p>
                  <p className="text-red-200 text-sm mb-4">
                    M.Sc. Sports Nutrition, Ph.D. in Clinical Nutrition. 12+ years experience in athletic performance
                    nutrition, weight management, and therapeutic diets.
                  </p>
                  <div className="flex items-center justify-center text-sm text-green-500">
                    <Award className="w-4 h-4 mr-1" />
                    Certified Sports Nutritionist
                  </div>
                </CardContent>
              </Card>

              <Card className="team-card bg-gray-900/50 border-gray-800 hover:border-green-500/50 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <span className="text-white font-bold text-lg">RK</span>
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-red-100">Rahul Kumar</h4>
                  <p className="text-teal-500 text-sm mb-3">Clinical Nutritionist</p>
                  <p className="text-red-200 text-sm mb-4">
                    B.Sc. Nutrition & Dietetics, specializes in therapeutic nutrition, diabetes management, and
                    lifestyle disease prevention. 8+ years clinical experience.
                  </p>
                  <div className="flex items-center justify-center text-sm text-teal-500">
                    <Award className="w-4 h-4 mr-1" />
                    Clinical Nutrition Expert
                  </div>
                </CardContent>
              </Card>

              <Card className="team-card bg-gray-900/50 border-gray-800 hover:border-green-500/50 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <span className="text-white font-bold text-lg">AS</span>
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-red-100">Anita Singh</h4>
                  <p className="text-emerald-500 text-sm mb-3">Fitness Nutritionist</p>
                  <p className="text-red-200 text-sm mb-4">
                    M.Sc. Food & Nutrition, expert in body composition optimization, supplement guidance, and meal
                    planning for fitness goals. 6+ years experience.
                  </p>
                  <div className="flex items-center justify-center text-sm text-emerald-500">
                    <Award className="w-4 h-4 mr-1" />
                    Body Composition Specialist
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Fitness Fever */}
      <section ref={whyChooseRef} className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-red-50">
              Why Choose <span className="text-red-500">Fitness Fever?</span>
            </h2>
            <p className="text-red-200 text-lg">
              What sets us apart as Mumbai's premier fitness and nutrition destination
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <Card className="why-choose-card bg-gray-900/50 border-gray-800 p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-red-100">Certified Expertise</h3>
                    <p className="text-red-200 text-sm">
                      All our trainers and nutritionists hold recognized certifications and undergo continuous education
                      to stay updated with the latest fitness and nutrition science.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="why-choose-card bg-gray-900/50 border-gray-800 p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Dumbbell className="w-6 h-6 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-red-100">State-of-the-Art Equipment</h3>
                    <p className="text-red-200 text-sm">
                      Modern cardio machines, free weights, functional training equipment, and specialized tools for
                      every type of workout in a fully air-conditioned environment.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="why-choose-card bg-gray-900/50 border-gray-800 p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Apple className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-red-100">Integrated Nutrition Support</h3>
                    <p className="text-red-200 text-sm">
                      Unlike other gyms, we provide comprehensive nutrition counseling with personalized meal plans
                      designed by qualified sports nutritionists.
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="why-choose-card bg-gray-900/50 border-gray-800 p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-6 h-6 text-purple-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-red-100">Personalized Approach</h3>
                    <p className="text-red-200 text-sm">
                      Every member receives customized workout plans and nutrition guidance based on their individual
                      goals, fitness level, and lifestyle requirements.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="why-choose-card bg-gray-900/50 border-gray-800 p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-yellow-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-red-100">Supportive Community</h3>
                    <p className="text-red-200 text-sm">
                      Join a motivating community of like-minded individuals who support each other's fitness journeys
                      and celebrate achievements together.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="why-choose-card bg-gray-900/50 border-gray-800 p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Star className="w-6 h-6 text-indigo-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-red-100">Proven Results</h3>
                    <p className="text-red-200 text-sm">
                      Our integrated approach of fitness training and nutrition guidance has helped hundreds of members
                      achieve their transformation goals successfully.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Ready to Join Our Fitness Family?</h2>
          <p className="text-red-100 text-lg mb-8 max-w-2xl mx-auto">
            Experience the difference of working with certified trainers and sports nutritionists who are committed to
            your success.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
              <Phone className="w-5 h-5 mr-2" />
              Schedule a Tour
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg bg-transparent"
            >
              <Mail className="w-5 h-5 mr-2" />
              Contact Our Team
            </Button>
          </div>

          <div className="mt-8 flex items-center justify-center space-x-8 text-red-100">
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-2" />
              <span>Certified Professionals</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-2" />
              <span>Personalized Programs</span>
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
