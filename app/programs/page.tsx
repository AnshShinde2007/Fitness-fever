// "use client"

// import { useEffect, useRef } from "react"
// import Link from "next/link"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import {
//   ArrowLeft,
//   Dumbbell,
//   Users,
//   Clock,
//   Target,
//   Heart,
//   Zap,
//   Activity,
//   Brain,
//   Flame,
//   Shield,
//   TrendingUp,
// } from "lucide-react"
// import { gsap } from "gsap"
// import { ScrollTrigger } from "gsap/ScrollTrigger"

// if (typeof window !== "undefined") {
//   gsap.registerPlugin(ScrollTrigger)
// }

// export default function ProgramsPage() {
//   const heroRef = useRef<HTMLDivElement>(null)
//   const programsRef = useRef<HTMLDivElement>(null)
//   const scheduleRef = useRef<HTMLDivElement>(null)

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       // Hero animation
//       gsap.fromTo(
//         ".hero-content",
//         { opacity: 0, y: 50 },
//         { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.3 },
//       )

//       // Program cards animation
//       gsap.fromTo(
//         ".program-card",
//         { opacity: 0, y: 50, scale: 0.9 },
//         {
//           opacity: 1,
//           y: 0,
//           scale: 1,
//           duration: 0.8,
//           stagger: 0.2,
//           ease: "power3.out",
//           scrollTrigger: {
//             trigger: programsRef.current,
//             start: "top 80%",
//           },
//         },
//       )

//       // Schedule animation
//       gsap.fromTo(
//         ".schedule-item",
//         { opacity: 0, x: -30 },
//         {
//           opacity: 1,
//           x: 0,
//           duration: 0.6,
//           stagger: 0.1,
//           ease: "power2.out",
//           scrollTrigger: {
//             trigger: scheduleRef.current,
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
//             <div className="text-xs text-red-300">Programs</div>
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
//               Our <span className="text-red-500">Programs</span>
//             </h1>
//             <p className="text-xl text-red-100 max-w-3xl mx-auto mb-8">
//               From strength training to mental wellness, we offer comprehensive programs designed to transform your body
//               and mind. Join classes led by experienced trainers in our state-of-the-art facilities.
//             </p>
//             <div className="flex items-center justify-center space-x-8 text-sm text-red-200">
//               <div className="flex items-center">
//                 <Users className="w-4 h-4 text-red-500 mr-2" />
//                 <span>Group & Personal Training</span>
//               </div>
//               <div className="flex items-center">
//                 <Clock className="w-4 h-4 text-red-500 mr-2" />
//                 <span>Flexible Timings</span>
//               </div>
//               <div className="flex items-center">
//                 <Target className="w-4 h-4 text-red-500 mr-2" />
//                 <span>All Fitness Levels</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Programs Grid */}
//       <section ref={programsRef} className="py-20 bg-black">
//         <div className="max-w-7xl mx-auto px-6 lg:px-12">
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {/* CrossFit Style Workouts */}
//             <Card className="program-card bg-gray-900/50 border-gray-800 hover:border-red-500/50 transition-all duration-300 group">
//               <CardContent className="p-8">
//                 <div className="w-16 h-16 bg-red-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-red-500/30 transition-colors">
//                   <Flame className="w-8 h-8 text-red-500" />
//                 </div>
//                 <h3 className="text-2xl font-bold mb-4 text-red-50">CrossFit Style Workouts</h3>
//                 <p className="text-red-100 mb-6">
//                   High-intensity functional movements that build strength, endurance, and agility. Perfect for those who
//                   want to push their limits.
//                 </p>
//                 <div className="space-y-3 mb-6">
//                   <div className="flex items-center text-sm text-red-200">
//                     <Clock className="w-4 h-4 text-red-500 mr-2" />
//                     <span>45-60 minutes</span>
//                   </div>
//                   <div className="flex items-center text-sm text-red-200">
//                     <Users className="w-4 h-4 text-red-500 mr-2" />
//                     <span>Small groups (8-12 people)</span>
//                   </div>
//                   <div className="flex items-center text-sm text-red-200">
//                     <TrendingUp className="w-4 h-4 text-red-500 mr-2" />
//                     <span>All fitness levels</span>
//                   </div>
//                 </div>
//                 <Badge className="bg-red-600 text-white mb-4">High Intensity</Badge>
//                 <Button className="w-full bg-red-600 hover:bg-red-700 text-white">Join Class</Button>
//               </CardContent>
//             </Card>

