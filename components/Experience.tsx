"use client"

import { motion } from "framer-motion"

const experiences = [
  {
    title: "Senior Technical Support Engineer",
    company: "Adyen",
    period: "2023 - Present",
    description: "Card processing optimization and omni-channel checkout flows engineer.",
  },
  {
    title: "Technical Support Engineer",
    company: "Adyen",
    period: "2021 - 2023",
    description: "Acquiring support and tokenization specialist.",
  },
  {
    title: "Technical Support Specialist",
    company: "Odoo",
    period: "2018 - 2021",
    description: "Accounting, inventory and e-commerce specialist.",
  },
  {
    title: "Audio-Visal Engineer",
    company: "Tradecraft",
    period: "2016 - 2018",
    description: "Media producer and engineer for startup incubator.",
  },
  {
    title: "Audio Engineer Assistant",
    company: "Fantasy Studios",
    period: "2015 - 2016",
    description: "Recording setup and troubleshooting for major label music sessions.",
  },
]

export default function Experience() {
  return (
    <section className="py-20 px-4 md:px-8 bg-secondary/10">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-primary">Experience</h2>
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="mb-8 bg-background p-6 rounded-lg shadow-md border border-secondary/20"
          >
            <h3 className="text-xl font-semibold text-primary">{exp.title}</h3>
            <p className="text-foreground font-medium">
              {exp.company} | {exp.period}
            </p>
            <p className="mt-2 text-foreground">{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

