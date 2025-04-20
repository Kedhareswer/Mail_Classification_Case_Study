"use client"

import { useState } from "react"
import ChapterLayout from "@/components/chapter-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Brain, Code, Table, Target } from "lucide-react"

export default function Chapter4() {
  return (
    <ChapterLayout chapterNum={4} title="Training Your Brain — Machine Learning Models">
      <div className="prose prose-slate max-w-none">
        <p className="lead">
          Now that we've transformed our text data into numerical features, it's time to train machine learning models
          that can distinguish between spam and legitimate messages.
        </p>

        <h2>Choosing the Right Model</h2>
        <p>
          Different machine learning algorithms have different strengths and weaknesses. For text classification tasks
          like spam detection, several models work particularly well. Let's explore the most common options:
        </p>

        <ModelTabs />

        <h2>The Machine Learning Pipeline</h2>
        <p>
          Building a spam classifier involves a series of steps, from data preprocessing to model evaluation. Here's a
          typical workflow:
        </p>

        <div className="my-8 p-5 bg-slate-100 border border-slate-200 rounded-lg">
          <ol className="list-none space-y-4 m-0 p-0">
            <li className="flex items-center">
              <div className="bg-emerald-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3 flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="text-lg font-semibold m-0">Data Splitting</h3>
                <p className="text-slate-700 m-0">
                  Divide your dataset into training (to learn from) and test (to evaluate) sets.
                </p>
              </div>
            </li>
            <li className="flex items-center">
              <div className="bg-emerald-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3 flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="text-lg font-semibold m-0">Text Preprocessing</h3>
                <p className="text-slate-700 m-0">Clean text, remove stop words, and apply other transformations.</p>
              </div>
            </li>
            <li className="flex items-center">
              <div className="bg-emerald-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3 flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="text-lg font-semibold m-0">Feature Extraction</h3>
                <p className="text-slate-700 m-0">Convert text to numerical features using techniques like TF-IDF.</p>
              </div>
            </li>
            <li className="flex items-center">
              <div className="bg-emerald-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3 flex-shrink-0">
                4
              </div>
              <div>
                <h3 className="text-lg font-semibold m-0">Model Training</h3>
                <p className="text-slate-700 m-0">Fit the chosen algorithm to the training data.</p>
              </div>
            </li>
            <li className="flex items-center">
              <div className="bg-emerald-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3 flex-shrink-0">
                5
              </div>
              <div>
                <h3 className="text-lg font-semibold m-0">Model Evaluation</h3>
                <p className="text-slate-700 m-0">
                  Assess performance using metrics like accuracy, precision, and recall.
                </p>
              </div>
            </li>
            <li className="flex items-center">
              <div className="bg-emerald-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3 flex-shrink-0">
                6
              </div>
              <div>
                <h3 className="text-lg font-semibold m-0">Hyperparameter Tuning</h3>
                <p className="text-slate-700 m-0">Fine-tune the model parameters to improve performance.</p>
              </div>
            </li>
          </ol>
        </div>

        <h2>Implementation in Python</h2>
        <p>Let's see how we can implement a spam classifier using scikit-learn in Python:</p>

        <Card className="my-6">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Code className="mr-2 h-5 w-5" />
              Building a Naive Bayes Classifier
            </CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="bg-slate-900 text-slate-50 p-4 rounded-lg overflow-x-auto">
              <code className="text-sm">
                {`import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.naive_bayes import MultinomialNB
from sklearn.metrics import classification_report, confusion_matrix, accuracy_score

# Load data (assuming 'df' has 'message' and 'label' columns)
df = pd.read_csv('spam_data.csv')

# Split data
X_train, X_test, y_train, y_test = train_test_split(
    df['message'], df['label'], test_size=0.2, random_state=42
)

# Feature extraction
tfidf_vectorizer = TfidfVectorizer(max_features=5000, ngram_range=(1, 2))
X_train_tfidf = tfidf_vectorizer.fit_transform(X_train)
X_test_tfidf = tfidf_vectorizer.transform(X_test)

# Train Naive Bayes model
nb_classifier = MultinomialNB()
nb_classifier.fit(X_train_tfidf, y_train)

# Make predictions
y_pred = nb_classifier.predict(X_test_tfidf)

# Evaluate performance
print(f"Accuracy: {accuracy_score(y_test, y_pred):.4f}")
print("\\nClassification Report:")
print(classification_report(y_test, y_pred))
print("\\nConfusion Matrix:")
print(confusion_matrix(y_test, y_pred))`}
              </code>
            </pre>
          </CardContent>
        </Card>

        <h2>Interactive Model Simulator</h2>
        <p>Let's see how different models perform on our spam dataset by adjusting key parameters:</p>

        <ModelSimulator />

        <h2>Common Challenges in Spam Classification</h2>
        <p>Building an effective spam classifier comes with several challenges:</p>

        <div className="grid md:grid-cols-2 gap-6 my-6">
          <ChallengeCard
            title="Class Imbalance"
            description="Our dataset has many more legitimate messages than spam, which can bias the model."
            solution="Use techniques like oversampling, undersampling, or adjust class weights."
          />
          <ChallengeCard
            title="Feature Selection"
            description="Too many features can lead to overfitting and slow training."
            solution="Use dimensionality reduction or feature selection techniques."
          />
          <ChallengeCard
            title="Evolving Spam Tactics"
            description="Spammers constantly change their strategies to evade detection."
            solution="Regularly update your model with new data and monitor performance."
          />
          <ChallengeCard
            title="Overfitting"
            description="Models might learn patterns specific to the training data that don't generalize."
            solution="Use cross-validation and regularization techniques."
          />
        </div>

        <div className="my-8 bg-slate-100 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Chapter 4 Summary</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <div className="h-5 w-5 text-emerald-600 mr-2 mt-0.5">✓</div>
              <span>Naive Bayes is often a good baseline model for text classification</span>
            </li>
            <li className="flex items-start">
              <div className="h-5 w-5 text-emerald-600 mr-2 mt-0.5">✓</div>
              <span>Logistic Regression provides good performance and interpretability</span>
            </li>
            <li className="flex items-start">
              <div className="h-5 w-5 text-emerald-600 mr-2 mt-0.5">✓</div>
              <span>More complex models like SVM and Random Forest can provide higher accuracy</span>
            </li>
            <li className="flex items-start">
              <div className="h-5 w-5 text-emerald-600 mr-2 mt-0.5">✓</div>
              <span>The ML pipeline includes data splitting, preprocessing, training, and evaluation</span>
            </li>
            <li className="flex items-start">
              <div className="h-5 w-5 text-emerald-600 mr-2 mt-0.5">✓</div>
              <span>Class imbalance and evolving spam tactics present challenges for spam classification</span>
            </li>
          </ul>
        </div>

        <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-amber-800">Next Steps</h3>
          <p className="mb-0 text-amber-700">
            In the next chapter, we'll evaluate our models in more detail and learn how to choose the right metrics for
            spam classification.
          </p>
        </div>
      </div>
    </ChapterLayout>
  )
}

