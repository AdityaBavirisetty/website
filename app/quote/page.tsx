"use client"

import { motion } from "framer-motion"
import { Upload, Send } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import Header from "@/components/header"
import Footer from "@/components/footer"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

export default function QuotePage() {
  const services = [
    "AI-Powered Product Development",
    "Custom Software Development",
    "End-to-End Product Engineering",
    "Product Consultancy",
    "Mobile App Development",
    "Web Application Development",
    "DevOps & Cloud Infrastructure",
    "UI/UX Design",
  ]

  const budgetRanges = ["Under $25k", "$25k - $50k", "$50k - $100k", "$100k - $250k", "$250k - $500k", "$500k+"]

  const projectStages = [
    "Just an idea",
    "Concept with basic requirements",
    "Detailed specifications ready",
    "Existing product needs enhancement",
    "Looking for technical consultation",
  ]

  return (
    <div className="min-h-screen bg-slate-950">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950 pt-20">
        <div className="container mx-auto px-4 py-20">
          <motion.div className="text-center max-w-4xl mx-auto" initial="initial" animate="animate" variants={fadeInUp}>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Get Your Free{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Quote</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Tell us about your project and we'll provide a detailed proposal with timeline and pricing
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-3xl text-white text-center">Project Details</CardTitle>
                  <p className="text-slate-300 text-center">
                    The more details you provide, the more accurate our quote will be
                  </p>
                </CardHeader>
                <CardContent className="space-y-8">
                  {/* Contact Information */}
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Contact Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName" className="text-white">
                          First Name *
                        </Label>
                        <Input
                          id="firstName"
                          placeholder="John"
                          className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName" className="text-white">
                          Last Name *
                        </Label>
                        <Input
                          id="lastName"
                          placeholder="Doe"
                          className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-white">
                          Email *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@example.com"
                          className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-white">
                          Phone
                        </Label>
                        <Input
                          id="phone"
                          placeholder="+1 (555) 123-4567"
                          className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                        />
                      </div>
                      <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="company" className="text-white">
                          Company
                        </Label>
                        <Input
                          id="company"
                          placeholder="Your Company Name"
                          className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Project Information */}
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Project Information</h3>
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="projectTitle" className="text-white">
                          Project Title *
                        </Label>
                        <Input
                          id="projectTitle"
                          placeholder="What's your project called?"
                          className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="projectDescription" className="text-white">
                          Project Description *
                        </Label>
                        <Textarea
                          id="projectDescription"
                          placeholder="Describe your project idea, goals, and key features..."
                          rows={5}
                          className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                          required
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label className="text-white">Project Stage *</Label>
                          <Select>
                            <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                              <SelectValue placeholder="Select project stage" />
                            </SelectTrigger>
                            <SelectContent className="bg-slate-700 border-slate-600">
                              {projectStages.map((stage) => (
                                <SelectItem key={stage} value={stage} className="text-white hover:bg-slate-600">
                                  {stage}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label className="text-white">Budget Range *</Label>
                          <Select>
                            <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                              <SelectValue placeholder="Select budget range" />
                            </SelectTrigger>
                            <SelectContent className="bg-slate-700 border-slate-600">
                              {budgetRanges.map((range) => (
                                <SelectItem key={range} value={range} className="text-white hover:bg-slate-600">
                                  {range}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label className="text-white">Services Needed *</Label>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {services.map((service) => (
                            <div key={service} className="flex items-center space-x-2">
                              <Checkbox
                                id={service}
                                className="border-slate-600 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
                              />
                              <Label htmlFor={service} className="text-slate-300 text-sm">
                                {service}
                              </Label>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="timeline" className="text-white">
                          Desired Timeline
                        </Label>
                        <Input
                          id="timeline"
                          placeholder="When do you need this completed?"
                          className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="additionalInfo" className="text-white">
                          Additional Information
                        </Label>
                        <Textarea
                          id="additionalInfo"
                          placeholder="Any specific requirements, technologies, or constraints we should know about?"
                          rows={4}
                          className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                        />
                      </div>
                    </div>
                  </div>

                  {/* File Upload */}
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Supporting Documents (Optional)</h3>
                    <div className="border-2 border-dashed border-slate-600 rounded-lg p-8 text-center hover:border-blue-500 transition-colors">
                      <Upload className="h-12 w-12 text-slate-400 mx-auto mb-4" />
                      <p className="text-slate-300 mb-2">Upload any relevant documents</p>
                      <p className="text-slate-400 text-sm">Wireframes, mockups, requirements docs, etc. (Max 10MB)</p>
                      <Button
                        variant="outline"
                        className="mt-4 border-slate-600 text-slate-300 hover:bg-slate-700 bg-transparent"
                      >
                        Choose Files
                      </Button>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="text-center pt-6">
                    <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 text-lg">
                      <Send className="h-5 w-5 mr-2" />
                      Request Quote
                    </Button>
                    <p className="text-slate-400 text-sm mt-4">
                      We'll review your request and get back to you within 24 hours
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What Happens Next */}
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
              What Happens <span className="text-purple-400">Next?</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Review & Analysis",
                description: "We'll carefully review your requirements and analyze the scope of your project.",
              },
              {
                step: "2",
                title: "Consultation Call",
                description: "We'll schedule a call to discuss your project in detail and answer any questions.",
              },
              {
                step: "3",
                title: "Detailed Proposal",
                description: "You'll receive a comprehensive proposal with timeline, pricing, and next steps.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-slate-300 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