//             {/* Bodybuilding */}
//             <Card className="program-card bg-gray-900/50 border-gray-800 hover:border-blue-500/50 transition-all duration-300 group">
//               <CardContent className="p-8">
//                 <div className="w-16 h-16 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-500/30 transition-colors">
//                   <Dumbbell className="w-8 h-8 text-blue-500" />
//                 </div>
//                 <h3 className="text-2xl font-bold mb-4 text-red-50">Bodybuilding</h3>
//                 <p className="text-red-100 mb-6">
//                   Structured muscle-building programs with progressive overload techniques. Build mass, strength, and
//                   definition with expert guidance.
//                 </p>
//                 <div className="space-y-3 mb-6">
//                   <div className="flex items-center text-sm text-red-200">
//                     <Clock className="w-4 h-4 text-blue-500 mr-2" />
//                     <span>60-90 minutes</span>
//                   </div>
//                   <div className="flex items-center text-sm text-red-200">
//                     <Users className="w-4 h-4 text-blue-500 mr-2" />
//                     <span>Personal & group training</span>
//                   </div>
//                   <div className="flex items-center text-sm text-red-200">
//                     <Target className="w-4 h-4 text-blue-500 mr-2" />
//                     <span>Intermediate to advanced</span>
//                   </div>
//                 </div>
//                 <Badge className="bg-blue-600 text-white mb-4">Strength Focus</Badge>
//                 <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Start Training</Button>
//               </CardContent>
//             </Card>

//             {/* Powerlifting */}
//             <Card className="program-card bg-gray-900/50 border-gray-800 hover:border-purple-500/50 transition-all duration-300 group">
//               <CardContent className="p-8">
//                 <div className="w-16 h-16 bg-purple-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-purple-500/30 transition-colors">
//                   <Shield className="w-8 h-8 text-purple-500" />
//                 </div>
//                 <h3 className="text-2xl font-bold mb-4 text-red-50">Powerlifting</h3>
//                 <p className="text-red-100 mb-6">
//                   Master the big three: squat, bench press, and deadlift. Develop maximum strength with proper form and
//                   technique.
//                 </p>
//                 <div className="space-y-3 mb-6">
//                   <div className="flex items-center text-sm text-red-200">
//                     <Clock className="w-4 h-4 text-purple-500 mr-2" />
//                     <span>90-120 minutes</span>
//                   </div>
//                   <div className="flex items-center text-sm text-red-200">
//                     <Users className="w-4 h-4 text-purple-500 mr-2" />
//                     <span>1-on-1 coaching available</span>
//                   </div>
//                   <div className="flex items-center text-sm text-red-200">
//                     <Target className="w-4 h-4 text-purple-500 mr-2" />
//                     <span>Intermediate to advanced</span>
//                   </div>
//                 </div>
//                 <Badge className="bg-purple-600 text-white mb-4">Max Strength</Badge>
//                 <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">Learn More</Button>
//               </CardContent>
//             </Card>

//             {/* Boxing */}
//             <Card className="program-card bg-gray-900/50 border-gray-800 hover:border-orange-500/50 transition-all duration-300 group">
//               <CardContent className="p-8">
//                 <div className="w-16 h-16 bg-orange-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-orange-500/30 transition-colors">
//                   <Activity className="w-8 h-8 text-orange-500" />
//                 </div>
//                 <h3 className="text-2xl font-bold mb-4 text-red-50">Boxing</h3>
//                 <p className="text-red-100 mb-6">
//                   Learn boxing fundamentals while getting an incredible cardio workout. Improve coordination, speed, and
//                   mental toughness.
//                 </p>
//                 <div className="space-y-3 mb-6">
//                   <div className="flex items-center text-sm text-red-200">
//                     <Clock className="w-4 h-4 text-orange-500 mr-2" />
//                     <span>45-60 minutes</span>
//                   </div>
//                   <div className="flex items-center text-sm text-red-200">
//                     <Users className="w-4 h-4 text-orange-500 mr-2" />
//                     <span>Group classes</span>
//                   </div>
//                   <div className="flex items-center text-sm text-red-200">
//                     <Heart className="w-4 h-4 text-orange-500 mr-2" />
//                     <span>Great cardio workout</span>
//                   </div>
//                 </div>
//                 <Badge className="bg-orange-600 text-white mb-4">Cardio + Skills</Badge>
//                 <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white">Try Boxing</Button>
//               </CardContent>
//             </Card>

