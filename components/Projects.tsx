"use client"

import { motion } from "framer-motion"

const projects = [
  {
    title: "AI-Powered Customer Support Bot",
    description: "Developed a machine learning model to automate customer inquiries, reducing response time by 50%.",
  },
  {
    title: "Cloud Migration Strategy",
    description:
      "Led the migration of on-premise ERP systems to cloud infrastructure, improving scalability and reducing costs.",
  },
  {
    title: "Database Performance Optimization",
    description:
      "Implemented advanced indexing and query optimization techniques, resulting in a 30% increase in database performance.",
  },
]

export default function Projects() {
  return (
    <section className="py-20 px-4 md:px-8 bg-background">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-primary">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-secondary/10 p-6 rounded-lg shadow-md border border-secondary/20"
            >
              <h3 className="text-xl font-semibold mb-2 text-primary">{project.title}</h3>
              <p className="text-foreground">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

