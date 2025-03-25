"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"

export default function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log("Form submitted:", { name, email, message })
    // Reset form fields
    setName("")
    setEmail("")
    setMessage("")
  }

  return (
    <section id="contact" className="py-20 px-4 md:px-8 bg-secondary/10">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-primary">Contact Me</h2>
        <motion.form
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          method="POST"
          action="https://formsubmit.co/el/gayiye"
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <div>
            <label htmlFor="name" className="block mb-2 text-foreground font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-2 bg-background text-foreground rounded border border-secondary focus:border-primary focus:ring-1 focus:ring-primary"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-foreground font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 bg-background text-foreground rounded border border-secondary focus:border-primary focus:ring-1 focus:ring-primary"
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-2 text-foreground font-medium">
              Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="w-full px-4 py-2 bg-background text-foreground rounded border border-secondary focus:border-primary focus:ring-1 focus:ring-primary"
              rows={4}
            ></textarea>
          </div>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold py-2 px-4 rounded transition duration-300"
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  )
}

