"use client"

import { useState } from "react"
import ChapterLayout from "@/components/chapter-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Database, FileText, Filter, Search } from "lucide-react"

export default function Chapter2() {
  return (
    <ChapterLayout chapterNum={2} title="Peeking Into the Inbox — Exploring the Dataset">
      <div className="prose prose-slate max-w-none">
        <p className="lead">
          Before we can build our spam filter, we need data. In machine learning, your model is only as good as the data
          you train it on. Let's explore a popular spam dataset and understand what makes it useful for training our
          classifier.
        </p>

        <h2>The SMS Spam Collection Dataset</h2>
        <p>
          For this project, we'll use the SMS Spam Collection dataset, a public set of SMS messages that have been
          collected for mobile phone spam research. It contains 5,574 English SMS messages, tagged as either "ham"
          (legitimate) or "spam". It contains 5,574 English SMS messages, tagged as either "ham" (legitimate) or "spam".
        </p>

        <div className="my-8 p-4 bg-slate-100 border border-slate-200 rounded-lg">
          <div className="flex items-start">
            <Database className="h-6 w-6 text-slate-700 mr-3 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-lg font-semibold text-slate-800 mt-0">Dataset Overview</h3>
              <ul className="mb-0">
                <li>
                  <strong>Size:</strong> 5,574 messages
                </li>
                <li>
                  <strong>Classes:</strong> Ham (4,827 messages, 86.6%) and Spam (747 messages, 13.4%)
                </li>
                <li>
                  <strong>Language:</strong> English
                </li>
                <li>
                  <strong>Source:</strong>{" "}
                  <a
                    href="https://archive.ics.uci.edu/ml/datasets/SMS+Spam+Collection"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    UCI Machine Learning Repository
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <h2>Exploring the Data</h2>
        <p>Let's take a look at some sample messages from our dataset to get a feel for what we're working with.</p>

        <DataExplorer />

        <h2>Data Characteristics</h2>
        <p>
          Understanding the characteristics of our data is crucial before we start building our machine learning model.
          Let's explore some key aspects of the SMS Spam Collection.
        </p>

        <DataVisualization />

        <h2>Data Preprocessing Considerations</h2>
        <p>Before we can use this data to train our model, we need to consider several preprocessing steps:</p>

        <div className="grid md:grid-cols-2 gap-6 my-6">
          <PreprocessingCard
            icon={<FileText className="h-6 w-6 text-emerald-600" />}
            title="Text Cleaning"
            description="Remove special characters, numbers, and convert text to lowercase for consistency."
          />
          <PreprocessingCard
            icon={<Search className="h-6 w-6 text-emerald-600" />}
            title="Tokenization"
            description="Split messages into individual words or tokens for analysis."
          />
          <PreprocessingCard
            icon={<Filter className="h-6 w-6 text-emerald-600" />}
            title="Removing Stopwords"
            description="Filter out common words like 'the', 'is', and 'and' that don't carry much meaning for classification."
          />
          <PreprocessingCard
            icon={<Database className="h-6 w-6 text-emerald-600" />}
            title="Handling Class Imbalance"
            description="Address the fact that legitimate messages (ham) significantly outnumber spam in our dataset."
          />
        </div>

        <div className="my-8 bg-slate-100 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Chapter 2 Summary</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <div className="h-5 w-5 text-emerald-600 mr-2 mt-0.5">✓</div>
              <span>We're using the SMS Spam Collection with 5,574 messages</span>
            </li>
            <li className="flex items-start">
              <div className="h-5 w-5 text-emerald-600 mr-2 mt-0.5">✓</div>
              <span>The dataset has an imbalance: 86.6% ham (legitimate) vs 13.4% spam</span>
            </li>
            <li className="flex items-start">
              <div className="h-5 w-5 text-emerald-600 mr-2 mt-0.5">✓</div>
              <span>Spam messages tend to be longer and contain distinctive patterns</span>
            </li>
            <li className="flex items-start">
              <div className="h-5 w-5 text-emerald-600 mr-2 mt-0.5">✓</div>
              <span>We'll need to preprocess the text before training our model</span>
            </li>
          </ul>
        </div>

        <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-amber-800">Next Steps</h3>
          <p className="mb-0 text-amber-700">
            In the next chapter, we'll learn how to convert these text messages into a numerical format that machine
            learning algorithms can understand through a process called feature engineering.
          </p>
        </div>
      </div>
    </ChapterLayout>
  )
}

