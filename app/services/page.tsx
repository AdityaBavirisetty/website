"use client"

import { motion } from "framer-motion"
import {
  Brain,
  Code,
  Rocket,
  Users,
  Database,
  Cloud,
  SmartphoneIcon as Mobile,
  Globe,
  Zap,
  Shield,
  BarChart,
  Cog,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

export default function ServicesPage() {
  const services = [
    {
      category: "AI-Powered Product Development",
      description: "Harness the power of artificial intelligence to create intelligent solutions",
      icon: Brain,
      color: "blue",
      services: [
        "Machine Learning Model Development",
        "Natural Language Processing (NLP)",
        "Computer Vision Solutions",
        "GPT & LLM Integration",
        "Predictive Analytics",
        "AI Chatbots & Virtual Assistants",
      ],
    },
    {
      category: "Custom Software Development",
      description: "Tailored software solutions built for your specific needs",
      icon: Code,
      color: "purple",
      services: [
        "Web Application Development",
        "Mobile App Development (iOS/Android)",
        "Desktop Applications",
        "API Development & Integration",
        "Database Design & Optimization",
        "Legacy System Modernization",
      ],
    },
    {
      category: "End-to-End Product Engineering",
      description: "Complete product development from concept to market launch",
      icon: Rocket,
      color: "indigo",
      services: [
        "Product Strategy & Planning",
        "UI/UX Design & Prototyping",
        "Full-Stack Development",
        "Quality Assurance & Testing",
        "DevOps & Cloud Deployment",
        "Post-Launch Support & Maintenance",
      ],
    },
    {
      category: "Product Consultancy",
      description: "Strategic guidance to help you make informed technology decisions",
      icon: Users,
      color: "cyan",
      services: [
        "Technology Stack Selection",
        "Architecture Design & Review",
        "Code Audits & Performance Optimization",
        "Digital Transformation Strategy",
        "Team Augmentation",
        "Technical Due Diligence",
      ],
    },
  ]

  const technologies = [
    { name: "React/Next.js", icon: Globe },
    { name: "Node.js", icon: Cog },
    { name: "Python/Django", icon: Code },
    { name: "AWS/Azure", icon: Cloud },
    { name: "Mobile Development", icon: Mobile },
    { name: "AI/ML", icon: Brain },
    { name: "Database Systems", icon: Database },
    { name: "Security", icon: Shield },
    { name: "Analytics", icon: BarChart },
    { name: "DevOps", icon: Zap },
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
                Services
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Comprehensive technology solutions to transform your business and accelerate growth
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="bg-slate-800 border-slate-700 hover:border-blue-500/50 transition-all duration-300 h-full">
                  <CardHeader>
                    <div
                      className={`w-16 h-16 bg-${service.color}-600 rounded-xl flex items-center justify-center mb-4`}
                    >
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl text-white mb-2">{service.category}</CardTitle>
                    <p className="text-slate-300">{service.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {service.services.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center text-slate-300">
                          <div className={`w-2 h-2 bg-${service.color}-400 rounded-full mr-3`}></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
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
              Technologies We <span className="text-purple-400">Master</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              We work with cutting-edge technologies to deliver robust, scalable solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                className="text-center group"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-16 h-16 bg-slate-800 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-blue-600 transition-colors duration-300">
                  <tech.icon className="h-8 w-8 text-slate-300 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-white font-medium text-sm">{tech.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Overview */}
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
              Why Choose <span className="text-blue-400">TechForge</span>?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Expert Team",
                description:
                  "Our team consists of senior developers, AI specialists, and product experts with years of experience.",
                icon: Users,
              },
              {
                title: "Proven Process",
                description:
                  "We follow industry best practices and agile methodologies to ensure project success and timely delivery.",
                icon: Cog,
              },
              {
                title: "Ongoing Support",
                description:
                  "We provide continuous support and maintenance to ensure your product stays competitive and secure.",
                icon: Shield,
              },
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{benefit.title}</h3>
                <p className="text-slate-300 leading-relaxed">{benefit.description}</p>
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help bring your vision to life with our expert services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quote">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-blue-600 hover:bg-slate-100 px-8 py-4 text-lg"
                >
                  Get Free Consultation
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg bg-transparent"
                >
                  View Our Work
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
