import ChapterLayout from "@/components/chapter-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { BookOpen, FileText, LinkIcon } from "lucide-react"

export default function Chapter8() {
  return (
    <ChapterLayout chapterNum={8} title="Additional Research & Findings">
      <div className="prose prose-slate max-w-none">
        <p className="lead">
          In this final section, I share additional research findings, insights, and future directions for my email
          classification project.
        </p>

        <h2>Key Research Papers</h2>
        <p>My approach was informed by several important academic works in the field:</p>

        <div className="grid md:grid-cols-2 gap-6 my-6">
          <ResearchCard
            title="Interpretable Machine Learning for Text Classification"
            author="Zhang, L. & Wilson, R."
            description="This paper explores techniques for making text classification models more interpretable to end users."
            link="https://example.com/research/interpretable-ml"
            type="paper"
          />
          <ResearchCard
            title="Beyond Binary: Nuanced Email Classification"
            author="Johnson, A. & Patel, S."
            description="My own research on moving beyond simple binary classification to more nuanced email categorization."
            link="https://example.com/research/beyond-binary"
            type="paper"
          />
          <ResearchCard
            title="Visualizing Feature Importance in NLP Models"
            author="Rodriguez, M. & Chen, T."
            description="Novel techniques for visualizing which features contribute most to classification decisions."
            link="https://example.com/research/feature-visualization"
            type="paper"
          />
          <ResearchCard
            title="User-Centered Design for ML Applications"
            author="Kim, H. & Gonzalez, E."
            description="Research on designing machine learning applications with user understanding as a primary goal."
            link="https://example.com/research/user-centered-ml"
            type="paper"
          />
        </div>

        <h2>Advanced Topics Explored</h2>
        <p>Throughout this project, I delved into several advanced topics that enhanced my approach:</p>

        <div className="space-y-6 my-6">
          <AdvancedTopicCard
            title="Explainable AI Techniques"
            description="I implemented LIME and SHAP to provide explanations for why emails are classified as spam or ham."
            resources={[
              {
                title: "My Implementation of LIME for Email Classification",
                link: "https://github.com/example/email-insight/lime-implementation",
              },
              {
                title: "Comparative Analysis of Explanation Methods",
                link: "https://github.com/example/email-insight/explanation-comparison",
              },
            ]}
          />

          <AdvancedTopicCard
            title="Contextual Word Embeddings"
            description="I experimented with BERT embeddings to capture more nuanced semantic meaning in emails."
            resources={[
              {
                title: "Email Classification with BERT",
                link: "https://github.com/example/email-insight/bert-classification",
              },
              {
                title: "Performance Comparison: Traditional vs. Contextual Embeddings",
                link: "https://github.com/example/email-insight/embedding-comparison",
              },
            ]}
          />

          <AdvancedTopicCard
            title="Active Learning Implementation"
            description="I developed an active learning system that identifies the most informative emails for human labeling."
            resources={[
              {
                title: "Active Learning Framework Code",
                link: "https://github.com/example/email-insight/active-learning",
              },
              {
                title: "Efficiency Gains from Active Learning",
                link: "https://github.com/example/email-insight/active-learning-results",
              },
            ]}
          />

          <AdvancedTopicCard
            title="User Interface for Explainable Classification"
            description="I designed a UI that helps users understand why an email was classified as spam or ham."
            resources={[
              {
                title: "UI Design Mockups",
                link: "https://github.com/example/email-insight/ui-designs",
              },
              {
                title: "User Study Results",
                link: "https://github.com/example/email-insight/user-study",
              },
            ]}
          />
        </div>

        <h2>Community Feedback</h2>
        <p>I've shared my approach with several communities and received valuable feedback:</p>

        <div className="grid md:grid-cols-3 gap-4 my-6">
          <CommunityCard
            title="Kaggle Discussion"
            description="Feedback from data scientists on my feature engineering approach."
            link="https://www.kaggle.com/discussions/example"
          />
          <CommunityCard
            title="Reddit r/MachineLearning"
            description="Discussion about explainable AI techniques for text classification."
            link="https://www.reddit.com/r/MachineLearning/example"
          />
          <CommunityCard
            title="PyData Conference"
            description="Presentation of my approach at PyData 2023."
            link="https://pydata.org/example"
          />
        </div>

        <h2>Future Directions</h2>
        <p>Based on my research and feedback, here are the future directions I'm exploring:</p>

        <div className="bg-slate-100 p-6 rounded-lg my-6">
          <ol className="list-decimal pl-5 space-y-3 mb-0">
            <li>
              <strong>Multilingual Support</strong> - Extending my approach to work effectively across multiple
              languages.
            </li>
            <li>
              <strong>Multimodal Classification</strong> - Incorporating image analysis for emails with embedded images.
            </li>
            <li>
              <strong>Temporal Analysis</strong> - Studying how spam patterns evolve over time and adapting the model
              accordingly.
            </li>
            <li>
              <strong>Federated Learning</strong> - Implementing privacy-preserving techniques to train models across
              multiple users' data.
            </li>
            <li>
              <strong>Mobile Implementation</strong> - Adapting the system for resource-constrained mobile environments.
            </li>
          </ol>
        </div>

        <div className="bg-emerald-50 border border-emerald-200 p-6 rounded-lg my-8">
          <h3 className="text-xl font-bold text-emerald-800 mb-4">Project Conclusion</h3>
          <p className="text-emerald-700 mb-4">
            This project represents my attempt to bring a fresh perspective to email classification. By focusing on
            understanding and explainability rather than just accuracy, I believe I've created a more valuable approach
            to this common problem.
          </p>
          <p className="text-emerald-700 mb-0">
            I welcome collaboration and feedback. Please visit the{" "}
            <Link href="/thank-you" className="text-emerald-600 font-semibold hover:underline">
              About page
            </Link>{" "}
            to learn more about me and how to get in touch.
          </p>
        </div>
      </div>
    </ChapterLayout>
  )
}

function ResearchCard({ title, author, description, link, type }) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-start">
          <div className="mr-3 mt-1">
            {type === "book" ? (
              <BookOpen className="h-5 w-5 text-emerald-600" />
            ) : (
              <FileText className="h-5 w-5 text-emerald-600" />
            )}
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-1">{title}</h3>
            <p className="text-sm text-slate-500 mb-2">by {author}</p>
            <p className="text-slate-600 mb-3">{description}</p>
            <Link
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-600 hover:text-emerald-700 font-medium flex items-center text-sm"
            >
              View Resource <LinkIcon className="ml-1 h-3 w-3" />
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function AdvancedTopicCard({ title, description, resources }) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <p className="text-sm font-medium text-slate-700">Implementation Resources:</p>
          <ul className="space-y-1">
            {resources.map((resource, index) => (
              <li key={index}>
                <Link
                  href={resource.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-600 hover:text-emerald-700 text-sm flex items-center"
                >
                  {resource.title}
                  <LinkIcon className="ml-1 h-3 w-3" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}

function CommunityCard({ title, description, link }) {
  return (
    <Card>
      <CardContent className="p-4">
        <h3 className="font-semibold mb-1">{title}</h3>
        <p className="text-sm text-slate-600 mb-2">{description}</p>
        <Link
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-emerald-600 hover:text-emerald-700 text-sm flex items-center"
        >
          View Discussion <LinkIcon className="ml-1 h-3 w-3" />
        </Link>
      </CardContent>
    </Card>
  )
}
