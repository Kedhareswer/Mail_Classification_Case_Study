"use client"

import { useState } from "react"
import ChapterLayout from "@/components/chapter-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AlertCircle, Code, Globe, Server, Cloud, CheckCircle } from "lucide-react"

export default function Chapter7() {
  return (
    <ChapterLayout chapterNum={7} title="Deployment Strategy">
      <div className="prose prose-slate max-w-none">
        <p className="lead">
          After developing my unique approach to email classification, I needed to determine how to deploy it
          effectively. This section explores my deployment strategy and considerations.
        </p>

        <h2>Deployment Considerations</h2>
        <p>
          When deploying my email classification system, I had to consider several factors to ensure it would work
          effectively in real-world scenarios:
        </p>

        <div className="grid md:grid-cols-2 gap-6 my-6">
          <ConsiderationCard
            icon={<Server className="h-6 w-6 text-emerald-600" />}
            title="Scalability"
            description="My solution needed to handle varying loads, from a few emails to thousands per day."
          />
          <ConsiderationCard
            icon={<Cloud className="h-6 w-6 text-emerald-600" />}
            title="Latency"
            description="Email classification needed to happen quickly to avoid delays in message delivery."
          />
          <ConsiderationCard
            icon={<AlertCircle className="h-6 w-6 text-emerald-600" />}
            title="Monitoring"
            description="I implemented tracking for performance metrics to ensure the model maintains accuracy over time."
          />
          <ConsiderationCard
            icon={<Globe className="h-6 w-6 text-emerald-600" />}
            title="Updating"
            description="I developed a strategy for retraining the model as spam tactics evolve."
          />
        </div>

        <h2>Deployment Options I Considered</h2>
        <p>I explored several deployment options before deciding on the best approach for my project:</p>

        <DeploymentTabs />

        <h2>Model Packaging</h2>
        <p>For deployment, I packaged my model and preprocessing pipeline together to ensure consistent predictions:</p>

        <Card className="my-6">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Code className="mr-2 h-5 w-5" />
              Model Packaging Implementation
            </CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="bg-slate-900 text-slate-50 p-4 rounded-lg overflow-x-auto">
              <code className="text-sm">
                {`import joblib
from sklearn.pipeline import Pipeline
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.naive_bayes import MultinomialNB

# Create a pipeline that combines preprocessing and model
pipeline = Pipeline([
    ('tfidf', TfidfVectorizer(max_features=5000, ngram_range=(1, 2))),
    ('classifier', MultinomialNB())
])

# Train the pipeline
pipeline.fit(X_train, y_train)

# Save the trained pipeline to a file
joblib.dump(pipeline, 'email_classifier_pipeline.joblib')

# Later, you can load the pipeline
loaded_pipeline = joblib.load('email_classifier_pipeline.joblib')

# Use the loaded pipeline to make predictions
predictions = loaded_pipeline.predict(new_emails)`}
              </code>
            </pre>
          </CardContent>
        </Card>

        <h2>API Implementation</h2>
        <p>I created a REST API to make my classification model accessible to other applications:</p>

        <Card className="my-6">
          <CardHeader>
            <CardTitle>My Flask API Implementation</CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="bg-slate-900 text-slate-50 p-4 rounded-lg overflow-x-auto">
              <code className="text-sm">
                {`from flask import Flask, request, jsonify
import joblib

app = Flask(__name__)

# Load the trained pipeline
pipeline = joblib.load('email_classifier_pipeline.joblib')

@app.route('/classify', methods=['POST'])
def classify():
    # Get the email text from the request
    data = request.json
    if 'email' not in data:
        return jsonify({'error': 'No email provided'}), 400
    
    email_text = data['email']
    
    # Make prediction
    prediction = pipeline.predict([email_text])[0]
    probability = pipeline.predict_proba([email_text])[0][1]  # Probability of being spam
    
    # Return the result with explanation
    result = {
        'is_spam': bool(prediction),
        'confidence': float(probability),
        'email': email_text,
        'explanation': generate_explanation(email_text, pipeline)
    }
    
    return jsonify(result)

def generate_explanation(text, model):
    # My custom function to explain why the email was classified as it was
    # This is part of my unique approach to email classification
    # [Implementation details...]
    return {
        'key_features': ['free', 'offer', 'limited time'],
        'importance_scores': [0.85, 0.72, 0.65]
    }

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)`}
              </code>
            </pre>
          </CardContent>
        </Card>

        <h2>Monitoring and Updating Strategy</h2>
        <p>
          To ensure my classification system remains effective over time, I implemented this monitoring and updating
          strategy:
        </p>

        <div className="my-6 space-y-6">
          <MonitoringStep
            number={1}
            title="Performance Tracking"
            description="I track precision, recall, and false positive rates in production to identify any degradation."
          />
          <MonitoringStep
            number={2}
            title="User Feedback Collection"
            description="I collect feedback on misclassified emails to continuously improve the training data."
          />
          <MonitoringStep
            number={3}
            title="A/B Testing Framework"
            description="I test new model versions against the current model before full deployment."
          />
          <MonitoringStep
            number={4}
            title="Scheduled Retraining"
            description="I retrain the model monthly with new data to adapt to evolving spam tactics."
          />
        </div>

        <h2>Deployment Checklist</h2>
        <p>I used this checklist to ensure I covered all important aspects of deployment:</p>

        <DeploymentChecklist />

        <div className="my-8 bg-slate-100 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Section 7 Summary</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <div className="h-5 w-5 text-emerald-600 mr-2 mt-0.5">✓</div>
              <span>I considered scalability, latency, monitoring, and updating strategies for my deployment</span>
            </li>
            <li className="flex items-start">
              <div className="h-5 w-5 text-emerald-600 mr-2 mt-0.5">✓</div>
              <span>I evaluated different deployment options and chose a REST API approach</span>
            </li>
            <li className="flex items-start">
              <div className="h-5 w-5 text-emerald-600 mr-2 mt-0.5">✓</div>
              <span>I packaged my model and preprocessing pipeline together for consistent predictions</span>
            </li>
            <li className="flex items-start">
              <div className="h-5 w-5 text-emerald-600 mr-2 mt-0.5">✓</div>
              <span>I implemented an API that not only classifies emails but explains the classification</span>
            </li>
            <li className="flex items-start">
              <div className="h-5 w-5 text-emerald-600 mr-2 mt-0.5">✓</div>
              <span>I established a monitoring and updating strategy to maintain effectiveness over time</span>
            </li>
          </ul>
        </div>

        <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-amber-800">Next Steps</h3>
          <p className="mb-0 text-amber-700">
            In the final section, I'll share additional research findings and future directions for this project.
          </p>
        </div>
      </div>
    </ChapterLayout>
  )
}

