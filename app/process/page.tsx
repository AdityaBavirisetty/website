"use client"

import { motion } from "framer-motion"
import { MessageCircle, Palette, Code, TestTube, Rocket, HeadphonesIcon, CheckCircle, Clock, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

export default function ProcessPage() {
  const processSteps = [
    {
      step: 1,
      title: "Idea Discussion",
      description: "We start by understanding your vision, goals, and requirements through detailed consultations.",
      icon: MessageCircle,
      duration: "1-2 weeks",
      deliverables: ["Project scope document", "Technical requirements", "Timeline & budget estimate"],
    },
    {
      step: 2,
      title: "Wireframing & Design",
      description: "Our design team creates wireframes, mockups, and prototypes to visualize your product.",
      icon: Palette,
      duration: "2-3 weeks",
      deliverables: ["User experience wireframes", "Visual design mockups", "Interactive prototypes"],
    },
    {
      step: 3,
      title: "Development",
      description: "Our expert developers bring your product to life using cutting-edge technologies.",
      icon: Code,
      duration: "4-12 weeks",
      deliverables: ["Working software", "Regular progress updates", "Code documentation"],
    },
    {
      step: 4,
      title: "Testing & QA",
      description: "Comprehensive testing ensures your product is bug-free and performs optimally.",
      icon: TestTube,
      duration: "1-2 weeks",
      deliverables: ["Test reports", "Bug fixes", "Performance optimization"],
    },
    {
      step: 5,
      title: "Deployment",
      description: "We deploy your product to production and ensure everything runs smoothly.",
      icon: Rocket,
      duration: "1 week",
      deliverables: ["Live product", "Deployment documentation", "Monitoring setup"],
    },
    {
      step: 6,
      title: "Support & Maintenance",
      description: "Ongoing support to keep your product updated, secure, and performing at its best.",
      icon: HeadphonesIcon,
      duration: "Ongoing",
      deliverables: ["24/7 monitoring", "Regular updates", "Technical support"],
    },
  ]

  const principles = [
    {
      title: "Agile Methodology",
      description: "We use agile development practices with regular sprints and continuous feedback loops.",
      icon: CheckCircle,
    },
    {
      title: "Transparent Communication",
      description: "Regular updates, progress reports, and open communication throughout the project.",
      icon: Users,
    },
    {
      title: "Quality First",
      description: "We prioritize code quality, security, and performance in every project we deliver.",
      icon: TestTube,
    },
    {
      title: "On-Time Delivery",
      description: "We respect deadlines and deliver projects on time without compromising quality.",
      icon: Clock,
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
                Process
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              A proven methodology that ensures your project success from concept to launch
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Step Content */}
                <div className="flex-1">
                  <Card className="bg-slate-800 border-slate-700 hover:border-blue-500/50 transition-all duration-300">
                    <CardContent className="p-8">
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                          {step.step}
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                          <p className="text-blue-400 font-medium">{step.duration}</p>
                        </div>
                      </div>

                      <p className="text-slate-300 text-lg mb-6 leading-relaxed">{step.description}</p>

                      <div>
                        <h4 className="text-white font-semibold mb-3">Key Deliverables:</h4>
                        <ul className="space-y-2">
                          {step.deliverables.map((deliverable, deliverableIndex) => (
                            <li key={deliverableIndex} className="flex items-center text-slate-300">
                              <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                              {deliverable}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Step Icon */}
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                    <step.icon className="h-12 w-12 text-white" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Principles */}
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
              Our <span className="text-purple-400">Principles</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              The core values that guide every project we undertake
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="bg-slate-800 border-slate-700 hover:border-purple-500/50 transition-all duration-300 h-full">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <principle.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{principle.title}</h3>
                    <p className="text-slate-300">{principle.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Visualization */}
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
              Project <span className="text-blue-400">Timeline</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Typical project timeline for a medium-complexity application
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-purple-600 rounded-full"></div>

              {/* Timeline Items */}
              <div className="space-y-12">
                {processSteps.map((step, index) => (
                  <motion.div
                    key={step.step}
                    className={`flex items-center ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className={`w-5/12 ${index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"}`}>
                      <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
                        <h3 className="text-white font-semibold mb-1">{step.title}</h3>
                        <p className="text-blue-400 text-sm font-medium">{step.duration}</p>
                      </div>
                    </div>

                    {/* Timeline Dot */}
                    <div className="w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-slate-900 z-10"></div>

                    <div className="w-5/12"></div>
                  </motion.div>
                ))}
              </div>
            </div>
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and create a customized development plan that fits your needs.
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
                  Schedule a Call
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
