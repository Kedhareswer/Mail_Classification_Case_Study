"use client"

import { useState } from "react"
import ChapterLayout from "@/components/chapter-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { AlertCircle, Code, MessageSquare } from "lucide-react"

export default function Chapter3() {
  return (
    <ChapterLayout chapterNum={3} title="From Words to Numbers — Feature Engineering">
      <div className="prose prose-slate max-w-none">
        <p className="lead">
          Machines don't understand text like we do. To build an effective spam classifier, we need to convert our text
          messages into numerical features that algorithms can process. This critical step is called feature
          engineering.
        </p>

        <h2>Why We Need Feature Engineering</h2>
        <p>
          Machine learning algorithms work with numbers, not words. Feature engineering is the process of transforming
          raw text data into numerical vectors that capture the important characteristics of the text.
        </p>

        <div className="my-8 p-4 bg-slate-100 border border-slate-200 rounded-lg flex items-start">
          <AlertCircle className="h-6 w-6 text-slate-700 mr-3 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="text-lg font-semibold text-slate-800 mt-0">The Challenge</h3>
            <p className="mb-0">
              How do we convert a message like "Claim your free prize now!" into a format a computer can understand and
              use for prediction?
            </p>
          </div>
        </div>

        <h2>Text Vectorization Techniques</h2>
        <p>
          There are several ways to convert text into numbers. Let's explore the most common techniques for text
          classification tasks.
        </p>

        <VectorizationTabs />

        <h2>N-grams: Capturing Phrases</h2>
        <p>
          Single words often don't capture enough context. N-grams allow us to consider sequences of words, which can be
          more informative. For example, "free prize" might be a stronger indicator of spam than either "free" or
          "prize" alone.
        </p>

        <NGramDemo />

        <h2>Feature Engineering in Python</h2>
        <p>Let's see how we can implement feature engineering in Python using scikit-learn:</p>

        <Card className="my-6">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Code className="mr-2 h-5 w-5" />
              Implementing TF-IDF Vectorization
            </CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="bg-slate-900 text-slate-50 p-4 rounded-lg overflow-x-auto">
              <code className="text-sm">
                {`from sklearn.feature_extraction.text import TfidfVectorizer

# Create the TF-IDF vectorizer
tfidf_vectorizer = TfidfVectorizer(
    max_features=5000,            # Limit to top 5000 features
    min_df=5,                     # Ignore terms that appear in less than 5 documents
    max_df=0.7,                   # Ignore terms that appear in more than 70% of documents
    ngram_range=(1, 2),           # Use both unigrams and bigrams
    stop_words='english'          # Remove English stop words
)

# Transform the training data
X_train_tfidf = tfidf_vectorizer.fit_transform(X_train)

# Output is a sparse matrix with shape (n_samples, n_features)
print(f"Number of samples: {X_train_tfidf.shape[0]}")
print(f"Number of features: {X_train_tfidf.shape[1]}")

# The feature names (words or n-grams) can be accessed
feature_names = tfidf_vectorizer.get_feature_names_out()
print(f"First 10 features: {feature_names[:10]}")

# Transform new data (e.g., test data) using the same vocabulary
X_test_tfidf = tfidf_vectorizer.transform(X_test)`}
              </code>
            </pre>
          </CardContent>
        </Card>

        <h2>Try It Yourself: Vectorize a Message</h2>
        <p>Let's experiment with converting a text message into a numerical representation:</p>

        <MessageVectorizer />

        <div className="my-8 bg-slate-100 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Chapter 3 Summary</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <div className="h-5 w-5 text-emerald-600 mr-2 mt-0.5">✓</div>
              <span>Feature engineering converts text to numbers that ML algorithms can process</span>
            </li>
            <li className="flex items-start">
              <div className="h-5 w-5 text-emerald-600 mr-2 mt-0.5">✓</div>
              <span>Bag of Words simply counts word occurrences in messages</span>
            </li>
            <li className="flex items-start">
              <div className="h-5 w-5 text-emerald-600 mr-2 mt-0.5">✓</div>
              <span>TF-IDF weighs words by their importance across the dataset</span>
            </li>
            <li className="flex items-start">
              <div className="h-5 w-5 text-emerald-600 mr-2 mt-0.5">✓</div>
              <span>N-grams capture word sequences and provide more context</span>
            </li>
            <li className="flex items-start">
              <div className="h-5 w-5 text-emerald-600 mr-2 mt-0.5">✓</div>
              <span>scikit-learn provides tools to easily implement these techniques</span>
            </li>
          </ul>
        </div>

        <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-amber-800">Next Steps</h3>
          <p className="mb-0 text-amber-700">
            In the next chapter, we'll use these vectorized features to train different machine learning models and
            evaluate their performance in classifying spam vs. ham messages.
          </p>
        </div>
      </div>
    </ChapterLayout>
  )
}

