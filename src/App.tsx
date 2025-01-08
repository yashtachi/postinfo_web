import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from './components/Header';
import { ServiceTracker } from './components/ServiceTracker';
import { PerformanceDashboard } from './components/PerformanceDashboard';
import { ServiceMetrics } from './components/ServiceMetrics';
import { ComplaintForm } from './components/ComplaintForm';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />

        <main className="container mx-auto px-4 py-8">
          <div className="space-y-8">
            <section id="dashboard">
              <h2 className="text-2xl font-bold mb-6">Service Metrics Overview</h2>
              <ServiceMetrics />
            </section>

            <section id="track" className="grid md:grid-cols-2 gap-8">
              <ServiceTracker />
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-semibold mb-4">About Citizens' Charter</h2>
                <p className="text-gray-600 leading-relaxed">
                  The Department of Posts is committed to providing high-quality postal services
                  to all citizens. Our Citizens' Charter outlines our commitment to service
                  excellence and transparency. Track your services, monitor our performance,
                  and help us serve you better.
                </p>
              </div>
            </section>

            <section id="performance">
              <h2 className="text-2xl font-bold mb-6">Regional Performance</h2>
              <PerformanceDashboard />
            </section>

            <section id="complaints">
              <h2 className="text-2xl font-bold mb-6">File a Complaint</h2>
              <ComplaintForm />
            </section>
          </div>
        </main>

        <footer className="bg-gray-800 text-white mt-12">
          <div className="container mx-auto px-4 py-6">
            <p className="text-center text-gray-400">
              © {new Date().getFullYear()} PostInfo - Yashtachi
            </p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;