//             {/* Yoga */}
//             <Card className="program-card bg-gray-900/50 border-gray-800 hover:border-green-500/50 transition-all duration-300 group">
//               <CardContent className="p-8">
//                 <div className="w-16 h-16 bg-green-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-green-500/30 transition-colors">
//                   <Heart className="w-8 h-8 text-green-500" />
//                 </div>
//                 <h3 className="text-2xl font-bold mb-4 text-red-50">Yoga</h3>
//                 <p className="text-red-100 mb-6">
//                   Improve flexibility, balance, and mental clarity through traditional yoga practices. Perfect for
//                   recovery and stress relief.
//                 </p>
//                 <div className="space-y-3 mb-6">
//                   <div className="flex items-center text-sm text-red-200">
//                     <Clock className="w-4 h-4 text-green-500 mr-2" />
//                     <span>60-75 minutes</span>
//                   </div>
//                   <div className="flex items-center text-sm text-red-200">
//                     <Users className="w-4 h-4 text-green-500 mr-2" />
//                     <span>All levels welcome</span>
//                   </div>
//                   <div className="flex items-center text-sm text-red-200">
//                     <Brain className="w-4 h-4 text-green-500 mr-2" />
//                     <span>Mind-body connection</span>
//                   </div>
//                 </div>
//                 <Badge className="bg-green-600 text-white mb-4">Flexibility + Mindfulness</Badge>
//                 <Button className="w-full bg-green-600 hover:bg-green-700 text-white">Join Yoga</Button>
//               </CardContent>
//             </Card>

//             {/* Mental Health Classes */}
//             <Card className="program-card bg-gray-900/50 border-gray-800 hover:border-indigo-500/50 transition-all duration-300 group">
//               <CardContent className="p-8">
//                 <div className="w-16 h-16 bg-indigo-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-indigo-500/30 transition-colors">
//                   <Brain className="w-8 h-8 text-indigo-500" />
//                 </div>
//                 <h3 className="text-2xl font-bold mb-4 text-red-50">Mental Health & Meditation</h3>
//                 <p className="text-red-100 mb-6">
//                   Focus on mental wellness through guided meditation, breathing exercises, and stress management
//                   techniques.
//                 </p>
//                 <div className="space-y-3 mb-6">
//                   <div className="flex items-center text-sm text-red-200">
//                     <Clock className="w-4 h-4 text-indigo-500 mr-2" />
//                     <span>30-45 minutes</span>
//                   </div>
//                   <div className="flex items-center text-sm text-red-200">
//                     <Users className="w-4 h-4 text-indigo-500 mr-2" />
//                     <span>Small groups</span>
//                   </div>
//                   <div className="flex items-center text-sm text-red-200">
//                     <Zap className="w-4 h-4 text-indigo-500 mr-2" />
//                     <span>Stress relief focus</span>
//                   </div>
//                 </div>
//                 <Badge className="bg-indigo-600 text-white mb-4">Mental Wellness</Badge>
//                 <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white">Find Peace</Button>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </section>

//       {/* Class Schedule */}
//       <section ref={scheduleRef} className="py-20 bg-gradient-to-b from-gray-900 to-black">
//         <div className="max-w-7xl mx-auto px-6 lg:px-12">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold mb-4 text-red-50">
//               Weekly <span className="text-red-500">Schedule</span>
//             </h2>
//             <p className="text-red-200 text-lg">
//               Plan your week with our comprehensive class schedule. All times are for Bhayandar branch.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 gap-8">
//             {/* Weekdays Schedule */}
//             <Card className="bg-gray-900/50 border-gray-800">
//               <CardContent className="p-8">
//                 <h3 className="text-2xl font-bold mb-6 text-center text-red-50">Monday - Friday</h3>
//                 <div className="space-y-4">
//                   <div className="schedule-item flex items-center justify-between p-4 bg-gray-800/50 rounded-lg">
//                     <div>
//                       <div className="font-semibold text-red-100">Morning Yoga</div>
//                       <div className="text-sm text-red-300">Flexibility & Mindfulness</div>
//                     </div>
//                     <div className="text-right">
//                       <div className="text-green-500 font-bold">7:00 AM</div>
//                       <div className="text-xs text-red-300">60 mins</div>
//                     </div>
//                   </div>

//                   <div className="schedule-item flex items-center justify-between p-4 bg-gray-800/50 rounded-lg">
//                     <div>
//                       <div className="font-semibold text-red-100">CrossFit HIIT</div>
//                       <div className="text-sm text-red-300">High Intensity Training</div>
//                     </div>
//                     <div className="text-right">
//                       <div className="text-red-500 font-bold">9:00 AM</div>
//                       <div className="text-xs text-red-300">45 mins</div>
//                     </div>
//                   </div>