// Model Tabs Component
function ModelTabs() {
  return (
    <Tabs defaultValue="naive_bayes" className="my-6">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="naive_bayes">Naive Bayes</TabsTrigger>
        <TabsTrigger value="logistic_regression">Logistic Regression</TabsTrigger>
        <TabsTrigger value="advanced">Advanced Models</TabsTrigger>
      </TabsList>

      <TabsContent value="naive_bayes">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Brain className="mr-2 h-5 w-5" />
              Naive Bayes
            </CardTitle>
            <CardDescription>A probabilistic classifier based on Bayes' theorem</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">How It Works</h3>
                <p className="text-slate-700">
                  Naive Bayes calculates the probability of a message being spam based on the presence or absence of
                  specific words. It's "naive" because it assumes all features (words) are independent of each other.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                  <h4 className="text-base font-semibold text-emerald-800 mb-2">Advantages</h4>
                  <ul className="list-disc pl-5 space-y-1 text-emerald-700">
                    <li>Fast training and prediction</li>
                    <li>Works well with high-dimensional data</li>
                    <li>Needs less training data</li>
                    <li>Simple to implement</li>
                  </ul>
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                  <h4 className="text-base font-semibold text-amber-800 mb-2">Limitations</h4>
                  <ul className="list-disc pl-5 space-y-1 text-amber-700">
                    <li>Assumes feature independence</li>
                    <li>Less accurate with feature correlations</li>
                    <li>Sensitive to irrelevant features</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">When to Use</h3>
                <p className="text-slate-700">
                  Naive Bayes is an excellent starting point for text classification tasks. It's particularly useful
                  when you need a fast, simple model that performs reasonably well without much tuning.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="logistic_regression">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Table className="mr-2 h-5 w-5" />
              Logistic Regression
            </CardTitle>
            <CardDescription>A statistical model that predicts binary outcomes</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">How It Works</h3>
                <p className="text-slate-700">
                  Logistic Regression models the probability of a message being spam as a function of the features
                  (words). It learns weights for each feature to maximize the likelihood of correct classification.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                  <h4 className="text-base font-semibold text-emerald-800 mb-2">Advantages</h4>
                  <ul className="list-disc pl-5 space-y-1 text-emerald-700">
                    <li>Highly interpretable (feature weights)</li>
                    <li>Performs well with linearly separable data</li>
                    <li>Outputs probabilities, not just classifications</li>
                    <li>Can be regularized to prevent overfitting</li>
                  </ul>
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                  <h4 className="text-base font-semibold text-amber-800 mb-2">Limitations</h4>
                  <ul className="list-disc pl-5 space-y-1 text-amber-700">
                    <li>Assumes linear decision boundary</li>
                    <li>Can struggle with highly correlated features</li>
                    <li>May need more data than Naive Bayes</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">When to Use</h3>
                <p className="text-slate-700">
                  Logistic Regression is a great choice when you need a balance of performance and interpretability. It
                  often performs better than Naive Bayes and allows you to understand which words are most predictive of
                  spam.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="advanced">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Target className="mr-2 h-5 w-5" />
              Advanced Models
            </CardTitle>
            <CardDescription>More complex algorithms that can capture non-linear patterns</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="border rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-2">Support Vector Machines (SVM)</h3>
                <p className="text-slate-700 mb-3">
                  SVMs find the optimal hyperplane that separates spam from legitimate messages, maximizing the margin
                  between classes.
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <h4 className="font-semibold text-emerald-700">Pros:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Effective in high-dimensional spaces</li>
                      <li>Works well with clear margins of separation</li>
                      <li>Resistant to overfitting with proper tuning</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-amber-700">Cons:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Slower training time for large datasets</li>
                      <li>Sensitive to choice of kernel and parameters</li>
                      <li>Less interpretable than simpler models</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="border rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-2">Random Forest</h3>
                <p className="text-slate-700 mb-3">
                  Random Forest builds multiple decision trees and merges their predictions, reducing overfitting and
                  improving accuracy.
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <h4 className="font-semibold text-emerald-700">Pros:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Handles non-linear relationships well</li>
                      <li>Provides feature importance rankings</li>
                      <li>Resistant to overfitting</li>
                      <li>Handles imbalanced datasets effectively</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-amber-700">Cons:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>More computationally intensive</li>
                      <li>Model is complex and less interpretable</li>
                      <li>Can be memory-intensive for large datasets</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">When to Use Advanced Models</h3>
                <p className="text-slate-700">
                  Consider these models when simpler approaches don't achieve sufficient accuracy, and when you have
                  enough computing resources for training. They're particularly useful when dealing with complex,
                  non-linear relationships in your data.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}

// Model Simulator Component
function ModelSimulator() {
  const [model, setModel] = useState("naive_bayes")
  const [featureCount, setFeatureCount] = useState(3000)
  const [accuracy, setAccuracy] = useState(94.2)
  const [precision, setPrecision] = useState(92.7)
  const [recall, setRecall] = useState(89.3)

  // Simulated performance metrics based on model and parameters
  const updateMetrics = () => {
    let baseAccuracy, basePrecision, baseRecall

    switch (model) {
      case "naive_bayes":
        baseAccuracy = 92
        basePrecision = 91
        baseRecall = 87
        break
      case "logistic_regression":
        baseAccuracy = 93.5
        basePrecision = 92
        baseRecall = 88
        break
      case "svm":
        baseAccuracy = 94.5
        basePrecision = 94
        baseRecall = 91
        break
      case "random_forest":
        baseAccuracy = 95
        basePrecision = 93.5
        baseRecall = 90.5
        break
    }

    // Adjust metrics based on feature count
    const featureImpact = ((featureCount - 1000) / 8000) * 4

    // Add some randomness
    const randomFactor = Math.random() * 1 - 0.5

    setAccuracy(Math.min(99, Math.max(85, baseAccuracy + featureImpact + randomFactor)))
    setPrecision(Math.min(99, Math.max(85, basePrecision + featureImpact * 0.8 + randomFactor)))
    setRecall(Math.min(99, Math.max(80, baseRecall + featureImpact * 1.2 + randomFactor)))
  }

  const handleModelChange = (value) => {
    setModel(value)
    setTimeout(updateMetrics, 300)
  }

  const handleFeatureChange = (value) => {
    setFeatureCount(value[0])
    setTimeout(updateMetrics, 300)
  }

  const metricData = [
    { name: "Accuracy", value: accuracy },
    { name: "Precision", value: precision },
    { name: "Recall", value: recall },
    { name: "F1 Score", value: (2 * (precision * recall)) / (precision + recall) },
  ]

  return (
    <Card className="my-6">
      <CardHeader>
        <CardTitle>Model Performance Simulator</CardTitle>
        <CardDescription>Adjust parameters to see how they might affect model performance</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div>
            <label className="text-sm font-medium mb-2 block">Select Model:</label>
            <Select value={model} onValueChange={handleModelChange}>
              <SelectTrigger>
                <SelectValue placeholder="Select a model" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="naive_bayes">Naive Bayes</SelectItem>
                <SelectItem value="logistic_regression">Logistic Regression</SelectItem>
                <SelectItem value="svm">Support Vector Machine</SelectItem>
                <SelectItem value="random_forest">Random Forest</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <label className="text-sm font-medium">Number of Features: {featureCount}</label>
              <span className="text-xs text-slate-500">
                {featureCount < 2000 ? "Low complexity" : featureCount < 5000 ? "Medium complexity" : "High complexity"}
              </span>
            </div>
            <Slider
              value={[featureCount]}
              onValueChange={handleFeatureChange}
              min={1000}
              max={9000}
              step={500}
              className="mb-6"
            />
          </div>

          <div>
            <p className="text-sm font-medium mb-3">Performance Metrics:</p>
            <div className="h-64">
              <ChartContainer
                config={{
                  value: {
                    label: "Score (%)",
                    color: "hsl(var(--chart-1))",
                  },
                }}
              >
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={metricData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis domain={[80, 100]} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="value" fill="#10b981" />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 text-center">
            <div className="p-4 bg-slate-100 rounded-lg">
              <p className="text-sm text-slate-600 mb-1">Training Time</p>
              <p className="font-bold text-lg">
                {model === "naive_bayes"
                  ? "< 1 second"
                  : model === "logistic_regression"
                    ? "~2 seconds"
                    : model === "svm"
                      ? "~10 seconds"
                      : "~15 seconds"}
              </p>
            </div>
            <div className="p-4 bg-slate-100 rounded-lg">
              <p className="text-sm text-slate-600 mb-1">Memory Usage</p>
              <p className="font-bold text-lg">
                {model === "naive_bayes"
                  ? "Low"
                  : model === "logistic_regression"
                    ? "Low-Medium"
                    : model === "svm"
                      ? "Medium"
                      : "Medium-High"}
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

// Challenge Card Component
function ChallengeCard({ title, description, solution }) {
  return (
    <Card>
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-slate-600 mb-3">{description}</p>
        <div className="bg-emerald-50 p-3 rounded-lg">
          <h4 className="text-sm font-semibold text-emerald-800 mb-1">Solution:</h4>
          <p className="text-emerald-700 text-sm m-0">{solution}</p>
        </div>
      </CardContent>
    </Card>
  )
}
