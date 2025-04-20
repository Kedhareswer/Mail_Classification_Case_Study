"use client"

import { useState } from "react"
import ChapterLayout from "@/components/chapter-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { AlertCircle, Check, X } from "lucide-react"

export default function Chapter5() {
  return (
    <ChapterLayout chapterNum={5} title="Evaluation Lab">
      <div className="prose prose-slate max-w-none">
        <p className="lead">
          Now that we've trained our machine learning models, we need to evaluate their performance. Understanding how
          well your model is performing is crucial for making improvements and ensuring it will work effectively in the
          real world.
        </p>

        <h2>Beyond Accuracy: Understanding Evaluation Metrics</h2>
        <p>
          Accuracy alone doesn't tell the full story, especially for imbalanced datasets like ours where legitimate
          messages far outnumber spam. Let's explore the key metrics for evaluating a spam classifier:
        </p>

        <MetricsTabs />

        <h2>The Confusion Matrix Explained</h2>
        <p>
          The confusion matrix provides a complete picture of your model's performance by showing the true positives,
          false positives, true negatives, and false negatives. Let's explore this powerful visualization:
        </p>

        <ConfusionMatrixVisualizer />

        <h2>Real-World Considerations</h2>
        <p>
          When evaluating a spam filter, it's important to consider the real-world impact of different types of errors:
        </p>

        <div className="grid md:grid-cols-2 gap-6 my-6">
          <ErrorCard
            type="False Positive"
            description="Legitimate email incorrectly classified as spam"
            impact="Users might miss important messages"
            mitigation="Prioritize high precision over recall if this is critical"
          />
          <ErrorCard
            type="False Negative"
            description="Spam email incorrectly classified as legitimate"
            impact="Users are exposed to potentially harmful content"
            mitigation="Prioritize high recall over precision if this is critical"
          />
        </div>

        <h2>Try It Yourself: Spam Predictor</h2>
        <p>Let's test our model with some example messages and see how it performs:</p>

        <SpamPredictor />

        <h2>Making Tradeoffs: Precision vs. Recall</h2>
        <p>
          In spam filtering, there's often a tradeoff between precision and recall. The right balance depends on your
          specific requirements:
        </p>

        <div className="my-8 p-4 bg-slate-100 border border-slate-200 rounded-lg">
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold">Precision-Focused Approach</h3>
              <p className="text-slate-700">
                <strong>When to use:</strong> When the cost of false positives (legitimate emails in spam folder) is
                high. For example, in business communication where missing an important email could be costly.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Recall-Focused Approach</h3>
              <p className="text-slate-700">
                <strong>When to use:</strong> When the cost of false negatives (spam in inbox) is high. For example, in
                security-sensitive environments where harmful spam could pose a risk.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Balanced Approach (F1 Score)</h3>
              <p className="text-slate-700">
                <strong>When to use:</strong> When you need a balance between precision and recall. This is common for
                general-purpose email systems.
              </p>
            </div>
          </div>
        </div>

        <h2>Cross-Validation: Ensuring Reliable Evaluation</h2>
        <p>
          To get a more reliable estimate of your model's performance, it's important to use cross-validation instead of
          a single train-test split:
        </p>

        <Card className="my-6">
          <CardHeader>
            <CardTitle>Implementing Cross-Validation</CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="bg-slate-900 text-slate-50 p-4 rounded-lg overflow-x-auto">
              <code className="text-sm">
                {`from sklearn.model_selection import cross_val_score
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.naive_bayes import MultinomialNB
from sklearn.pipeline import Pipeline

# Create a pipeline that combines vectorization and classification
pipeline = Pipeline([
    ('tfidf', TfidfVectorizer(max_features=5000, ngram_range=(1, 2))),
    ('classifier', MultinomialNB())
])

# Perform 5-fold cross-validation
cv_scores = cross_val_score(pipeline, df['message'], df['label'], cv=5, scoring='f1')

# Print results
print(f"F1 scores across folds: {cv_scores}")
print(f"Average F1 score: {cv_scores.mean():.4f}")
print(f"Standard deviation: {cv_scores.std():.4f}")`}
              </code>
            </pre>
          </CardContent>
        </Card>

        <div className="my-8 bg-slate-100 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Chapter 5 Summary</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <div className="h-5 w-5 text-emerald-600 mr-2 mt-0.5">✓</div>
              <span>Accuracy is not enough for evaluating spam filters, especially with imbalanced data</span>
            </li>
            <li className="flex items-start">
              <div className="h-5 w-5 text-emerald-600 mr-2 mt-0.5">✓</div>
              <span>Precision measures how many predicted spam messages are actually spam</span>
            </li>
            <li className="flex items-start">
              <div className="h-5 w-5 text-emerald-600 mr-2 mt-0.5">✓</div>
              <span>Recall measures how many actual spam messages are correctly identified</span>
            </li>
            <li className="flex items-start">
              <div className="h-5 w-5 text-emerald-600 mr-2 mt-0.5">✓</div>
              <span>F1 score provides a balance between precision and recall</span>
            </li>
            <li className="flex items-start">
              <div className="h-5 w-5 text-emerald-600 mr-2 mt-0.5">✓</div>
              <span>The confusion matrix provides a complete picture of model performance</span>
            </li>
            <li className="flex items-start">
              <div className="h-5 w-5 text-emerald-600 mr-2 mt-0.5">✓</div>
              <span>Cross-validation provides a more reliable estimate of model performance</span>
            </li>
          </ul>
        </div>

        <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-amber-800">Next Steps</h3>
          <p className="mb-0 text-amber-700">
            In the next chapter, we'll explore ways to improve our spam filter, including hyperparameter tuning, feature
            selection, and ensemble methods.
          </p>
        </div>
      </div>
    </ChapterLayout>
  )
}

