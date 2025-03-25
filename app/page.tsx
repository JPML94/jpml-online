import type { Metadata } from "next"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Experience from "@/components/Experience"
import Projects from "@/components/Projects"
import Contact from "@/components/Contact"
import AudioPlayer from "@/components/AudioPlayer"

export const metadata: Metadata = {
  title: "jpml.online",
  description: "JP is an engineer in San Francisco specializing in AI, ERP software, and cloud technologies",
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <AudioPlayer />
    </main>
  )
}