//                   <div className="schedule-item flex items-center justify-between p-4 bg-gray-800/50 rounded-lg">
//                     <div>
//                       <div className="font-semibold text-red-100">Bodybuilding Focus</div>
//                       <div className="text-sm text-red-300">Strength & Muscle Building</div>
//                     </div>
//                     <div className="text-right">
//                       <div className="text-blue-500 font-bold">11:00 AM</div>
//                       <div className="text-xs text-red-300">90 mins</div>
//                     </div>
//                   </div>

//                   <div className="schedule-item flex items-center justify-between p-4 bg-gray-800/50 rounded-lg">
//                     <div>
//                       <div className="font-semibold text-red-100">Boxing Cardio</div>
//                       <div className="text-sm text-red-300">Cardio & Technique</div>
//                     </div>
//                     <div className="text-right">
//                       <div className="text-orange-500 font-bold">6:00 PM</div>
//                       <div className="text-xs text-red-300">60 mins</div>
//                     </div>
//                   </div>

//                   <div className="schedule-item flex items-center justify-between p-4 bg-gray-800/50 rounded-lg">
//                     <div>
//                       <div className="font-semibold text-red-100">Evening Meditation</div>
//                       <div className="text-sm text-red-300">Mental Wellness</div>
//                     </div>
//                     <div className="text-right">
//                       <div className="text-indigo-500 font-bold">8:00 PM</div>
//                       <div className="text-xs text-red-300">30 mins</div>
//                     </div>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>

//             {/* Weekend Schedule */}
//             <Card className="bg-gray-900/50 border-gray-800">
//               <CardContent className="p-8">
//                 <h3 className="text-2xl font-bold mb-6 text-center text-red-50">Saturday - Sunday</h3>
//                 <div className="space-y-4">
//                   <div className="schedule-item flex items-center justify-between p-4 bg-gray-800/50 rounded-lg">
//                     <div>
//                       <div className="font-semibold text-red-100">Weekend Warrior</div>
//                       <div className="text-sm text-red-300">Mixed Training</div>
//                     </div>
//                     <div className="text-right">
//                       <div className="text-red-500 font-bold">8:00 AM</div>
//                       <div className="text-xs text-red-300">75 mins</div>
//                     </div>
//                   </div>

//                   <div className="schedule-item flex items-center justify-between p-4 bg-gray-800/50 rounded-lg">
//                     <div>
//                       <div className="font-semibold text-red-100">Powerlifting Workshop</div>
//                       <div className="text-sm text-red-300">Technique Focus</div>
//                     </div>
//                     <div className="text-right">
//                       <div className="text-purple-500 font-bold">10:00 AM</div>
//                       <div className="text-xs text-red-300">120 mins</div>
//                     </div>
//                   </div>

//                   <div className="schedule-item flex items-center justify-between p-4 bg-gray-800/50 rounded-lg">
//                     <div>
//                       <div className="font-semibold text-red-100">Family Yoga</div>
//                       <div className="text-sm text-red-300">All Ages Welcome</div>
//                     </div>
//                     <div className="text-right">
//                       <div className="text-green-500 font-bold">4:00 PM</div>
//                       <div className="text-xs text-red-300">45 mins</div>
//                     </div>
//                   </div>

//                   <div className="schedule-item p-4 bg-gray-800/30 rounded-lg text-center">
//                     <div className="font-semibold text-red-200">Sunday Evening</div>
//                     <div className="text-sm text-red-300">Gym closes at 1:00 PM</div>
//                   </div>
//                 </div>

//                 <div className="mt-6 p-4 bg-red-900/20 rounded-lg border border-red-500/30">
//                   <div className="text-sm text-red-200">
//                     <strong>Note:</strong> Schedule may vary for Borivali branch. Contact us for specific timings.
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           </div>

//           <div className="text-center mt-12">
//             <Button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 text-lg">
//               Book Your First Class
//             </Button>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }
// app/page.tsx (server component with metadata only)

export const metadata = {
  title: "Best Gym in Bhayandar | Fitness Fever – Fitness, Nutrition & Wellness",
  description:
    "Join Fitness Fever, the best gym in Bhayandar. Modern equipment, certified trainers, and sports nutrition experts to help you reach your goals.",
};

import ProgramsPage from "@/components/programs";

export default function Page() {
  return <ProgramsPage />;
}
