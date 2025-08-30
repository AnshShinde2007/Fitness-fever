// "use client"

// import { useEffect, useRef } from "react"
// import Link from "next/link"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import {
//   ArrowLeft,
//   Dumbbell,
//   CheckCircle,
//   X,
//   Star,
//   Users,
//   Clock,
//   Heart,
//   Zap,
//   Target,
//   Phone,
//   Calendar,
//   IndianRupee,
// } from "lucide-react"
// import { gsap } from "gsap"
// import { ScrollTrigger } from "gsap/ScrollTrigger"

// if (typeof window !== "undefined") {
//   gsap.registerPlugin(ScrollTrigger)
// }

// export default function PricingPage() {
//   const heroRef = useRef<HTMLDivElement>(null)
//   const pricingRef = useRef<HTMLDivElement>(null)
//   const comparisonRef = useRef<HTMLDivElement>(null)

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       // Hero animation
//       gsap.fromTo(
//         ".hero-content",
//         { opacity: 0, y: 50 },
//         { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.3 },
//       )

//       // Pricing cards animation
//       gsap.fromTo(
//         ".pricing-card",
//         { opacity: 0, y: 50, rotationY: 15 },
//         {
//           opacity: 1,
//           y: 0,
//           rotationY: 0,
//           duration: 1,
//           stagger: 0.3,
//           ease: "power3.out",
//           scrollTrigger: {
//             trigger: pricingRef.current,
//             start: "top 80%",
//           },
//         },
//       )

//       // Comparison table animation
//       gsap.fromTo(
//         ".comparison-row",
//         { opacity: 0, x: -30 },
//         {
//           opacity: 1,
//           x: 0,
//           duration: 0.6,
//           stagger: 0.1,
//           ease: "power2.out",
//           scrollTrigger: {
//             trigger: comparisonRef.current,
//             start: "top 80%",
//           },
//         },
//       )
//     }, heroRef)

//     return () => ctx.revert()
//   }, [])

//   return (
//     <div ref={heroRef} className="min-h-screen bg-black text-white">
//       {/* Navigation */}
//       <nav className="flex items-center justify-between px-6 lg:px-12 py-6 bg-black/80 backdrop-blur-sm border-b border-gray-800/50">
//         <Link href="/" className="flex items-center space-x-3">
//           <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center">
//             <Dumbbell className="w-5 h-5 text-white" />
//           </div>
//           <div>
//             <div className="font-bold text-red-100">FITNESS FEVER</div>
//             <div className="text-xs text-red-300">Pricing</div>
//           </div>
//         </Link>

//         <Link href="/" className="flex items-center text-red-200 hover:text-red-500 transition-colors">
//           <ArrowLeft className="w-4 h-4 mr-2" />
//           Back to Home
//         </Link>
//       </nav>

//       {/* Hero Section */}
//       <section className="relative py-20 bg-gradient-to-b from-black to-gray-900">
//         <div className="max-w-7xl mx-auto px-6 lg:px-12">
//           <div className="hero-content text-center">
//             <h1 className="text-5xl md:text-6xl font-black mb-6 text-red-50">
//               Affordable <span className="text-red-500">Pricing</span>
//             </h1>
//             <p className="text-xl text-red-100 max-w-3xl mx-auto mb-8">
//               Premium fitness experience at unbeatable prices. Choose the plan that fits your budget and fitness goals.
//               No hidden charges, no long-term commitments.
//             </p>
//             <div className="flex items-center justify-center space-x-8 text-sm text-red-200">
//               <div className="flex items-center">
//                 <IndianRupee className="w-4 h-4 text-red-500 mr-2" />
//                 <span>Starting ₹1,000/month</span>
//               </div>
//               <div className="flex items-center">
//                 <Star className="w-4 h-4 text-red-500 mr-2" />
//                 <span>No Hidden Charges</span>
//               </div>
//               <div className="flex items-center">
//                 <Calendar className="w-4 h-4 text-red-500 mr-2" />
//                 <span>Flexible Plans</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Pricing Plans */}
//       <section ref={pricingRef} className="py-20 bg-black">
//         <div className="max-w-7xl mx-auto px-6 lg:px-12">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold mb-4 text-red-50">
//               Choose Your <span className="text-red-500">Plan</span>
//             </h2>
//             <p className="text-red-200 text-lg">
//               All plans include full gym access and basic amenities. Prices shown are for Bhayandar branch.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//             {/* Monthly Plan */}
//             <Card className="pricing-card bg-gray-900/50 border-gray-800 hover:border-red-500/50 transition-all duration-300">
//               <CardContent className="p-8 text-center">
//                 <div className="mb-6">
//                   <h3 className="text-2xl font-bold mb-2 text-red-50">Monthly</h3>
//                   <div className="text-5xl font-black text-red-500 mb-2">₹1,000</div>
//                   <div className="text-red-300 text-sm">per month</div>
//                 </div>

