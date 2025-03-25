"use client"

import { motion } from "framer-motion"

const experiences = [
  {
    title: "Senior Technical Support Engineer",
    company: "Enterprise Solutions Inc.",
    period: "2019 - Present",
    description: "Providing expert support for ERP software and cloud-based solutions.",
  },
  {
    title: "Database Administrator",
    company: "Data Systems LLC",
    period: "2016 - 2019",
    description: "Managed and optimized large-scale databases for enterprise clients.",
  },
  {
    title: "Junior Support Specialist",
    company: "Tech Support Co.",
    period: "2014 - 2016",
    description: "Assisted customers with technical issues and software troubleshooting.",
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

