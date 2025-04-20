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
                    <img src="/kedhareswer.jpeg" alt="Profile" className="w-full h-full rounded-full object-cover" />
                  </div>
                </div>
              </div>

              <div className="md:w-2/3 p-8">
                <h3 className="text-2xl font-bold mb-2">Kedhareswer Naidu</h3>
                <p className="text-emerald-600 font-medium mb-4">Data Science Student (AI & ML)</p>

                <p className="text-slate-600 mb-6">
                  Hey there! I'm a data science enthusiast who loves turning complex AI concepts into practical solutions. When I'm not buried in datasets, you'll find me exploring how machine learning can make our digital lives safer and more efficient - like helping filter out those pesky spam emails!
                </p>

                <p className="text-slate-600 mb-6">
                  This project represents my attempt to create a more transparent and educational approach to email classification, combining my academic knowledge with practical implementation.
                </p>

                <div className="flex space-x-4">
                  <Link href="www.linkedin.com/in/kedhareswernaidu" className="text-slate-600 hover:text-emerald-600">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                  <Link href="https://github.com/Kedhareswer/Mail_Classification_Case_Study" className="text-slate-600 hover:text-emerald-600">
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                  <Link href="mailto:kedhareswer.12110626@gmail.com" className="text-slate-600 hover:text-emerald-600">
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Email</span>
                  </Link>
                </div>
              </div>
            </div>
          </Card>
        </section>
      </div>
    </div>
  )
}