//                 <div className="space-y-4 mb-8 text-left">
//                   <div className="flex items-center">
//                     <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
//                     <span className="text-red-100">Full AC Gym Access</span>
//                   </div>
//                   <div className="flex items-center">
//                     <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
//                     <span className="text-red-100">All Equipment Usage</span>
//                   </div>
//                   <div className="flex items-center">
//                     <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
//                     <span className="text-red-100">Locker & Changing Room</span>
//                   </div>
//                   <div className="flex items-center">
//                     <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
//                     <span className="text-red-100">Free Parking</span>
//                   </div>
//                   <div className="flex items-center">
//                     <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
//                     <span className="text-red-100">Mobile Charging Station</span>
//                   </div>
//                   <div className="flex items-center">
//                     <X className="w-5 h-5 text-red-500 mr-3" />
//                     <span className="text-red-400">Group Classes</span>
//                   </div>
//                   <div className="flex items-center">
//                     <X className="w-5 h-5 text-red-500 mr-3" />
//                     <span className="text-red-400">Personal Training</span>
//                   </div>
//                 </div>

//                 <Button className="w-full bg-gray-800 hover:bg-gray-700 text-white mb-4">Choose Monthly</Button>
//                 <div className="text-xs text-red-300">Perfect for trying out</div>
//               </CardContent>
//             </Card>

//             {/* Quarterly Plan - Most Popular */}
//             <Card className="pricing-card bg-gradient-to-b from-red-900/20 to-red-800/10 border-red-500 relative transform scale-105">
//               <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
//                 <Badge className="bg-red-600 text-white px-4 py-1 text-sm">MOST POPULAR</Badge>
//               </div>
//               <CardContent className="p-8 text-center">
//                 <div className="mb-6">
//                   <h3 className="text-2xl font-bold mb-2 text-red-50">Quarterly</h3>
//                   <div className="text-5xl font-black text-red-500 mb-2">₹2,500</div>
//                   <div className="text-red-300 text-sm mb-1">for 3 months</div>
//                   <div className="text-green-500 text-sm font-semibold">Save ₹500!</div>
//                 </div>

//                 <div className="space-y-4 mb-8 text-left">
//                   <div className="flex items-center">
//                     <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
//                     <span className="text-red-100">Everything in Monthly</span>
//                   </div>
//                   <div className="flex items-center">
//                     <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
//                     <span className="text-red-100">Group Classes Access</span>
//                   </div>
//                   <div className="flex items-center">
//                     <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
//                     <span className="text-red-100">Basic Nutrition Guidance</span>
//                   </div>
//                   <div className="flex items-center">
//                     <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
//                     <span className="text-red-100">Priority Booking</span>
//                   </div>
//                   <div className="flex items-center">
//                     <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
//                     <span className="text-red-100">Workout Plan Consultation</span>
//                   </div>
//                   <div className="flex items-center">
//                     <X className="w-5 h-5 text-red-500 mr-3" />
//                     <span className="text-red-400">Personal Training Sessions</span>
//                   </div>
//                   <div className="flex items-center">
//                     <X className="w-5 h-5 text-red-500 mr-3" />
//                     <span className="text-red-400">Steam & Massage</span>
//                   </div>
//                 </div>

//                 <Button className="w-full bg-red-600 hover:bg-red-700 text-white mb-4">Choose Quarterly</Button>
//                 <div className="text-xs text-green-400">Best value for money</div>
//               </CardContent>
//             </Card>

//             {/* Annual Plan */}
//             <Card className="pricing-card bg-gray-900/50 border-gray-800 hover:border-yellow-500/50 transition-all duration-300">
//               <CardContent className="p-8 text-center">
//                 <div className="mb-6">
//                   <h3 className="text-2xl font-bold mb-2 text-red-50">Annual</h3>
//                   <div className="text-5xl font-black text-red-500 mb-2">₹7,000</div>
//                   <div className="text-red-300 text-sm mb-1">for 12 months</div>
//                   <div className="text-green-500 text-sm font-semibold">Save ₹5,000!</div>
//                 </div>

