"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  ArrowLeft,
  Dumbbell,
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  Facebook,
  Send,
  User,
  MessageSquare,
  Calendar,
  Navigation,
} from "lucide-react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function ContactPage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLDivElement>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    interest: "",
  })

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      gsap.fromTo(
        ".hero-content",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.3 },
      )

      // Contact cards animation
      gsap.fromTo(
        ".contact-card",
        { opacity: 0, y: 50, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contactRef.current,
            start: "top 80%",
          },
        },
      )

      // Form animation
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
            trigger: formRef.current,
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
    // Handle form submission here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
      interest: "",
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
            <div className="text-xs text-red-300">Contact</div>
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
              Get In <span className="text-red-500">Touch</span>
            </h1>
            <p className="text-xl text-red-100 max-w-3xl mx-auto mb-8">
              Ready to start your fitness journey? Have questions about our programs or facilities? We're here to help
              you every step of the way.
            </p>
            <div className="flex items-center justify-center space-x-8 text-sm text-red-200">
              <div className="flex items-center">
                <Phone className="w-4 h-4 text-red-500 mr-2" />
                <span>Quick Response</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 text-red-500 mr-2" />
                <span>2 Locations</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 text-red-500 mr-2" />
                <span>Free Consultation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section ref={contactRef} className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Bhayandar Location */}
            <Card className="contact-card bg-gray-900/50 border-gray-800 hover:border-red-500/50 transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-red-500/20 rounded-lg flex items-center justify-center mb-6">
                  <MapPin className="w-8 h-8 text-red-500" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-red-50">Bhayandar East</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-red-100">Address</h4>
                    <p className="text-red-200 text-sm">
                      1st Floor, Kunal Shopping Arcade,
                      <br />
                      Navghar Road, Bhayandar East,
                      <br />
                      Thane – 401105
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-red-100">Hours</h4>
                    <p className="text-red-200 text-sm">
                      Mon-Sat: 6:00 AM - 11:00 PM
                      <br />
                      Sunday: 9:00 AM - 1:00 PM
                    </p>
                  </div>
                  <Badge className="bg-green-600 text-white">Main Branch</Badge>
                </div>
                <Button className="w-full mt-6 bg-red-600 hover:bg-red-700 text-white">
                  <Navigation className="w-4 h-4 mr-2" />
                  Get Directions
                </Button>
              </CardContent>
            </Card>

            {/* Borivali Location */}
            <Card className="contact-card bg-gray-900/50 border-gray-800 hover:border-blue-500/50 transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6">
                  <MapPin className="w-8 h-8 text-blue-500" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-red-50">Borivali West</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-red-100">Address</h4>
                    <p className="text-red-200 text-sm">
                      1st Floor, Rosemar Apartment,
                      <br />
                      Holy Cross Road, IC Colony,
                      <br />
                      Borivali West, Mumbai – 400103
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-red-100">Hours</h4>
                    <p className="text-red-200 text-sm">
                      Daily: 6:00 AM - 11:00 PM
                      <br />
                      <span className="text-green-500">Extended Hours</span>
                    </p>
                  </div>
                  <Badge className="bg-blue-600 text-white">Premium Branch</Badge>
                </div>
                <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white">
                  <Navigation className="w-4 h-4 mr-2" />
                  Get Directions
                </Button>
              </CardContent>
            </Card>

            {/* Contact Methods */}
            <Card className="contact-card bg-gray-900/50 border-gray-800 hover:border-green-500/50 transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-500/20 rounded-lg flex items-center justify-center mb-6">
                  <Phone className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-red-50">Contact Methods</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-green-500 mr-3" />
                    <div>
                      <div className="font-semibold text-red-100">Call Us</div>
                      <div className="text-red-200 text-sm">For immediate assistance</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-blue-500 mr-3" />
                    <div>
                      <div className="font-semibold text-red-100">Email</div>
                      <div className="text-red-200 text-sm">info@fitnessfever.com</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Instagram className="w-5 h-5 text-pink-500 mr-3" />
                    <div>
                      <div className="font-semibold text-red-100">Social Media</div>
                      <div className="text-red-200 text-sm">Follow for updates</div>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-3 mt-6">
                  <Button className="flex-1 bg-green-600 hover:bg-green-700 text-white">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </Button>
                  <div className="flex space-x-2">
                    <Button size="icon" variant="outline" className="border-red-600 hover:bg-red-900/20 bg-transparent">
                      <Instagram className="w-4 h-4" />
                    </Button>
                    <Button size="icon" variant="outline" className="border-red-600 hover:bg-red-900/20 bg-transparent">
                      <Facebook className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section ref={formRef} className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-red-50">
              Send Us a <span className="text-red-500">Message</span>
            </h2>
            <p className="text-red-200 text-lg">Fill out the form below and we'll get back to you within 24 hours</p>
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
                    <label htmlFor="interest" className="block text-sm font-medium mb-2 text-red-100">
                      I'm Interested In
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      value={formData.interest}
                      onChange={handleInputChange}
                      className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md text-red-100"
                    >
                      <option value="">Select an option</option>
                      <option value="membership">Gym Membership</option>
                      <option value="personal-training">Personal Training</option>
                      <option value="group-classes">Group Classes</option>
                      <option value="nutrition">Nutrition Consultation</option>
                      <option value="corporate">Corporate Membership</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="form-element">
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-red-100">
                    Message
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-red-400" />
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="pl-10 bg-gray-800 border-gray-700 text-red-100 placeholder-red-400 resize-none"
                      placeholder="Tell us about your fitness goals or any questions you have..."
                    />
                  </div>
                </div>

                <div className="form-element">
                  <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white py-4 text-lg">
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </div>
              </form>

              <div className="mt-8 p-4 bg-gray-800/50 rounded-lg">
                <h4 className="font-semibold mb-2 text-red-100">What happens next?</h4>
                <ul className="text-sm text-red-200 space-y-1">
                  <li>• We'll review your message within 24 hours</li>
                  <li>• Our team will contact you to discuss your needs</li>
                  <li>• Schedule a free consultation or gym tour</li>
                  <li>• Get personalized recommendations for your fitness journey</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Need Immediate Help?</h2>
          <p className="text-red-100 text-lg mb-8 max-w-2xl mx-auto">
            Don't want to wait? Call us directly or visit our gym for an immediate response. Our team is always ready to
            help!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg bg-transparent"
            >
              <MapPin className="w-5 h-5 mr-2" />
              Visit Our Gym
            </Button>
          </div>

          <div className="mt-8 flex items-center justify-center space-x-8 text-red-100">
            <div className="flex items-center">
              <Clock className="w-5 h-5 mr-2" />
              <span>Quick Response</span>
            </div>
            <div className="flex items-center">
              <User className="w-5 h-5 mr-2" />
              <span>Personal Attention</span>
            </div>
            <div className="flex items-center">
              <Calendar className="w-5 h-5 mr-2" />
              <span>Free Consultation</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
