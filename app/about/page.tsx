"use client"

import { motion } from "framer-motion"
import { Users, Target, Award, Heart, Linkedin, Twitter, Github } from "lucide-react"
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

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Alex Chen",
      role: "CEO & Co-Founder",
      bio: "Former tech lead at Google with 10+ years in AI and product development. Passionate about turning innovative ideas into reality.",
      image: "/placeholder.svg?height=300&width=300",
      social: { linkedin: "#", twitter: "#", github: "#" },
    },
    {
      name: "Sarah Rodriguez",
      role: "CTO & Co-Founder",
      bio: "Full-stack architect with expertise in scalable systems. Previously led engineering teams at Stripe and Airbnb.",
      image: "/placeholder.svg?height=300&width=300",
      social: { linkedin: "#", twitter: "#", github: "#" },
    },
    {
      name: "David Kim",
      role: "Head of AI",
      bio: "PhD in Machine Learning from Stanford. Specializes in NLP and computer vision with 50+ published papers.",
      image: "/placeholder.svg?height=300&width=300",
      social: { linkedin: "#", twitter: "#", github: "#" },
    },
    {
      name: "Emily Johnson",
      role: "Head of Design",
      bio: "Award-winning UX designer with a passion for creating intuitive, accessible interfaces that users love.",
      image: "/placeholder.svg?height=300&width=300",
      social: { linkedin: "#", twitter: "#", github: "#" },
    },
  ]

  const values = [
    {
      icon: Target,
      title: "Innovation First",
      description: "We stay at the forefront of technology, constantly exploring new ways to solve complex problems.",
    },
    {
      icon: Users,
      title: "Client Success",
      description:
        "Your success is our success. We're committed to delivering solutions that drive real business value.",
    },
    {
      icon: Award,
      title: "Quality Excellence",
      description:
        "We maintain the highest standards in code quality, security, and performance in everything we build.",
    },
    {
      icon: Heart,
      title: "Passionate Team",
      description: "We love what we do, and it shows in the dedication and creativity we bring to every project.",
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
              About{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                TechForge
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              We're a team of passionate technologists dedicated to transforming ideas into powerful software solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
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
                Our <span className="text-blue-400">Mission</span>
              </h2>
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                At TechForge, we believe that every great idea deserves to become reality. Our mission is to bridge the
                gap between innovative concepts and market-ready products by providing world-class development services
                powered by cutting-edge technology.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                We specialize in AI-powered solutions, custom software development, and end-to-end product engineering,
                helping startups and enterprises alike turn their visions into successful digital products.
              </p>
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
                  alt="TechForge team at work"
                  className="w-full h-64 object-cover rounded-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              Our <span className="text-purple-400">Values</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">The principles that guide everything we do</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="bg-slate-800 border-slate-700 hover:border-purple-500/50 transition-all duration-300 h-full">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <value.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                    <p className="text-slate-300">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
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
              Meet Our <span className="text-blue-400">Team</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              The talented individuals behind TechForge's success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="bg-slate-800 border-slate-700 hover:border-blue-500/50 transition-all duration-300 h-full">
                  <CardContent className="p-6 text-center">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                    />
                    <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
                    <p className="text-blue-400 font-medium mb-3">{member.role}</p>
                    <p className="text-slate-300 text-sm mb-4 leading-relaxed">{member.bio}</p>

                    <div className="flex justify-center space-x-3">
                      <a href={member.social.linkedin} className="text-slate-400 hover:text-blue-400 transition-colors">
                        <Linkedin className="h-4 w-4" />
                      </a>
                      <a href={member.social.twitter} className="text-slate-400 hover:text-blue-400 transition-colors">
                        <Twitter className="h-4 w-4" />
                      </a>
                      <a href={member.social.github} className="text-slate-400 hover:text-blue-400 transition-colors">
                        <Github className="h-4 w-4" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-20 bg-gradient-to-br from-slate-950 to-purple-950">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              TechForge by the <span className="text-purple-400">Numbers</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { number: "2019", label: "Founded" },
              { number: "50+", label: "Projects Delivered" },
              { number: "25+", label: "Team Members" },
              { number: "15+", label: "Countries Served" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">{stat.number}</div>
                <div className="text-slate-300 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Want to Join Our Team?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals who share our passion for innovation and excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/careers">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-blue-600 hover:bg-slate-100 px-8 py-4 text-lg"
                >
                  View Open Positions
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg bg-transparent"
                >
                  Get in Touch
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
