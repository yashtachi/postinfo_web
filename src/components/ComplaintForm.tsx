import React, { useState } from 'react';
import { MessageSquare } from 'lucide-react';
import type { ComplaintData } from '../types';

export function ComplaintForm() {
  const [complaint, setComplaint] = useState<ComplaintData>({
    type: '',
    description: '',
    trackingId: '',
    contactPreference: 'email'
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Here you would integrate with your backend to:
      // 1. Save the complaint
      // 2. Send automated email/SMS
      // 3. Update tracking status
      console.log('Complaint submitted:', complaint);
      
      // Reset form after successful submission
      setComplaint({
        type: '',
        description: '',
        trackingId: '',
        contactPreference: 'email'
      });
    } catch (error) {
      console.error('Error submitting complaint:', error);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center space-x-2 mb-6">
        <MessageSquare className="text-red-600" />
        <h2 className="text-2xl font-semibold">File a Complaint</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Complaint Type</label>
          <select
            value={complaint.type}
            onChange={(e) => setComplaint({ ...complaint, type: e.target.value })}
            className="mt-1 block w-full px-3 py-2 border rounded-lg"
            required
          >
            <option value="">Select type</option>
            <option value="delivery">Delivery Issue</option>
            <option value="damage">Damaged Item</option>
            <option value="delay">Delay</option>
            <option value="service">Customer Service</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Tracking ID</label>
          <input
            type="text"
            value={complaint.trackingId}
            onChange={(e) => setComplaint({ ...complaint, trackingId: e.target.value })}
            className="mt-1 block w-full px-3 py-2 border rounded-lg"
            placeholder="Enter tracking ID if applicable"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            value={complaint.description}
            onChange={(e) => setComplaint({ ...complaint, description: e.target.value })}
            className="mt-1 block w-full px-3 py-2 border rounded-lg"
            rows={4}
            placeholder="Describe your issue"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Preferred Contact Method</label>
          <div className="mt-2 space-x-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                value="email"
                checked={complaint.contactPreference === 'email'}
                onChange={(e) => setComplaint({ ...complaint, contactPreference: e.target.value as 'email' | 'sms' })}
                className="form-radio"
              />
              <span className="ml-2">Email</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                value="sms"
                checked={complaint.contactPreference === 'sms'}
                onChange={(e) => setComplaint({ ...complaint, contactPreference: e.target.value as 'email' | 'sms' })}
                className="form-radio"
              />
              <span className="ml-2">SMS</span>
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700"
        >
          Submit Complaint
        </button>
      </form>
    </div>
  );
}