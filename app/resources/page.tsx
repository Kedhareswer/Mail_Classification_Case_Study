import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Code, Database, FileText, Github, LinkIcon, Youtube } from "lucide-react"

export default function ResourcesPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Learning Resources</h1>
          <p className="text-xl text-slate-600">Expand your knowledge with these carefully selected resources</p>
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Database className="mr-2 h-6 w-6 text-emerald-600" />
              Datasets
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <ResourceCard
                title="SMS Spam Collection"
                description="The dataset used in this tutorial, containing 5,574 SMS messages tagged as ham or spam."
                link="https://archive.ics.uci.edu/ml/datasets/SMS+Spam+Collection"
                icon={<Database className="h-5 w-5" />}
              />
              <ResourceCard
                title="Enron Email Dataset"
                description="A large dataset of emails from Enron Corporation employees, useful for more advanced email classification."
                link="https://www.cs.cmu.edu/~enron/"
                icon={<Database className="h-5 w-5" />}
              />
              <ResourceCard
                title="Ling-Spam Dataset"
                description="A collection of spam and legitimate messages from a linguistics mailing list."
                link="http://nlp.cs.aueb.gr/software_and_datasets/lingspam_public.tar.gz"
                icon={<Database className="h-5 w-5" />}
              />
              <ResourceCard
                title="SpamAssassin Public Corpus"
                description="A collection of spam and ham emails used for testing spam filtering systems."
                link="https://spamassassin.apache.org/old/publiccorpus/"
                icon={<Database className="h-5 w-5" />}
              />
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <BookOpen className="mr-2 h-6 w-6 text-emerald-600" />
              Tutorials & Guides
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <ResourceCard
                title="Scikit-learn Text Classification Tutorial"
                description="An official guide on text classification using scikit-learn."
                link="https://scikit-learn.org/stable/tutorial/text_analytics/working_with_text_data.html"
                icon={<FileText className="h-5 w-5" />}
              />
              <ResourceCard
                title="TF-IDF for Text Classification"
                description="A detailed guide on using TF-IDF for feature extraction in text classification."
                link="https://towardsdatascience.com/text-classification-with-nlp-tf-idf-vs-word2vec-vs-bert-41ff868d1794"
                icon={<FileText className="h-5 w-5" />}
              />
              <ResourceCard
                title="Evaluating Text Classification Models"
                description="Best practices for evaluating and comparing different text classification models."
                link="https://neptune.ai/blog/evaluation-metrics-for-text-classification"
                icon={<FileText className="h-5 w-5" />}
              />
              <ResourceCard
                title="Model Deployment with Flask"
                description="A tutorial on deploying machine learning models using Flask."
                link="https://www.tensorflow.org/tfx/tutorials/serving/rest_simple"
                icon={<FileText className="h-5 w-5" />}
              />
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Code className="mr-2 h-6 w-6 text-emerald-600" />
              Code & Projects
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <ResourceCard
                title="Spam Filter GitHub Repository"
                description="The complete source code for the spam filter developed in this tutorial."
                link="https://github.com/example/spam-slayer"
                icon={<Github className="h-5 w-5" />}
              />
              <ResourceCard
                title="Email Classification with NLTK"
                description="A comprehensive example of email classification using Natural Language Toolkit."
                link="https://github.com/example/email-classification-nltk"
                icon={<Github className="h-5 w-5" />}
              />
              <ResourceCard
                title="Spam Detection with Deep Learning"
                description="An advanced project using neural networks for spam detection."
                link="https://github.com/example/deep-learning-spam"
                icon={<Github className="h-5 w-5" />}
              />
              <ResourceCard
                title="Interactive Jupyter Notebooks"
                description="A collection of interactive notebooks for learning text classification step by step."
                link="https://github.com/example/text-classification-notebooks"
                icon={<Github className="h-5 w-5" />}
              />
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Youtube className="mr-2 h-6 w-6 text-emerald-600" />
              Video Tutorials
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <ResourceCard
                title="Text Classification from Scratch"
                description="A comprehensive video tutorial on building text classifiers from the ground up."
                link="https://www.youtube.com/watch?v=example1"
                icon={<Youtube className="h-5 w-5" />}
              />
              <ResourceCard
                title="Feature Engineering for NLP"
                description="Advanced techniques for feature engineering in natural language processing."
                link="https://www.youtube.com/watch?v=example2"
                icon={<Youtube className="h-5 w-5" />}
              />
              <ResourceCard
                title="Machine Learning Model Evaluation"
                description="How to properly evaluate and compare different machine learning models."
                link="https://www.youtube.com/watch?v=example3"
                icon={<Youtube className="h-5 w-5" />}
              />
              <ResourceCard
                title="Deploying ML Models to Production"
                description="Step-by-step guide to deploying machine learning models in production environments."
                link="https://www.youtube.com/watch?v=example4"
                icon={<Youtube className="h-5 w-5" />}
              />
            </div>
          </section>
        </div>

        <div className="mt-16 text-center bg-slate-100 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Have a Resource to Share?</h2>
          <p className="text-slate-600 mb-6">
            If you've found a helpful resource related to email classification or machine learning, we'd love to add it
            to our collection!
          </p>
          <Link
            href="mailto:resources@spamslayer.example.com"
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-emerald-600 hover:bg-emerald-700"
          >
            <LinkIcon className="mr-2 h-4 w-4" />
            Submit a Resource
          </Link>
        </div>
      </div>
    </div>
  )
}

function ResourceCard({ title, description, link, icon }) {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center">
          <span className="text-emerald-600 mr-2">{icon}</span>
          {title}
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Link
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-emerald-600 hover:text-emerald-700 font-medium flex items-center"
        >
          View Resource
          <LinkIcon className="ml-1 h-4 w-4" />
        </Link>
      </CardContent>
    </Card>
  )
}