// Data Explorer Component
function DataExplorer() {
  const sampleData = [
    {
      id: 1,
      message:
        "Go until jurong point, crazy.. Available only in bugis n great world la e buffet... Cine there got amore wat...",
      label: "ham",
    },
    { id: 2, message: "Ok lar... Joking wif u oni...", label: "ham" },
    {
      id: 3,
      message:
        "Free entry in 2 a wkly comp to win FA Cup final tkts 21st May 2005. Text FA to 87121 to receive entry question(std txt rate)T&C's apply 08452810075over18's",
      label: "spam",
    },
    { id: 4, message: "U dun say so early hor... U c already then say...", label: "ham" },
    { id: 5, message: "Nah I don't think he goes to usf, he lives around here though", label: "ham" },
    {
      id: 6,
      message:
        "WINNER!! As a valued network customer you have been selected to receivea £900 prize reward! To claim call 09061701461. Claim code KL341. Valid 12 hours only.",
      label: "spam",
    },
  ]

  const [filter, setFilter] = useState("all")

  const filteredData = filter === "all" ? sampleData : sampleData.filter((item) => item.label === filter)

  return (
    <Card className="my-6">
      <CardHeader>
        <CardTitle>Sample Messages</CardTitle>
        <CardDescription>Explore examples of spam and ham messages from our dataset</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <div className="flex space-x-2">
            <Button
              variant={filter === "all" ? "default" : "outline"}
              onClick={() => setFilter("all")}
              className={filter === "all" ? "bg-emerald-600 hover:bg-emerald-700" : ""}
            >
              All
            </Button>
            <Button
              variant={filter === "ham" ? "default" : "outline"}
              onClick={() => setFilter("ham")}
              className={filter === "ham" ? "bg-emerald-600 hover:bg-emerald-700" : ""}
            >
              Ham
            </Button>
            <Button
              variant={filter === "spam" ? "default" : "outline"}
              onClick={() => setFilter("spam")}
              className={filter === "spam" ? "bg-red-600 hover:bg-red-700" : ""}
            >
              Spam
            </Button>
          </div>
        </div>

        <div className="space-y-4">
          {filteredData.map((item) => (
            <div
              key={item.id}
              className={`p-4 rounded-lg border ${item.label === "spam" ? "border-red-200 bg-red-50" : "border-emerald-200 bg-emerald-50"}`}
            >
              <div className="flex justify-between mb-2">
                <span
                  className={`text-xs font-semibold px-2 py-1 rounded ${item.label === "spam" ? "bg-red-200 text-red-800" : "bg-emerald-200 text-emerald-800"}`}
                >
                  {item.label.toUpperCase()}
                </span>
                <span className="text-xs text-slate-500">Message #{item.id}</span>
              </div>
              <p className="text-sm text-slate-700">{item.message}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

// Data Visualization Component
function DataVisualization() {
  const classDistribution = [
    { name: "Ham", value: 4827, percent: 86.6 },
    { name: "Spam", value: 747, percent: 13.4 },
  ]

  const messageLengthData = [
    { category: "Very Short (<10)", ham: 1423, spam: 12 },
    { category: "Short (10-50)", ham: 2758, spam: 205 },
    { category: "Medium (51-100)", ham: 512, spam: 298 },
    { category: "Long (101+)", ham: 134, spam: 232 },
  ]

  const wordFrequencyHam = [
    { word: "i", count: 1745 },
    { word: "to", count: 1476 },
    { word: "you", count: 1421 },
    { word: "a", count: 1059 },
    { word: "the", count: 946 },
  ]

  const wordFrequencySpam = [
    { word: "free", count: 234 },
    { word: "text", count: 193 },
    { word: "call", count: 187 },
    { word: "claim", count: 152 },
    { word: "prize", count: 106 },
  ]

  const COLORS = ["#10b981", "#ef4444"]

  return (
    <Tabs defaultValue="distribution" className="my-6">
      <TabsList className="grid grid-cols-3 mb-4">
        <TabsTrigger value="distribution">Class Distribution</TabsTrigger>
        <TabsTrigger value="length">Message Length</TabsTrigger>
        <TabsTrigger value="words">Common Words</TabsTrigger>
      </TabsList>

      <TabsContent value="distribution">
        <Card>
          <CardHeader>
            <CardTitle>Ham vs. Spam Distribution</CardTitle>
            <CardDescription>
              Our dataset has a clear class imbalance, with ham messages significantly outnumbering spam
            </CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
            <div className="w-full max-w-md h-80">
              <ChartContainer
                config={{
                  ham: {
                    label: "Ham",
                    color: "hsl(var(--chart-1))",
                  },
                  spam: {
                    label: "Spam",
                    color: "hsl(var(--chart-2))",
                  },
                }}
              >
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={classDistribution}
                      cx="50%"
                      cy="50%"
                      labelLine={true}
                      label={({ name, percent }) => `${name}: ${percent}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {classDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Legend />
                    <ChartTooltip content={<ChartTooltipContent />} />
                  </PieChart>
                </ResponsiveContainer>
              </ChartContainer>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="length">
        <Card>
          <CardHeader>
            <CardTitle>Message Length Comparison</CardTitle>
            <CardDescription>Spam messages tend to be longer than legitimate messages</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ChartContainer
                config={{
                  ham: {
                    label: "Ham",
                    color: "hsl(var(--chart-1))",
                  },
                  spam: {
                    label: "Spam",
                    color: "hsl(var(--chart-2))",
                  },
                }}
              >
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={messageLengthData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="category" />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend />
                    <Bar dataKey="ham" fill="#10b981" name="Ham" />
                    <Bar dataKey="spam" fill="#ef4444" name="Spam" />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="words">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Common Words in Ham</CardTitle>
              <CardDescription>Legitimate messages often contain common pronouns and articles</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ChartContainer
                  config={{
                    count: {
                      label: "Count",
                      color: "hsl(var(--chart-1))",
                    },
                  }}
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={wordFrequencyHam} layout="vertical">
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis type="number" />
                      <YAxis dataKey="word" type="category" />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Bar dataKey="count" fill="#10b981" />
                    </BarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Common Words in Spam</CardTitle>
              <CardDescription>Spam messages often contain promotional and action-oriented words</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ChartContainer
                  config={{
                    count: {
                      label: "Count",
                      color: "hsl(var(--chart-1))",
                    },
                  }}
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={wordFrequencySpam} layout="vertical">
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis type="number" />
                      <YAxis dataKey="word" type="category" />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Bar dataKey="count" fill="#ef4444" />
                    </BarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </div>
            </CardContent>
          </Card>
        </div>
      </TabsContent>
    </Tabs>
  )
}

// Preprocessing Card Component
function PreprocessingCard({ icon, title, description }) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-start">
          <div className="mr-4 mt-1">{icon}</div>
          <div>
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            <p className="text-slate-600 m-0">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
