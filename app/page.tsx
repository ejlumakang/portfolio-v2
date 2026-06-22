import Hero from "@/components/Hero"
import Technologies from "@/components/Technologies"
import Projects from "@/components/Projects"
import Footer from "@/components/Footer"
import Experience from "@/components/Experience"

export default function Home() {
  return (
    <main>
      <Hero />
      <Experience />
      <Technologies />
      <Projects />
      <Footer />
    </main>
  )
}