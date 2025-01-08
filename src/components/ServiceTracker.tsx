import React, { useState } from 'react';
import { Search, Package } from 'lucide-react';
import { TrackingMap } from './TrackingMap';
import type { TrackingStatus } from '../types';

const mockTrackingData: TrackingStatus = {
  id: "TS123456789",
  status: "in-transit",
  location: "Mumbai Central Hub",
  timestamp: "2024-03-14T10:30:00",
  expectedDelivery: "2024-03-16",
  coordinates: {
    lat: 19.0760,
    lng: 72.8777
  }
};

export function ServiceTracker() {
  const [trackingId, setTrackingId] = useState("");
  const [result, setResult] = useState<TrackingStatus | null>(null);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    setResult(mockTrackingData);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center space-x-2 mb-6">
        <Package className="text-blue-600" />
        <h2 className="text-2xl font-semibold">Track Your Service</h2>
      </div>

      <form onSubmit={handleTrack} className="mb-6">
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Enter Tracking ID"
            className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={trackingId}
            onChange={(e) => setTrackingId(e.target.value)}
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-2"
          >
            <Search size={20} />
            Track
          </button>
        </div>
      </form>

      {result && (
        <>
          <div className="border rounded-lg p-4 mb-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-gray-600">Status</p>
                <p className="font-semibold capitalize">{result.status}</p>
              </div>
              <div>
                <p className="text-gray-600">Location</p>
                <p className="font-semibold">{result.location}</p>
              </div>
              <div>
                <p className="text-gray-600">Last Updated</p>
                <p className="font-semibold">
                  {new Date(result.timestamp).toLocaleString()}
                </p>
              </div>
              <div>
                <p className="text-gray-600">Expected Delivery</p>
                <p className="font-semibold">
                  {new Date(result.expectedDelivery).toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>
          <TrackingMap location={result.coordinates} />
        </>
      )}
    </div>
  );
}