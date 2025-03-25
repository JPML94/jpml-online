"use client"

import { motion } from "framer-motion"

export default function About() {
  return (
    <section className="py-20 px-4 md:px-8 bg-background">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-6 text-primary">Nice to meet you!</h2>
        <p className="text-foreground mb-4">
          I'm a passionate software engineer with a keen interest in server technology, efficient and modern business operations as well as leveraging AI to optimize processes.
          </p>
          <p className="text-foreground mb-4">
          I have established my career in technical support for enterprise software where I get to help customers and internal teams be successful with creative and technical solutions.
          </p>
          <p className="text-foreground mb-4">
          My experience spans ERP software, distributed database systems, as well as e-commerce solutions.
          </p>
          <p className="text-foreground mb-4">
          I currently have a full time role at <a href="https://www.adyen.com">Adyen</a> where I get to help the biggest companies in the world optimize and scale their payment processing operations.
          </p>
        <p className="text-foreground mb-4">
          I thrive on solving complex technical challenges and helping businesses optimize their operations through
          cutting-edge technology solutions.
        </p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-8"
        >
          <a
            href="#contact"
            className="inline-block bg-secondary text-secondary-foreground font-bold py-2 px-4 rounded transition duration-300 hover:bg-secondary/90"
          >
            Get in Touch
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}

