"use client"

import { useState } from "react"
import ChapterLayout from "@/components/chapter-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { AlertCircle, CheckCircle, XCircle } from "lucide-react"

export default function Chapter1() {
  return (
    <ChapterLayout chapterNum={1} title="What is Spam? And Why Should We Care?">
      <div className="prose prose-slate max-w-none">
        <p className="lead">
          Every day, your inbox is a battlefield. Some emails are helpful communications from colleagues, friends, or
          services you use. Others are unwanted, deceptive, or even dangerous messages trying to trick you. Let's
          explore what spam is and why it matters.
        </p>

        <h2>The Billion-Dollar Problem</h2>
        <p>
          Spam isn't just annoying—it's expensive. Businesses lose billions annually to spam-related productivity costs,
          security breaches, and infrastructure needs. According to recent studies, spam accounts for over 45% of all
          email traffic worldwide.
        </p>

        <div className="my-8 p-4 bg-amber-50 border border-amber-200 rounded-lg flex items-start">
          <AlertCircle className="h-6 w-6 text-amber-500 mr-3 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="text-lg font-semibold text-amber-800 mt-0">Did You Know?</h3>
            <p className="text-amber-700 mb-0">
              The term "spam" comes from a 1970 Monty Python sketch featuring a cafe that served SPAM (the canned meat
              product) with every dish, while a group of Vikings sang "SPAM, SPAM, SPAM" repeatedly, drowning out
              conversation.
            </p>
          </div>
        </div>

        <h2>Types of Unwanted Email</h2>
        <div className="grid md:grid-cols-2 gap-6 my-6">
          <EmailTypeCard
            title="Phishing Attacks"
            description="Emails that attempt to trick you into revealing sensitive information by masquerading as trusted entities."
            iconColor="text-red-500"
          />
          <EmailTypeCard
            title="Commercial Spam"
            description="Unsolicited marketing emails selling products or services you didn't ask to hear about."
            iconColor="text-orange-500"
          />
          <EmailTypeCard
            title="Malware Delivery"
            description="Emails containing malicious attachments or links that can infect your computer."
            iconColor="text-red-500"
          />
          <EmailTypeCard
            title="Scams"
            description="Fraudulent emails trying to trick you into sending money or personal information."
            iconColor="text-red-500"
          />
        </div>

        <h2>Test Your Spam Detection Skills</h2>
        <p>Think you can spot spam? Let's put your skills to the test with these real-world examples.</p>

        <div className="my-8">
          <SpamQuiz />
        </div>

        <h2>Why Build a Spam Filter?</h2>
        <p>
          While email providers like Gmail and Outlook have sophisticated spam filters, understanding how to build one
          yourself has several benefits:
        </p>

        <ul>
          <li>
            <strong>Deeper security understanding</strong> — Learn how to identify threats in your inbox
          </li>
          <li>
            <strong>Customizable protection</strong> — Fine-tune your filter for your specific needs
          </li>
          <li>
            <strong>Transferable skills</strong> — The same ML techniques apply to many classification problems
          </li>
          <li>
            <strong>Practical AI experience</strong> — Build a real-world machine learning application
          </li>
        </ul>

        <div className="my-8 bg-slate-100 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Chapter 1 Summary</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-emerald-600 mr-2 mt-0.5" />
              <span>Spam is unwanted, unsolicited email that can be annoying or dangerous</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-emerald-600 mr-2 mt-0.5" />
              <span>Common types include phishing, scams, commercial spam, and malware</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-emerald-600 mr-2 mt-0.5" />
              <span>Spam detection is a classification problem well-suited for machine learning</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-emerald-600 mr-2 mt-0.5" />
              <span>Building your own filter teaches valuable skills in security and AI</span>
            </li>
          </ul>
        </div>
      </div>
    </ChapterLayout>
  )
}

// Email Type Card Component
function EmailTypeCard({ title, description, iconColor }) {
  return (
    <Card>
      <CardContent className="p-6">
        <h3 className={`text-lg font-semibold mb-2 ${iconColor}`}>{title}</h3>
        <p className="text-slate-600">{description}</p>
      </CardContent>
    </Card>
  )
}