// Metrics Tabs Component
function MetricsTabs() {
  return (
    <Tabs defaultValue="precision" className="my-6">
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger value="precision">Precision</TabsTrigger>
        <TabsTrigger value="recall">Recall</TabsTrigger>
        <TabsTrigger value="f1">F1 Score</TabsTrigger>
        <TabsTrigger value="accuracy">Accuracy</TabsTrigger>
      </TabsList>

      <TabsContent value="precision">
        <Card>
          <CardHeader>
            <CardTitle>Precision</CardTitle>
            <CardDescription>How many of the emails classified as spam are actually spam?</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-center my-4">
                <div className="text-center">
                  <p className="font-mono text-lg bg-slate-100 p-2 rounded">Precision = TP / (TP + FP)</p>
                  <p className="text-sm text-slate-500 mt-2">TP = True Positives, FP = False Positives</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h3 className="text-base font-semibold">In Plain English</h3>
                  <p className="text-slate-700">
                    Of all the emails your model flagged as spam, what percentage were actually spam?
                  </p>
                  <p className="text-slate-700">
                    High precision means fewer legitimate emails end up in the spam folder.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-base font-semibold">Example</h3>
                  <p className="text-slate-700">
                    If your model flags 100 emails as spam, and 90 of them are actually spam, your precision is 90%.
                  </p>
                </div>
              </div>

              <div className="bg-amber-50 p-3 rounded-lg">
                <h3 className="text-base font-semibold text-amber-800 mb-1">When It Matters Most</h3>
                <p className="text-amber-700 mb-0">
                  Precision is particularly important when the cost of false positives is high. In spam filtering, this
                  means situations where missing legitimate emails would be very problematic.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="recall">
        <Card>
          <CardHeader>
            <CardTitle>Recall</CardTitle>
            <CardDescription>How many of the actual spam emails did our model correctly identify?</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-center my-4">
                <div className="text-center">
                  <p className="font-mono text-lg bg-slate-100 p-2 rounded">Recall = TP / (TP + FN)</p>
                  <p className="text-sm text-slate-500 mt-2">TP = True Positives, FN = False Negatives</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h3 className="text-base font-semibold">In Plain English</h3>
                  <p className="text-slate-700">
                    Out of all the actual spam emails, how many did your model correctly catch?
                  </p>
                  <p className="text-slate-700">High recall means fewer spam emails slip through to the inbox.</p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-base font-semibold">Example</h3>
                  <p className="text-slate-700">
                    If there are 100 actual spam emails, and your model identifies 85 of them, your recall is 85%.
                  </p>
                </div>
              </div>

              <div className="bg-amber-50 p-3 rounded-lg">
                <h3 className="text-base font-semibold text-amber-800 mb-1">When It Matters Most</h3>
                <p className="text-amber-700 mb-0">
                  Recall is particularly important when the cost of false negatives is high. In spam filtering, this
                  means situations where letting spam through would be very problematic, such as phishing or security
                  threats.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="f1">
        <Card>
          <CardHeader>
            <CardTitle>F1 Score</CardTitle>
            <CardDescription>The harmonic mean of precision and recall</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-center my-4">
                <div className="text-center">
                  <p className="font-mono text-lg bg-slate-100 p-2 rounded">
                    F1 Score = 2 * (Precision * Recall) / (Precision + Recall)
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h3 className="text-base font-semibold">In Plain English</h3>
                  <p className="text-slate-700">
                    A single metric that balances precision and recall. It's high only when both precision and recall
                    are high.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-base font-semibold">Example</h3>
                  <p className="text-slate-700">
                    If precision is 90% and recall is 80%, the F1 score is approximately 84.7%.
                  </p>
                </div>
              </div>

              <div className="bg-amber-50 p-3 rounded-lg">
                <h3 className="text-base font-semibold text-amber-800 mb-1">When It Matters Most</h3>
                <p className="text-amber-700 mb-0">
                  F1 score is particularly useful when you need a balance between precision and recall, which is often
                  the case in spam filtering where both false positives and false negatives have associated costs.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="accuracy">
        <Card>
          <CardHeader>
            <CardTitle>Accuracy</CardTitle>
            <CardDescription>The proportion of all predictions that were correct</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-center my-4">
                <div className="text-center">
                  <p className="font-mono text-lg bg-slate-100 p-2 rounded">
                    Accuracy = (TP + TN) / (TP + TN + FP + FN)
                  </p>
                  <p className="text-sm text-slate-500 mt-2">
                    TP = True Positives, TN = True Negatives, FP = False Positives, FN = False Negatives
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h3 className="text-base font-semibold">In Plain English</h3>
                  <p className="text-slate-700">
                    What percentage of all predictions (both spam and ham) did the model get right?
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-base font-semibold">Example</h3>
                  <p className="text-slate-700">
                    If there are 1000 emails, and your model correctly classifies 950 of them (as either spam or ham),
                    your accuracy is 95%.
                  </p>
                </div>
              </div>

              <div className="bg-amber-50 p-3 rounded-lg">
                <h3 className="text-base font-semibold text-amber-800 mb-1">Limitations with Imbalanced Data</h3>
                <p className="text-amber-700 mb-0">
                  Accuracy can be misleading with imbalanced datasets. For example, if only 5% of emails are spam, a
                  model that classifies everything as "not spam" would have 95% accuracy but be completely useless at
                  catching spam.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}

// Confusion Matrix Visualizer Component
function ConfusionMatrixVisualizer() {
  const [threshold, setThreshold] = useState(0.5)

  // These values would normally be calculated based on the threshold
  // Here we're simulating the effect of changing the threshold
  const calculateMatrixValues = (threshold) => {
    // Base values
    const baseTP = 670
    const baseFP = 80
    const baseFN = 77
    const baseTN = 4747

    // Adjust based on threshold
    // Lower threshold = more spam predictions (higher TP, higher FP)
    // Higher threshold = fewer spam predictions (lower TP, lower FP)
    const thresholdEffect = (threshold - 0.5) * 200

    return {
      tp: Math.round(Math.max(0, Math.min(747, baseTP - thresholdEffect))),
      fp: Math.round(Math.max(0, Math.min(4827, baseFP - thresholdEffect * 1.5))),
      fn: Math.round(Math.max(0, Math.min(747, baseFN + thresholdEffect))),
      tn: Math.round(Math.max(0, Math.min(4827, baseTN + thresholdEffect * 1.5))),
    }
  }

  const { tp, fp, fn, tn } = calculateMatrixValues(threshold)

  const total = tp + fp + fn + tn
  const precision = tp / (tp + fp)
  const recall = tp / (tp + fn)
  const f1 = (2 * precision * recall) / (precision + recall)
  const accuracy = (tp + tn) / total

  return (
    <Card className="my-6">
      <CardHeader>
        <CardTitle>Interactive Confusion Matrix</CardTitle>
        <CardDescription>
          Adjust the classification threshold to see how it affects the confusion matrix and metrics
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div>
            <div className="flex justify-between mb-2">
              <p className="text-sm font-medium">Classification Threshold: {threshold.toFixed(2)}</p>
              <p className="text-sm text-slate-500">
                {threshold < 0.3
                  ? "Aggressive (more spam predictions)"
                  : threshold < 0.7
                    ? "Balanced"
                    : "Conservative (fewer spam predictions)"}
              </p>
            </div>
            <Slider
              value={[threshold]}
              onValueChange={(value) => setThreshold(value[0])}
              min={0.1}
              max={0.9}
              step={0.05}
              className="mb-6"
            />
          </div>

          <div className="grid grid-cols-2 gap-px bg-slate-300 border border-slate-300 rounded-lg overflow-hidden">
            <div className="bg-emerald-100 p-4 flex flex-col items-center justify-center">
              <div className="text-2xl font-bold text-emerald-800">{tp}</div>
              <div className="text-sm text-emerald-800 font-semibold mt-1">True Positive</div>
              <div className="text-xs text-slate-600 mt-1">Correctly identified as spam</div>
            </div>
            <div className="bg-amber-100 p-4 flex flex-col items-center justify-center">
              <div className="text-2xl font-bold text-amber-800">{fp}</div>
              <div className="text-sm text-amber-800 font-semibold mt-1">False Positive</div>
              <div className="text-xs text-slate-600 mt-1">Ham incorrectly flagged as spam</div>
            </div>
            <div className="bg-amber-100 p-4 flex flex-col items-center justify-center">
              <div className="text-2xl font-bold text-amber-800">{fn}</div>
              <div className="text-sm text-amber-800 font-semibold mt-1">False Negative</div>
              <div className="text-xs text-slate-600 mt-1">Spam incorrectly marked as ham</div>
            </div>
            <div className="bg-emerald-100 p-4 flex flex-col items-center justify-center">
              <div className="text-2xl font-bold text-emerald-800">{tn}</div>
              <div className="text-sm text-emerald-800 font-semibold mt-1">True Negative</div>
              <div className="text-xs text-slate-600 mt-1">Correctly identified as ham</div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <MetricCard label="Accuracy" value={accuracy} />
            <MetricCard label="Precision" value={precision} />
            <MetricCard label="Recall" value={recall} />
            <MetricCard label="F1 Score" value={f1} />
          </div>

          <div className="bg-slate-100 p-4 rounded-lg">
            <h3 className="text-base font-semibold mb-2">Understanding the Tradeoff</h3>
            <p className="text-sm text-slate-700">Notice how changing the threshold affects precision and recall:</p>
            <ul className="text-sm text-slate-700 list-disc ml-5 mt-2 space-y-1">
              <li>Lower threshold: More emails classified as spam (higher recall, lower precision)</li>
              <li>Higher threshold: Fewer emails classified as spam (lower recall, higher precision)</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

// Metric Card Component
function MetricCard({ label, value }) {
  return (
    <div className="p-3 border rounded-lg">
      <div className="text-xs text-slate-500 mb-1">{label}</div>
      <div className="text-xl font-bold">{(value * 100).toFixed(1)}%</div>
    </div>
  )
}

// Error Card Component
function ErrorCard({ type, description, impact, mitigation }) {
  return (
    <Card>
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold mb-2">{type}</h3>
        <p className="text-slate-600 mb-3">{description}</p>
        <div className="space-y-2">
          <div className="flex items-start">
            <AlertCircle className="h-5 w-5 text-amber-500 mr-2 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-amber-800">Impact:</p>
              <p className="text-sm text-slate-600">{impact}</p>
            </div>
          </div>
          <div className="flex items-start">
            <Check className="h-5 w-5 text-emerald-500 mr-2 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-emerald-800">Mitigation:</p>
              <p className="text-sm text-slate-600">{mitigation}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

// Spam Predictor Component
function SpamPredictor() {
  const [message, setMessage] = useState("")
  const [prediction, setPrediction] = useState(null)

  const analyzeMessage = () => {
    // In a real application, this would call an API to run the message through your trained model
    // Here we're just doing a simple keyword-based check for demonstration

    const spamKeywords = [
      "free",
      "win",
      "prize",
      "congratulations",
      "claim",
      "cash",
      "guaranteed",
      "offer",
      "credit",
      "loan",
    ]
    const lowercaseMessage = message.toLowerCase()

    let spamScore = 0
    const keywordsFound = []

    spamKeywords.forEach((keyword) => {
      if (lowercaseMessage.includes(keyword)) {
        spamScore += 1
        keywordsFound.push(keyword)
      }
    })

    const probability = Math.min(0.95, (spamScore / spamKeywords.length) * 1.5)
    const isSpam = probability > 0.5

    setPrediction({
      isSpam,
      probability,
      keywordsFound,
    })
  }

  return (
    <Card className="my-6">
      <CardHeader>
        <CardTitle>Test the Spam Predictor</CardTitle>
        <CardDescription>Enter a message to see how our model might classify it</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium mb-2 block">Enter a message:</label>
            <div className="flex space-x-2">
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type a message to classify..."
                className="flex-1"
              />
              <Button
                onClick={analyzeMessage}
                disabled={!message.trim()}
                className="bg-emerald-600 hover:bg-emerald-700"
              >
                Analyze
              </Button>
            </div>
          </div>

          {prediction && (
            <div
              className={`p-4 rounded-lg ${prediction.isSpam ? "bg-red-50 border border-red-200" : "bg-emerald-50 border border-emerald-200"}`}
            >
              <div className="flex items-center mb-3">
                {prediction.isSpam ? (
                  <>
                    <X className="h-6 w-6 text-red-500 mr-2" />
                    <h3 className="text-lg font-semibold text-red-800">Classified as Spam</h3>
                  </>
                ) : (
                  <>
                    <Check className="h-6 w-6 text-emerald-500 mr-2" />
                    <h3 className="text-lg font-semibold text-emerald-800">Classified as Ham</h3>
                  </>
                )}
              </div>

              <div className="space-y-3">
                <div>
                  <p className="text-sm font-medium mb-1">Confidence Level:</p>
                  <div className="w-full bg-slate-200 rounded-full h-2.5">
                    <div
                      className={`h-2.5 rounded-full ${prediction.isSpam ? "bg-red-500" : "bg-emerald-500"}`}
                      style={{ width: `${prediction.probability * 100}%` }}
                    ></div>
                  </div>
                  <p className="text-xs text-right mt-1 text-slate-500">
                    {(prediction.probability * 100).toFixed(1)}% confidence
                  </p>
                </div>

                {prediction.keywordsFound.length > 0 && (
                  <div>
                    <p className="text-sm font-medium mb-1">Suspicious keywords detected:</p>
                    <div className="flex flex-wrap gap-1">
                      {prediction.keywordsFound.map((keyword, i) => (
                        <span key={i} className="px-2 py-1 bg-slate-200 text-slate-800 rounded text-xs">
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <p className="text-sm text-slate-600 italic">
                  Note: This is a simplified demonstration. A real model would use more sophisticated techniques to
                  classify messages.
                </p>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
