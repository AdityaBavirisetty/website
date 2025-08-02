"use client"

import { motion } from "framer-motion"
import { MapPin, DollarSign, Users, Coffee, Laptop, Heart, Zap } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

export default function CareersPage() {
  const openPositions = [
    {
      title: "Senior Full-Stack Developer",
      department: "Engineering",
      location: "San Francisco, CA / Remote",
      type: "Full-time",
      salary: "$120k - $160k",
      description:
        "Join our engineering team to build cutting-edge web applications using React, Node.js, and cloud technologies.",
      requirements: [
        "5+ years of full-stack development experience",
        "Proficiency in React, Node.js, and TypeScript",
        "Experience with cloud platforms (AWS/Azure)",
        "Strong problem-solving and communication skills",
      ],
      benefits: ["Health Insurance", "401k Matching", "Flexible PTO", "Remote Work"],
    },
    {
      title: "AI/ML Engineer",
      department: "AI Research",
      location: "San Francisco, CA / Remote",
      type: "Full-time",
      salary: "$140k - $180k",
      description: "Lead the development of AI-powered features and machine learning models for our client projects.",
      requirements: [
        "PhD or Master's in Computer Science, AI, or related field",
        "3+ years of experience in ML/AI development",
        "Proficiency in Python, TensorFlow, PyTorch",
        "Experience with NLP and computer vision",
      ],
      benefits: ["Health Insurance", "401k Matching", "Conference Budget", "Research Time"],
    },
    {
      title: "UX/UI Designer",
      department: "Design",
      location: "San Francisco, CA / Remote",
      type: "Full-time",
      salary: "$90k - $120k",
      description:
        "Create beautiful, intuitive user experiences for web and mobile applications across various industries.",
      requirements: [
        "3+ years of UX/UI design experience",
        "Proficiency in Figma, Sketch, or similar tools",
        "Strong portfolio demonstrating design thinking",
        "Experience with user research and testing",
      ],
      benefits: ["Health Insurance", "Design Tool Budget", "Flexible Hours", "Creative Freedom"],
    },
    {
      title: "DevOps Engineer",
      department: "Infrastructure",
      location: "San Francisco, CA / Remote",
      type: "Full-time",
      salary: "$110k - $140k",
      description: "Build and maintain scalable infrastructure and deployment pipelines for our client projects.",
      requirements: [
        "4+ years of DevOps/Infrastructure experience",
        "Experience with Docker, Kubernetes, CI/CD",
        "Proficiency in AWS/Azure cloud platforms",
        "Knowledge of Infrastructure as Code (Terraform)",
      ],
      benefits: ["Health Insurance", "401k Matching", "Certification Budget", "On-call Bonus"],
    },
  ]

  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health, dental, and vision insurance plus wellness stipend",
    },
    {
      icon: Laptop,
      title: "Remote-First",
      description: "Work from anywhere with flexible hours and home office setup budget",
    },
    {
      icon: Coffee,
      title: "Learning & Growth",
      description: "Conference budget, online courses, and dedicated learning time",
    },
    {
      icon: Users,
      title: "Team Culture",
      description: "Regular team events, hackathons, and collaborative environment",
    },
    {
      icon: DollarSign,
      title: "Competitive Pay",
      description: "Market-rate salaries with equity options and performance bonuses",
    },
    {
      icon: Zap,
      title: "Innovation Time",
      description: "20% time for personal projects and exploring new technologies",
    },
  ]

  return (
    <div className="min-h-screen bg-slate-950">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950 pt-20">
        <div className="container mx-auto px-4 py-20">
          <motion.div className="text-center max-w-4xl mx-auto" initial="initial" animate="animate" variants={fadeInUp}>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Join Our{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Team</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Build the future of technology with passionate innovators who are changing the world
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why <span className="text-blue-400">TechForge</span>?
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              We offer more than just a job – we provide a platform for growth, innovation, and impact
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="bg-slate-800 border-slate-700 hover:border-blue-500/50 transition-all duration-300 h-full">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                    <p className="text-slate-300">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-gradient-to-br from-slate-950 to-blue-950">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Open <span className="text-purple-400">Positions</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">Find your next career opportunity with us</p>
          </motion.div>

          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <motion.div
                key={position.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="bg-slate-800 border-slate-700 hover:border-purple-500/50 transition-all duration-300">
                  <CardHeader>
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                      <div>
                        <CardTitle className="text-2xl text-white mb-2">{position.title}</CardTitle>
                        <div className="flex flex-wrap gap-2 mb-2">
                          <Badge className="bg-purple-600 text-white">{position.department}</Badge>
                          <Badge variant="outline" className="border-slate-600 text-slate-300">
                            {position.type}
                          </Badge>
                        </div>
                        <div className="flex flex-wrap gap-4 text-sm text-slate-400">
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            {position.location}
                          </div>
                          <div className="flex items-center">
                            <DollarSign className="h-4 w-4 mr-1" />
                            {position.salary}
                          </div>
                        </div>
                      </div>
                      <Button className="bg-blue-600 hover:bg-blue-700 text-white lg:w-auto w-full">Apply Now</Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-300 mb-6 leading-relaxed">{position.description}</p>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-white font-semibold mb-3">Requirements:</h4>
                        <ul className="space-y-2">
                          {position.requirements.map((req, reqIndex) => (
                            <li key={reqIndex} className="text-slate-300 text-sm flex items-start">
                              <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-white font-semibold mb-3">Benefits:</h4>
                        <div className="flex flex-wrap gap-2">
                          {position.benefits.map((benefit) => (
                            <Badge key={benefit} variant="outline" className="border-slate-600 text-slate-300">
                              {benefit}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our <span className="text-blue-400">Culture</span>
              </h2>
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                At TechForge, we believe that great products come from great teams. We foster a culture of
                collaboration, continuous learning, and innovation where every team member can thrive.
              </p>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  Collaborative and inclusive environment
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  Continuous learning and professional development
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  Work-life balance and flexible schedules
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  Opportunity to work on cutting-edge projects
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl p-8 backdrop-blur-sm border border-blue-500/20">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="TechForge team culture"
                  className="w-full h-64 object-cover rounded-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Don't See the Right Role?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              We're always interested in connecting with talented individuals. Send us your resume and let's talk!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-blue-600 hover:bg-slate-100 px-8 py-4 text-lg"
                >
                  Send Your Resume
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg bg-transparent"
              >
                Learn More About Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
