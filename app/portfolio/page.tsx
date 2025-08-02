"use client"

import { motion } from "framer-motion"
import { ExternalLink, Star } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
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

export default function PortfolioPage() {
  const projects = [
    {
      title: "AI-Powered E-commerce Platform",
      description:
        "A next-generation e-commerce platform with AI-driven product recommendations, dynamic pricing, and intelligent inventory management.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Next.js", "Python", "TensorFlow", "AWS", "PostgreSQL"],
      category: "AI & E-commerce",
      results: [
        "40% increase in conversion rates",
        "60% reduction in cart abandonment",
        "Automated inventory optimization",
      ],
      client: "RetailTech Solutions",
      timeline: "6 months",
      link: "#",
    },
    {
      title: "Healthcare Management System",
      description:
        "Comprehensive healthcare platform with patient management, telemedicine capabilities, and AI-assisted diagnosis support.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["React", "Node.js", "MongoDB", "WebRTC", "Docker"],
      category: "Healthcare & AI",
      results: [
        "Streamlined patient workflows",
        "50% reduction in appointment scheduling time",
        "HIPAA compliant architecture",
      ],
      client: "MedCare Innovations",
      timeline: "8 months",
      link: "#",
    },
    {
      title: "FinTech Mobile Application",
      description:
        "Mobile-first financial application with real-time trading, portfolio management, and AI-powered investment insights.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["React Native", "Node.js", "Redis", "Stripe", "AWS"],
      category: "FinTech & Mobile",
      results: ["100K+ active users", "99.9% uptime achieved", "Real-time transaction processing"],
      client: "InvestSmart",
      timeline: "4 months",
      link: "#",
    },
    {
      title: "Smart City IoT Platform",
      description:
        "IoT platform for smart city management with real-time monitoring, predictive analytics, and automated resource optimization.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Vue.js", "Python", "InfluxDB", "Kubernetes", "MQTT"],
      category: "IoT & Analytics",
      results: [
        "30% reduction in energy consumption",
        "Real-time city-wide monitoring",
        "Predictive maintenance system",
      ],
      client: "CityTech Municipal",
      timeline: "10 months",
      link: "#",
    },
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO, RetailTech Solutions",
      content:
        "TechForge transformed our e-commerce platform with cutting-edge AI. The results exceeded our expectations, and their team's expertise is unmatched.",
      rating: 5,
    },
    {
      name: "Dr. Michael Chen",
      role: "Director, MedCare Innovations",
      content:
        "The healthcare platform they built has revolutionized our patient care process. Their attention to compliance and security was exceptional.",
      rating: 5,
    },
    {
      name: "Alex Rodriguez",
      role: "Founder, InvestSmart",
      content:
        "From concept to launch, TechForge delivered a world-class FinTech app. Their technical expertise and project management were outstanding.",
      rating: 5,
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
              Our{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Portfolio
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Showcasing innovative solutions that drive business growth and transform industries
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="bg-slate-800 border-slate-700 hover:border-blue-500/50 transition-all duration-300 h-full overflow-hidden">
                  <div className="relative">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-blue-600 text-white">{project.category}</Badge>
                    </div>
                  </div>

                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                      <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                    <p className="text-slate-300 leading-relaxed">{project.description}</p>
                  </CardHeader>

                  <CardContent>
                    <div className="space-y-4">
                      {/* Technologies */}
                      <div>
                        <h4 className="text-white font-semibold mb-2">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <Badge key={tech} variant="outline" className="border-slate-600 text-slate-300">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Results */}
                      <div>
                        <h4 className="text-white font-semibold mb-2">Key Results:</h4>
                        <ul className="space-y-1">
                          {project.results.map((result, resultIndex) => (
                            <li key={resultIndex} className="text-slate-300 text-sm flex items-center">
                              <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></div>
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Project Details */}
                      <div className="flex justify-between text-sm text-slate-400 pt-4 border-t border-slate-700">
                        <span>Client: {project.client}</span>
                        <span>Timeline: {project.timeline}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
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
              Client <span className="text-purple-400">Testimonials</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">What our clients say about working with us</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="bg-slate-800 border-slate-700 h-full">
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-slate-300 mb-6 leading-relaxed">"{testimonial.content}"</p>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-slate-400 text-sm">{testimonial.role}</div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "50+", label: "Projects Completed" },
              { number: "98%", label: "Client Satisfaction" },
              { number: "15+", label: "Industries Served" },
              { number: "24/7", label: "Support Available" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">{stat.number}</div>
                <div className="text-slate-300 font-medium">{stat.label}</div>
              </motion.div>
            ))}
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Build Your Next Project?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join our growing list of satisfied clients. Let's create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quote">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-blue-600 hover:bg-slate-100 px-8 py-4 text-lg"
                >
                  Start Your Project
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg bg-transparent"
                >
                  Schedule Consultation
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
