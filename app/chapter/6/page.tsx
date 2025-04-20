"use client"

import { useState } from "react"
import ChapterLayout from "@/components/chapter-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AlertCircle } from "lucide-react"

export default function Chapter6() {
  return (
    <ChapterLayout chapterNum={6} title="Improving Your Spam Filter">
      <div className="prose prose-slate max-w-none">
        <p className="lead">
          Now that we've built a basic spam filter and understand how to evaluate it, let's look at ways to enhance its
          performance. In this chapter, we'll explore techniques to fine-tune our model and address common challenges.
        </p>

        <h2>Hyperparameter Tuning</h2>
        <p>
          Machine learning models have various parameters that can be adjusted to improve performance. Let's explore how
          to systematically find the best settings for our spam classifier:
        </p>

        <Card className="my-6">
          <CardHeader>
            <CardTitle>Grid Search for Hyperparameter Optimization</CardTitle>
            <CardDescription>
              An example of using GridSearchCV to find the optimal parameters for a Naive Bayes classifier
            </CardDescription>
          </CardHeader>
          <CardContent>
            <pre className="bg-slate-900 text-slate-50 p-4 rounded-lg overflow-x-auto">
              <code className="text-sm">
                {`from sklearn.model_selection import GridSearchCV
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.naive_bayes import MultinomialNB
from sklearn.pipeline import Pipeline

# Create a pipeline
pipeline = Pipeline([
    ('tfidf', TfidfVectorizer()),
    ('clf', MultinomialNB())
])

# Define parameters to search
parameters = {
    'tfidf__max_features': [3000, 5000, 10000],
    'tfidf__min_df': [1, 3, 5],
    'tfidf__ngram_range': [(1, 1), (1, 2), (1, 3)],
    'clf__alpha': [0.1, 0.5, 1.0]
}

# Create grid search
grid_search = GridSearchCV(
    pipeline,
    parameters,
    cv=5,
    scoring='f1',
    verbose=1,
    n_jobs=-1
)

# Train grid search
grid_search.fit(X_train, y_train)

# Print best parameters
print("Best parameters:", grid_search.best_params_)
print("Best F1 score:", grid_search.best_score_)

# Use best model for predictions
best_model = grid_search.best_estimator_
y_pred = best_model.predict(X_test)`}
              </code>
            </pre>
          </CardContent>
        </Card>

        <h2>Addressing Class Imbalance</h2>
        <p>
          Our dataset has many more legitimate messages than spam messages. This imbalance can bias our model. Let's
          explore techniques to address this:
        </p>

        <Tabs defaultValue="resampling" className="my-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="resampling">Resampling</TabsTrigger>
            <TabsTrigger value="class_weight">Class Weights</TabsTrigger>
            <TabsTrigger value="threshold">Threshold Tuning</TabsTrigger>
          </TabsList>

          <TabsContent value="resampling">
            <Card>
              <CardHeader>
                <CardTitle>Resampling Techniques</CardTitle>
                <CardDescription>Adjust the distribution of classes in your training data</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Oversampling</h3>
                    <p className="text-slate-700">
                      Create duplicate instances of the minority class (spam) to balance the classes.
                    </p>
                    <pre className="bg-slate-900 text-slate-50 p-4 rounded-lg overflow-x-auto mt-2">
                      <code className="text-sm">
                        {`from imblearn.over_sampling import SMOTE

# Apply SMOTE to create synthetic examples of the minority class
smote = SMOTE(random_state=42)
X_resampled, y_resampled = smote.fit_resample(X_train_tfidf, y_train)

# Train your model on the resampled data
model = MultinomialNB()
model.fit(X_resampled, y_resampled)`}
                      </code>
                    </pre>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">Undersampling</h3>
                    <p className="text-slate-700">
                      Remove instances from the majority class (ham) to balance the classes.
                    </p>
                    <pre className="bg-slate-900 text-slate-50 p-4 rounded-lg overflow-x-auto mt-2">
                      <code className="text-sm">
                        {`from imblearn.under_sampling import RandomUnderSampler

# Apply random undersampling to reduce the majority class
rus = RandomUnderSampler(random_state=42)
X_resampled, y_resampled = rus.fit_resample(X_train_tfidf, y_train)

# Train your model on the resampled data
model = MultinomialNB()
model.fit(X_resampled, y_resampled)`}
                      </code>
                    </pre>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="class_weight">
            <Card>
              <CardHeader>
                <CardTitle>Class Weights</CardTitle>
                <CardDescription>Give more importance to the minority class during training</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-slate-700">
                    Many classifiers support a <code>class_weight</code> parameter that allows you to give more
                    importance to the minority class without changing the data itself.
                  </p>

                  <pre className="bg-slate-900 text-slate-50 p-4 rounded-lg overflow-x-auto">
                    <code className="text-sm">
                      {`from sklearn.linear_model import LogisticRegression

# Use 'balanced' to automatically adjust weights based on class frequencies
model = LogisticRegression(class_weight='balanced', max_iter=1000)
model.fit(X_train_tfidf, y_train)

# Alternatively, specify weights manually
# More weight to the spam class (1) than to the ham class (0)
weights = {0: 1, 1: 10}
model = LogisticRegression(class_weight=weights, max_iter=1000)
model.fit(X_train_tfidf, y_train)`}
                    </code>
                  </pre>

                  <div className="bg-amber-50 p-4 rounded-lg flex items-start">
                    <AlertCircle className="h-5 w-5 text-amber-600 mr-2 mt-0.5" />
                    <div>
                      <p className="text-sm text-amber-800 font-medium mb-1">Note:</p>
                      <p className="text-sm text-amber-700 mb-0">
                        Not all classifiers support class weights. For example, Naive Bayes doesn't have a class_weight
                        parameter, but you can achieve similar effects by adjusting prior probabilities.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="threshold">
            <Card>
              <CardHeader>
                <CardTitle>Threshold Tuning</CardTitle>
                <CardDescription>Adjust the classification threshold to balance precision and recall</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-slate-700">
                    By default, classifiers use a threshold of 0.5 to convert probabilities to class predictions. By
                    adjusting this threshold, you can control the tradeoff between precision and recall without
                    retraining the model.
                  </p>

                  <ThresholdTuningDemo />

                  <pre className="bg-slate-900 text-slate-50 p-4 rounded-lg overflow-x-auto">
                    <code className="text-sm">
                      {`# Get probability predictions instead of class predictions
y_prob = model.predict_proba(X_test_tfidf)[:, 1]  # Probability of spam class

# Apply custom threshold (e.g., 0.3 instead of 0.5)
custom_threshold = 0.3
y_pred_custom = (y_prob >= custom_threshold).astype(int)

# Evaluate with custom threshold
from sklearn.metrics import precision_score, recall_score, f1_score

precision = precision_score(y_test, y_pred_custom)
recall = recall_score(y_test, y_pred_custom)
f1 = f1_score(y_test, y_pred_custom)

print(f"Precision: {precision:.4f}")
print(f"Recall: {recall:.4f}")
print(f"F1 Score: {f1:.4f}")`}
                    </code>
                  </pre>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <h2>Feature Selection & Engineering</h2>
        <p>
          Not all words are equally important for spam classification. Feature selection can help identify the most
          relevant words and reduce dimensionality:
        </p>

        <Card className="my-6">
          <CardHeader>
            <CardTitle>Feature Selection Techniques</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Chi-Squared Feature Selection</h3>
                <p className="text-slate-700 mb-3">
                  Select features based on their statistical relationship with the target variable.
                </p>
                <pre className="bg-slate-900 text-slate-50 p-4 rounded-lg overflow-x-auto">
                  <code className="text-sm">
                    {`from sklearn.feature_selection import SelectKBest, chi2

# Convert the text to TF-IDF features
X_train_tfidf = tfidf_vectorizer.fit_transform(X_train)

# Select top 1000 features based on chi-squared statistic
chi2_selector = SelectKBest(chi2, k=1000)
X_train_chi2 = chi2_selector.fit_transform(X_train_tfidf, y_train)

# Get the selected feature names
feature_names = tfidf_vectorizer.get_feature_names_out()
selected_features = [feature_names[i] for i in chi2_selector.get_support(indices=True)]

print(f"Top 10 most informative features: {selected_features[:10]}")

# Transform test data
X_test_tfidf = tfidf_vectorizer.transform(X_test)
X_test_chi2 = chi2_selector.transform(X_test_tfidf)`}
                  </code>
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Custom Features</h3>
                <p className="text-slate-700 mb-3">Create domain-specific features that can improve spam detection.</p>
                <pre className="bg-slate-900 text-slate-50 p-4 rounded-lg overflow-x-auto">
                  <code className="text-sm">
                    {`import numpy as np
import re
from scipy.sparse import hstack

def extract_custom_features(texts):
    # Initialize feature arrays
    has_number = np.zeros((len(texts), 1))
    has_url = np.zeros((len(texts), 1))
    has_currency = np.zeros((len(texts), 1))
    message_length = np.zeros((len(texts), 1))
    capital_ratio = np.zeros((len(texts), 1))
    
    # URL pattern
    url_pattern = re.compile(r'https?://\\S+|www\\.\\S+')
    # Currency pattern
    currency_pattern = re.compile(r'\\$|€|£|\\d+(\\.\\d+)?%')
    
    for i, text in enumerate(texts):
        # Check for numbers
        has_number[i] = 1 if re.search(r'\\d+', text) else 0
        
        # Check for URLs
        has_url[i] = 1 if url_pattern.search(text) else 0
        
        # Check for currency symbols or percentages
        has_currency[i] = 1 if currency_pattern.search(text) else 0
        
        # Message length
        message_length[i] = len(text)
        
        # Ratio of capital letters
        capitals = sum(1 for c in text if c.isupper())
        total_chars = sum(1 for c in text if c.isalpha())
        capital_ratio[i] = capitals / max(total_chars, 1)
    
    # Return all features as a single array
    return np.hstack([has_number, has_url, has_currency, message_length, capital_ratio])

# Extract custom features
X_train_custom = extract_custom_features(X_train)
X_test_custom = extract_custom_features(X_test)

# Combine with TF-IDF features
X_train_combined = hstack([X_train_tfidf, X_train_custom])
X_test_combined = hstack([X_test_tfidf, X_test_custom])

# Train model on combined features
model = MultinomialNB()
model.fit(X_train_combined, y_train)
y_pred = model.predict(X_test_combined)`}
                  </code>
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>

        <h2>Ensemble Methods</h2>
        <p>
          Combining multiple models can lead to better performance than any single model. Let's explore ensemble
          techniques for spam classification:
        </p>

        <Card className="my-6">
          <CardHeader>
            <CardTitle>Implementing a Voting Classifier</CardTitle>
            <CardDescription>Combine predictions from multiple models for better accuracy</CardDescription>
          </CardHeader>
          <CardContent>
            <pre className="bg-slate-900 text-slate-50 p-4 rounded-lg overflow-x-auto">
              <code className="text-sm">
                {`from sklearn.ensemble import VotingClassifier
from sklearn.naive_bayes import MultinomialNB
from sklearn.linear_model import LogisticRegression
from sklearn.svm import LinearSVC

# Define base classifiers
nb = MultinomialNB()
lr = LogisticRegression(max_iter=1000)
svm = LinearSVC(dual=False)

# Create voting classifier
ensemble = VotingClassifier(
    estimators=[
        ('naive_bayes', nb),
        ('logistic_regression', lr),
        ('svm', svm)
    ],
    voting='hard'  # 'hard' for majority rule, 'soft' for weighted probabilities
)

# Train the ensemble
ensemble.fit(X_train_tfidf, y_train)

# Make predictions
y_pred = ensemble.predict(X_test_tfidf)

# Evaluate ensemble performance
from sklearn.metrics import classification_report
print(classification_report(y_test, y_pred))`}
              </code>
            </pre>
          </CardContent>
        </Card>

        <div className="my-8 bg-slate-100 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Chapter 6 Summary</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <div className="h-5 w-5 text-emerald-600 mr-2 mt-0.5">✓</div>
              <span>
                You can improve your spam filter by tuning hyperparameters, addressing class imbalance, and selecting
                relevant features
              </span>
            </li>
            <li className="flex items-start">
              <div className="h-5 w-5 text-emerald-600 mr-2 mt-0.5">✓</div>
              <span>Grid search helps find the best hyperparameter settings for your model</span>
            </li>
            <li className="flex items-start">
              <div className="h-5 w-5 text-emerald-600 mr-2 mt-0.5">✓</div>
              <span>Resampling techniques and class weights can mitigate the effects of class imbalance</span>
            </li>
            <li className="flex items-start">
              <div className="h-5 w-5 text-emerald-600 mr-2 mt-0.5">✓</div>
              <span>Feature selection identifies the most informative words for spam classification</span>
            </li>
            <li className="flex items-start">
              <div className="h-5 w-5 text-emerald-600 mr-2 mt-0.5">✓</div>
              <span>Ensemble methods combine multiple models for improved performance</span>
            </li>
          </ul>
        </div>

        <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-amber-800">Next Steps</h3>
          <p className="mb-0 text-amber-700">
            In the next chapter, we'll explore how to deploy your spam filter to the real world so it can start
            filtering actual emails.
          </p>
        </div>
      </div>
    </ChapterLayout>
  )
}

