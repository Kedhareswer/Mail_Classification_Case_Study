import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, BookOpen } from "lucide-react"

export default function ChaptersPage() {
  const chapters = [
    {
      number: 1,
      title: "What is Spam? And Why Should We Care?",
      description: "Learn about different types of spam, their impact, and why we need effective filters.",
    },
    {
      number: 2,
      title: "Peeking Into the Inbox — Exploring the Dataset",
      description: "Dive into the SMS Spam Collection dataset and understand its characteristics.",
    },
    {
      number: 3,
      title: "From Words to Numbers — Feature Engineering",
      description: "Convert text into numerical features that machine learning algorithms can understand.",
    },
    {
      number: 4,
      title: "Training Your Brain — Machine Learning Models",
      description: "Explore different machine learning models suitable for text classification tasks.",
    },
    {
      number: 5,
      title: "Evaluation Lab",
      description: "Learn how to evaluate your model's performance using various metrics.",
    },
    {
      number: 6,
      title: "Improving Your Spam Filter",
      description: "Fine-tune your model with hyperparameter optimization and other techniques.",
    },
    {
      number: 7,
      title: "Deploying It to the Real World",
      description: "Take your model from development to production with deployment strategies.",
    },
    {
      number: 8,
      title: "Extra Reading & Resources",
      description: "Discover additional learning materials, tutorials, and advanced topics in spam detection.",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Course Chapters</h1>
          <p className="text-xl text-slate-600">
            Follow these chapters in sequence to master email classification using machine learning
          </p>
        </div>

        <div className="space-y-6">
          {chapters.map((chapter) => (
            <Link key={chapter.number} href={`/chapter/${chapter.number}`}>
              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-12 h-12 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center font-bold text-lg">
                        {chapter.number}
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h2 className="text-xl font-semibold mb-1">{chapter.title}</h2>
                      <p className="text-slate-600">{chapter.description}</p>
                    </div>
                    <div className="flex-shrink-0 ml-4 flex items-center text-emerald-600">
                      <ArrowRight className="h-5 w-5" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-600 flex items-center justify-center">
            <BookOpen className="h-5 w-5 mr-2" />
            Ready to start your learning journey?
          </p>
          <Link href="/chapter/1" className="text-emerald-600 font-medium hover:underline">
            Begin with Chapter 1
          </Link>
        </div>
      </div>
    </div>
  )
}