// Consideration Card Component
function ConsiderationCard({ icon, title, description }) {
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

// Deployment Tabs Component
function DeploymentTabs() {
  return (
    <Tabs defaultValue="web_service" className="my-6">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="web_service">Web Service</TabsTrigger>
        <TabsTrigger value="email_client">Email Client Integration</TabsTrigger>
        <TabsTrigger value="cloud_service">Cloud Service</TabsTrigger>
      </TabsList>

      <TabsContent value="web_service">
        <Card>
          <CardHeader>
            <CardTitle>Web Service / API</CardTitle>
            <CardDescription>My chosen approach: deploying as a standalone web service</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">Implementation</h3>
                <p className="text-slate-700">
                  I deployed my model as a REST API that accepts email text and returns both a classification and an
                  explanation. This allows other applications to integrate with my system.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                  <h4 className="text-base font-semibold text-emerald-800 mb-2">Why I Chose This</h4>
                  <ul className="list-disc pl-5 space-y-1 text-emerald-700">
                    <li>Centralized deployment and updates</li>
                    <li>Can be used by multiple applications</li>
                    <li>Easier to monitor and maintain</li>
                    <li>Scalable with container technologies</li>
                  </ul>
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                  <h4 className="text-base font-semibold text-amber-800 mb-2">Challenges I Overcame</h4>
                  <ul className="list-disc pl-5 space-y-1 text-amber-700">
                    <li>Server infrastructure setup</li>
                    <li>Minimizing network latency</li>
                    <li>Handling traffic spikes</li>
                    <li>Implementing robust API security</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="email_client">
        <Card>
          <CardHeader>
            <CardTitle>Email Client Integration</CardTitle>
            <CardDescription>Alternative approach I considered</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">Approach</h3>
                <p className="text-slate-700">
                  I explored packaging my model as a plugin for email clients like Outlook and Thunderbird, which would
                  run locally on the user's device.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                  <h4 className="text-base font-semibold text-emerald-800 mb-2">Potential Benefits</h4>
                  <ul className="list-disc pl-5 space-y-1 text-emerald-700">
                    <li>No server infrastructure needed</li>
                    <li>Works offline</li>
                    <li>Better privacy (emails stay local)</li>
                    <li>No network latency</li>
                  </ul>
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                  <h4 className="text-base font-semibold text-amber-800 mb-2">Why I Didn't Choose This</h4>
                  <ul className="list-disc pl-5 space-y-1 text-amber-700">
                    <li>Complex distribution and updates</li>
                    <li>Limited by client device resources</li>
                    <li>Need to support multiple platforms</li>
                    <li>Less visibility into performance</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="cloud_service">
        <Card>
          <CardHeader>
            <CardTitle>Cloud ML Service</CardTitle>
            <CardDescription>Another alternative I considered</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">Approach</h3>
                <p className="text-slate-700">
                  I evaluated deploying using cloud platforms like AWS SageMaker, Google AI Platform, or Azure ML, which
                  would handle infrastructure and scaling.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                  <h4 className="text-base font-semibold text-emerald-800 mb-2">Potential Benefits</h4>
                  <ul className="list-disc pl-5 space-y-1 text-emerald-700">
                    <li>Managed infrastructure and scaling</li>
                    <li>Built-in monitoring and logging</li>
                    <li>High availability and reliability</li>
                    <li>Easy integration with other cloud services</li>
                  </ul>
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                  <h4 className="text-base font-semibold text-amber-800 mb-2">Why I Didn't Choose This</h4>
                  <ul className="list-disc pl-5 space-y-1 text-amber-700">
                    <li>Higher operational costs</li>
                    <li>Potential vendor lock-in</li>
                    <li>Less control over infrastructure</li>
                    <li>Learning curve for cloud-specific tools</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Services I Evaluated</h3>
                <ul className="list-disc pl-5 space-y-1 text-slate-700">
                  <li>AWS SageMaker</li>
                  <li>Google AI Platform</li>
                  <li>Azure Machine Learning</li>
                  <li>IBM Watson Machine Learning</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}

// Monitoring Step Component
function MonitoringStep({ number, title, description }) {
  return (
    <div className="flex items-start">
      <div className="bg-emerald-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
        {number}
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-1">{title}</h3>
        <p className="text-slate-600">{description}</p>
      </div>
    </div>
  )
}

// Deployment Checklist Component
function DeploymentChecklist() {
  const [checkedItems, setCheckedItems] = useState({})

  const toggleItem = (id) => {
    setCheckedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  const checklistItems = [
    {
      id: "model_packaging",
      text: "Package model and preprocessing pipeline together",
    },
    {
      id: "performance_testing",
      text: "Test model performance with representative data",
    },
    {
      id: "error_handling",
      text: "Implement robust error handling and fallbacks",
    },
    {
      id: "monitoring",
      text: "Set up monitoring and alerting for model performance",
    },
    {
      id: "logging",
      text: "Configure comprehensive logging for troubleshooting",
    },
    {
      id: "scaling",
      text: "Ensure solution can scale to handle expected load",
    },
    {
      id: "security",
      text: "Review security considerations (API authentication, data privacy)",
    },
    {
      id: "documentation",
      text: "Document deployment process and usage instructions",
    },
    {
      id: "update_process",
      text: "Define process for model updates and retraining",
    },
  ]

  return (
    <div className="bg-slate-100 p-6 rounded-lg my-6">
      <h3 className="text-lg font-semibold mb-4">My Deployment Checklist</h3>
      <div className="space-y-2">
        {checklistItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center p-2 hover:bg-slate-200 rounded cursor-pointer"
            onClick={() => toggleItem(item.id)}
          >
            <div
              className={`w-6 h-6 rounded-md border flex items-center justify-center mr-3 ${
                checkedItems[item.id] ? "bg-emerald-600 border-emerald-600" : "border-slate-400 bg-white"
              }`}
            >
              {checkedItems[item.id] && <CheckCircle className="h-5 w-5 text-white" />}
            </div>
            <span className={checkedItems[item.id] ? "line-through text-slate-500" : ""}>{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
