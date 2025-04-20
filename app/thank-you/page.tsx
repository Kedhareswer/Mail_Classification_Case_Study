import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Github, Linkedin, Mail, Twitter } from "lucide-react"
import SpamCounter from "@/components/spam-counter"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">About This Project</h1>
          <p className="text-xl text-slate-600 mb-8">
            Learn more about my approach to email classification and the person behind this project.
          </p>

          <div className="flex justify-center mb-8">
            <SpamCounter />
          </div>

          <Link href="/">
            <Button className="bg-emerald-600 hover:bg-emerald-700">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
            </Button>
          </Link>
        </div>

        {/* Team Member Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>

          <Card className="overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3 bg-slate-100">
                <div className="h-full flex items-center justify-center p-8">
                  <div className="w-48 h-48 rounded-full bg-emerald-600 flex items-center justify-center text-white text-4xl font-bold">
                    AJ
                  </div>
                </div>
              </div>

              <div className="md:w-2/3 p-8">
                <h3 className="text-2xl font-bold mb-2">Alex Johnson</h3>
                <p className="text-emerald-600 font-medium mb-4">Data Scientist & ML Engineer</p>

                <p className="text-slate-600 mb-6">
                  I'm a data scientist with a passion for natural language processing and machine learning. With a
                  background in computer science and 5+ years of experience in the field, I've worked on various text
                  classification projects, but always felt that most approaches focus too much on the end result and not
                  enough on understanding the process.
                </p>

                <p className="text-slate-600 mb-6">
                  This project represents my attempt to create a more transparent and educational approach to email
                  classification. Instead of just building another spam filter, I wanted to develop a methodology that
                  helps users understand why certain emails are classified as spam or ham.
                </p>

                <div className="flex space-x-4">
                  <Link href="https://twitter.com/example" className="text-slate-600 hover:text-emerald-600">
                    <Twitter className="h-5 w-5" />
                    <span className="sr-only">Twitter</span>
                  </Link>
                  <Link href="https://linkedin.com/in/example" className="text-slate-600 hover:text-emerald-600">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                  <Link href="https://github.com/example" className="text-slate-600 hover:text-emerald-600">
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                  <Link href="mailto:alex@example.com" className="text-slate-600 hover:text-emerald-600">
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Email</span>
                  </Link>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Project Materials Section */}
        <section className="bg-slate-100 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-6">Project Resources</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <ResourceCard
              title="Source Code Repository"
              description="Access the complete codebase for this email classification project on GitHub."
            />
            <ResourceCard
              title="Dataset Documentation"
              description="Details about the datasets used and how they were processed for this project."
            />
            <ResourceCard
              title="Research Paper"
              description="My published findings on interpretable email classification techniques."
            />
            <ResourceCard
              title="Interactive Demo"
              description="Try the classification model yourself with your own email samples."
            />
          </div>

          <div className="mt-8 text-center">
            <Button className="bg-emerald-600 hover:bg-emerald-700">Access Resources</Button>
          </div>
        </section>
      </div>
    </div>
  )
}

function ResourceCard({ title, description }) {
  return (
    <Card>
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-slate-600">{description}</p>
      </CardContent>
    </Card>
  )
}
