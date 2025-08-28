"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowLeft,
  Dumbbell,
  MapPin,
  Clock,
  Phone,
  Car,
  Wind,
  Droplets,
  Users,
  Zap,
  Navigation,
  Star,
} from "lucide-react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function LocationsPage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const locationsRef = useRef<HTMLDivElement>(null)
  const facilitiesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      gsap.fromTo(
        ".hero-content",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.3 },
      )

      // Location cards animation
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

      // Facilities animation
      gsap.fromTo(
        ".facility-item",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: facilitiesRef.current,
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
            <div className="text-xs text-red-300">Locations</div>
          </div>
        </Link>

        <Link href="/" className="flex items-center text-red-200 hover:text-red-500 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>
      </nav>

      {/* Hero Section */}
      <section ref={locationsRef} className="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-red-50">
              Our <span className="text-red-500">Locations</span>
            </h2>
            <p className="text-red-200 text-lg">
              Two premium locations in Mumbai's northern suburbs for your convenience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
                      Gr suraj palace  
                      <br />
                      Navghar Road, Bhayandar East,
                      <br />
                      Behind shree ram jewellers
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
                        Free Parking
                      </Badge>
                      <Badge variant="outline" className="text-xs border-red-500/30 text-red-200">
                        Lockers
                      </Badge>
                      <Badge variant="outline" className="text-xs border-red-500/30 text-red-200">
                        Charging Station
                      </Badge>
                    </div>
                  </div>
                </div>
                <a
                  href="https://maps.app.goo.gl/aU5ucrU9kRMP7PYy7"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                    <MapPin className="w-4 h-4 mr-2" />
                    Get Directions
                  </Button>
                </a>
              </CardContent>
            </Card>
            <Card className="location-card bg-gray-900/50 border-gray-800 hover:border-red-500/50 transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mr-4">
                    <MapPin className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-red-50">Golden Nest</h3>
                    <Badge className="mt-1 bg-green-600 text-white text-xs">Main Branch</Badge>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="text-red-200">
                    <div className="font-medium mb-1">Address:</div>
                    <div className="text-sm">
                      Gr suraj palace  
                      <br />
                      Navghar Road, Bhayandar East,
                      <br />
                      Behind shree ram jewellers
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
                        Free Parking
                      </Badge>
                      <Badge variant="outline" className="text-xs border-red-500/30 text-red-200">
                        Lockers
                      </Badge>
                      <Badge variant="outline" className="text-xs border-red-500/30 text-red-200">
                        Charging Station
                      </Badge>
                    </div>
                  </div>
                </div>

                <a
                  href="https://maps.app.goo.gl/GEapLRqexsgL9vSH7"
                  target="_blank"
                  rel="noopener noreferrer"
                  >
                     <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                     <MapPin className="w-4 h-4 mr-2" />
                     Get Directions
                     </Button>
                  </a>
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
                      Mon-Sat: 6 AM - 11 PM
                      <br />
                      Sunday: 10 am-11:30 pm
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
                <a
                  href="https://maps.app.goo.gl/S8dWUMsxyiFZV17E8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                  <MapPin className="w-4 h-4 mr-2" />
                    Get Directions
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section className="relative py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="hero-content text-center">
            <h1 className="text-5xl md:text-6xl font-black mb-6 text-red-50">
              Our <span className="text-red-500">Locations</span>
            </h1>
            <p className="text-xl text-red-100 max-w-3xl mx-auto mb-8">
              Two premium fitness centers strategically located in Mumbai's northern suburbs. Choose the location that's
              most convenient for you.
            </p>
            <div className="flex items-center justify-center space-x-8 text-sm text-red-200">
              <div className="flex items-center">
                <MapPin className="w-4 h-4 text-red-500 mr-2" />
                <span>2 Locations</span>
              </div>
              <div className="flex items-center">
                <Car className="w-4 h-4 text-red-500 mr-2" />
                <span>Free Parking</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 text-red-500 mr-2" />
                <span>Extended Hours</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section ref={locationsRef} className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Bhayandar East Location */}
            <Card className="location-card bg-gray-900/50 border-gray-800 hover:border-red-500/50 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-red-500/20 rounded-lg flex items-center justify-center mr-4">
                    <MapPin className="w-8 h-8 text-red-500" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-red-50">Bhayandar East</h2>
                    <Badge className="mt-2 bg-green-600 text-white">Main Branch</Badge>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-2 flex items-center text-red-100">
                      <MapPin className="w-5 h-5 text-red-500 mr-2" />
                      Address
                    </h3>
                    <p className="text-red-200 pl-7">
                      1st Floor, Kunal Shopping Arcade,
                      <br />
                      Navghar Road, Bhayandar East,
                      <br />
                      Thane – 401105
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2 flex items-center text-red-100">
                      <Clock className="w-5 h-5 text-red-500 mr-2" />
                      Operating Hours
                    </h3>
                    <div className="text-red-200 pl-7 space-y-1">
                      <div>Monday - Saturday: 6:00 AM - 11:00 PM</div>
                      <div>Sunday: 9:00 AM - 1:00 PM</div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-3 flex items-center text-red-100">
                      <Zap className="w-5 h-5 text-red-500 mr-2" />
                      Key Features
                    </h3>
                    <div className="grid grid-cols-2 gap-3 pl-7">
                      <div className="flex items-center text-sm text-red-200">
                        <Wind className="w-4 h-4 text-blue-500 mr-2" />
                        <span>AC Gym Floor</span>
                      </div>
                      <div className="flex items-center text-sm text-red-200">
                        <Car className="w-4 h-4 text-green-500 mr-2" />
                        <span>Free Parking</span>
                      </div>
                      <div className="flex items-center text-sm text-red-200">
                        <Users className="w-4 h-4 text-purple-500 mr-2" />
                        <span>Group Classes</span>
                      </div>
                      <div className="flex items-center text-sm text-red-200">
                        <Zap className="w-4 h-4 text-yellow-500 mr-2" />
                        <span>Charging Station</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-800/50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-red-100">Membership Pricing</h4>
                    <div className="space-y-1 text-sm text-red-200">
                      <div>Monthly: ₹1,000</div>
                      <div>
                        Quarterly: ₹2,500 <span className="text-green-500">(Save ₹500)</span>
                      </div>
                      <div>
                        Annual: ₹7,000 <span className="text-green-500">(Save ₹5,000)</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <Button className="flex-1 bg-red-600 hover:bg-red-700 text-white">
                      <Navigation className="w-4 h-4 mr-2" />
                      Get Directions
                    </Button>
                    <Button
                      variant="outline"
                      className="flex-1 border-red-600 text-red-200 hover:bg-red-900/20 bg-transparent"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Call Branch
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Borivali West Location */}
            <Card className="location-card bg-gray-900/50 border-gray-800 hover:border-blue-500/50 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-blue-500/20 rounded-lg flex items-center justify-center mr-4">
                    <MapPin className="w-8 h-8 text-blue-500" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-red-50">Borivali West</h2>
                    <Badge className="mt-2 bg-blue-600 text-white">Premium Branch</Badge>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-2 flex items-center text-red-100">
                      <MapPin className="w-5 h-5 text-blue-500 mr-2" />
                      Address
                    </h3>
                    <p className="text-red-200 pl-7">
                      1st Floor, Rosemar Apartment,
                      <br />
                      Holy Cross Road, IC Colony,
                      <br />
                      Borivali West, Mumbai – 400103
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2 flex items-center text-red-100">
                      <Clock className="w-5 h-5 text-blue-500 mr-2" />
                      Operating Hours
                    </h3>
                    <div className="text-red-200 pl-7 space-y-1">
                      <div>Daily: 6:00 AM - 11:00 PM</div>
                      <div className="text-green-500 text-sm">Extended hours - 7 days a week</div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-3 flex items-center text-red-100">
                      <Star className="w-5 h-5 text-blue-500 mr-2" />
                      Premium Features
                    </h3>
                    <div className="grid grid-cols-2 gap-3 pl-7">
                      <div className="flex items-center text-sm text-red-200">
                        <Droplets className="w-4 h-4 text-blue-500 mr-2" />
                        <span>Steam Room</span>
                      </div>
                      <div className="flex items-center text-sm text-red-200">
                        <Users className="w-4 h-4 text-green-500 mr-2" />
                        <span>Massage Therapy</span>
                      </div>
                      <div className="flex items-center text-sm text-red-200">
                        <Zap className="w-4 h-4 text-purple-500 mr-2" />
                        <span>Premium Equipment</span>
                      </div>
                      <div className="flex items-center text-sm text-red-200">
                        <Star className="w-4 h-4 text-yellow-500 mr-2" />
                        <span>Nutrition Consultancy</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-900/20 p-4 rounded-lg border border-blue-500/30">
                    <h4 className="font-semibold mb-2 text-red-100">Special Services</h4>
                    <div className="space-y-1 text-sm text-red-200">
                      <div>• Professional massage therapy</div>
                      <div>• Steam room access</div>
                      <div>• Personalized nutrition plans</div>
                      <div>• Extended operating hours</div>
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <Button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white">
                      <Navigation className="w-4 h-4 mr-2" />
                      Get Directions
                    </Button>
                    <Button
                      variant="outline"
                      className="flex-1 border-blue-600 text-red-200 hover:bg-blue-900/20 bg-transparent"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Call Branch
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Facilities Comparison */}
      <section ref={facilitiesRef} className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-red-50">
              Facilities <span className="text-red-500">Comparison</span>
            </h2>
            <p className="text-red-200 text-lg">Both locations offer excellent facilities with some unique features</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="facility-item bg-gray-900/50 border-gray-800">
              <CardContent className="p-6 text-center">
                <Wind className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <h3 className="font-bold mb-2 text-red-100">Air Conditioning</h3>
                <p className="text-sm text-red-200 mb-4">Climate-controlled environment for comfortable workouts</p>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    <span className="text-red-200">Bhayandar</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    <span className="text-red-200">Borivali</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="facility-item bg-gray-900/50 border-gray-800">
              <CardContent className="p-6 text-center">
                <Car className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="font-bold mb-2 text-red-100">Free Parking</h3>
                <p className="text-sm text-red-200 mb-4">Convenient parking space for all members</p>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    <span className="text-red-200">Bhayandar</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    <span className="text-red-200">Borivali</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="facility-item bg-gray-900/50 border-gray-800">
              <CardContent className="p-6 text-center">
                <Droplets className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <h3 className="font-bold mb-2 text-red-100">Steam Room</h3>
                <p className="text-sm text-red-200 mb-4">Relaxation and recovery after intense workouts</p>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-center">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                    <span className="text-red-200">Bhayandar</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    <span className="text-red-200">Borivali</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="facility-item bg-gray-900/50 border-gray-800">
              <CardContent className="p-6 text-center">
                <Users className="w-12 h-12 text-purple-500 mx-auto mb-4" />
                <h3 className="font-bold mb-2 text-red-100">Massage Therapy</h3>
                <p className="text-sm text-red-200 mb-4">Professional massage services for recovery</p>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-center">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                    <span className="text-red-200">Bhayandar</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    <span className="text-red-200">Borivali</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center space-x-6 text-sm">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                <span className="text-red-200">Available</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                <span className="text-red-200">Not Available</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Visit Us Today</h2>
          <p className="text-red-100 text-lg mb-8 max-w-2xl mx-auto">
            Choose the location that's most convenient for you. Both branches offer excellent facilities and experienced
            trainers.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
              <Phone className="w-5 h-5 mr-2" />
              Call for Tour
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg bg-transparent"
            >
              <MapPin className="w-5 h-5 mr-2" />
              Get Directions
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