// Spam Quiz Component
function SpamQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [showAnswer, setShowAnswer] = useState(false)
  const [userAnswers, setUserAnswers] = useState([])

  const questions = [
    {
      id: 1,
      text: "Dear Customer, Your account has been compromised. Please click the link below to verify your identity and reset your password immediately to prevent unauthorized access.",
      isSpam: true,
      explanation:
        "This is a classic phishing attempt. It creates urgency, doesn't address you by name, and asks you to click a link to 'verify' your identity.",
    },
    {
      id: 2,
      text: "Hi Alex, Just a reminder about our team meeting tomorrow at 10am. I've attached the agenda we discussed last week. Let me know if you need anything else. - Sarah",
      isSpam: false,
      explanation:
        "This is a legitimate email. It's personally addressed, provides context, and comes from someone you presumably know in a professional context.",
    },
    {
      id: 3,
      text: "CONGRATULATIONS! You've been selected as our $5,000,000 grand prize winner! To claim your prize, simply send us a processing fee of $50 via wire transfer to the account below...",
      isSpam: true,
      explanation:
        "This is a scam. The promise of a large sum of money for which you didn't enter any contest, combined with a request for you to send money, are clear red flags.",
    },
  ]

  const handleAnswer = (answer) => {
    const isCorrect = answer === questions[currentQuestion].isSpam
    setUserAnswers([...userAnswers, { questionId: questions[currentQuestion].id, isCorrect }])
    setShowAnswer(true)
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setShowAnswer(false)
    }
  }

  const handleReset = () => {
    setCurrentQuestion(0)
    setShowAnswer(false)
    setUserAnswers([])
  }

  const isQuizComplete = currentQuestion === questions.length - 1 && showAnswer

  return (
    <Card className="border border-slate-200">
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-4">Is This Spam?</h3>

        <div className="bg-slate-100 p-4 rounded mb-6 min-h-[120px]">
          <p className="italic">"{questions[currentQuestion].text}"</p>
        </div>

        {!showAnswer ? (
          <div className="flex space-x-4">
            <Button onClick={() => handleAnswer(true)} className="bg-red-600 hover:bg-red-700 flex-1">
              <XCircle className="mr-2 h-4 w-4" /> Spam
            </Button>
            <Button onClick={() => handleAnswer(false)} className="bg-emerald-600 hover:bg-emerald-700 flex-1">
              <CheckCircle className="mr-2 h-4 w-4" /> Not Spam
            </Button>
          </div>
        ) : (
          <div>
            <div
              className={`p-4 rounded mb-6 ${questions[currentQuestion].isSpam ? "bg-red-100 text-red-800" : "bg-emerald-100 text-emerald-800"}`}
            >
              <div className="font-semibold mb-2 flex items-center">
                {questions[currentQuestion].isSpam ? (
                  <>
                    <XCircle className="mr-2 h-5 w-5" />
                    This is spam!
                  </>
                ) : (
                  <>
                    <CheckCircle className="mr-2 h-5 w-5" />
                    This is a legitimate email!
                  </>
                )}
              </div>
              <p>{questions[currentQuestion].explanation}</p>
            </div>

            {isQuizComplete ? (
              <div>
                <div className="text-center mb-4">
                  <div className="text-xl font-semibold mb-2">Quiz Complete!</div>
                  <p className="text-slate-600">
                    You got {userAnswers.filter((a) => a.isCorrect).length} out of {questions.length} correct.
                  </p>
                </div>
                <Button onClick={handleReset} className="w-full">
                  Try Again
                </Button>
              </div>
            ) : (
              <Button onClick={handleNext} className="w-full bg-emerald-600 hover:bg-emerald-700">
                Next Question
              </Button>
            )}
          </div>
        )}

        <div className="mt-4 flex justify-center">
          <div className="flex space-x-2">
            {questions.map((_, idx) => (
              <div
                key={idx}
                className={`w-3 h-3 rounded-full ${idx === currentQuestion ? "bg-emerald-600" : "bg-slate-300"}`}
              />
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