//                 <div className="space-y-4 mb-8 text-left">
//                   <div className="flex items-center">
//                     <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
//                     <span className="text-red-100">Everything in Quarterly</span>
//                   </div>
//                   <div className="flex items-center">
//                     <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
//                     <span className="text-red-100">4 Personal Training Sessions</span>
//                   </div>
//                   <div className="flex items-center">
//                     <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
//                     <span className="text-red-100">Custom Meal Plans</span>
//                   </div>
//                   <div className="flex items-center">
//                     <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
//                     <span className="text-red-100">Body Composition Analysis</span>
//                   </div>
//                   <div className="flex items-center">
//                     <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
//                     <span className="text-red-100">Progress Tracking</span>
//                   </div>
//                   <div className="flex items-center">
//                     <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
//                     <span className="text-red-100">Steam Access (Borivali)</span>
//                   </div>
//                   <div className="flex items-center">
//                     <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
//                     <span className="text-red-100">Massage Discount</span>
//                   </div>
//                 </div>

//                 <Button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white mb-4">Choose Annual</Button>
//                 <div className="text-xs text-yellow-400">Maximum savings & benefits</div>
//               </CardContent>
//             </Card>
//           </div>

//           <div className="text-center mt-12">
//             <p className="text-red-200 mb-6">
//               💡 <strong>Special Offer:</strong> Get 1 week free trial with any quarterly or annual plan!
//             </p>
//             <Button className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white px-8 py-3">
//               <Phone className="w-4 h-4 mr-2" />
//               Call for Custom Plans
//             </Button>
//           </div>
//         </div>
//       </section>

//       {/* Detailed Comparison */}
//       <section ref={comparisonRef} className="py-20 bg-gradient-to-b from-gray-900 to-black">
//         <div className="max-w-7xl mx-auto px-6 lg:px-12">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold mb-4 text-red-50">
//               Detailed <span className="text-red-500">Comparison</span>
//             </h2>
//             <p className="text-red-200 text-lg">Compare all features across our membership plans</p>
//           </div>

//           <div className="overflow-x-auto">
//             <table className="w-full bg-gray-900/50 rounded-lg overflow-hidden">
//               <thead>
//                 <tr className="bg-gray-800">
//                   <th className="text-left p-4 font-semibold text-red-100">Features</th>
//                   <th className="text-center p-4 font-semibold text-red-100">Monthly</th>
//                   <th className="text-center p-4 font-semibold text-red-500">Quarterly</th>
//                   <th className="text-center p-4 font-semibold text-red-100">Annual</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr className="comparison-row border-b border-gray-800">
//                   <td className="p-4 flex items-center text-red-100">
//                     <Dumbbell className="w-5 h-5 text-red-500 mr-3" />
//                     Gym Floor Access
//                   </td>
//                   <td className="text-center p-4">
//                     <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
//                   </td>
//                   <td className="text-center p-4">
//                     <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
//                   </td>
//                   <td className="text-center p-4">
//                     <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
//                   </td>
//                 </tr>

//                 <tr className="comparison-row border-b border-gray-800">
//                   <td className="p-4 flex items-center text-red-100">
//                     <Users className="w-5 h-5 text-blue-500 mr-3" />
//                     Group Classes
//                   </td>
//                   <td className="text-center p-4">
//                     <X className="w-5 h-5 text-red-500 mx-auto" />
//                   </td>
//                   <td className="text-center p-4">
//                     <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
//                   </td>
//                   <td className="text-center p-4">
//                     <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
//                   </td>
//                 </tr>

//                 <tr className="comparison-row border-b border-gray-800">
//                   <td className="p-4 flex items-center text-red-100">
//                     <Target className="w-5 h-5 text-purple-500 mr-3" />
//                     Personal Training
//                   </td>
//                   <td className="text-center p-4">
//                     <X className="w-5 h-5 text-red-500 mx-auto" />
//                   </td>
//                   <td className="text-center p-4">
//                     <X className="w-5 h-5 text-red-500 mx-auto" />
//                   </td>
//                   <td className="text-center p-4">
//                     <span className="text-green-500 text-sm">4 Sessions</span>
//                   </td>
//                 </tr>

//                 <tr className="comparison-row border-b border-gray-800">
//                   <td className="p-4 flex items-center text-red-100">
//                     <Heart className="w-5 h-5 text-red-500 mr-3" />
//                     Nutrition Guidance
//                   </td>
//                   <td className="text-center p-4">
//                     <X className="w-5 h-5 text-red-500 mx-auto" />
//                   </td>
//                   <td className="text-center p-4">
//                     <span className="text-yellow-500 text-sm">Basic</span>
//                   </td>
//                   <td className="text-center p-4">
//                     <span className="text-green-500 text-sm">Custom Plans</span>
//                   </td>
//                 </tr>

