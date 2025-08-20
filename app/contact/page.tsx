"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { useState } from "react"
import emailjs from "emailjs-com"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

export default function ContactPage() {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    subject: "",
    message: ""
  })

  const [loading, setLoading] = useState(false)

  const handleChange = (e:any) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  const sendEmail = (e:any) => {
    e.preventDefault()
    setLoading(true)

    const templateParams = {
      first_name: formData.firstName,
      last_name: formData.lastName,
      email: formData.email,
      company: formData.company,
      subject: formData.subject,
      message: formData.message
    }
   
    console.log(templateParams)
    emailjs
      .send(
        "service_aryehbk",     // Replace with your EmailJS Service ID
        "template_waft4de",    // Replace with your EmailJS Template ID
        templateParams,
        "mErTrlBsKWueIkOZ5"      // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          alert("Message sent successfully!")
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            company: "",
            subject: "",
            message: ""
          })
        },
        (error) => {
          alert("Failed to send message. Please try again.")
          console.error(error)
        }
      )
      .finally(() => setLoading(false))
  }


  
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "hello@techforge.com",
      description: "Send us an email anytime",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      description: "Mon-Fri from 9am to 6pm PST",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "123 Innovation Drive, San Francisco, CA 94105",
      description: "Our headquarters in SOMA",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Mon-Fri: 9:00 AM - 6:00 PM PST",
      description: "We're here to help during business hours",
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
              Get in{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Ready to start your project? We'd love to hear from you and discuss how we can help bring your ideas to
              life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-2xl text-white">Send us a Message</CardTitle>
                  <p className="text-slate-300">Fill out the form below and we'll get back to you within 24 hours.</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <form onSubmit={sendEmail} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-white">
                        First Name
                      </Label>
                      <Input
                        id="firstName"
                        value={formData.firstName} onChange={handleChange}
                        placeholder="John"
                        className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-white">
                        Last Name
                      </Label>
                      <Input
                        id="lastName"
                        placeholder="Doe"
                        value={formData.lastName} onChange={handleChange}
                        className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email} onChange={handleChange}
                      placeholder="john@example.com"
                      className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-white">
                      Company (Optional)
                    </Label>
                    <Input
                      id="company"
                      placeholder="Your Company"
                      value={formData.company} onChange={handleChange}
                      className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-white">
                      Subject
                    </Label>
                    <Input
                      id="subject"
                      placeholder="How can we help you?"
                      value={formData.subject} onChange={handleChange}
                      className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-white">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your project or question..."
                      value={formData.message} onChange={handleChange}
                      rows={5}
                      className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                    />
                  </div>

                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white" disabled={loading}>
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                    </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">Let's Start a Conversation</h2>
                <p className="text-slate-300 leading-relaxed mb-8">
                  Whether you have a specific project in mind or just want to explore possibilities, we're here to help.
                  Reach out through any of the channels below.
                </p>
              </div>

              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="bg-slate-800 border-slate-700 hover:border-blue-500/50 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                          <info.icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-white font-semibold mb-1">{info.title}</h3>
                          <p className="text-blue-400 font-medium mb-1">{info.details}</p>
                          <p className="text-slate-400 text-sm">{info.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}

              {/* Map Placeholder */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Card className="bg-slate-800 border-slate-700">
                  <CardContent className="p-0">
                    <div className="h-48 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <MapPin className="h-12 w-12 text-blue-400 mx-auto mb-2" />
                        <p className="text-white font-medium">San Francisco, CA</p>
                        <p className="text-slate-400 text-sm">Interactive map coming soon</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
              Frequently Asked <span className="text-purple-400">Questions</span>
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "How long does a typical project take?",
                answer:
                  "Project timelines vary based on complexity, but most projects range from 4-12 weeks. We'll provide a detailed timeline during our initial consultation.",
              },
              {
                question: "Do you work with startups or only established companies?",
                answer:
                  "We work with both! From early-stage startups to Fortune 500 companies, we tailor our approach to meet your specific needs and budget.",
              },
              {
                question: "What's included in your post-launch support?",
                answer:
                  "We provide ongoing maintenance, security updates, performance monitoring, and technical support to ensure your product continues to perform optimally.",
              },
              {
                question: "Can you help with just the technical architecture?",
                answer:
                  "We offer consultancy services including technical architecture review, code audits, and strategic technology planning.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="bg-slate-800 border-slate-700">
                  <CardContent className="p-6">
                    <h3 className="text-white font-semibold mb-3">{faq.question}</h3>
                    <p className="text-slate-300 leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