// Threshold Tuning Demo Component
function ThresholdTuningDemo() {
  const [threshold, setThreshold] = useState(0.5)

  // Simulated data
  const data = {
    precision: [0.65, 0.72, 0.78, 0.83, 0.87, 0.91, 0.94, 0.96, 0.98],
    recall: [0.92, 0.89, 0.85, 0.8, 0.74, 0.67, 0.58, 0.48, 0.35],
  }

  // Get precision and recall based on threshold
  const thresholdIndex = Math.floor((threshold - 0.1) / 0.1)
  const precision = data.precision[thresholdIndex]
  const recall = data.recall[thresholdIndex]
  const f1 = (2 * (precision * recall)) / (precision + recall)

  return (
    <div className="bg-slate-100 p-4 rounded-lg my-4">
      <h3 className="text-base font-semibold mb-3">Interactive Threshold Tuning</h3>

      <div className="mb-4">
        <div className="flex justify-between mb-1">
          <span className="text-sm">Threshold: {threshold.toFixed(1)}</span>
          <span className="text-sm text-slate-500">
            {threshold < 0.3
              ? "More spam detected (higher recall)"
              : threshold > 0.7
                ? "Fewer false positives (higher precision)"
                : "Balanced"}
          </span>
        </div>
        <input
          type="range"
          min={0.1}
          max={0.9}
          step={0.1}
          value={threshold}
          onChange={(e) => setThreshold(Number.parseFloat(e.target.value))}
          className="w-full"
        />
      </div>

      <div className="grid grid-cols-3 gap-4 text-center">
        <div className="p-2 bg-white rounded border">
          <div className="text-xs text-slate-500 mb-1">Precision</div>
          <div className="text-lg font-bold text-emerald-600">{(precision * 100).toFixed(1)}%</div>
        </div>
        <div className="p-2 bg-white rounded border">
          <div className="text-xs text-slate-500 mb-1">Recall</div>
          <div className="text-lg font-bold text-blue-600">{(recall * 100).toFixed(1)}%</div>
        </div>
        <div className="p-2 bg-white rounded border">
          <div className="text-xs text-slate-500 mb-1">F1 Score</div>
          <div className="text-lg font-bold text-purple-600">{(f1 * 100).toFixed(1)}%</div>
        </div>
      </div>

      <p className="text-xs text-slate-500 mt-3">
        Note: This is a simplified demonstration with simulated data. In a real application, you would calculate these
        metrics using your test dataset.
      </p>
    </div>
  )
}