//                 <tr className="comparison-row border-b border-gray-800">
//                   <td className="p-4 flex items-center text-red-100">
//                     <Zap className="w-5 h-5 text-yellow-500 mr-3" />
//                     Priority Booking
//                   </td>
//                   <td className="text-center p-4">
//                     <X className="w-5 h-5 text-red-500 mx-auto" />
//                   </td>
//                   <td className="text-center p-4">
//                     <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
//                   </td>
//                   <td className="text-center p-4">
//                     <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
//                   </td>
//                 </tr>

//                 <tr className="comparison-row">
//                   <td className="p-4 flex items-center text-red-100">
//                     <Clock className="w-5 h-5 text-indigo-500 mr-3" />
//                     Progress Tracking
//                   </td>
//                   <td className="text-center p-4">
//                     <X className="w-5 h-5 text-red-500 mx-auto" />
//                   </td>
//                   <td className="text-center p-4">
//                     <X className="w-5 h-5 text-red-500 mx-auto" />
//                   </td>
//                   <td className="text-center p-4">
//                     <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
//                   </td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </section>

//       {/* FAQ Section */}
//       <section className="py-20 bg-black">
//         <div className="max-w-4xl mx-auto px-6 lg:px-12">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold mb-4 text-red-50">
//               Frequently Asked <span className="text-red-500">Questions</span>
//             </h2>
//           </div>

//           <div className="space-y-6">
//             <Card className="bg-gray-900/50 border-gray-800">
//               <CardContent className="p-6">
//                 <h3 className="font-bold text-lg mb-3 text-red-100">Are there any hidden charges?</h3>
//                 <p className="text-red-200">
//                   No, absolutely not! The prices shown are all-inclusive. There are no registration fees, maintenance
//                   charges, or hidden costs.
//                 </p>
//               </CardContent>
//             </Card>

//             <Card className="bg-gray-900/50 border-gray-800">
//               <CardContent className="p-6">
//                 <h3 className="font-bold text-lg mb-3 text-red-100">Can I freeze my membership?</h3>
//                 <p className="text-red-200">
//                   Yes, you can freeze your membership for up to 30 days in case of medical emergencies or travel. Terms
//                   and conditions apply.
//                 </p>
//               </CardContent>
//             </Card>

//             <Card className="bg-gray-900/50 border-gray-800">
//               <CardContent className="p-6">
//                 <h3 className="font-bold text-lg mb-3 text-red-100">Do prices differ between locations?</h3>
//                 <p className="text-red-200">
//                   The prices shown are for our Bhayandar branch. Borivali branch may have slightly different pricing due
//                   to premium facilities. Contact us for exact pricing.
//                 </p>
//               </CardContent>
//             </Card>

//             <Card className="bg-gray-900/50 border-gray-800">
//               <CardContent className="p-6">
//                 <h3 className="font-bold text-lg mb-3 text-red-100">Is there a free trial available?</h3>
//                 <p className="text-red-200">
//                   Yes! We offer a 1-week free trial with quarterly and annual plans. For monthly plans, you can get a
//                   1-day trial session.
//                 </p>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 bg-gradient-to-r from-red-600 to-red-700">
//         <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
//           <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Ready to Start Your Journey?</h2>
//           <p className="text-red-100 text-lg mb-8 max-w-2xl mx-auto">
//             Choose the plan that fits your budget and goals. Join hundreds of satisfied members who transformed their
//             lives at Fitness Fever.
//           </p>

//           <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
//             <Button className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
//               <Phone className="w-5 h-5 mr-2" />
//               Call for Membership
//             </Button>
//             <Button
//               variant="outline"
//               className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg bg-transparent"
//             >
//               <Calendar className="w-5 h-5 mr-2" />
//               Schedule Visit
//             </Button>
//           </div>

//           <div className="mt-8 flex items-center justify-center space-x-8 text-red-100">
//             <div className="flex items-center">
//               <CheckCircle className="w-5 h-5 mr-2" />
//               <span>No Long-term Commitment</span>
//             </div>
//             <div className="flex items-center">
//               <CheckCircle className="w-5 h-5 mr-2" />
//               <span>Free Trial Available</span>
//             </div>
//             <div className="flex items-center">
//               <CheckCircle className="w-5 h-5 mr-2" />
//               <span>Money Back Guarantee</span>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }
export const metadata = {
  title: " Gym Programs in [City] | Fitness Classes & Sports Nutrition",
  description:
    "Affordable gym membership plans in [City]. Includes access to sports nutrition consultations and fitness coaching.",
};

import PricingPage from "../../components/Pricing";

export default function Page() {
  return <PricingPage />;
}
