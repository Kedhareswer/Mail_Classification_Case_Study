import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Mail, ShieldAlert } from "lucide-react"
import SpamCounter from "@/components/spam-counter"
import ContactForm from "@/components/contact-form"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] bg-center opacity-10"></div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Everyone is doing email spam or ham classifiers, but I will help you understand it.
            </h1>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed">
              My project takes a different approach to email classification, focusing on understanding rather than just
              implementation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/chapter/1">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-8">
                  Explore My Approach <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>

            <div className="mt-16 flex justify-center">
              <SpamCounter />
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">My Project Highlights</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Mail className="h-10 w-10 text-emerald-600" />}
              title="Beyond Classification"
              description="Instead of just labeling emails, I focus on understanding the patterns and reasoning behind spam detection."
            />
            <FeatureCard
              icon={<ShieldAlert className="h-10 w-10 text-emerald-600" />}
              title="Innovative Approach"
              description="My methodology combines traditional ML techniques with novel visualization and explanation methods."
            />
            <FeatureCard
              icon={<ArrowRight className="h-10 w-10 text-emerald-600" />}
              title="Practical Implementation"
              description="See how my approach translates to real-world applications with better user understanding."
            />
          </div>
        </div>
      </section>

      {/* Project Sections */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Project Sections</h2>
          <p className="text-lg text-center text-slate-600 max-w-2xl mx-auto mb-12">
            Explore the different components of my email classification project.
          </p>

          <div className="max-w-4xl mx-auto">
            <ProjectSections />
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Get in Touch</h2>
            <p className="text-lg text-center text-slate-600 mb-8">
              Have questions about my project or interested in collaborating? Drop me a message!
            </p>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <Card className="border-none shadow-md">
      <CardContent className="pt-6">
        <div className="flex flex-col items-center text-center">
          <div className="mb-4">{icon}</div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-slate-600">{description}</p>
        </div>
      </CardContent>
    </Card>
  )
}

function ProjectSections() {
  const sections = [
    { number: 1, title: "Understanding Email Classification" },
    { number: 2, title: "Data Analysis & Visualization" },
    { number: 3, title: "Feature Engineering Approach" },
    { number: 4, title: "Model Development & Insights" },
    { number: 5, title: "Evaluation & Interpretability" },
    { number: 6, title: "Improving Classification Accuracy" },
    { number: 7, title: "Deployment Strategy" },
    { number: 8, title: "Additional Research & Findings" },
  ]

  return (
    <div className="space-y-4">
      {sections.map((section) => (
        <Link key={section.number} href={`/chapter/${section.number}`}>
          <div className="flex items-center p-4 border rounded-lg hover:bg-slate-50 transition-colors cursor-pointer">
            <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center font-bold text-lg mr-4">
              {section.number}
            </div>
            <div>
              <h3 className="font-medium text-lg">{section.title}</h3>
            </div>
            <ArrowRight className="ml-auto h-5 w-5 text-slate-400" />
          </div>
        </Link>
      ))}
    </div>
  )
}