// Vectorization Tabs Component
function VectorizationTabs() {
  return (
    <Tabs defaultValue="bow" className="my-6">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="bow">Bag of Words</TabsTrigger>
        <TabsTrigger value="tfidf">TF-IDF</TabsTrigger>
      </TabsList>

      <TabsContent value="bow">
        <Card>
          <CardHeader>
            <CardTitle>Bag of Words (BoW)</CardTitle>
            <CardDescription>A simple technique that counts word occurrences in each document</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">How It Works</h3>
                <p className="text-slate-700">
                  The Bag of Words approach creates a vocabulary of all unique words in the dataset and represents each
                  message as a vector of word counts.
                </p>
              </div>

              <div className="bg-slate-100 p-4 rounded-lg">
                <h4 className="text-base font-semibold mb-2">Example:</h4>
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold">Message:</p>
                    <p className="italic">"Win a free prize now! Free entry!"</p>
                  </div>
                  <div>
                    <p className="font-semibold">Vocabulary:</p>
                    <p>["win", "a", "free", "prize", "now", "entry"]</p>
                  </div>
                  <div>
                    <p className="font-semibold">Vector representation:</p>
                    <p>[1, 1, 2, 1, 1, 1]</p>
                    <p className="text-xs text-slate-500 mt-1">(Note: "free" appears twice, so its count is 2)</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Advantages</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Simple and intuitive</li>
                  <li>Fast to compute</li>
                  <li>Works well for many classification tasks</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Limitations</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Ignores word order and context</li>
                  <li>All words are treated as equally important</li>
                  <li>Creates very high-dimensional, sparse matrices</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="tfidf">
        <Card>
          <CardHeader>
            <CardTitle>Term Frequency-Inverse Document Frequency (TF-IDF)</CardTitle>
            <CardDescription>
              A technique that weighs words by their importance in the document and across the dataset
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">How It Works</h3>
                <p className="text-slate-700">
                  TF-IDF weighs each word in a document based on how frequently it appears in that document and how rare
                  it is across all documents. This helps capture the importance of words.
                </p>
              </div>

              <div className="bg-slate-100 p-4 rounded-lg">
                <h4 className="text-base font-semibold mb-2">The Formula:</h4>
                <div className="text-center my-2">
                  <p className="font-mono text-lg">TF-IDF(t, d) = TF(t, d) × IDF(t)</p>
                </div>
                <div className="space-y-2">
                  <p>
                    <strong>TF (Term Frequency)</strong>: How often a word appears in a document
                  </p>
                  <p>
                    <strong>IDF (Inverse Document Frequency)</strong>: How rare a word is across all documents
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Advantages</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Reduces importance of common words like "the", "and", etc.</li>
                  <li>Increases importance of distinctive words that might indicate spam</li>
                  <li>Often performs better than simple Bag of Words</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Example Effect</h3>
                <p className="text-slate-700 mb-2">
                  Common words in all emails (like "the" or "to") get low TF-IDF scores, while distinctive words like
                  "prize" or "claim" that appear often in spam but rarely in legitimate messages get high scores.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}

// N-Gram Demo Component
function NGramDemo() {
  const [ngramSize, setNgramSize] = useState(1)

  const message = "Claim your free prize now! Call this number immediately."

  const getNgrams = (text, n) => {
    const words = text
      .toLowerCase()
      .replace(/[^\w\s]/g, "")
      .split(/\s+/)

    const ngrams = []
    for (let i = 0; i <= words.length - n; i++) {
      ngrams.push(words.slice(i, i + n).join(" "))
    }

    return ngrams
  }

  const ngrams = getNgrams(message, ngramSize)

  return (
    <Card className="my-6">
      <CardHeader>
        <CardTitle>N-gram Demonstration</CardTitle>
        <CardDescription>Adjust the slider to see how different n-gram sizes affect tokenization</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div>
            <p className="text-sm text-slate-500 mb-2">Original message:</p>
            <div className="p-3 border rounded bg-slate-50">
              <p className="text-slate-900">{message}</p>
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <p className="text-sm font-medium">N-gram Size: {ngramSize}</p>
              <p className="text-sm text-slate-500">
                {ngramSize === 1
                  ? "Unigrams"
                  : ngramSize === 2
                    ? "Bigrams"
                    : ngramSize === 3
                      ? "Trigrams"
                      : `${ngramSize}-grams`}
              </p>
            </div>
            <Slider
              value={[ngramSize]}
              onValueChange={(value) => setNgramSize(value[0])}
              min={1}
              max={4}
              step={1}
              className="mb-6"
            />
          </div>

          <div>
            <p className="text-sm text-slate-500 mb-2">Resulting {ngramSize}-grams:</p>
            <div className="p-3 border rounded bg-slate-50 max-h-40 overflow-y-auto">
              <div className="flex flex-wrap gap-2">
                {ngrams.map((ngram, index) => (
                  <div key={index} className="px-2 py-1 bg-emerald-100 text-emerald-800 rounded text-sm">
                    {ngram}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

// Message Vectorizer Component
function MessageVectorizer() {
  const [message, setMessage] = useState("")
  const [showVector, setShowVector] = useState(false)

  const vectorize = () => {
    setShowVector(true)
  }

  // This is a simplified demonstration
  const mockVectorizeMessage = (text) => {
    // Create a simple bag of words for demonstration
    if (!text.trim()) return {}

    const words = text
      .toLowerCase()
      .replace(/[^\w\s]/g, "")
      .split(/\s+/)
      .filter((word) => word.length > 0)

    const result = {}
    words.forEach((word) => {
      result[word] = (result[word] || 0) + 1
    })

    return result
  }

  const vectorized = mockVectorizeMessage(message)
  const hasVector = Object.keys(vectorized).length > 0

  return (
    <Card className="my-6">
      <CardHeader>
        <CardTitle className="flex items-center">
          <MessageSquare className="mr-2 h-5 w-5" />
          Try Vectorizing a Message
        </CardTitle>
        <CardDescription>Type a message below to see how it might be represented as a feature vector</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <Input
              value={message}
              onChange={(e) => {
                setMessage(e.target.value)
                setShowVector(false)
              }}
              placeholder="Type a message here (e.g., 'Claim your free prize now!')"
              className="w-full"
            />
          </div>

          <Button onClick={vectorize} disabled={!message.trim()} className="w-full bg-emerald-600 hover:bg-emerald-700">
            Vectorize Message
          </Button>

          {showVector && hasVector && (
            <div className="mt-4">
              <h4 className="text-base font-semibold mb-2">Bag of Words Representation:</h4>
              <div className="p-4 bg-slate-100 rounded-lg overflow-x-auto">
                <pre className="text-sm">{JSON.stringify(vectorized, null, 2)}</pre>
              </div>
              <p className="text-sm text-slate-500 mt-2">
                This simplified representation shows word counts. In a real system, we'd use TF-IDF and include all
                terms from the vocabulary, even those with zero counts.
              </p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
